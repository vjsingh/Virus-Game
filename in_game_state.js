// *** game ***
// NOTE: get_type() returns "game" not "in_game"

// game_type is:
// 0 - easy
// 1 - tutorial
// 2 - hard
var in_game_state = function (p, previous_state, game_type) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);


    // whether or not we are testing
    // use it wherever
    var testing = false;
    obj.testing = function() { return testing; };

    // --- constants ---
    //var num_of_render_levels = 5; Now auto-calculating in init so don't have to change
    
    // --- private variables ---


	var GOOD_NOTIFICATION_COLOR = p.color(0, 255, 0);
	var BAD_NOTIFICATION_COLOR = p.color(255, 0, 0);
	
	var prev_state = previous_state;
	// distance is the x-coordinate of the total distance traveled 
    // increments with scroll
    var distance = 0;
    //var score = 0;
	var active_cell = null;
    var last_active_cell = null;
    // multiply each object's scroll amount by this
    // factor, which increases throughout the game
    // THIS IS NOW GLOBAL
    scroll_factor = 1;
    if (game_type < 2) {
        scroll_factor = 0.7;
    }

    var game_objects = [];
	var paused = false;

    var status_bar_height = 40;
    var status_height = 20;

	var score = num_status_obj(p, {
		pos : new p.PVector(p.width - 100, status_height),
		text : "Score:",
		num : 0,
        format : add_commas 
    });
	var mult = num_status_obj(p, {
		pos : new p.PVector(p.width - 200, status_height),
		text : "Multiplier:",
		num : 1,
        format : function(num) {
            return num+"x";
        }
	});
	var time_elapsed = 0; // Time elapsed in seconds
	var set_time = false; //bool that says if we've started counting time
	var time_status = num_status_obj(p, {
		pos : new p.PVector(85, status_height),
		text : "Time:",
		num : time_elapsed,
        // formats time to mins:secs
        format : function(num) {
            var secs = num%60;
            if (secs < 10) { secs = "0" + secs; }
            return p.floor(num/60) + ":" + secs;
        }
	});
	var mutation = mutation_obj(p, { status_height : status_height });
    
    var pause_button = button(p, {
        state: function() { 
			do_pause();
            console.log("pause button");
            return pause_state(p, obj);
        },
        rect: {
            pos: new p.PVector(25, status_height),
            width: 25, height: 25,
        }
    });
    // draw two vertical rects
    pause_button.draw = function() {
        p.pushMatrix();
        // get the rect spec back
        var r = pause_button.get_rect();
        var w = r.width;
        var h = r.height;
        p.translate(r.pos.x-w/2, r.pos.y-h/2);
        p.strokeWeight(2);
        p.stroke(255);
        p.noFill();
        p.ellipse(w/2, h/2, w, h);
        p.noStroke();
        p.fill(255);
        p.rectMode(p.CORNER);
        p.rect(w/4, h/5, w/5, 3*h/5);
        p.rect(w-w/4-w/5, h/5, w/5, 3*h/5);
        p.popMatrix();
    };
	
	// Used to draw all of the statuses (must implement draw)
	var all_status_objs = [score, mult, time_status, mutation];
	var all_buttons = [pause_button]; 
	
    
    var is_tutorial = false;
    if (game_type === 1) {
        is_tutorial = true;
    }
    // Global Variable so cell arrows can draw dots
    GLOBAL_is_easy = false;
    if (game_type < 2) {
        GLOBAL_is_easy = true;
    }
    // Call tut_manager.popup(type) when you want to signal a tutorial message
    // All the types are in tut_flags
    var tut_manager = (function() {
        // These flags are set to false when they've already occured
        var tut_flags = {
            initial_controls : true,
            macrophage : true,
            mutation : true,
        };
        var show_button = function(text) {
            var close_button = button(p, {
                state: function() { 
                    obj.resume();
                    all_buttons.pop() // DANGEROUS... Hope we're not adding any other buttons anytime soon
                    return obj; // the current state
                },
                rect: {
                    pos: new p.PVector(100, 100),
                    width: 50, height: 50,
                    text: text
                }
            });
            all_buttons.push(close_button);
        };

        var tut_obj = {
            popup : function(type) {
                if (is_tutorial && tut_flags[type]) {
                    do_pause();
                    var type_to_text = function(t) {
                        switch(t) {
                            case "initial_controls":
                                return "initial controls";
                                break;
                            case "macrophage":
                                return "macrophage";
                                break;
                        }
                    }
                    text = type_to_text(type);
                    show_button(text)
                    tut_flags[type] = false;
                }
            }
        }
        return tut_obj;
    })()

	var all_notifications = [];
    var last_notification_time = -1
    // takes a string and adds a new notification
    var notify = function(note, color) {
        var the_pos = null;
        if (active_cell) {
            console.log("Setting to active cell");
            a_pos = active_cell.get_pos();
            the_pos = new p.PVector(a_pos.x, a_pos.y - 30);
        }
        else {
            console.log("Setting to default");
            the_pos = new p.PVector(p.width * (5/8), p.height * (5/8));
        }
        if (new Date().getTime() > (last_notification_time + 2000)) { // two seconds
            all_notifications.push(notification(p, { "text": note, "color": color,
                        "pos" : the_pos}));
            last_notification_time = new Date().getTime();
        }
    };
	
	var generator = make_generator(p, {
		game : obj,
		mutation : mutation
	});
	
    // temporary flag TODO
    //var game_over = false;
    
    //A mapping from game_object types to their rendering levels
    var type_to_level = {
        "background_object":0,
        "background_edge":0,
        "wall":1,
        "wall_segment":1,
        "particle":2, // general name for level
        "cell":3, // general name for level
        "wall_cell": 3,
        "empty_cell": 3,
        "enemy":4, // general name for level
        "floater":4,
        "tkiller":4,
		"antibody":4,
		"b_cell": 5,
		"multiplier":6,
        "info":7
    }; 

    // given a type returns the array of objects
    // corresponding to that type's level
    var level = function(type) {
        var lvl = game_objects[type_to_level[type]];
        assert (lvl, type+" not a valid type!");
        return lvl;
    };

	
