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

    var image = spec.rect.image ?
        image_manager.get_image(spec.rect.image) : null;
    var over_image = spec.rect.over_image ? 
        image_manager.get_image(spec.rect.over_image) : null;

    // --- public methods --- 

	obj.draw = function() {
        if (!active) {
            rect.set_tint(100);
            /*
            var r = spec.rect;
            p.noStroke();
            p.fill(0, 150);
            p.rectMode(p.CENTER);
            p.rect(r.pos.x, r.pos.y, r.width, r.height);
            */
        }
        else {
            //rect.set_tint(255);
        }
        rect.draw();
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
            // after click go back to normal image
            if (over_image) {
                rect.set_image(image);
            }
			return obj.get_state();
		}
		else {
			return null;
		}
	};	

    obj.mouse_moved = function(x, y) {
        if (active && rect.is_in(x, y)) {
            if (over_image) {
                rect.set_image(over_image);
            }
            else {
                //rect.set_tint(0);
                rect.set_tint(255, 255);
                rect.draw_twice();
                //console.log("tinting");
            }
        }
        else {
            rect.set_tint(255, 255);
            rect.draw_once();
            rect.set_image(image);
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
