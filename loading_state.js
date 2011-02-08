var loading_state = function (p) {

    // object to return
    var obj = game_state(p);

    // --- private variables ---

	var background_image = p.loadImage("images/screens/loadingsplash.png");

	var next_state = null;//splash_state(p);
	var bar_left_x = p.width * 31/80;
	var bar_right_x = p.width * 31/50;
	var bar_top_y = p.height * 55/100;
	var bar_height = p.height * 1/35;
	
	// loaded progress
	var load_progress = 0;
	var load_max = 0;//image_list.length;

	// MUST BE ABOVE INDICATE_LOADED
    obj.render = function() {
		//console.log("rendering loading state");
        p.background(g.background_color);

        if (background_image.loaded) {
            p.imageMode(p.CORNERS);
            p.image(background_image, 0, 0, p.width, p.height);
            
            p.fill(p.color(255, 0, 0));
            p.rectMode(p.CORNER);
            var percent_done = load_progress / load_max;
            p.rect(bar_left_x, bar_top_y, 
                (bar_right_x - bar_left_x) * percent_done, bar_height);
        }
    };
	
	// Call this function to indicate that something loaded
	var indicate_loaded = function() {
		load_progress += 1;
		//console.log("indicate loaded");
		//obj.render(); // Not getting called ??
	};
	
	
	// Call when loading is finished (sets next state);
    // warning: gets called multiple times so don't do anything that can't be repeated
	var loading_finished = function(){
        console.log("finished loading");
        next_state = splash_state(p);
		obj.set_next_state(next_state);
	};

	// Loading function, apply immediately
	var load_fun = function() {
		image_manager.preload_images();
        load_max += image_manager.num_images();
		
		// Load sounds, not taken into account in progress bar
		sounds.load_sounds();
	}();

    // --- public methods ---
    
    obj.get_type = function() {
        return "loading";
    };

    obj.update = function() {
        // for now just base progress on pending amount of images
        load_progress = image_manager.num_loaded();
        //console.log("images: "+image_manager.is_done_preloading());
        //console.log("sounds: "+sounds.sounds_loaded());
		if (load_progress === load_max && 
				image_manager.is_done_preloading() &&
				sounds.sounds_loaded()){
            // init all image objects
            image_manager.init_images(p);
            loading_finished();
		}
    };
	
    
	obj.get_all_buttons = function() {
		return [];
	};
	
	obj.key_pressed = function() {};

    return obj;
};
