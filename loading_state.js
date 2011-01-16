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
	
    // filter out non-images
    var image_types = ["png", "jpg", "gif"];
    image_list = image_list.filter(function(name) {
            return member(image_types, name.substring(name.lastIndexOf('.')+1));
    });

	// loaded progress
	var load_progress = 0;
	var load_max = image_list.length;

	// MUST BE ABOVE INDICATE_LOADED
    obj.render = function() {
		//console.log("rendering loading state");
        p.background(g.background_color);

        if (background_image.loaded) {
            p.imageMode(p.CORNERS);
            p.image(background_image, 0, 0, p.width, p.height);
            
            p.fill(p.color(255, 0, 0));
            p.shapeMode(p.CORNERS);
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
		obj.set_next_state(next_state);
	};

    var preload_images = function() {
        for_each(
            image_list,
            function(name) {
                sketch.imageCache.add(name);
                console.log("loading "+name);
            }    
        );
    };

    var all_images_loaded = function() {
        return !sketch.imageCache.pending;
    };

	// Loading function, apply immediately
	var load_fun = function() {
		preload_images();
	}();

    // --- public methods ---
    
    obj.get_type = function() {
        return "loading";
    };

    obj.update = function() {
        // for now just base progress on pending amount of images
        load_progress = load_max - sketch.imageCache.pending;
		if (load_progress === load_max && all_images_loaded()){
			// Give them a second to see that its loaded
			setTimeout(loading_finished, 500);
		}
    };
	
    
	obj.get_all_buttons = function() {
		return [];
	};
	
	obj.key_pressed = function() {};

    return obj;
};
