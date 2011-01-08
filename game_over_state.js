var game_over_state = function (p, prev_state) { 
	//right now, prev_state is not used
	
    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---

	// Buttons
	var restart_button = button(p, {
		state : function() { return in_game_state(p, prev_state); },
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2),
			width : 100,
			height : 30,
			text : "Restart"
		}
	});
	var splash_button  = button(p, {
		state : function() { return splash_state(p); },
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2 + 50),
			width : 100,
			height : 30,
			text : "Main Menu"
		}
	});
		
	//Not ordered
	var all_buttons = [restart_button, splash_button];

    // --- public methods ---
    
    obj.get_type = function() {
        return "game_over";
    };

    obj.update = function() {
		//do nothing
    };
    
	obj.key_pressed = function(k) {
		if (k === 114 || p.keyCode === 13) { //r, enter
			obj.set_next_state(restart_button.get_state());
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};

    obj.render = function() {
        p.fill(0, 100);
        p.rect(0, 0, p.width, p.height);
    };
	
    return obj;
};
