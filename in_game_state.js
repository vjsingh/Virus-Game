// *** game ***
// NOTE: get_type() returns "game" not "in_game"

var in_game_state = function (p, previous_state) {

    // object to return
    var obj = game_state(p);

    // whether or not we are testing
    // use it wherever
    var testing = true;
    obj.testing = function() { return testing; };

    // --- constants ---
    var num_of_render_levels = 5;
    
    // --- private variables ---

	var prev_state = previous_state;
	//distance is the x-coordinate of the total distance traveled 
	//The farthest right coordinate seen on the screen
    var distance = 0;
    var score = 0;
	var active_cell = null;
    var game_objects = [];
	var generator = make_generator(p, obj);
    // temporary flag TODO
    var game_over = false;
    
    //A mapping from game_object types to their rendering levels
    var type_to_level = {
        "background":0,
        "particle":1, // general name for level
        "cell":2, // general name for level
        "wall_cell":2,
        "empty_cell":2,
        "enemy":3, // general name for level
        "floater":3,
        "tkiller":3,
        "info":4
    }; 

    // given a type returns the array of objects
    // corresponding to that type's level
    var level = function(type) {
        var lvl = game_objects[type_to_level[type]];
        assert (lvl, type+" not a valid type!");
        return lvl;
    };

	// Sets the rate of scrolling, every this # of frames will scroll
	//var scroll_rate = 10;
	//var scroll_counter = scroll_rate; //decremented every update till 0
    var scroll_dist = -0.1; // how far to move each frame
	
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
	//Not ordered
	var all_buttons = [pause_button, help_button, exit_button];
*/

    // --- private methods ---

    // initialization code goes here
    // gets called at the bottom
	var init = function() {
		//Initialize game_objects to be a list of num_of_render_levels empty lists
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
                state: "alive"
            }),
            cell(p, {
                pos: new p.PVector(startx+120, p.height/2-40),
                vel: new p.PVector(0, 0),
                state: "alive"
            }),
            cell(p, {
                pos: new p.PVector(startx+120, p.height/2),
                vel: new p.PVector(0, 0),
                state: "alive"
            }),
            cell(p, {
                pos: new p.PVector(startx+120, p.height/2+40),
                vel: new p.PVector(0, 0),
                state: "alive"
            })
        ];
		
		//var cell_level = type_to_level["cell"];
		//game_objects[cell_level].push(initial_cell);
        obj.add_objects(initial_cells);

        var initial_par = particle(p, {
            pos: new p.PVector(0, p.height/2),
            vel: new p.PVector(1, 0)
        });

        obj.add_object(initial_par);
		
		//active_cell = initial_cell;
	};

    // sets active_cell to the leftmost infected cell
    // if there is one
    var next_active_cell = function() {
        assert(active_cell === null, "A cell is already active!");

        var cells = level("cell");//game_objects[type_to_level["cell"]];
        var infecteds = cells.filter(
                function(cell) {
                    // don't want empty_cells
                    return cell.get_type() === "cell"
                        && cell.get_state() === "infected";
                });
        // sort fun should return:
        // - if cell1 more left than cell2
        // 0 if they are the same
        // + if cell1 more right than cell2
        infecteds.sort(
                function(cell1, cell2) {
                    return cell1.get_pos().x - cell2.get_pos().x;
                });

        if (infecteds.length > 0) {
            active_cell = infecteds[0];
            active_cell.set_state("active");
            // update the tkillers' targets
            do_to_type(
                function(obj) {
                    obj.set_target(active_cell);
                },
                "tkiller", true);
            //console.log("got next "+active_cell.to_string());
        }

    };

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
        // particle (1) vs. particle (1) (?)
        // particle (1) vs. cell (2)
        // particle (1) vs. enemy (3)
        // cell (2) vs. cell (2)
        // cell (2) vs. enemy (3)
        // enemy (3) vs. enemy (3)
        
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
            do_comb(game_objects, 1, 3,
                game_objects, 1, 3,
                function(lvl1, lvl2) {
                    //console.log("new levels");
                    // for each pair of objects in the groups
                    do_comb(lvl1, 0, lvl1.length-1,
                        lvl2, 0, lvl2.length-1, check);
                }
            );
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
	
	var check_collision = function(obj1, obj2) {
		var type1 = obj1.get_type();
		var type2 = obj2.get_type();
		//if (1 === 2) {
		if ((type1 === "particle" && type2 === "wall_cell") ||
				(type1 === "wall_cell" && type2 === "particle")) {
			// Pass in circle as first arg, rect as 2nd
			if (type1 === "wall_cell") {
				return check_rectangle_collision(obj2, obj1);
			}
			else {
				return check_rectangle_collision(obj1, obj2);
			}	
		}
		else {
			return check_circle_collision(obj1, obj2);
		}
	};
	
	// Checks for a collision between circle (obj1) and rectangle (obj2)
	var check_rectangle_collision = function(circ, rect) {
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

    // handles collisions between different object types
    var handle_collision = function(obj1, obj2) {
        var ot1 = obj1.get_type();
        var ot2 = obj2.get_type();

        // try first with one order
        var handler = collision_handlers[ot1][ot2];
        if (handler) {
            handler(obj1, obj2);
        }
        // if it didn't work
        else {
            // try the other order
            handler = collision_handlers[ot2][ot1];
            if (handler) {
                handler(obj2, obj1);
            }
            else {
                throw "Unsupported collision type!";
            }
        }
    };
        
    
    // object to store all the handlers
    // created once with a closure
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
            }
            // TODO: maybe infected cells should deflect
        };

        var handlers =
        {
            "particle": {
                // particle vs. particle 
                // do nothing?
                "particle": nothing,

                // particle vs. cell
                // infect the cell, kill the particle
                "cell": infect,
                     
                // particle vs. wall_cell
                // bounce particle off cell
                // (cell shouldn't move right?)
                // TODO
                "wall_cell": function(par, wall) {
					var circlel = par.get_left(), circler = par.get_right();
					var circlet = par.get_top(), circleb = par.get_bottom();
					var rectl = wall.get_left(), rectr = wall.get_right();
					var rectt = wall.get_top(), rectb = wall.get_bottom();
					
					//bounce vertically
					if (overlapping_horizontally(par, wall, 10)) {	
						par.reverse_y();
					}
					else { //bounce horizontally
						par.reverse_x();
					}
				},

                // particle vs. empty_cell
                // infect the cell, kill the particle
                "empty_cell": infect,
                
                // particle vs. floater
                // kill the particle
                // (maybe floater does something? later)
                "floater": function(par, flo) {
                    par.die();
                },
                
                // particle vs. tkiller
                // nothing?
                "tkiller": nothing
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
                // if cell is active, kill it
                "cell": function(tk, cell) {
                    if (cell.get_state() === "active") {
                        kill_active_cell();
                        // just in case, kill again
                        cell.die();
                    }
                },

                // tkiller vs. wall_cell
                // tkiller vs. empty_cell
                // tkiller vs. floater
                // tkiller vs. tkiller
                // nothing?
                "wall_cell": nothing,
                "empty_cell": nothing,
                "floater": nothing,
                "tkiller": nothing
            }
        };
        return handlers;
    }());

    //Removes all objs which are either off screen or dead
    var remove_objs = function() {
        var filter_fun = function(x) {
            //if ( !( ! x.is_offscreen() && ! x.is_dead())) {
				//alert ("removing: " + x.get_type());
			//}
            return (! x.is_offscreen() && ! x.is_dead())
        };  
        for (var i = 0; i < game_objects.length; i++) {
            game_objects[i] = game_objects[i].filter(filter_fun);
        }

        // check offscreen for active cell
        if (active_cell && active_cell.is_offscreen()) {
            active_cell = null;
        }
    };
	
    /*
    // DEPRECATED 
	//Does a function to every object
	//Pass in a function that takes an object
	var do_to_all_objs = function(f) {
        for (var i=0; i<game_objects.length; i++) {
            for (var j=0; j<game_objects[i].length; j++) {
                var o = game_objects[i][j];
                f(o);
            }
        }
	}
    */

    // applies a function to every object
    // on the specified rendering level
    // if strict is true, also checks to make sure 
    // the object has the specified type
    var do_to_type = function(f, type, strict) {
        var lvl = level(type);//game_objects[type_to_level[type]];
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
    
    
    // --- public methods ---
    
    obj.get_type = function() {
        return "game";
    };

	//Scrolls if scroll_counter = 0, if so resets scroll_counter to scroll_rate
    //Calls update() on every obj
    //after updating, calls remove_objs
    obj.update = (function() {
        var game_types = ["background", "particle", "cell", "enemy"];

        var update_fun = function() {

            // if we don't have an active cell
            if (active_cell === null) {
                // try to find the next one
                next_active_cell();
            }
            // THIS MUST COME BEFORE GAME OVER CHECK

            // check for game over
            // (if no particles are left and no active cell)
            if (active_cell === null
                && level("particle").length === 0) {
                // for now, use a flag TODO
                game_over = true;
                // simply don't do the rest of update
                return;
            }

            //Add any newly generated objs
            generator.update();

            //if (scroll_counter <= 0) {
                //scroll_counter = scroll_rate;
                
            // scroll all objects
            do_to_types(function (o) { o.scroll(scroll_dist); },
                        game_types, false);

            // update distance travelled
            // (negative because scrolling is negative)
            distance += -scroll_dist;

            //}
            //else {
                //scroll_counter--;
            //}
            
        
            // update all objects
            do_to_types(function (o) { o.update(); },
                    game_types, false);

            check_collisions();
            
            remove_objs();
            //TODO: add end game check
        };
        
        return update_fun;
    }());
    
    //Calls draw() on every obj
    obj.render = function(){
        for (var i=0; i<game_objects.length; i++) {
            for (var j=0; j<game_objects[i].length; j++) {
                var o = game_objects[i][j];
                o.draw();
                // to test collisions
                o.draw_circle();
            }
        }

        // draw game over overlay for now
        if (game_over) {
            p.noStroke();
            p.fill(0, 75);
            p.rect(0, 0, p.width, p.height);
            p.fill(0);
            p.textAlign(p.CENTER);
            p.text("GAME OVER\nRELOAD TO RESTART", p.width/2, p.height/2);
        }
    };
    
    obj.mouse_click = function (x, y) {
		//For every button, if the mouse click is in the button, then
		//set next state to be the state specified by the button
		for (var i = 0; i < all_buttons.length; i++) {
			var button = all_buttons[i];
			var rectangle = button.rectangle;
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
			//pause_state = pause_state();
			//obj.set_next_state(pause_state);
		}
		else if (k === 104) { //h
			//help_state = help_state();
			//obj.set_next_state(help_state);
		}
	};
    
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
