var splash_state = function (p) {

    // object to return
    var obj = game_state(p);

    // --- private variables ---

	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	var start_button = button(p, {
		state : in_game_state(p, obj),
		rect : rectangle(p, {
			pos : new p.PVector(p.width / 2, 20),
			width : 80,
			height : 20,
			text : "Start Game"
		})
	});
		
	var help_button = button(p, {
		state : help_state(p, obj),
		rect : rectangle(p, {
			pos : new p.PVector(p.width / 2, 60),
			width : 80,
			height : 20,
			text : "help"
		})
	});	
	/*
	var high_scores_button = {
		state : high_scores_state(),
		rectangle : rectangle(p, {
			pos : new p.PVector(20, 20),
			width : 20,
			height : 20
		})
	};	
	*/
	
	//Not ordered
	var all_buttons = [start_button, help_button];

    // --- public methods ---
    
    obj.get_type = function() {
        return "splash";
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
