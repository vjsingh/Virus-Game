// --- inherits from game_object
// spec:
//  game_object spec
// 

var background_object = function(p, spec) {

    var obj_image = random_from(
            image_manager.get_images("background")).image;


    // --- defaults ---

    spec.mode = spec.mode || p.CENTER;
    spec.width = spec.width || obj_image.width;
    spec.height = spec.height || obj_image.height;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "background_object";
    };

    // --- private variables ---
    
	
    // --- public methods --- 

    // implementing game_object interface
    
    // update is default (move)

    // (flat rect for now)
    obj.draw = function() {
		//var x_pos = obj.get_pos().x;
			
		//p.fill(p.color(49, 0, 0));
        //p.rect(x_pos, 0, obj.get_width() - x_pos, obj.get_height());
		//background_image.resize(p.width, p.height);
		//p.image(background_image, 0, 0);
		//console.log(obj.get_pos().x);
		p.imageMode(obj.get_mode());
        p.image(obj_image, obj.get_pos().x, obj.get_pos().y);
        //p.set(obj.get_pos().x, 0, background_image);
        //p.fill(255, 70);
        //p.noStroke();
        //p.rect(obj.get_pos().x, 0, obj.get_width(), obj.get_height());
    };

    // background can't go off screen or die
    obj.is_dead = function() {
        return false;
    };
    /*
	obj.is_offscreen = function() {
		return false;
	};
    */
    var count = 0;

    obj.scroll = function(scroll_factor) {
        count += 1;
        if (count === 1) {
            count = 0;
            obj.get_pos().add(new p.PVector(obj.get_scroll_dist()*p.round(scroll_factor), 0));
        }
    };

    obj.get_scroll_dist = function() {
        return -1;
    };

    return obj;
};

