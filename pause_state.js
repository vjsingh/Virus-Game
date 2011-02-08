var pause_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);

    // --- private variables ---
	
	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
    var button_x = p.width / 2;
    var button_top = 200;
    var button_sep = 60;

    var button_style = {
        text_size: 14,
        text_align: p.LEFT,
        text_x_offset: 25,
        width: 120,
        height: 50,
    };

	
	var continue_button = button(p, {
		state : function() { sounds.play_button_click(); return prev_state; },
		rect : {
			pos : new p.PVector(button_x, button_top),
            text: "Continue",
            image: "continue.png",
            image_x_offset: 5,
            style: button_style
		}
	});

	var options_button = button(p, {
		state : function() { sounds.play_button_click(); return options_state(p, obj); },
		rect : {
			pos : new p.PVector(button_x, button_top+button_sep),
			text: "Settings",
            image: "settings.png",
            style: button_style
		}
	});

	var help_button = button(p, {
		state : function() { sounds.play_button_click(); return help_state(p, obj); },	
		rect : {
			pos : new p.PVector(button_x, button_top+2*button_sep),
			text: "Instructions",
            //text_x_offset: 10,
            image: "instructions.png",
            image_x_offset: 3,
            style: button_style
		}
	});
    
	var quit_button = button(p, {
		state : function() { sounds.play_button_click(); return splash_state(p); },	
		rect : {
			pos : new p.PVector(button_x, button_top+3*button_sep),
			text: "Quit",
            //text_x_offset: -5,
            image: "quit.png",
            image_x_offset: -5,
            style: button_style
		}
	});
	
	//Not ordered
	var all_buttons = [ continue_button, options_button, help_button, quit_button ];

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
        p.rectMode(p.CORNER);
        p.rect(0, 0, p.width, p.height);

        p.fill(255);
        p.textSize(40);
        p.textAlign(p.CENTER);
        p.text("Game Paused", p.width/2, 150);
    };

	obj.key_pressed = function(k) {
		if (k === 112 || p.keyCode == 13 || p.keyCode === 27) { //p, enter, esc
			obj.exit_state();;
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};
	
    return obj;
};
