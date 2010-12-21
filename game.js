// *** game ***
// Possible States:
// Splash, Game, Pause, Help


var game = function (p) {

    // object to return
    var obj = {};

	// --- constants ---
	var num_of_types = 5;
	
    // --- private variables ---

    var curr_state = "Splash";
    var distance = 0;
	var score = 0;
	
	//Initialize to be a list of num_of_types empty lists
	var game_objects = [];
	for (var i = 0; i < num_of_types; i++) {
		game_objects[i] = [];
	}
	
	//A mapping from game_object types to their rendering levels
	var type_to_level = {"background":0, "particle":1, "cell":2, "enemy":3, "info":4}; 

	
    // --- private methods ---
	obj.handle_collision = function(obj1, obj2) {};
	
    // --- public methods ---

	//Calls upate() on every obj
	obj.update_all_objects = function() {
		for (lst_of_o in game_objects) {
			for (o in lst_of_o) {
				o.update();
			}
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
