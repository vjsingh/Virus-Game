// spec:
//	score : num representing score of game
//	mutation_level : num representing mutation level at end of game

var game_over_state = function (p, prev_state, spec) { 
	//right now, prev_state is not used
	
    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---

    var topy = 100;
	// Score display
	var score_rect = rectangle(p, {
		pos : new p.PVector(p.width / 2, topy+80),// 230),
		width : 0,
		height : 0,
		text : "Score: " + add_commas(spec.score),
		text_size : 30,
		text_color : 255
	});

	var mutation_rect  = rectangle(p, {
		pos : new p.PVector(p.width / 2, topy+130),//280),
		width : 0,
		height : 0,
		text : "Mutation Level: " + spec.mutation_level,
		text_size : 30,
		text_color : 255
	});

    var b_top = topy+180;
    var b_spc = 60;
    var button_style = {
        width: 120, height: 50,
        text_align: p.LEFT,
    };
	// Buttons
	var restart_button = button(p, {
		state : function() { sounds.play_button_click(); return in_game_state(p, prev_state); },
		rect : {
			pos : new p.PVector(p.width / 2, b_top),//330),
			text : "Restart",
            text_x_offset: 40,
            image: "restart.png",
            style: button_style
		}
	});
	var post_button  = button(p, {
		state : function() { 
            // only post if they are logged in 
            if (g_user_id) {
                FB.ui({
                    method: 'feed',
                    name: "Play Virion!",
                    picture: "http://virus-game.cs.brown.edu/images/logo/vlogolarge.png",
                    link: "http://apps.facebook.com/viriongame",
                    caption: "I just scored "+add_commas(spec.score)+
                        " playing Virion!",
                });
            }
            return obj;
        },
		rect : {
			pos : new p.PVector(p.width / 2, b_top+b_spc),//390),
			text : "Post Score to Wall",
            //text_x_offset: 35,
            //image: "mainmenu.png",
            style: button_style
		}
	});
	var invite_button  = button(p, {
		state : function() { 
            // only post if they are logged in 
            if (g_user_id) {
                FB.ui({
                    method: 'apprequests',
                    title: "Infect Your Friends",
                    message: 'Check out this awesome game!',
                }); 
            }
            return obj;
        },
		rect : {
			pos : new p.PVector(p.width / 2, b_top+2*b_spc),//450),
			text : "Infect Your Friends",
            //text_x_offset: 35,
            //image: "mainmenu.png",
            style: button_style
		}
	});

    // only allow posts/invites if logged in
    if (!g_user_id) {
        post_button.deactivate();
        invite_button.deactivate();
    }

	var scores_button  = button(p, {
		state : function() { sounds.play_button_click(); return high_scores_state(p, obj); },
		rect : {
			pos : new p.PVector(p.width / 2, b_top+3*b_spc),//510),
			text : "High Scores",
            text_x_offset: 35,
            image: "highscores.png",
            style: button_style
		}
	});
	var splash_button  = button(p, {
		state : function() { sounds.play_button_click(); return splash_state(p); },
		rect : {
			pos : new p.PVector(p.width / 2, b_top+4*b_spc),//570),
			text : "Main Menu",
            text_x_offset: 35,
            image: "mainmenu.png",
            style: button_style
		}
	});
		
	//Not ordered
	var all_buttons = [restart_button, post_button, invite_button, splash_button, scores_button];
	var all_rectangles = [score_rect, mutation_rect];

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
        p.fill(0, 150);
        p.rectMode(p.CORNER);
        p.rect(0, 0, p.width, p.height);

        p.fill(255);
        p.textAlign(p.CENTER);

        p.textSize(50);
        p.text("Game Over", p.width/2, topy);
        p.textSize(20);
        p.text("Your virus was wiped out!", p.width/2, topy+30);

		for_each(all_rectangles, function(r) {r.draw();});
    };
	
    return obj;
};
