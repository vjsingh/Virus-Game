// *** game ***
// NOTE: get_type() returns "game" not "in_game"

var in_game_state = function (p, previous_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);


    // whether or not we are testing
    // use it wherever
    var testing = true;
    obj.testing = function() { return testing; };

    // --- constants ---
    //var num_of_render_levels = 5; Now auto-calculating in init so don't have to change
    
    // --- private variables ---

	var prev_state = previous_state;
	// distance is the x-coordinate of the total distance traveled 
    // increments with scroll
    var distance = 0;
    //var score = 0;
	var active_cell = null;
    var game_objects = [];
	var paused = false;
	var score = num_status_obj(p, {
		pos : new p.PVector(p.width - 60, 20),
		text : "Score:",
		num : 0
	});
	var mult = num_status_obj(p, {
		pos : new p.PVector(p.width - 150, 20),
		text : "Multiplier:",
		num : 1
	});
	var time_elapsed = 0; // Time elapsed in seconds
	var set_time = false; //bool that says if we've started counting time
	var time_status = num_status_obj(p, {
		pos : new p.PVector(40, 20),
		text : "Time:",
		num : time_elapsed
	});
	var mutation = mutation_obj(p);
	
	// Used to draw all of the statuses (must implement draw)
	var all_status_objs = [score, mult, time_status, mutation];
	
	var generator = make_generator(p, {
		game : obj,
		mutation : mutation
	});
	
    // temporary flag TODO
    var game_over = false;
    
    //A mapping from game_object types to their rendering levels
    var type_to_level = {
        "background":0,
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
		"b_cell": 4,
		"multiplier":5,
        "info":6
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
	var all_buttons = []; //[pause_button, help_button, exit_button];


    // --- private methods ---

    // initialization code goes here
    // gets called at the bottom
	var init = function() {
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
		
        var startx = p.width-120;
        if (testing) {
            var startx = 100;
        }

		var initial_cells = [
            cell(p, {
                pos: new p.PVector(startx, p.height/2),
                vel: new p.PVector(0, 0),
                state: "alive",
				//mutation : mutation
            }),
            cell(p, {
                pos: new p.PVector(startx+120, p.height/2-40),
                vel: new p.PVector(0, 0),
                state: "alive",
				//mutation : mutation
            }),
            cell(p, {
                pos: new p.PVector(startx+120, p.height/2),
                vel: new p.PVector(0, 0),
                state: "alive",
				//mutation : mutation
            }),
            cell(p, {
                pos: new p.PVector(startx+120, p.height/2+40),
                vel: new p.PVector(0, 0),
                state: "alive",
				//mutation : mutation
            })
        ];
		//var cell_level = type_to_level["cell"];
		//game_objects[cell_level].push(initial_cell);
        obj.add_objects(initial_cells);

        var initial_par = particle(p, {
            pos: new p.PVector(0, p.height/2),
            vel: new p.PVector(1, 0),
            // start with some gray
            mutation_info: mutation.get_info()//p.color(250, 250, 250)
			//mutation : mutation
        });

        obj.add_object(initial_par);

        init_walls();
		
		//active_cell = initial_cell;
		
	};
	
	// Returns the current b cell on the screen, if there is one
	var get_b_cell = function() {
		var the_b_cell = null;
        do_to_type(function(b) {
                // not anymore -- only want unactivated bcell
                //if (b.is_alive()) {
           		the_b_cell = b; 
                //}
            },
            "b_cell", true);
		return the_b_cell;
	}

	// Alerts the b cell (only one on screen at a time?) to a newly mutated
	// obj.
	// If o.mutation_level >= b cells current target.mutation_level and o is
	// closer than the b cells curr target (or if b cells curr
	// target is null), updates b_cells curr target to be o
	var alert_b_cell = function(o) {
		//var cell_objs = level("b_cell");
		//var cell_obj = null;
		/*for (var i = 0; i < cell_objs.length; i++) {
			cell_obj = cell_objs[i];
			if (cell_obj.get_type() === "b_cell") {
				the_b_cell = cell_obj;
			}
		}
        */

		var the_b_cell = get_b_cell();
		
		if (the_b_cell && the_b_cell.is_alive()) {
			var old_target = the_b_cell.get_target();
			
			// NOT ANYMORE
			// Update target only if new object.level ===
			// mutation(highest).level
			//if (o.get_mutation_info().level == mutation.get_level()){
			//
			if (old_target) {
				if (o.get_mutation_info.level >= 
					old_target.get_mutation_info().level &&
					old_target.get_pos().dist(the_b_cell.get_pos()) >
				o.get_pos().dist(the_b_cell.get_pos())) {
					the_b_cell.set_target(o);
				}
			}
			else {
				the_b_cell.set_target(o);
			}
		}
	};

    // sets active_cell to the leftmost infected cell
    // if there is one
    var next_active_cell = function() {
		var sort_fun = function(active_c) { // don't care about active
			return function(c1, c2) {
				return c1.get_pos().x < c2.get_pos().x;
			}
		}
		choose_cell(sort_fun);
    };
	
	// Set the next-left or next-right cell to be active, and 
	// if appropriate sets current active to be not active
	
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
					return true;
				}
				else if (!(comp(c1x, actx)) && comp(c2x, actx)) {
					return false;
				}
				// If they are on the same side, return opposite of comp
				else {
					if (comp(c1x, c2x)) {
						return false;
					}
					else {
						return true;
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
            active_cell = infecteds[infecteds.length-1];
			//If same as current
			if (curr_active) { // for the beginning
				curr_active.set_state("infected"); //if same, about to change
			}
            active_cell.set_state("active");
            //update the tkillers' targets
			
            //console.log("got next "+active_cell.to_string());
        }
	}
	
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
		do_to_type(function(tkill){
			var all_infected_cells = get_all_infected_cells();
			for (var i = 0; i < all_infected_cells.length; i++) {
				var infected_cell = all_infected_cells[i];
				if (infected_cell.has_antibody() &&
					(!tkill.get_target() ||
					dist_less_than(tkill, infected_cell, tkill.get_target()))) {
					tkill.set_target(infected_cell);
				}
			}
		}, "tkiller", true);
	}
           

    // kills the active cell and updates the targets
    // of all the tkillers
    var kill_active_cell = function() {
        active_cell.die();
        active_cell = null;
        do_to_type(
            function(tk) {
                tk.set_target(null);
            },
            "tkiller", "true");
    };
	
    //Checks whether any 2 objs are colliding, and if so calls handle_collision on them
    var check_collisions = (function() {
        // rendering levels to check collisions for:
        var to_check = [
            ["particle", "particle"],
            ["particle", "cell"],
            ["particle", "enemy"],
            ["particle", "multiplier"],
            ["cell", "cell"],
            ["cell", "enemy"],
            ["enemy", "enemy"],
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
            if (check_again != undefined) {
                return check_again(obj1, obj2);
            }
            else {
                check_again = retrieve(extra_check, type2, type1);
                if (check_again != undefined) {
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
		return overlapping_vertically(circ, rect, 0) &&
				overlapping_horizontally(circ, rect, 0);
	};
	
	// Rectangle and circle collision helper functions
	// Returns whether the circle is overlapping the rectangle, horizontally,
	// by offset num of pixels
	var overlapping_horizontally = function(circ, rect, offset) {
		var circlel = circ.get_left(), circler = circ.get_right();
		var rectl = rect.get_left(), rectr = rect.get_right();
		return ((circler <= rectr && circler >= (rectl + offset)) || 
					(circlel >= rectl && circlel <= (rectr + offset)));
	};
	// Returns whether the circle is overlapping the rectangle, vertically,
	// by offset num of pixels
	var overlapping_vertically = function(circ, rect, offset) {
		var circlet = circ.get_top(), circleb = circ.get_bottom();
		var rectt = rect.get_top(), rectb = rect.get_bottom();
		
		return (circleb <= rectb && circleb >= (rectt + offset) || 
				 	(circlet >= rectt && circlet <= (rectb + offset)));
	};

    // holds extra collision checking functions for certain
    // pairs of types
    var extra_check = {
        "wall_segment": {
            "particle": check_rectangle_collision,
            "multiplier": check_rectangle_collision,
            "b_cell": check_rectangle_collision
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

    // Reverses 2 objs appropriate velocities 
    var bounce_collided = (function() {
		// A list containing 2 element lists
		// Inner lists represent object type pairs to not bounce off each other
		var to_exclude = [["particle", "multiplier"], 
							["particle", "particle"]];
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
				else 
					if ((oner <= twol && x_vel >= 0) || (onel > twor && x_vel <= 0)) { //bounce horizontally
						obj1.reverse_x();
						obj2.reverse_x();
					}
			}
	    }
	}());
	
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
		bounce_collided(obj1, obj2);
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
            if (cell.get_state() === "alive") {
                par.die();
                cell.set_state("infected");
                // change mutation of cell to match particle
                cell.set_mutation_info(par.get_mutation_info());
				// Add 1 to score
				score.incr(1 * mult.get_num());
				// increase mutation percentage
				mutation.infected_cell();
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
                "wall_cell": nothing,

                // particle vs. empty_cell
                // infect the cell, kill the particle
                "empty_cell": infect,
                
                // particle vs. floater
                // kill the particle
				// floater takes on color of particle
                "floater": function(par, flo) {
                    par.die();
                    if (flo.is_alive()) {
						// update flo if not activated || level <
						// par.level
						if (!flo.is_activated() ||
								flo.get_mutation_info().level <
								par.get_mutation_info.level) {
							flo.set_mutation_info(par.get_mutation_info());
							flo.activate();
							alert_b_cell(flo);
						}
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
                "cell": nothing,
                "wall_cell": nothing,
                "empty_cell": nothing,
                "floater": nothing
            },
                
            "tkiller": {
                // tkiller vs. cell
                "cell": function(tk, cell) {
                    if ((cell.get_state() === "infected" ||
							cell.get_state() === "active") &&
						cell.has_antibody()) {
                        cell.die();
						tk.set_target(null);
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
                "wall_segment": function(mult, wall) {
					//do nothing
                }
            },

            "b_cell": {
                "floater": function(b, flo) {
                    if (b.is_alive() && flo.is_activated()) {
                        b.set_mutation_info(flo.get_mutation_info());
                        b.activate();
                    }
                },
                "wall_segment": function(b, wall) {
                    //console.log("collision");
                    if (b.is_activated()) {
                        b.make_antibodies();
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
					offscreen = true;
				}
			}
            return (!offscreen && (! x.is_dead()));
        };  
        for (var i = 0; i < game_objects.length; i++) {
            game_objects[i] = game_objects[i].filter(filter_fun);
        }

        // check offscreen for active cell
        if (active_cell && active_cell.is_offscreen()) {
            active_cell = null;
        }
    };
	
	// Returns whether the 2 objects have the same mutation level
	var same_mutation_level = function(o1, o2) {
		o1level = o1.get_mutation_info().level;
		o2level = o2.get_mutation_info().level;
		return (o1level === o2level);
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
                var wall_spec = random_from(wall_specs);
                // need to make a new copy
                var new_spec = {
                    width: wall_spec.width,
                    height: wall_spec.height
                };

                var x = rightmost.get_pos().x
                    + rightmost.get_width()/2
                    + new_spec.width/2 - 1;

                // set y for top wall
                var y = new_spec.height/2;
                // switch if it's a bottom wall
                if (rightmost === rightmost_btm) {
                    y = p.height - y;
                    new_spec.is_top = false;
                }
                else {
                    new_spec.is_top = true;
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
	
	// Returns all the infected cells
	// NOTE: this includes the active cell
	var get_all_infected_cells = function() {
		var filter_fun = function(o) {return o.is("cell") 
						&& (o.get_state() === "infected" ||
							o.get_state() === "active");};
		return level("cell").filter(filter_fun);
	}
	
	// Sets any antibodies on the screen to seek out any infected
	// cells that they are close to
	var make_antibodies_seek = function() {
		// First, get all the antibodies and all the infected cells
		var filter_fun = function(o) {return o.is("antibody");};
		var all_antibodies = level("antibody").filter(filter_fun);
		var all_infected_cells = get_all_infected_cells();
			
		// Then, for each antibody and each infected cell,
		// if the infected cell is closer than some constant, and is
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
				if (the_dist < 100 && !infected_cell.has_antibody() &&
						(!an_antibody.get_target() ||
						dist_less_than(an_antibody, infected_cell, 
										an_antibody.get_target()))) {
					console.log("setting antibody target");
					an_antibody.set_target(infected_cell);
				}
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
				if (active_cell === null &&
				        level("particle").length === 0) {
					var go_state = game_over_state(p, previous_state);
					obj.set_next_state(go_state);
					
					// simply don't do the rest of update
					return;
				}
				
				//Add any newly generated objs
				generator.update();
				
				// Make antibodies seek any infected cells they are near
				make_antibodies_seek();
				
				update_tkillers_targets();
           
				var the_b_cell = get_b_cell();
				if (the_b_cell) {
					// Add antibodies generated from b cells
					obj.add_objects(the_b_cell.get_antibodies());
				}

                // adds a new segment of wall if necessary
                add_wall();
				update_tkillers_targets();
           
				
				// scroll all objects
				do_to_all_objs(function(o){
					o.scroll();
				});
				
				// update distance travelled
				// (negative because scrolling is negative)
				distance -= DEFAULT_SCROLL_DIST;
				
				// update all objects
				do_to_all_objs(function(o){
					o.update();
				});
				
				check_collisions();
				
				remove_objs();

                // check for a new mutation
                // if mutation occurred
                if (mutation.has_new_mutation() && active_cell) {
                    // set the new info
                    active_cell.set_mutation_info(mutation.get_info());
                    // reset the counters
                    mutation.reset_mutation();
					// set b cell to be outdated
					get_b_cell().outdated();
                    console.log("mutation occurred!");
                }
			}
        };
        
        return update_fun;
    }());
    
    //Calls draw() on every obj
    obj.render = function(){
        p.background(200);

        for (var i=0; i<game_objects.length; i++) {
            for (var j=0; j<game_objects[i].length; j++) {
                var o = game_objects[i][j];
                o.draw();
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
	   
		//Draw the status labels
		for_each(all_status_objs, function(o) {o.draw();});
    };
    
    obj.mouse_click = function (x, y) {
		//For every button, if the mouse click is in the button, then
		//set next state to be the state specified by the button
		for (var i = 0; i < all_buttons.length; i++) {
			var button = all_buttons[i];
			var rectangle = button.rectangle;
			// Should only be true for one button
			if (rectangle.is_in(x, y)) {
				obj.set_next_state(button.state);
				break;
			}
		}
    };
	
	obj.key_pressed = function(k) {
		if (k === 32) { //spacebar
            if (active_cell !== null) {
                var particles = active_cell.fire(5);
                obj.add_objects(particles);
                kill_active_cell();
            }
		}
		else if (k === 112) { //p
			paused = true;
			var p_state = pause_state(p, obj);
			obj.set_next_state(p_state);
		}
		else if (k === 104) { //h
			paused = true;
			var h_state = help_state(p, obj);
			obj.set_next_state(h_state);
		}
		//right and left
		k = p.keyCode;
		if (k === p.LEFT) { //left
			choose_left_cell();
		}
		else if (k === 39) { //right
			choose_right_cell();
		}
	};
	
	obj.resume = function() {
		paused = false;
	}
    
    //Adds a game_object to the game world
    obj.add_object = function(o) {
        //var type = o.get_type();
        //var render_level = type_to_level[type];
        //game_objects[render_level].push(o);
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
	}
    
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
