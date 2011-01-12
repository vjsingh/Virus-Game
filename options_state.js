var options_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---
	
	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed
	var back_button = button(p, {
		state : function() { return prev_state; },	
		rect : {
			pos : new p.PVector(p.width / 2, p.height - 80),
			width : 100,
			height : 40,
			text: "Back"
		}
	});

	// Options
	var option_rect_height = 40;
	var sound_fx_button = option_button(p, {
		click_fun : g_toggle_sound_fx,
		global_var : "sound_fx",
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2 - (option_rect_height * 3)),
			width : 100,
			height : option_rect_height,
			text: "Sound_fx"
		}
	});
	var music_button = option_button(p, {
		click_fun : g_toggle_music,
		global_var : "music",
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2 - (option_rect_height * 1.5)),
			width : 100,
			height : option_rect_height,
			text: "Music"
		}
	});
	var spacebar_button = option_button(p, {
		click_fun : g_toggle_spacebar_to_fire,
		global_var : "spacebar_to_fire",
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2 + (option_rect_height * 1.5)),
			width : 100,
			height : option_rect_height,
			text: "Use Spacebar to Fire"
		}
	});
	var mouse_button = option_button(p, {
		click_fun : g_toggle_click_to_fire,
		global_var : "click_to_fire",
		rect : {
			pos : new p.PVector(p.width / 2, p.height/2 + (option_rect_height * 3)),
			width : 100,
			height : option_rect_height,
			text: "Use Mouse click to Fire"
		}
	});
	
	//Not ordered
	var all_buttons = [back_button];
	var all_option_buttons = [sound_fx_button, music_button, spacebar_button, mouse_button];

    // --- public methods ---
    
    obj.get_type = function() {
        return "options";
    };

    obj.update = function() {
		//do nothing
    };
    
	obj.key_pressed = function(k) {
		if (k === 115 || p.keyCode === 13 || k === 32) { //s, enter, space
		}
		else if (k === 104) { //h
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};

    obj.render = function() {
        p.background(200);
		for_each(all_option_buttons, function(b) {b.draw();});
    };

	obj.mouse_click = function(x, y) {
		for_each(all_option_buttons, function(b) {b.click(x, y);});
	}
    return obj;
};
