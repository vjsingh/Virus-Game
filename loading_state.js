var loading_state = function (p) {

    // object to return
    var obj = game_state(p);

    // --- private variables ---

	var background_image = p.loadImage("images/screens/loadingsplash.png");
	var next_state = splash_state(p);
	var bar_left_x = p.width * 4/20;
	var bar_right_x = p.width * 16/20;
	var bar_top_y = p.height * 24/50;
	var bar_height = p.height * 1/25;
	
	// loaded progress
	var load_progress = 0;
	var load_max = 4;//TOTAL_NUM_OF_IMAGES;

	// Call this function to indicate that something loaded
	var indicate_loaded = function() {
		load_progress += 1;
		obj.render_wrapper(); // Not getting called ??
	}
	
	// Loading function, apply immediately
	var load_fun = function() {
		//preload_images(sketch, indicate_loaded);
		setTimeout(indicate_loaded, 500);
		setTimeout(indicate_loaded, 1000);
		setTimeout(indicate_loaded, 1500);
		setTimeout(indicate_loaded, 2000);
	}();
	
	// Call when loading is finished (sets next state);
	var loading_finished = function(){
		obj.set_next_state(next_state);
	}
    // --- public methods ---
    
    obj.get_type = function() {
        return "loading";
    };

    obj.update = function() {
		if (load_progress === load_max){
			// Give them a second to see that its loaded
			setTimeout(loading_finished, 500);
		}
    };
	
    
	obj.get_all_buttons = function() {
		return [];
	};

    obj.render = function() {
		//console.log("rendering");
        p.background(g.background_color);
		p.imageMode(p.CORNERS);
		p.image(background_image, 0, 0);//, p.width, p.height);
		
		p.fill(p.color(255, 0, 0));
		p.shapeMode(p.CORNERS);
		var percent_done = load_progress / load_max;
		p.rect(bar_left_x, bar_top_y, 
			(bar_right_x - bar_left_x) * percent_done, bar_height);
    };
	
	obj.key_pressed = function() {};

    return obj;
};
