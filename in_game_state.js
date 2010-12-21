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
    var type_to_level = {"background":0, "particle":1, "cell":2, "wall_cell":2,
                           "empty_cell":2, "floater":3, "tkiller":3, "info":4}; 
    
    // --- private methods ---
    handle_collision = function(obj1, obj2) {};
    
    //Removes all objs which are either off screen or dead
    remove_objs = function() {
        var filter_fun = function(x) {
            //return (! x.off_screen() && ! x.is_dead())
            return ! x.is_dead();
        };  
        for (var i = 0; i < game_objects.length; i++) {
            lst_of_o = game_objects[i];
            lst_of_o = lst_of_o.filter(filter_fun);
        }
    };
    
    //Checks whether any 2 objs are colliding, and if so calls handle_collision on them
    check_collisions = function() {};
    
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
        
        remove_objs();
		//TODO: add end game check
    };
    
    //Calls draw() on every obj
    obj.render = function(){
        for (var i=0; i<game_objects.length; i++) {
            for (var j=0; j<game_objects[i].length; j++) {
                var o = game_objects[i][j];
                o.draw();
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
