var help_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---
	
	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	var exit_button = button(p, {
		state : prev_state,	
		rect : rectangle(p, {
			pos : new p.PVector(p.width / 2, 100),
			width : 60,
			height : 20,
			text: "back"
		})
	});
		
	//Not ordered
	var all_buttons = [exit_button];

    // --- public methods ---
    
    obj.get_type = function() {
        return "help";
    };

    obj.update = function() {
		//do nothing
    };
    
	obj.key_pressed = function(k) {
		if (k === 115) { //s
			obj.set_next_state(start_button.get_state());
		}
		else if (k === 104) { //h
			obj.set_next_state(help_button.get_state());
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	}
	
    return obj;
};
