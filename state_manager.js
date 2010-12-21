// *** state_manager ***
// The game engine; manages all of the games states
// Provides update() and mouse_click(x, y)
// State Changing (all in mouse_click):
//      States can only be changed by a mouse click
//      Next state is returned by state.mouse_click()
//      Next state can be either a string or an actual state
//          If actual state, means it was a previous state, so return to it
//          If string, make appropriate new state, and handle 

var state_manager = function (p) {

    // object to return
    var obj = {};
    
    // --- private variables ---

    var curr_state = splash_state(p); //The currently active state
    var displayed_states = [curr_state]; //THIS MUST ALWAYS BE SORTED BY RENDERING LEVEL
	
	//A mapping from game states to their rendering levels
    var type_to_level = {
		"splash": 0,
		"game": 1,
		"pause": 2,
		"help": 2
	};
	
    // --- private methods ---
		
	//Removes a state from the displayed_states
	//The state must be in displayed_states, or will throw an error
	function remove_from_displayed(s) {
        var index = displayed_states.indexOf(curr_state);
        if (index === -1) {
            throw "error in remove_from_displayed in state_manager";
        }
        displayed_states.splice(index, 1); //remove the element
	}
    
	//Adds a state to displayed_states
	//Ensures that displayed_states is sorted by ascending rendering level
	function add_to_displayed_states(s) {
		var render_level = type_to_level[s.get_type()];
		//Insert in the array right before a render level that is higher than it, or
		//at the end if none
		var inserted = false;
		for (var i = 0; i < displayed_states.length; i++) {
			var old_render_level = type_to_level[displayed_states[i].get_type()];
			if (old_render_level > render_level) {
				displayed_states.splice(i, 0, s);
				inserted = true;
			}
		}		
		if (inserted === false) { //add to end
			displayed_states.push(s);
		}
	}
	
	
    // --- public methods ---

    //Updates the current state and renders all appropriate states
    obj.update = function() {
		curr_state.update();
		for (var i = 0; i < displayed_states.length; i++) {
			displayed_states[i].render();
		}
	}
    
    //Handles a mouse click at x, y according to which state we are in
	//Then handles changing states
    obj.mouse_click= function (x, y) {
        var next_state = curr_state.mouse_click(x, y); 
        
		//If we have a new state to go to
		if (next_state) {
			//Figure out if next state is an overlay
			var state_type = next_state.get_type();
			var is_overlay = -1;
			switch (next_state_str) {
                case "splash":
				    is_overlay = false;
				    break;
                case "game":
                    is_overlay = false;
                    break;
                case "pause":
                    is_overlay = true;
                    break;
                case "help":
                    is_overlay = true;
                    break;
                        
            }
			
			//Remove current state and set curr to next
			remove_from_displayed(curr_state);
			curr_state = next_state;
			
			//Error checking
			if (is_overlay === -1) {
				throw "error in mouse_click in state_manager";
			}
			
			//If overlay, add to displayed, otherwise reset displayed
			if (is_overlay) {
				add_to_displayed_states[curr_state];
			}
			else {
				displayed_states = [curr_state];
			}
		}
    };
    
    return obj;
};
