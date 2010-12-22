// *** game ***
// NOTE: get_type() returns "game" not "in_game"

var in_game_state = function (p, previous_state) {

    // object to return
    var obj = game_state(p);

    // --- constants ---
    var num_of_render_levels = 5;
    
    // --- private variables ---

	var prev_state = previous_state;
    var curr_state = "Splash"; //Splash, Game, Pause, Help
    var distance = 0; //x-coordinate of the total distance travelled
    var score = 0;
    
    //Initialize to be a list of num_of_render_levels empty lists
    var game_objects = [];
    for (var i = 0; i < num_of_render_levels; i++) {
        game_objects[i] = [];
    }
    
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
    
    // --- private methods ---

    //Checks whether any 2 objs are colliding, and if so calls handle_collision on them
    var check_collisions = function() {
        // rendering levels to check collisions for:
        // particle (1) vs. particle (1) (?)
        // particle (1) vs. cell (2)
        // particle (1) vs. enemy (3)
        // cell (2) vs. cell (2)
        // cell (2) vs. enemy (3)
        // enemy (3) vs. enemy (3)
        
        // hey this looks like combinations!
        var do_combinations = function(arr1, start1, end1,
                arr2, start2, end2, fun) {
            var i = start1, j = start2;
            while (i <= end1) {
                while (j <= end2) {
                    fun(arr1[i], arr2[j]);
                    j++;
                }
                i++;
                j = i;
            }
        };

        // double combinations!
        // for each pair of rendering groups
        do_combinations(game_objects, 1, 3,
            game_objects, 1, 3,
            function(lvl1, lvl2) {
                // for each pair of objects in the groups
                do_combinations(lvl1, 0, lvl1.length,
                    lvl2, 0, lvl2.length,
                    function(obj1, obj2) {
                        // check the collisions
                        // don't check collisions with self
                        if (obj1 !== obj2
                            && check_circle_collision(obj1, obj2)) {
                            handle_collision(obj1, obj2);
                            alert("collision! " +obj1.to_string()
                                +", "+obj2.to_string());
                        }
                    }
                );
            }
        );
    
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
        // if it doesn't work
        if (!handler) {
            // try the other order
            handler = collision_handlers[ot2][ot1];
            if (!handler) {
                throw "Unsupported collision type!";
            }
        }

        handler(obj1, obj2);
    };
        
    
    // object to store all the handlers
    // created once with a closure
    var collision_handlers = (function() {
        var nothing = function(obj1, obj2) {};
        var handlers =
        {
            "particle": {
                // particle vs. particle 
                // do nothing?
                "particle": nothing,

                // particle vs. cell
                // infect the cell, kill the particle
                "cell": function(cell, par) {
                    par.die();
                    cell.set_state("infected");
                },
                     
                // particle vs. wall_cell
                // bounce particle off cell
                // (cell shouldn't move right?)
                "wall_cell": nothing,

                // particle vs. empty_cell
                // infect the cell, kill the particle
                "empty_cell": nothing,
                
                // particle vs. floater
                // kill the particle
                // (maybe cell does something? later)
                "floater": nothing,
                
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
                
            // tkiller vs. cell
            // tkiller vs. wall_cell
            // tkiller vs. empty_cell
            // tkiller vs. floater
            // tkiller vs. tkiller
            // nothing?
            "tkiller": {
                "cell": nothing,
                "wall_cell": nothing,
                "empty_cell": nothing,
                "floater": nothing
            }
        };
        return handlers;
    }());

    //Removes all objs which are either off screen or dead
    var remove_objs = function() {
        var filter_fun = function(x) {
            //return (! x.off_screen() && ! x.is_dead())
            return ! x.is_dead();
        };  
        for (var i = 0; i < game_objects.length; i++) {
            lst_of_o = game_objects[i];
            lst_of_o = lst_of_o.filter(filter_fun);
        }
    };
    
    
    // --- public methods ---
    
    obj.get_type = function() {
        return "game";
    };

    //Calls update() on every obj
    //after updating, calls remove_objs
    obj.update = function() {
        for (var i=0; i<game_objects.length; i++) {
            for (var j=0; j<game_objects[i].length; j++) {
                var o = game_objects[i][j];
                o.update();
            }
        }

        check_collisions();
        
        remove_objs();
		//TODO: add end game check
    };
    
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
    };
    
    obj.mouse_click = function (x, y) {
        
    };
	obj.key_pressed = function(k) {
		
	};
    
    //Adds a game_object to the game world
    obj.add_object = function(o) {
        var type = o.get_type();
        var render_level = type_to_level[type];
        game_objects[render_level].push(o);
    };
    
    return obj;
};
