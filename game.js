// *** game ***

var game = function (p) {

    // object to return
    var obj = {};

    // --- constants ---
    var num_of_render_levels = 5;
    
    // --- private variables ---

    var curr_state = "Splash"; //Splash, Game, Pause, Help
    var distance = 0; //x-coordinate of the total distance travelled
    var score = 0;
    
    //Initialize to be a list of num_of_render_levels empty lists
    var game_objects = [];
    for (var i = 0; i < num_of_render_levels; i++) {
        game_objects[i] = [];
    }
    
    //A mapping from game_object types to their rendering levels
    var type_to_level = {"background":0, "particle":1, "cell":2, "wall_cell":2,
	                       "empty_cell":2, "floater":3, "tkiller":3, "info":4}; 
    
    // --- private methods ---
    handle_collision = function(obj1, obj2) {};
	
	remove_obj = function(o) {
        for (lst_of_o in game_objects) {
            var index = game_objects.indexOf(o);
            if (index >= 0) {
				game_objects.splice(index, 1);
				break; //Every object should only be in one list
            }
        }
	}
    
    // --- public methods ---

    //Calls upate() on every obj
	//after updating, if obj is off_screen(), removes from world
    obj.update_all_objects = function() {
		//Remove all objs at end in case there is an issue in removing while iterating
		to_remove = [];
        for (var i=0; i<game_objects.length; j++) {
            for (var i=0; i<game_objects[i].length; i++) {
                var o = game_objects[i][j];
                o.update();
				if (o.off_screen()) {
					to_remove.push(o);
				}
            }
        }
		
		for (o in to_remove) {
			remove_obj(o);
		}
    };
    
    //Handles a mouse click at x, y according to which state we are in
    obj.mouse_click= function (x, y) {
        switch (curr_state) {
            case "Splash":
                break;          
            case "Game":
                break;
            case "Pause":
                break;
            case "Help":
                break;
        }
    };
    
    //Calls draw() on every obj
    obj.render = function(){
        for (lst_of_o in game_objects) {
            for (o in lst_of_o) {
                o.draw();
            }
        }
    };
    
    //Checks whether any 2 objs are colliding, and if so calls handle_collision on them
    obj.check_collisions = function() {};
    
    //Adds a game_object to the game world
    obj.add_object = function(o) {
        var type = o.get_type();
        var render_level = type_to_level[type];
        game_objects[render_level].push(o);
    };
    
    return obj;
};
