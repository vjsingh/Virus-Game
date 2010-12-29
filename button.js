// Have a rectangle representing their position and a state to go to when clicked
// spec:
//		state : State to go to when clicked
//		rect : rectangle representing the button

var button = function(p, spec) {
	
    // obj to return
    var obj = {};

    // --- private variables ---

	var next_state = spec.state;
	var rect = spec.rect;

    // --- public methods --- 

	obj.draw = function() {
        rect.draw();
	}
	
	// Returns the state to go to if clicked, or
	// null if not clicked
	obj.is_clicked = function(x, y) {
		if (rect.is_in(x, y)) {
			return next_state;
		}
		else {
			return null;
		}
	};	
	
	// Returns the state to go to
	obj.get_state = function() {
		return next_state;
	};
	
    return obj;
};
