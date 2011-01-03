// Have a rectangle representing their position and a state to go to when clicked
// spec:
//		state : function that returns a new state to go to when clicked
//		        (think of it like a thunk)
//		rect : rectangle representing the button

var button = function(p, spec) {
	
    // obj to return
    var obj = {};

    // --- private variables ---

	var next_state_fun = spec.state;
	var rect = spec.rect;

    // --- public methods --- 

	obj.draw = function() {
        rect.draw();
	};
	
	// Returns the state to go to if clicked, or
	// null if not clicked
	obj.is_clicked = function(x, y) {
		if (rect.is_in(x, y)) {
			return obj.get_state();
		}
		else {
			return null;
		}
	};	
	
	// Returns the state to go to
	obj.get_state = function() {
		return next_state_fun();
	};
	
    return obj;
};
