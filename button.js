// Have a rectangle representing their position and a state to go to when clicked
// spec:
//		state : function that returns a new state to go to when clicked
//		        (think of it like a thunk)
//		rect : spec for a rectangle representing the button

var button = function(p, spec) {
	
    // --- defaults ---
    spec.rect.width = spec.rect.width || 100;
    spec.rect.height = spec.rect.height || 35;

    // obj to return
    var obj = {};

    // --- private variables ---

	var next_state_fun = spec.state;
	var rect = rectangle(p, spec.rect);
    var active = spec.active || true;

    // --- public methods --- 

	obj.draw = function() {
        rect.draw();
        if (!active) {
            var r = spec.rect;
            p.noStroke();
            p.fill(0, 150);
            p.rectMode(p.CENTER);
            p.rect(r.pos.x, r.pos.y, r.width, r.height);
        }
	};

    // makes a button not active
    obj.deactivate = function() {
        active = false;
    };
    
    // makes a button active
    obj.activate = function() {
        active = true;
    };
	
	// Returns the state to go to if clicked, or
	// null if not clicked
	obj.is_clicked = function(x, y) {
		if (active && rect.is_in(x, y)) {
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

    obj.get_rect = function() {
        return spec.rect;
    };
	
    return obj;
};