/*	
	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	var pause_button = {
		state : pause_state(),
		rectangle : rectangle(p, {
			pos : new p.PVector(p.width - 20, 20),
			width : 20,
			height : 20
		})
	};
	var help_button = {
		state : help_state(),
		rectangle : rectangle(p, {
			pos : new p.PVector(p.width - 80, 20),
			width : 20,
			height : 20
		})
	};	
	var exit_button = {
		state : exit_state(),
		rectangle : rectangle(p, {
			pos : new p.PVector(20, 20),
			width : 20,
			height : 20
		})
	};	
*/
	//Not ordered


    // --- private methods ---

    // initialization code goes here
    // gets called at the bottom
	var init = function() {
		// Start playing the game music
		if (g.music) {
			sounds.play_background_music();
		}
		
		//Initialize game_objects to be a list of num_of_render_levels empty lists
		var num_of_render_levels = 0;
		for (var key in type_to_level){
			if (type_to_level.hasOwnProperty(key)) {
				var new_level = type_to_level[key];
				if (new_level > num_of_render_levels) {
					num_of_render_levels = new_level;
				}
			}
		}
    	for (var i = 0; i < num_of_render_levels; i++) {
        	game_objects[i] = [];
    	}
		
        var startx = p.width-150;
        if (testing) {
            var startx = 150;
        }

		var initial_cells = [
            cell(p, {
                pos: new p.PVector(startx, p.height/2),
                vel: new p.PVector(0, 0),
                state: "alive",
            }),
            cell(p, {
                pos: new p.PVector(startx+170, p.height/2-40),
                vel: new p.PVector(0, 0),
                state: "alive",
            }),
            cell(p, {
                pos: new p.PVector(startx+170, p.height/2),
                vel: new p.PVector(0, 0),
                state: "alive",
            }),
            cell(p, {
                pos: new p.PVector(startx+170, p.height/2+40),
                vel: new p.PVector(0, 0),
                state: "alive",
            })
        ];
		//var cell_level = type_to_level["cell"];
		//game_objects[cell_level].push(initial_cell);
        obj.add_objects(initial_cells);

        var initial_par = particle(p, {
            pos: new p.PVector(0, p.height/2),
            vel: new p.PVector(8, 0),
            // start with some gray
            mutation_info: mutation.get_info()//p.color(250, 250, 250)
			//mutation : mutation
        });

        obj.add_object(initial_par);

        init_walls();
        init_back();

		//active_cell = initial_cell;
		
		// Add background
		//var bg = background(p, { pos : new p.PVector(0, 0)});
		//obj.add_object(bg);	
		//console.log(level("background")[0]);
	};

    // creates, adds, and returns a new b_cell with no target
    var make_b_cell = function() {
        var new_b_cell = b_cell(p, {
            pos: new p.PVector(p.width+50, p.random(p.height/4, 3*p.height/4)),
        }); 
        obj.add_object(new_b_cell);
        return new_b_cell;
    };

    // creates, adds, and returns a new tkiller with no target
    var make_tkiller = function() {
        var new_tkiller = tkiller(p, {
            pos: new p.PVector(p.width+50, p.random(p.height/4, 3*p.height/4)),
        }); 
        obj.add_object(new_tkiller);
        return new_tkiller;
    };
	
	// Returns the current b cell on the screen, if there is one
	var get_b_cell = function(level) {
		var the_b_cell = null;
        do_to_type(
            function(b) {
                if (b.get_level() === level) {
           		    the_b_cell = b; 
                }
            },
            "b_cell", true
        );
		return the_b_cell;
	};

    var alert_b_cell = function(flo) {
        // gets b_cell of the flo's level
        var b = get_b_cell(flo.get_level());
        // if there isn't one
        if (!b) {
            // make one
            b = make_b_cell();
            b.set_mutation_info(flo.get_mutation_info());
            b.set_target(flo);
        }
        // if there is one
        else {
            // it should be either active, shooting, or outdated
            // so do nothing
        }
    };
	
	// Alerts the b cell (only one on screen at a time?) to a newly mutated
	// obj.
	// If o.mutation_level >= b cells current target.mutation_level and o is
	// closer than the b cells curr target (or if b cells curr
	// target is null), updates b_cells curr target to be o
    /*
	var alert_b_cell = function(o) {
		//var cell_objs = level("b_cell");
		//var cell_obj = null;
		/*for (var i = 0; i < cell_objs.length; i++) {
			cell_obj = cell_objs[i];
			if (cell_obj.get_type() === "b_cell") {
				the_b_cell = cell_obj;
			}
		}
        /

		var the_b_cell = get_b_cell();
		
		if (the_b_cell && the_b_cell.is_alive()) {
			var old_target = the_b_cell.get_target();
			
			if (old_target) {
                // if new macro has higher or equal level
				if (//o.get_level() >= old_target.get_level()
                    // if new macro has current mutation level  
                    o.get_level() === mutation.get_level()
                    // and it is closer
					&& old_target.get_pos().dist(the_b_cell.get_pos()) >
				        o.get_pos().dist(the_b_cell.get_pos())) {
					the_b_cell.set_target(o);
				}
			}
			else {
				the_b_cell.set_target(o);
			}
		}
	};
    */

    // sets active_cell to the leftmost infected cell
    // if there is one
    var next_active_cell = function() {
		var sort_fun = function(active_c) { // don't care about active
            if (last_active_cell) {
                // let's try the nearest cell to the one that died
                return function(c1, c2) {
                    return dist_less_than(last_active_cell, c1, c2) ? -1 : 1;
                };
            }
            // otherwise leftmost
			return function(c1, c2) {
				return c1.get_pos().x - c2.get_pos().x;
			};
		}
		choose_cell(sort_fun);
    };

	// Set the next-left or next-right cell to be active, and 
	// if appropriate sets current active to be not active
	
	// Chooses the closest cell to a_pos
	var choose_closest_cell = function(a_pos) {
		if (active_cell) { // for the beginning
			var old_active = active_cell;
			var sort_fun = function(active_cell){
				return function(c1, c2){
					return c1.get_pos().dist(a_pos) -
					c2.get_pos().dist(a_pos);
				}
			};
			choose_cell(sort_fun);
			
			// In case it doesn't change (choose_cell assumes
			// that the cell is diff from the curr active)
			if (old_active.get_pos().dist(a_pos) <
					active_cell.get_pos().dist(a_pos)) {
				active_cell.set_state("infected");
				active_cell = old_active;
				active_cell.set_state("active");
			}
		}
	}
	
	// Chooses the closest cell to the active cell in the direction of comp,
	// i.e. such that comp(c1.x, active.x) is true
	var choose_cell_helper = function(comp) {
		var sort_fun = function(active_c) { //don't rename to active_cell
			return function(c1, c2) {
				c1x = c1.get_pos().x;
				c2x = c2.get_pos().x;
				actx = active_c.get_pos().x;
				// If one is in the right dir and the other isnt,
				// return the one that is
				if (comp(c1x, actx) && !(comp(c2x, actx))) {
					return -1;
				}
				else if (!(comp(c1x, actx)) && comp(c2x, actx)) {
					return 1;
				}
				// If they are on the same side, return opposite of comp
				else {
					if (comp(c1x, c2x)) {
						return 1;
					}
					else {
						return -1;
					}
				}
			}
		};
		choose_cell(sort_fun);
	};
	
	// Chooses the next left cell to be active
	var choose_left_cell = function() {
		choose_cell_helper(function (x, y) {return x < y;});
		
	};
	
	// Same in the right dir
	var choose_right_cell = function() {
		choose_cell_helper(function (x, y) {return x > y;});
	};
	
	// Sets a cell to be active based on sort_fun, and if this is diff
	// from curr cell, sets curr cell to not be active
	// sort_fun must take the currently active cell, and return a function
	// that takes 2 cells, ad returns true if the first is 'better' than 
	// the second
	var choose_cell = function(sort_fun) {
        var cells = level("cell");//game_objects[type_to_level["cell"]];
        var infecteds = cells.filter(
                function(cell) {
                    // don't want empty_cells
                    return cell.get_type() === "cell"
                        && cell.get_state() === "infected";
                });
		var sort_f = sort_fun(active_cell);
        infecteds.sort(sort_f);

		var curr_active = active_cell;
        if (infecteds.length > 0) {
            active_cell = infecteds[0];
			//If same as current
			if (curr_active) { // for the beginning
				curr_active.set_state("infected"); //if same, about to change
			}
            active_cell.set_state("active");
            //console.log("got next "+active_cell.to_string());
        }
	};
	
	// Returns true if source is closer to target1 than target2 
	// All 3 args are game_objs
	var dist_less_than = function(source, target1, target2) {
		var source_pos = source.get_pos();
		return source_pos.dist(target1.get_pos()) <
				source_pos.dist(target2.get_pos());
	};
	
	// Updates all tkillers targets
	// Tkillers target the closest infected and targeted cell
	var update_tkillers_targets = function(){
		var all_infected_cells = get_all_infected_cells();
		do_to_type(function(tkill){
            // remove bad targets
            if (tkill.get_target()
                // if it's dead
                && (tkill.get_target().is_dead()
                    // or dying
                    || tkill.get_target().get_state() === "dying"
                    // or offscreen
                    || tkill.get_target().is_offscreen()
                    // or the target mutated
                    || !same_mutation_level(tkill, tkill.get_target()))) {
                tkill.set_target(null);
            }
            // set a new target
            for_each(
                all_infected_cells,
                function(infected_cell) {
                    if (infected_cell.has_antibody() 
                        && same_mutation_level(infected_cell, tkill)
                        && (!tkill.get_target() ||
                        dist_less_than(tkill,
                            infected_cell, tkill.get_target()))) {
                        tkill.set_target(infected_cell);
                    }
                }
			);
		}, "tkiller", true);
	};

    // adds new tkillers if need be
    var add_tkillers = function() {
        var tks = get_all_of_type("tkiller");
        do_to_type(
            // for each b_cell
            function(b) {
                // if it needs a tkiller
                if (b.is_shooting()) {
                    // check if one exists
                    var has_tkiller = false;
                    for_each(tks, function(tk) {
                        if (same_mutation_level(b, tk)) {
                            has_tkiller = true;
                        }
                    });
                    // if one doesn't
                    if (!has_tkiller) {
                        console.log("made tkiller for lvl "+b.get_level());
                        // make one
                        var tk = make_tkiller();
                        tk.set_mutation_info(b.get_mutation_info());
                    }
                }
            },
            "b_cell", true
        );
    };
           

    // kills the active cell and updates the targets
    // of all the tkillers
    var kill_active_cell = function() {
        active_cell.die();
        last_active_cell = active_cell;
        active_cell = null;
        update_tkillers_targets();
    };
	
    //Checks whether any 2 objs are colliding, and if so calls handle_collision on them
    var check_collisions = (function() {
        // rendering levels to check collisions for:
        var to_check = [
            //["particle", "particle"],
            ["particle", "cell"],
            ["particle", "enemy"],
            ["particle", "multiplier"],
            //["cell", "cell"],
            ["cell", "enemy"],
            //["enemy", "enemy"],
			["enemy", "b_cell"],
			["b_cell", "wall"],
			["particle", "wall"],
			["multiplier", "wall"],
			["enemy", "wall"]
        ];
        
        // hey this looks like combinations!
        var do_comb = function(arr1, start1, end1,
                arr2, start2, end2, fun) {
            var i = start1, j = start2;
            while (i <= end1) {
                while (j <= end2) {
                    fun(arr1[i], arr2[j]);
                    j++;
                }
                i++;
                // when arrays are the same
                // don't do repeats
                if (arr1 === arr2) {
                    j = i;
                }
                else {
                    j = 0;
                }
            }
        };

        var collision_fun = function() {
            // double combinations!
            // for each pair of rendering groups
           // do_comb(game_objects, 1, 3,
              //  game_objects, 1, 3,
            for_each(to_check, function(pair) {
                var lvl1 = level(pair[0]);
                var lvl2 = level(pair[1]);
                // for each pair of objects in the groups
                do_comb(lvl1, 0, lvl1.length-1,
                        lvl2, 0, lvl2.length-1, check);
            });
            //);
        };
			

        var check = function(obj1, obj2) {
            //console.log("checking "+obj1.to_string()
            //    +", "+obj2.to_string());
            // check the collisions
            // don't check collisions with self
            if (obj1 !== obj2
                && check_collision(obj1, obj2)) {
                handle_collision(obj1, obj2);
                //console.log("collision! " +obj1.to_string()
                //    +", "+obj2.to_string());
            }
        }

        return collision_fun;
    }());
	
	// Returns whether 2 objects are colliding
	var check_collision = function(obj1, obj2) {
		var type1 = obj1.get_type();
		var type2 = obj2.get_type();
		
        if (check_circle_collision(obj1, obj2)) {
            var check_again = retrieve(extra_check, type1, type2);
            if (check_again !== undefined) {
                return check_again(obj1, obj2);
            }
            else {
                check_again = retrieve(extra_check, type2, type1);
                if (check_again !== undefined) {
                    return check_again(obj2, obj1);
                }
                else {
                    return true;
                }
            }
        }
        else {
            return false;
        }
	};

	// Checks for a collision between circle (obj2) and rectangle (obj1)
	var check_rectangle_collision = function(rect, circ) {
		return overlapping_vertically(circ, rect, rect.get_y_offset()) &&  
				overlapping_horizontally(circ, rect, rect.get_x_offset());
	};
	
	// Rectangle and circle collision helper functions
	// Returns whether the circle is overlapping the rectangle, horizontally,
	// by offset num of pixels
	var overlapping_horizontally = function(circ, rect, offset) {
		var circlel = circ.get_left(), circler = circ.get_right();
		var rectl = rect.get_left(), rectr = rect.get_right();
		return ((circler <= rectr && circler >= (rectl + offset)) || 
					(circlel >= rectl && circlel <= (rectr - offset)));
	};
	// Returns whether the circle is overlapping the rectangle, vertically,
	// by offset num of pixels
	var overlapping_vertically = function(circ, rect, offset) {
		var circlet = circ.get_top(), circleb = circ.get_bottom();
		var rectt = rect.get_top(), rectb = rect.get_bottom();
		
		return (circleb <= rectb && circleb >= (rectt + offset) || 
				 	(circlet >= rectt && circlet <= (rectb - offset)));
	};

    // holds extra collision checking functions for certain
    // pairs of types
    var extra_check = {
        "wall_segment": {
            "particle": check_rectangle_collision,
            "b_cell": check_rectangle_collision,
            "multiplier": //check_rectangle_collision
                // had to do manually cuz offset was messed up
                function(rect, circ) {
                    return overlapping_vertically(circ, rect, 0) &&  
                            overlapping_horizontally(circ, rect, 0); 
                }
        },
        "floater": {
            "b_cell": check_rectangle_collision
        },
        "wall_cell": {
            "particle": check_rectangle_collision
        }
    };
	
    // checks for collisions between two objects by
    // checking if their bounding circles are overlapping
    // returns true if they are colliding
    var check_circle_collision = function(obj1, obj2) {
        // if the distance between their center points
        // is <= the sum of their radii then they are colliding
        // ONLY WORKS FOR CENTERED SHAPES
        return (obj1.get_pos().dist(obj2.get_pos())
                <= obj1.get_radius() + obj2.get_radius());
    };
    // make it public
    obj.check_circle_collision = check_circle_collision;

    /*
    // Reverses 2 objs appropriate velocities 
    var bounce_collided = (function() {
		// A list containing 2 element lists
		// Inner lists represent object type pairs to not bounce off each other
		var to_exclude = [  ["particle", "multiplier"], 
							["particle", "particle"],
                            ["wall_segment", "b_cell"],
							["particle", "antibody"]];

		var is_excluded = function(o1, o2) {
			var is_excluded = false;
			var type1 = o1.get_type(), type2 = o2.get_type();
			var objs_in_list = function(list) {
				return ((list[0] === type1 && list[1] === type2) ||
						(list[0] === type2 && list[1] === type1));
			}
			for_each(to_exclude, function(l) {
				if (objs_in_list(l)) {
					is_excluded = true;
				}
				});
			return is_excluded;
		}
		return function(obj1, obj2) {
			if (!is_excluded(obj1, obj2)) {
                bounce(obj1, obj2);
			}
	    }
	}());
    */

    var bounce = function(obj1, obj2) {
        //offset adjusts how closely we check, since we can't check exactly when they collide every time
        var offset = 5;
        var onel = obj1.get_left(), oner = obj1.get_right();
        var onet = obj1.get_top(), oneb = obj1.get_bottom();
        var twol = obj2.get_left() + offset, twor = obj2.get_right() - offset;
        var twot = obj2.get_top() + offset, twob = obj2.get_bottom() - offset;
        
        //When bouncing, check velocity to make sure they are 'incoming' to each other
        //This avoids them getting stuck (makes sure they didn't just collide)
        //bounce vertically
        var y_vel = obj1.get_vel().y;
        var x_vel = obj1.get_vel().x;
        if ((onet >= twob && y_vel <= 0) || (oneb <= twot && y_vel >= 0)) {
            obj1.reverse_y();
            obj2.reverse_y();
        }
        if ((oner <= twol && x_vel >= 0)
                || (onel > twor && x_vel <= 0)) { //bounce horizontally
                obj1.reverse_x();
                obj2.reverse_x();
        }
    };
	
    // handles collisions between different object types
    var handle_collision = function(obj1, obj2) {
        var ot1 = obj1.get_type();
        var ot2 = obj2.get_type();

        // try first with one order
        var handler = retrieve(collision_handlers, ot1, ot2);
        if (handler) {
            handler(obj1, obj2);
        }
        // if it didn't work
        else {
            // try the other order
            handler = retrieve(collision_handlers, ot2, ot1);
            if (handler) {
                handler(obj2, obj1);
            }
            else {
				//Not an error now?
               	//throw "Unsupported collision type!";
            }
			
        }
		
		// Bounce if appropriate
		//bounce_collided(obj1, obj2);
    };
	
    // object to store all the handlers
    // created once with a closure
	// dont manage bouncing/changing direction here
    var collision_handlers = (function() {
        var nothing = function(obj1, obj2) {};

        // infects the cell, kills the particle
        var infect = function(par, cell) {
            // only if cell is "alive"
            // (ie only one particle per cell)
            assert(cell, "Not a cell in infect!");
            if (cell.get_state() !== "dead"
                && cell.get_state() !== "dying") {
                par.die();
            }
            if (cell.get_state() === "alive") {
                tut_manager.popup("initial_controls");
				//Play sound
				sounds.play_sound("cell_infect");
			
				// increase mutation percentage if level is highest on screen
				// must be done before setting state of infected cell
                // only happens if infected by particle of cur level
                if (par.get_level() === mutation.get_level()) {
				    mutation.infected_cell();
                }
				
                		cell.set_state("infected");
				cell.set_mutation_info(par.get_mutation_info());

				// Add 10 to score 
				score.incr(10 * par.get_level() * mult.get_num());
            }
            else {
                // otherwise deflect
                //bounce(par, cell);
            }
        };


        var handlers = {
            "particle": {
                // particle vs. particle 
                // do nothing?
                "particle": nothing,

                // particle vs. cell
                // infect the cell, kill the particle
                "cell": infect,
                     
                // particle vs. wall_cell
                // bounce particle off cell
                // cell doesn't move
                "wall_cell": bounce,

                // particle vs. empty_cell
                // // infect the cell, kill the particle
		        // kill the particle 
                "empty_cell": function(par, cell) {
                    // TODO diff sound?
                    sounds.play_sound("cell_infect");
		            par.die();
		        },
                
                // particle vs. floater
                // kill the particle
				// floater takes on color of particle
                "floater": function(par, flo) {
                    par.die();
                    if (flo.is_alive()) {
						// update flo if not activated || level <
						// par.level
						if (!flo.is_activated() ||
								flo.get_level() <
								par.get_level()) {
							flo.set_mutation_info(par.get_mutation_info());
							flo.activate();
							alert_b_cell(flo);
							sounds.play_sound("macrophage_infect");
                            tut_manager.popup("macrophage");
						}
                        notify("Macrophage activated!", BAD_NOTIFICATION_COLOR);
                    }
                },
                
                // particle vs. tkiller
                // nothing?
                "tkiller": nothing,
				
				// particle vs. multiplier
				// get rid of the mult and incr mult
				"multiplier": function(par, mul) {
					//par.die();
					mul.die();
					mult.incr(1);
				},
				
				// particle vs wall
				// Kill particle
				"wall_segment": function(par, wall) {
					par.die();
				}
            },

            // cell vs. cell
            // cell vs. wall_cell
            // cell vs. empty_cell
            // wall_cell vs. wall_cell
            // wall_cell vs. empty_cell
            // empty_cell vs. empty_cell
            // don't let them overlap (is bouncing necessary?)
            "cell": {
                "cell": nothing,
                "wall_cell": nothing,
                "empty_cell": nothing
            },
            "wall_cell": {
                "wall_cell": nothing,
                "empty_cell": nothing
            },
            "empty_cell": {
                "empty_cell": nothing
            },

            // floater vs. cell
            // floater vs. wall_cell
            // floater vs. empty_cell
            // floater vs. floater
            // no overlap?
            "floater": {
                "cell": bounce,
                "wall_cell": bounce,
                "empty_cell": bounce,
                "floater": bounce
            },
                
            "tkiller": {
                // tkiller vs. cell
                "cell": function(tk, cell) {
                    if ((cell.get_state() === "infected" ||
							cell.get_state() === "active") 
						    && cell.has_antibody()
                            && same_mutation_level(tk, cell)) {
                        cell.die();
			            sounds.play_sound("kill");	
						tk.set_target(null);
						if (active_cell === cell) {
                            //last_active_cell = active_cell;
							//active_cell = null;
                            kill_active_cell();
						}
                    }
                },

                // tkiller vs. wall_cell
                // tkiller vs. empty_cell
                // tkiller vs. floater
                // tkiller vs. tkiller
                // nothing? TODO bounce?
                "wall_cell": nothing,
                "empty_cell": nothing,
                "floater": nothing,
                "tkiller": nothing
            },
			
			"antibody": {
				"cell": function(a, c) {
					if (same_mutation_level(a, c)) {
						if (!c.has_antibody() &&
						(c.get_state() === "infected" ||
						c.get_state() === "active")) {
							c.set_antibody(a);
						}
					}	
				}
			},
			
            "multiplier": {
                // multiplier vs wall
				// do nothing
                "wall_segment": bounce
            },

            "b_cell": {
                "floater": function(b, flo) {
                    if (b.is_alive() && flo.is_activated()) {
                        b.set_mutation_info(flo.get_mutation_info());
                        b.activate(get_bcell_slot());
                        bounce(b, flo);
                        notify("B-cell activated!", BAD_NOTIFICATION_COLOR);
                    }
                    // trying to avoid getting stuck
                    if (b.is_outdated()) {
                        bounce(b, flo);
                        b.set_target(null);
                    }
                },
                "wall_segment": function(b, wall) {
                    //console.log("collision");
                    if (b.is_activated()) {
                        // start making antibodies
                        b.make_antibodies();
                        // make a tkiller
                        var tk = make_tkiller();
                        tk.set_mutation_info(b.get_mutation_info());

                        notify("Incoming antibodies!", BAD_NOTIFICATION_COLOR);
                    }
                    else if (b.is_alive()) {
                        bounce(b, wall);
                    }
                    else if (b.is_outdated()) {
                    }
                }
            }
        };
        return handlers;
    }());

    //Removes all objs which are either off screen or dead
    var remove_objs = function() {
        var filter_fun = function(x) {
			//Check offscreen, but don't remove newly generated
			var offscreen = false;
			if (x.is_offscreen()) {
				//Only remove particles that are off the right
				if (x.is_off_right()) {
					if (x.get_type() === "particle") {
						offscreen = true;
					}
					//else false
				}
				else {
                    //console.log("removing "+x.to_string());
					offscreen = true;
				}
			}
            return (! (offscreen || x.is_dead()));
        };  
        for (var i = 0; i < game_objects.length; i++) {
            game_objects[i] = game_objects[i].filter(filter_fun);
        }

        // check offscreen for active cell
        if (active_cell && active_cell.is_offscreen()) {
            //active_cell = null;
            kill_active_cell();
        }
    };
	
	// Returns whether the 2 objects have the same mutation level
	var same_mutation_level = function(o1, o2) {
		var o1level = o1.get_mutation_info().level;
		var o2level = o2.get_mutation_info().level;
		return (o1level === o2level);
	};
	

    // adds a new background tile if the rightmost is onscreen
    // ASSUMES ALL WALL TILES ARE SAME SIZE
    var back_top = null;
    var back_btm = null;
    var add_back = (function() {

        var add_one = function(edge_tile) {
            if (!goes_off_right(edge_tile)) {
                //console.log("adding edge");

                var new_spec = {};
                var x = edge_tile.get_pos().x
                    + edge_tile.get_width();

                var y = status_bar_height;
                new_spec.is_top = true;
                // switch if it's a bottom edge
                if (edge_tile === back_btm) {
                    // this will be changed in the edge object
                    y = p.height;
                    new_spec.is_top = false;
                }

                new_spec.pos = new p.PVector(x, y);

                var new_tile = background_edge(p, new_spec);
                obj.add_object(new_tile);

                if (edge_tile === back_top) {
                    back_top = new_tile;
                }
                else {
                    back_btm = new_tile;
                }
                //console.log("added tile "+new_tile.to_string());
            }
        };

        var add_both = function() {
            add_one(back_top);
            add_one(back_btm);
        };

        return add_both;
    }());

    // initialized the background
    var init_back = function() {
        // initial edges
        back_top = background_edge(p, {
                pos: new p.PVector(-100, status_bar_height),
                is_top: true
        });
        obj.add_object(back_top);

        back_btm = background_edge(p, {
                pos: new p.PVector(-10, p.height),
                is_top: false
        });
        obj.add_object(back_btm);

        // add one more tile to fill screen
        add_back();
    };

    // tells if a background tile goes off the right of the screen
    var goes_off_right = function(tile) {
        return tile.get_pos().x + tile.get_width() > p.width;
    };

    // adds a new wall segment if the rightmost wall
    // segment is onscreen
    var rightmost_top = null;
    var rightmost_btm = null;
    var add_wall = (function() {

        // adds either a top or bottom wall
        var add_one = function(rightmost) {
            // if the rightmost has entered the screen 
            if (!rightmost.is_off_right()) {
                var new_spec = {};

                // note that new wall coords should be at
                // bottom left corner of seg
                // should be next to last seg
                var x = rightmost.get_pos().x
                    + rightmost.get_width()/2 - 5;

                // set y for top wall
                var y = 95;
                new_spec.is_top = true;
                // switch if it's a bottom wall
                if (rightmost === rightmost_top) {
                    y = p.height+5;
                    new_spec.is_top = false;
                }

                new_spec.pos = new p.PVector(x, y);

                // add the new segment
                var new_seg = wall_segment(p, new_spec);
                obj.add_object(new_seg);
                
                // update the corresponding rightmost
                if (rightmost === rightmost_top) {
                    rightmost_top = new_seg;
                }
                else {
                    rightmost_btm = new_seg;
                }
            }
        };

        var add_both = function() {
            add_one(rightmost_top);
            add_one(rightmost_btm); 
        };

        return add_both;
    }());
	
    var init_walls = function() {
        // add first empty segments
        // the values used here are important so don't change them
        rightmost_top = wall_segment(p, {
                pos: new p.PVector(-10, 0),
                width: 5
        });

        rightmost_btm = wall_segment(p, {
                pos: new p.PVector(-10, p.height),
                width: 5
        });

        // while both walls don't span the screen
        while(!(rightmost_top.is_off_right()
            && rightmost_btm.is_off_right())) {
            // add new walls
            add_wall();
        }
    };

	//Does a function to every object
	//Pass in a function that takes an object
	var do_to_all_objs = function(f) {
        for (var i=0; i<game_objects.length; i++) {
            for (var j=0; j<game_objects[i].length; j++) {
               	f(game_objects[i][j]);
            }
        }
	};

    // applies a function to every object
    // on the specified rendering level
    // if strict is true, also checks to make sure 
    // the object has the specified type
    var do_to_type = function(f, type, strict) {
        var lvl = level(type);
        for (var i=0; i<lvl.length; i++) {
            if (!strict || lvl[i].get_type() === type) {
                f(lvl[i]);
            }
        }
    };
    // make it public
    obj.do_to_type = do_to_type;

    // applies do_to_type to all given types
    var do_to_types = function(f, types, strict) {
        for (var i=0; i<types.length; i++) {
            do_to_type(f, types[i], strict);
        }
    };
	
	var get_all_of_type = function(t) {
		var filter_fun = function(o){
			return o.is(t);
		};
		return level(t).filter(filter_fun);
	};
	
	// Returns all the infected cells
	// NOTE: this includes the active cell
	var get_all_infected_cells = function() {
		var filter_fun = function(o) {return o.is("cell") 
						&& (o.get_state() === "infected" ||
							o.get_state() === "active");};
		return level("cell").filter(filter_fun);
	};
	
	// Sets any antibodies on the screen to seek out any infected
	// cells that they are close to
	var make_antibodies_seek = function() {
		// First, get all the antibodies and all the infected cells
		var all_antibodies = get_all_of_type("antibody");
		var all_infected_cells = get_all_infected_cells();
			
		// Then, for each antibody and each infected cell,
		// if the infected cell is closer than some constant, and is the
		// same mutation level as the antibody, and is
		// closer than the cell that the antibody is targeting (if any),
		// and has not already been targeted:
		// set the antibody to seek that cell
		for (var i = 0; i < all_antibodies.length; i++) {
			var an_antibody = all_antibodies[i];
			for (var j = 0; j < all_infected_cells.length; j++) {
				var infected_cell = all_infected_cells[j];
				var antibody_pos = an_antibody.get_pos();
				var the_dist = antibody_pos.dist(
									infected_cell.get_pos());
				if (same_mutation_level(an_antibody, infected_cell) &&
					the_dist < 100 && !infected_cell.has_antibody() &&
						(!an_antibody.get_target() ||
						dist_less_than(an_antibody, infected_cell, 
										an_antibody.get_target()))) {
					//console.log("setting antibody target");
					an_antibody.set_target(infected_cell);
				}
			}
		}
	};
    
    // sets anything activated to the given level to be outdated
	var set_all_outdated = function() {
        // make array of which levels are active
        var active_levels = [];
        var add_level = function(o) {
            var level = o.get_level();
            if (level) {
                active_levels[level] = true;
            }
        };
        do_to_type(add_level, "cell", true);
        do_to_type(add_level, "particle", true);
             
        // for each b/t cell, see if its level is still active
        var outdate = function(o) {
            if (!active_levels[o.get_level()]) { 
                if (o.is("b_cell") && o.get_slot()) {
                    free_bcell_slot(o.get_slot());
                }
                o.outdated();
            }
        };
        do_to_type(outdate, "b_cell", true);
        do_to_type(outdate, "tkiller", true);
    };

    var slots = (function() {
        var num_slots = 6;
        var slot_incr = 90;
        var slot_arr = [];
        var slot_x = p.width - slot_incr;
        // create an array of slots alternating
        // top and bottom separated by slot_incr
        for (n=0; n<num_slots; n++) {
            var slot_y = 0;
            var is_top = true;
            if (n%2 === 1) {
                slot_x -= slot_incr;
                slot_y = p.height;
                is_top = false;
            }
            slot_arr[n] = { 
                pos: new p.PVector(slot_x, slot_y),
                taken: false,
                is_top: is_top
            };
        }
        return slot_arr;
    }());

    // returns an object with a pos and a slot number
    var get_bcell_slot = function() {
        slot = null;
        for (n=0; n<slots.length; n++) {
            if (!slots[n].taken) {
                slots[n].taken = true;
                return {
                    pos: slots[n].pos,
                    num: n,
                    is_top: slots[n].is_top
                };
            }
        }
        // if there are no empty slots
        // make a random one
        return {
            pos: new p.PVector(p.random(p.width), p.random(p.height)), 
            num: -1,
            is_top: true
        };
    };

    // marks slot as untaken again
    var free_bcell_slot = function(slot) {
       if (slots[slot.num]) {
           slots[slot.num].taken = false; 
       }
    };

    var dynamic_scroll = function() {
        do_to_types(function(o) { o.scroll(1); },
                ["background", "wall_segment"], true);

        if (active_cell) {
            var ac = active_cell.get_pos();
            var dist = ac.x - 75;
            if (! (dist <= 1 && dist >= 0) ) {
                do_to_all_objs(function(o) { o.get_pos().add(
                            new p.PVector(-dist/10, 0)); });
                        //["particle", "cell", "enemy"], false);
            }
        }
    };

    
    // --- public methods ---
    
    obj.get_type = function() {
        return "game";
    };
	
    //Calls update() on every obj
    //after updating, calls remove_objs
    obj.update = (function() {
        var game_types = ["background", "wall", "particle", 
            "cell", "enemy", "multiplier", "antibody"];

        var update_fun = function() {
			// Can't be set when object is initialized
			// Takes time every update though to check
			if (!set_time) {
				//Set interval to update time elapsed
				var update_time = function() {
					if (!paused) {
						time_elapsed += 1;
						time_status.set_num(time_elapsed);
					}
				}
				setInterval(update_time, 1000);
				set_time = true;
			}
			if (!paused) {
				// if we don't have an active cell
				if (active_cell === null) {
					// try to find the next one
					next_active_cell();
				}
				// THIS MUST COME BEFORE GAME OVER CHECK
				
				// check for game over
				// (if no particles are left and no active cell)
				//console.log("num of particles: " + level("particle").length);
				if (active_cell === null &&
				        level("particle").length === 0) {
					var go_state = game_over_state(p, previous_state, {
						score : score.get_num(),
						mutation_level : mutation.get_level()
					}, game_type);
					sounds.pause_background_music();
					obj.set_next_state(go_state);

                    // stop the animations
                    do_to_all_objs(
                        function(o) { 
                            if (o.stop_animation) {
                                o.stop_animation();
                            }
                        }
                    );

                    // stop notifications
                    all_notifications = [];

                    // stop the time and stuff
                    paused = true;
					
					// Add to the high score table
					// If fb user name and id are set
					if (g_user_name && g_user_id) {
						scores.submit_score(score.get_num(),
                                mutation.get_level(), g_user_name, g_user_id);
						// Update the high score table
                        // (not necessary now)
						//scores.do_scores();
					}
					
					// simply don't do the rest of update
					return;
				}
				
				//Add any newly generated objs
				generator.update();
				
				// Make antibodies seek any infected cells they are near
				make_antibodies_seek();
				
				// Add antibodies generated from b cells
                do_to_type(
                    function(b) {
					    obj.add_objects(b.get_antibodies());
                    },
                    "b_cell", true
                );

                // adds a new segment of wall if necessary
                add_wall();
                // adds a new background tile if necessary
                add_back();

                add_tkillers();
				update_tkillers_targets();

                // set outdated t/b cells
                set_all_outdated();
				
				// scroll all objects
               
				do_to_all_objs(function(o){
					o.scroll(scroll_factor);
				});
                
                //dynamic_scroll();
				
				// update distance travelled
                distance += scroll_factor;   
				
				// update all objects
				do_to_all_objs(function(o){
					o.update();
				});
				
				check_collisions();
				
				remove_objs();

                update_mutation();    

                /*
                // for debugging
                var count = 0;
                do_to_all_objs(function() { count += 1; });
                console.log(count);
                console.log("fr "+p.__frameRate);
                */
			}
        };

        var update_mutation = function() {
            // check for a new mutation
            // if mutation occurred
            if (mutation.has_new_mutation() && active_cell) {
                // pick infected cell closest to active cell with the current
                // mutation level
                var choices = get_all_of_type("cell").filter(
                    function(c) {
                        return ((c.get_state() === "infected"
                            || c.get_state() === "active")
                            && c.get_level() === mutation.get_level()); 
                    }
                );
                choices.sort( 
                    function(c1, c2) {
                        return dist_less_than(active_cell, c1, c2) ? -1 : 1;
                    }
                );
                var cell_to_mutate = choices[0];

                // do the actual mutation and hold onto new ability
                //var new_ability = 
                mutation.do_mutation();
                // mutate the active cell
                cell_to_mutate.set_mutation_info(mutation.get_info());
                // update the scroll factor
                scroll_factor += 0.15;
                
				//if (new_ability) {
				//	notify("New Ability: " + new_ability);
				//}
				//else {
					notify("Mutation occurred!", GOOD_NOTIFICATION_COLOR);
				//}


                tut_manager.popup("mutation");
                
                console.log("mutation occurred!");
            }
            // otherwise check for downgrades
            else {
                // check for the highest mutation level on screen
                var max_level = 0;
                var find_max = function(o) {
                    if (o.get_level() > max_level) {
                        max_level = o.get_level();
                    }
                };
                do_to_type(find_max, "cell", false);
                do_to_type(find_max, "particle", false);
                    
                // if max level lower than mutation level
                if (max_level > 0 && max_level < mutation.get_level()) {
                    // downgrade to that level
                    mutation.set_level(max_level);
                    // reset the counters
                    mutation.reset_mutation();

                    notify("Lost new strain!", BAD_NOTIFICATION_COLOR);
                    console.log("downgraded to mutation level "+max_level);

                    scroll_factor -= 0.15;

                    // TODO do enemies become not outdated?
                }
            }
        };
        
        return update_fun;
    }());
    
    //Calls draw() on every obj
    obj.render = function(){

        // put the active cell at the end of the list
        // so it is drawn on top
        if (active_cell) {
            var cells = level("cell");
            remove_elt(cells, active_cell);
            cells.push(active_cell);
        }

        p.background(g.background_color);

        for (var i=0; i<game_objects.length; i++) {
            for (var j=0; j<game_objects[i].length; j++) {
                var o = game_objects[i][j];
                // debugging by taking out certain types
                //if (!o.is("background_edge")) {
                    o.draw();
                //}
                // to test collisions
                //o.draw_circle();
            }
        }

		/*
        // draw game over overlay for now
        if (game_over) {
            p.noStroke();
            p.fill(0, 75);
            p.rect(0, 0, p.width, p.height);
            p.fill(0);
            p.textAlign(p.CENTER);
            p.text("GAME OVER\nRELOAD TO RESTART", p.width/2, p.height/2);
        }
        */	
	   
        // draw a rect under status labels
        p.noStroke();
        p.fill(0);//, 200);
        p.rectMode(p.CORNER);
        p.rect(0, 0, p.width, status_bar_height);
		//Draw the status labels
		for_each(all_status_objs, function(o) {o.draw();});
		
		// Draw all the notifications, removing if finishing
        // Don't draw if they overlap
        for_each(all_notifications, function(n) {
            if (!n.draw()) {
                remove_elt(all_notifications, n);
            }
        });
    };
	
	var do_pause = function() {
		paused = true;
		sounds.pause_background_music();
        // stop the animations
        do_to_all_objs(
            function(o) { 
                if (o.stop_animation) {
                    o.stop_animation();
                }
            }
        );
	}
	
   	var do_fire = function() {
        if (active_cell !== null) {
            var particles = active_cell.fire();
            obj.add_objects(particles);
            kill_active_cell();
        }
	};
	obj.key_pressed = function(k) {
		if (k === 32) { //spacebar
			if (g.spacebar_to_fire) {
				do_fire();
			}
		}
		else if (k === 112 || p.keyCode === 13 || p.keyCode === 27) { //p, enter, esc
			do_pause();
			var p_state = pause_state(p, obj);
			obj.set_next_state(p_state);
		}
        /*
		else if (k === 104) { //h
			paused = true;
			var h_state = help_state(p, obj);
			obj.set_next_state(h_state);
		}
        */
		//right and left
		k = p.keyCode;
		if (k === p.LEFT) { //left
			//if (!g.mouse_to_select) {
				choose_left_cell();
			//}
		}
		else if (k === 39) { //right
			//if (!g.mouse_to_select) {
				choose_right_cell();
			//}
		}
	};
	
	// Fire
    obj.mouse_click = function (x, y) {
		if (!paused && g.click_to_fire) {
			do_fire();
		}
    };
	
	// Choose active cell on mouse movement
	obj.mouse_moved = function(x, y) {
		if (g.mouse_to_select) {
			choose_closest_cell(new p.PVector(x, y));
		}
	}
	
	obj.set_b_cell_target = function(the_b_cell) {
		for_each(get_all_of_type("floater"), function(o){
			if (o.is_activated()) {
				alert_b_cell(o);
			}
		});
	};

	obj.resume = function() {
		paused = false;
		if (g.music) {
			sounds.resume_background_music();
		}
        // resume the animations
        do_to_all_objs(
            function(o) { 
                if (o.resume_animation) {
                    o.resume_animation();
                }
            }
        );
	};
    
    //Adds a game_object to the game world
    obj.add_object = function(o) {
        //var type = o.get_type();
        //var render_level = type_to_level[type];
        //game_objects[render_level].push(o);
		if (o.get_type() === "tkiller") {
            notify("Killer T Cell Incoming!", BAD_NOTIFICATION_COLOR);
		}
        level(o.get_type()).push(o);
    };

    // add multiple objects
    obj.add_objects = function(os) {
        for (var i=0; i<os.length; i++) {
            obj.add_object(os[i]);
        }
    };
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};
    
    // --- getters --- 

    obj.get_distance = function() {
        return distance;
    };

    obj.get_game_objects = function() {
        return game_objects;
    };

    // don't need?
    /*obj.get_type_to_level = function() {
        return type_to_level;
    };
    */
	
	obj.get_active_cell = function() {
		return active_cell;
	};
	
	// --- setters ---
	
	obj.set_distance = function(n) {
		obj.distance = n;
	};
	
	// Gets the current highest mutation info
	obj.get_mutation_info = function() {
		return mutation.get_info();
	}
	
	/*
    // DANGEROUS
    obj.set_game_objects = function(go) {
		obj.game_objects = go;
	};
    */
	
    // initialize the game
    init();
    return obj;
};
