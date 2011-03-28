// *** wall_cell ***
// --- inherits from game_object
// spec:
//  game_object spec

var wall_cell = function(p, spec) {
    
	var wall_image = image_manager.get_image("wallcell_1.png");

    // --- defaults ---

    // temporarily dividing by 2 cuz image is too big
    spec.width = spec.width || wall_image.width;///2 || 40;
    spec.height = spec.height || wall_image.height;///2 || 20;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "wall_cell";
    };

    // --- private variables ---
	
    var alive = true;

    // --- public methods --- 

    // implementing game_object interface
   
    // update is back to the default 
    obj.update = function() {
        obj.move();
    };

    // (rect for now)
    obj.draw = function() {
        var pos = obj.get_pos();
		/*
        p.shapeMode(obj.mode);

        p.fill(100);
        p.noStroke();

        var w = obj.get_width();
        var h = obj.get_height();
        p.rect(pos.x-w/2, pos.y-h/2, w, h);
        */
		p.imageMode(obj.get_mode());
		p.image(wall_image, pos.x, pos.y, obj.get_width(), obj.get_height());
    };

    obj.is_dead = function() {
        return !alive;
    };

    obj.die = function() {
        alive = false;
    };


    return obj;
}
