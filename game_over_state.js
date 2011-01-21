// spec:
//	score : num representing score of game
//	mutation_level : num representing mutation level at end of game

var game_over_state = function (p, prev_state, spec) { 
	//right now, prev_state is not used
	
    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);
	
    // --- private variables ---

	// Score display
	var score_rect = rectangle(p, {
		pos : new p.PVector(p.width / 2, 230),
		width : 0,
		height : 0,
		text : "Score : " + add_commas(spec.score),
		text_size : 30,
		text_color : 255
	});

	var mutation_rect  = rectangle(p, {
		pos : new p.PVector(p.width / 2,280),
		width : 0,
		height : 0,
		text : "Mutation Level : " + spec.mutation_level,
		text_size : 30,
		text_color : 255
	});

	// Buttons
	var restart_button = button(p, {
		state : function() { return in_game_state(p, prev_state); },
		rect : {
			pos : new p.PVector(p.width / 2, 330),
			width : 100,
			height : 30,
			text : "Restart"
		}
	});
	var splash_button  = button(p, {
		state : function() { return splash_state(p); },
		rect : {
			pos : new p.PVector(p.width / 2, 380),
			width : 100,
			height : 30,
			text : "Main Menu"
		}
	});
		
	//Not ordered
	var all_buttons = [restart_button, splash_button];
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
        p.fill(0, 100);
        p.rect(0, 0, p.width, p.height);

        p.fill(255);
        p.textAlign(p.CENTER);

        p.textSize(50);
        p.text("Game Over", p.width/2, 150);
        p.textSize(20);
        p.text("Your virus was wiped out!", p.width/2, 180);

		for_each(all_rectangles, function(r) {r.draw();});
    };
	
    return obj;
};
