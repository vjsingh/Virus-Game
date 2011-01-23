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
			text : "Options"
		}
	});	
		
	var help_button = button(p, {
		state : function() { return help_state(p, obj); },
		rect :  {
			pos : new p.PVector(button_x, button_top+2*button_sep),
            style : splash_style,
			text : "Instructions"
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
        p.background(back_color);
		p.imageMode(p.CENTER);
		//p.image(header_image, p.width / 2, 100, p.width * 3/4, 100);
        p.image(back_image, p.width/2, p.height/2);
    };

    return obj;
};
