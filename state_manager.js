// *** state_manager ***
// The game engine; manages all of the games states
// Provides update(), mouse_click(x, y), and key_pressed(k)
// The next state to go to, if applicable, is returned by state.update()

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
        var index = displayed_states.indexOf(s);
        if (index === -1) {
            throw "error in remove_from_displayed in state_manager";
        }
        displayed_states.splice(index, 1); //remove the element
    }
    
    //Adds a state to displayed_states
    //Ensures that displayed_states is sorted by ascending rendering level
    var add_to_displayed_states = function(s) {
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
		var next_state = null;
		var display_function = function(s) {
			if (s == curr_state) {
				next_state = s.update_wrapper();
			}
			else {
				s.update_wrapper();
			}
		}
		for_each(displayed_states, display_function);
        
        //If we have a new state to go to
        if (next_state) {
            //Figure out if next state is an overlay
            var state_type = next_state.get_type();
            var is_overlay = -1;
            switch (state_type) {
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
			
			//Error checking
			if (is_overlay === -1) {
				throw "error in mouse_click in state_manager";
			}
			
			//If overlay, add to displayed, otherwise reset displayed
			if (is_overlay) {
				add_to_displayed_states(next_state);
			}
			else {
				remove_from_displayed(curr_state);
				displayed_states = [next_state];
			}
			curr_state = next_state;
		}
		
		 for (var i = 0; i < displayed_states.length; i++) {
            displayed_states[i].render();
        }
    }
    
    //Passes clicks on to curr_state
    obj.mouse_click = function (x, y) {
        curr_state.mouse_click_wrapper(x, y); 
    };
	obj.key_pressed = function(k) {
		curr_state.key_pressed(k);
	};
    
    return obj;
};
