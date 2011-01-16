var options_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---
	
	var background_image = p.loadImage("images/screens/settingssplash.png");
	
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
	var option_image = "./images/screens/bullet_listcell.png";
	var sound_fx_button = option_button(p, {
		click_fun : g_toggle_sound_fx,
		global_var : "sound_fx",
		rect : {
			pos : new p.PVector(p.width / 2 - 100, p.height/2 - 30),
			text: "Sound_fx",
			image : option_image
		}
	});
	var music_button = option_button(p, {
		click_fun : g_toggle_music,
		global_var : "music",
		rect : {
			pos : new p.PVector(p.width / 2 - 100, p.height/2 + 80),
			text: "Music",
			image : option_image
		}
	});
	var spacebar_button = option_button(p, {
		click_fun : g_toggle_spacebar_to_fire,
		global_var : "spacebar_to_fire",
		rect : {
			pos : new p.PVector(p.width / 2 + 150, p.height/2 - 30),
			text: "Use Spacebar to Fire",
			image : option_image
		}
	});
	var mouse_button = option_button(p, {
		click_fun : g_toggle_click_to_fire,
		global_var : "click_to_fire",
		rect : {
			pos : new p.PVector(p.width / 2 + 150, p.height/2 + 80),
			text: "Use Mouse click to Fire",
			image : option_image
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
        p.background(g.background_color);
        //p.fill(g.background_color);
        //p.rect(100, 100, 500, 500);
		p.imageMode(p.CORNERS);
		p.image(background_image, 0, 0);//, p.width, p.height);
		for_each(all_option_buttons, function(b) {b.draw();});
    };

	obj.mouse_click = function(x, y) {
		for_each(all_option_buttons, function(b) {b.click(x, y);});
	}
    return obj;
};
