var splash_state = function (p) {

    // object to return
    var obj = game_state(p);

    // --- private variables ---

	//var header_image = p.loadImage("images/screens/header.png");
    var back_image = image_manager.get_image("mainscreenbase.png");
    var back_color = g.background_color; 

	// Buttons
	// Have a rectangle representing their position and
	// a state to go to when pressed

    var top_row_y = 200;
    var btm_row_y = 480;
    var left_x = 460;
    var button_style = {
        height: 160,
        rect_color: back_color
    };

    // Play menu music
    sounds.play_menu_music();

    var pause_menu_music = function() {
        sounds.pause_menu_music();
    };

    var start_button = button(p, {
		state : function() { 
            pause_menu_music();
            sounds.play_button_click();
            return in_game_state(p, obj); 
        },
        rect: {
            pos: new p.PVector(left_x, top_row_y),
            image: "mnewgame.png",
            over_image: "mnewgame_r.png",
            width: 80,
            style: button_style,
        }
    });

    var help_button = button(p, {
		state : function() { 
            sounds.play_button_click();
            return help_state(p, obj); 
        },
        rect: {
            pos: new p.PVector(left_x+150, top_row_y),
            image: "mhowtoplay.png",
            over_image: "mhowtoplay_r.png",
            width: 100,
            style: button_style,
        }
    });

    var options_button = button(p, {
		state : function() { 
            sounds.play_button_click();
            return options_state(p, obj); 
        },
        rect: {
            pos: new p.PVector(left_x, btm_row_y),
            image: "msettings.png",
            over_image: "msettings_r.png",
            width: 120,
            style: button_style,
        }
    });

    var scores_button = button(p, {
		state : function() { 
            sounds.play_button_click();
            return high_scores_state(p, obj); 
        },
        rect: {
            pos: new p.PVector(left_x+150, btm_row_y),
            image: "mhighscores.png",
            over_image: "mhighscores_r.png",
            //text: "High Scores",
            width: 100,
            style: button_style,
        }
    });

    var credits_button = button(p, {
        state : function() {
            sounds.play_button_click();
            return credits_state(p, obj);
        },
        rect: {
            pos: new p.PVector(p.width-100, 30),
            image: "credits.png",
            width: 200,
            height: 50,
        }
    });

    /*
    var splash_style = {
        width : 170,
        height : 40,
        text_color: 0xFFEE0000,
        rect_color: back_color,
        text_size: 30,
        text_align: p.LEFT
    };

    var button_x = 500;
    var button_top = 150;
    var button_sep = 60;

	var start_button = button(p, {
		state : function() { return in_game_state(p, obj); },
		rect : {
			pos : new p.PVector(button_x, button_top),
            style : splash_style,
            text : "New Game"
			//image : "images/screens/newgame_listcell.png"
		}
	});
	
	var options_button = button(p, {
		state : function() { return options_state(p, obj); },
		rect :  {
			pos : new p.PVector(button_x, button_top+button_sep),
            style : splash_style,
			text : "Settings"
		}
	});	
		
	var help_button = button(p, {
		state : function() { return help_state(p, obj); },
		rect :  {
			pos : new p.PVector(button_x, button_top+2*button_sep),
            style : splash_style,
			text : "How To Play"
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
	var all_buttons = [start_button, options_button,
        help_button, scores_button, credits_button ];

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
            pause_menu_music();
		}
		else if (k === 104) { //h
			obj.set_next_state(help_button.get_state());
		}
	};

    /*
    obj.mouse_moved = function(x, y) {

        for_each(
            all_buttons,
            function(b) {
                b.mouse_moved(x, y);
            }
        );
    };
    */
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};

    obj.render = function() {
        p.background(back_color);
		p.imageMode(p.CENTER);
		//p.image(header_image, p.width / 2, 100, p.width * 3/4, 100);
        p.image(back_image, p.width/2, p.height/2);
    };

    return obj;
};
