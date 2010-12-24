// *** game_state ***
// Interface for all game states

// NOTE ALL OF THE FOLLOWING WHEN CREATING A GAME STATE:
// All game states must take a previous_state in their constructor, and then call set_previous_state()
//		The exception to this is splash, which is the base state and should never be exited
// If a state change happens in:
//		update() - return the new state
// 		mouse_click/key_pressed: Call set_next_state(new_state) with the state to go to

var game_state = function (p) {

    // object to return
    var obj = {};
	
	// --- private variables ---
	var next_state = null;
	var previous_state = null;

    // --- public methods ---
	//Do not over-ride these methods
	obj.set_next_state = function(ns) {
		next_state = ns;
	}
	obj.exit_state = function() {
		if (previous_state == null) {
			throw "error previous state not set in game_state";
		}
		assert(previous_state != null, "Previous state was null in game_state.exit_state");
		next_state = previous_state;
	}
	
	// Wrapper for every states update function
	// Goes to the next state (by returning it) if next_state has been set
	obj.update_wrapper = function() {
		if (next_state !== null) {
			var to_return = next_state;
			//in case we return to this state (CURRENTLY, SHOULDN'T EVER HAPPEN I THINK)
			next_state = null; 
			return to_return;
		}
		//else
		obj.update();
		obj.render();
	}
	
    // all game_states must implement the following functions:
    
    //Returns the type of the state
    obj.get_type = function() {
        return "get_type not overwritten";
    };
	
    //Renders the current state
    obj.render = function() {throw "render not overwritten"};

    //Takes in the x and y coordinates of the mouse, and handles a mouse click
    obj.mouse_click = function(x, y) {throw "mouse_click not overwritten"};
	
	//Takes in the key pressed and handles a key press
    obj.key_pressed = function(k) {throw "key_pressed not overwritten"};
	    
    //Updates the current state, and returns the next state to go to
    //next state can be:
    //     null, if no state change
    //     a state representing a state to go to (either previous state or newly created next state
    obj.update = function() {throw "update not overwritten"};
    
    return obj;
};
