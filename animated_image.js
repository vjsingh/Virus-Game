// Manages an animated image. Assumes that while it is active,
// get_image is called once per game loop
// Defaults to starting immediately
// Unless you call loop, will only run through the images once
// spec:
//		All optional
// 		rate : the number of frames to display each image
//		reverse : whether to go backwards in the images when you reach the end or not

var animated_image = function(image_name, spec) {

    // obj to return
    var obj = [];

	// private vars
	
	var all_images = image_manager.get_images(image_name);
    all_images.sort(
        function(i1, i2) {
            return i1.path < i2.path;
        }
    );
    for_each(all_images, function(i) { console.log(i.path); });
	var curr_index = 0;
	var active = true;
	var loop = false;
	var rate_counter = 0; // Goes from 0 to anim_rate - 1
	var anim_rate = spec.anim_rate || 3
	
	// If we are reversing, add all the images in the opposite
	// order to all_images
	if (spec.reverse || false) {
		for (var i = (all_images.length - 1); i >=0; i--) {
			all_images.push(all_images[i]);
		}
	}
	
    //public methods

    obj.start = function() {
		active = true;
    }
	
	obj.pause = function() {
		active = false;
	}
	
	obj.loop = function() {
		loop = true;
	}
	
	obj.is_finished = function() {
		return (!loop || curr_index === (all_images.length - 1));
	}
	
	// Returns the current image
	obj.get_frame = function() {
		var curr_image = all_images[curr_index].image;
		update();
		return curr_image;
	}

	// private methods
	
	var update = function() {
		if (active) {
			if (rate_counter === (anim_rate - 1)) {
				next_frame();
				rate_counter = 0;
			}
			else {
				rate_counter++;
			}
		}
	}
	
	var next_frame = function() {
		// If not 'at the end and not looping', 
		// increment curr_index, restarting if we reach the end
		if (!(curr_index === all_images.length && !loop)) {
			curr_index = (curr_index + 1) % all_images.length;
		}
	}
	
    return obj;
}
