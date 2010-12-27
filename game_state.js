// *** game_state ***
// Interface for all game states

// NOTE ALL OF THE FOLLOWING WHEN CREATING A GAME STATE:
// All game states must take a previous_state in their constructor, and then call set_previous_state()
//		The exception to this is splash, which is the base state and should never be exited
// If a state change happens in:
//		update() - return the new state
// 		mouse_click/key_pressed: Call set_next_state(new_state) with the state to go to
// Buttons:
//		Drawing and clicking of buttons is taken care of
//		You must take care of key strokes

var game_state = function (p) {

    // object to return
    var obj = {};
	
	// --- private variables ---
	var next_state = null;
	var previous_state = null;
	var all_buttons = null; //TODO: This is static but is updated every update()

	// --- private methods ---
	
	//Wrapper for every states render function
	//First draws all the buttons, then calls render
	var render_wrapper = function() {
		obj.render();
		for_each(all_buttons, function(b) { b.draw()});
	};
	
    // --- public methods ---
	//Do not over-ride these methods
	obj.set_next_state = function(ns) {
		next_state = ns;
	};
	obj.set_previous_state = function(ps) {
		previous_state = ps;
	};
	obj.exit_state = function() {
		if (previous_state == null) {
			throw "error previous state not set in game_state";
		}
		assert(previous_state != null, "Previous state was null in game_state.exit_state");
		next_state = previous_state;
	};
	
	// Wrapper for every states update function
	// Goes to the next state (by returning it) if next_state has been set
	obj.update_wrapper = function() {
		all_buttons = obj.get_all_buttons();
		if (next_state !== null) {
			var to_return = next_state;
			//in case we return to this state (CURRENTLY, SHOULDN'T EVER HAPPEN I THINK)
			next_state = null; 
			return to_return;
		}
		//else
		obj.update();
		render_wrapper();
	};
	
	// Wrapper for mouse clicks
	// First checks if any of the buttons are clicked, then calls mouse_click
	obj.mouse_click_wrapper = function(x, y) {
		var click_function = function(b) {
			var next_state = b.is_clicked(x, y);
			if (next_state != null) {
				obj.set_next_state(next_state);
			}
		}
		for_each(all_buttons, click_function);
		obj.mouse_click(x, y);
	};
	
    // all game_states must implement the following functions:
    
    //Returns the type of the state
    obj.get_type = function() {
        return "get_type not overwritten";
    };
	
	//Takes in the key pressed and handles a key press
    obj.key_pressed = function(k) {throw "key_pressed not overwritten"};
	    
    //Updates the current state, and returns the next state to go to
    //next state can be:
    //     null, if no state change
    //     a state representing a state to go to (either previous state or newly created next state
    obj.update = function() {throw "update not overwritten"};
	
	// Returns all of the buttons on the screen
	obj.get_all_buttons = function() {throw "get_all_buttons not overwritten"};
	
    // --- Optionally implement these, they default to nothing ---
	
    //Renders the current state
    obj.render = function(){ }; //throw "render not overwritten"};

    //Takes in the x and y coordinates of the mouse, and handles a mouse click
    obj.mouse_click = function(x, y){}; //throw "mouse_click not overwritten"};
    
	//Called when returning to this state
	obj.resume = function() {};
	
    
	
    return obj;
};
