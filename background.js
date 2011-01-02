// --- inherits from game_object
// spec:
//  game_object spec
// 

var background = function(p, spec) {


    // --- defaults ---

    spec.mode = p.CORNERS;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "background";
    };

    // --- private variables ---

	var background_image = p.loadImage("images/background.jpg");
	
    // --- public methods --- 

    // implementing game_object interface
    
    // update is default (move)

    // (flat rect for now)
    obj.draw = function() {	
		p.imageMode(obj.get_mode());
		//background_image.resize(p.width, p.height);
		p.image(background_image, 0, 0)
    };

    // background can't go off screen or die
    obj.is_dead = function() {
        return false;
    };
	obj.is_offscreen = function() {
		return false;
	}

    obj.get_scroll_dist = function() {
        return -.3;
    };

    return obj;
}

