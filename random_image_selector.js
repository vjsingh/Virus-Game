// Add images to it, then call get_image() and it returns a random image

var random_image_selector = function(p) {
    
    // --- defaults ---

    // obj to return
    var obj = {};

    // --- private variables ---

	var images = [];

    // --- public methods --- 

	obj.add = function(i) {
		images.push(i);
	}
	
	obj.get_image = function() {
		return images[Math.floor(Math.random()*(images.length))];
	}

    return obj;
}
