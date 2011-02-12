var options_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---
	
	var background_image = image_manager.get_image("settingssplash.png");

    var button_style = {
		text_x_offset : 60,
        text_y_offset: -3,
        text_align: p.LEFT
    };
	
	// Buttons
    
    var col1_x = p.width/2 - 120;
    var col2_x = p.width/2 + 120;

	var back_button = button(p, {
		state : function() {
            sounds.play_button_back();
            return prev_state; 
        },	
		rect : {
			pos : new p.PVector(p.width / 2, p.height - 80),
			//width : 120,
			//height : 50,
			//text: "Back",
            //text_x_offset: 5,
            //text_y_offset: -8,
            image: "back.png",
		}
	});

	// Options
	//var option_image = "bullet_listcell.png";
	var sound_fx_button = option_button(p, {
		click_fun : function() {sounds.play_button_click(); g.toggle_sound_fx();},
		global_var : "sound_fx",
		rect : {
			pos : new p.PVector(col1_x, p.height/2 - 70),
			//text: "Sound Effects",
            //text_x_offset: 60,
			image : "set_sound.png",//option_image,
			over_image : "set_sound_a.png",
            //style: button_style
		}
	});
	var music_button = option_button(p, {
		click_fun : function() {
            sounds.play_button_click();
            // toggle the flag
            g.toggle_music();
        },
		global_var : "music",
		rect : {
			pos : new p.PVector(col1_x, p.height/2 + 40),
			//text: "Music",
            //text_x_offset: 60,
			image : "set_music.png",//option_image,
			over_image : "set_music_a.png",
            //style: button_style
		}
	});
	var spacebar_button = option_button(p, {
		click_fun : function() {
            sounds.play_button_click(); 
            g.toggle_spacebar_to_fire();
        },
		global_var : "spacebar_to_fire",
		rect : {
			pos : new p.PVector(col2_x, p.height/2 - 70),
			//text: "Spacebar to Fire",
			//text_x_offset : 60,
			image : "set_spacebar.png",//option_image,
			over_image : "set_spacebar_a.png",
            //style: button_style
		}
	});
	var mouse_button = option_button(p, {
		click_fun : function() {
            sounds.play_button_click();
            g.toggle_click_to_fire();
        },
		global_var : "click_to_fire",
		rect : {
			pos : new p.PVector(col2_x, p.height/2 + 40),
			//text: "Mouse Click to Fire",
			//text_x_offset : 60,
			image : "set_click.png",//option_image,
			over_image : "set_click_a.png",
            //style: button_style
		}
	});
	var mouse_to_select_button = option_button(p, {
		click_fun : function() {
            sounds.play_button_click();
            g.toggle_mouse_to_select();
        },
		global_var : "mouse_to_select",
		rect : {
			pos : new p.PVector(col2_x, p.height/2 + 140),
			//text: "Mouse to Select Cells\nInstead of Left/Right",
			image : "set_mouseselect.png",//option_image,
			over_image : "set_mouseselect_a.png",
			//text_x_offset : 60,
            //style: button_style
		}
	});
	var track_left_button = button(p, {
        state : function() { 
            sounds.play_button_click();
            g.prev_track();
            return obj; 
        },
		rect : {
			pos : new p.PVector(col1_x - 50, p.height/2 + 140),
			image : "track_left.png",
		}
	});
	var track_right_button = button(p, {
        state : function() { 
            sounds.play_button_click();
            g.next_track();
            return obj; 
        },
		rect : {
			pos : new p.PVector(col1_x + 50, p.height/2 + 140),
			image : "track_right.png",
		}
	});


	
	//Not ordered
	var all_option_buttons = [sound_fx_button, music_button,
        spacebar_button, mouse_button, mouse_to_select_button];
	var all_buttons = [back_button, track_left_button, track_right_button]
            .concat(all_option_buttons);
        

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
        //p.background(g.background_color);
        //p.fill(g.background_color);
        //p.rect(100, 100, 500, 500);
		p.imageMode(p.CORNERS);
		p.image(background_image, 0, 0);//, p.width, p.height);

        // draw the track button background manually    
        var track_x = col1_x;
        var track_y = p.height/2 + 140;
        var track_image = image_manager.get_image("set_track.png");
        p.imageMode(p.CENTER);
        p.image(track_image, track_x, track_y);
        // draw current track
        p.fill(0);
        p.textAlign(p.CENTER);
        p.textSize(14);
        p.text(g.track, track_x, track_y);

		for_each(all_option_buttons, function(b) { b.draw(); });
    };

	obj.mouse_click = function(x, y) {
		for_each(all_option_buttons, function(b) { b.click(x, y); });
	};

    return obj;
};
