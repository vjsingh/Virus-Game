// *** game_state ***
// Interface for all game states

// NOTE:
// All game states must take a previous_state in their constructor
// When this state is finished, it should return to that previous_state
// The previous state is returned by either update or mouse_click
var game_state = function (p) {

    // object to return
    var obj = {};

    // --- public methods ---
    // all game_states must implement the following functions:
	
	//Returns the type of the state
    obj.get_type = function() {
        return "SHOULD HAVE BEEN OVERWRITTEN";
    };
	//Renders the current state
	obj.render = function() {};
	
	//update() and mouse_click() both return the next state to go to
    //next state can be:
    //     null, if no state change
    //     a state representing a state to go to (either previous state or newly created next state
	
	//Updates the current state
    obj.update = function() {};
	//Takes in the x and y coordinates of the mouse, and handles a mouse click
	obj.mouse_click = function(x, y) {};
    
    return obj;
}
