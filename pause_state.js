var pause_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);

    // --- private variables ---
	
	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	
	var continue_button = button(p, {
		state : function() { return prev_state; },
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2-100),
			width : 60,
			height : 20,
			text: "Continue"
		}
	});

	var help_button = button(p, {
		state : function() { return help_state(p, obj); },	
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2-50),
			width : 60,
			height : 20,
			text: "Help"
		}
	});
    
	var quit_button = button(p, {
		state : function() { return splash_state(p); },	
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2),
			width : 60,
			height : 20,
			text: "Quit"
		}
	});
	
	//Not ordered
	var all_buttons = [ continue_button, help_button, quit_button ];

    // --- public methods ---
    
    obj.get_type = function() {
        return "pause";
    };

    obj.update = function() {
		//do nothing
    };

    obj.render = function() {
        p.noStroke();
        p.fill(0, 150);
        p.rect(0, 0, p.width, p.height);
    };

	obj.key_pressed = function(k) {
		if (k === 112 || p.keyCode == 13) { //p, enter
			obj.exit_state();;
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};
	
    return obj;
};
