var splash_state = function (p) {

    // object to return
    var obj = game_state(p);

    // --- private variables ---

	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	var start_button = button(p, {
		state : function() { return in_game_state(p, obj); },
		rect : {
			pos : new p.PVector(p.width / 2, 250),
			width : 100,
			height : 40,
			text : "Start Game"
		}
	});
	
	var options_button = button(p, {
		state : function() { return options_state(p, obj); },
		rect :  {
			pos : new p.PVector(p.width / 2, 300),
			width : 100,
			height : 40,
			text : "Options"
		}
	});	
		
	var help_button = button(p, {
		state : function() { return help_state(p, obj); },
		rect :  {
			pos : new p.PVector(p.width / 2, 350),
			width : 100,
			height : 40,
			text : "Help"
		}
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
	var all_buttons = [start_button, options_button, help_button];

    // --- public methods ---
    
    obj.get_type = function() {
        return "splash";
    };

    obj.update = function() {
		//do nothing
    };
    
	obj.key_pressed = function(k) {
		if (k === 115 || p.keyCode === 13 || k === 32) { //s, enter, space
			obj.set_next_state(start_button.get_state());
		}
		else if (k === 104) { //h
			obj.set_next_state(help_button.get_state());
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};

    obj.render = function() {
        p.background(200);
    };

    return obj;
};
