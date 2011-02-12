var credits_state = function(p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);

    // --- private variables ---

    var credits_back = image_manager.get_image("creditssplash.png");
	
	// Buttons
	
	var back_button = button(p, {
		state : function() { return prev_state; },
		rect : {
			pos : new p.PVector(p.width/2, 500),
            width: 120,
            height: 50,
            image: "back.png",
		}
	});

	
	//Not ordered
	var all_buttons = [ back_button ];

    // --- public methods ---
    
    obj.get_type = function() {
        return "credits";
    };

    obj.update = function() {
		//do nothing
    };

    obj.render = function() {
        /*
        p.noStroke();
        p.fill(0, 150);
        p.rectMode(p.CORNER);
        p.rect(0, 0, p.width, p.height);
        */

        p.imageMode(p.CENTER);
        p.image(credits_back, p.width/2, p.height/2);
    };

	obj.key_pressed = function(k) {
		if (p.keyCode === 13 || p.keyCode === 27) { // enter, esc
			obj.exit_state();
		}
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};
	
    return obj;
};
