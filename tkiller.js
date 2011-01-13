// *** tkiller ***
// --- inherits from seeker.js
// spec:
//  game_object spec +
//  speed = how fast the tkiller approaches the target
//  target = cell to move towards

var tkiller = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 50;
    spec.height = spec.height || 50;
    spec.speed = spec.speed || 1.5;

    // obj to return
    var obj = seeker(p, spec);

    obj.get_type = function() {
        return "tkiller";
    };

    // --- private variables ---

    var alive = true;
	/* @pjs preload="images/tcell2.png"; */
	var t_image = p.loadImage("images/tcell4.png");

	// Rect to fill in
	var rectx_offset = -(8/30)*obj.get_width();
	var recty_offset = -(7/30) * obj.get_height();
	var rect_width = (13 / 30) * obj.get_width();
	var rect_height = (17 / 30) * obj.get_height();
	 
	 
    // --- public methods --- 

    // implementing game_object interface
    
    // update makes tkiller chase target cell
    obj.my_update = function() {
        obj.move();
    }

    // should point towards target
    // (triangle for now)
    obj.draw = function() {
        var pos = obj.get_pos();
		/*
        p.pushMatrix();
         
        var w = obj.get_width();
        var h = obj.get_height();
        p.shapeMode(obj.mode);
       
        p.translate(pos.x, pos.y);
        p.rotate(obj.get_target_angle());

        p.fill(50);
        p.noStroke();

        // rightward triangle
        p.triangle(-w/2, -h/2, -w/2, h/2, w/2, 0);

        p.popMatrix();
        */
		p.pushMatrix();
		p.imageMode(obj.get_mode());
        p.translate(pos.x, pos.y);
		p.rotate(obj.get_target_angle() + p.PI / 2);
		p.fill(obj.get_color());
		p.noStroke();
		p.rect(rectx_offset, recty_offset, rect_width, rect_height);
		p.image(t_image, 0, 0, obj.get_width(), obj.get_height());
		p.popMatrix();
    };

    // is_dead just returns whether it isn't alive 
    obj.is_dead = function() {
        return !alive;
    };

    // which means we need a way to die
    obj.die = function() {
        alive = false;
    };

    return obj;
}
