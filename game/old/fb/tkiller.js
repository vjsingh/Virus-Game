// *** tkiller ***
// --- inherits from seeker.js
// spec:
//  game_object spec +
//  speed = how fast the tkiller approaches the target
//  target = cell to move towards

var tkiller = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 35;
    spec.height = spec.height || 35;
    spec.speed = spec.speed || 1.5;

    // obj to return
    var obj = seeker(p, spec);

    obj.get_type = function() {
        return "tkiller";
    };

    // --- private variables ---

    var alive = true;
	/* @pjs preload="images/tcell2.png"; */
	var t_image = image_manager.get_image("tcell_2.png");

	// Rect to fill in
	var rectx_offset = -(8/30)*obj.get_width();
	var recty_offset = -(7/30) * obj.get_height();
	var rect_width = (13 / 30) * obj.get_width();
	var rect_height = (17 / 30) * obj.get_height();
	 
	 
    var t_anim = animated_image("t_animation", {anim_rate : 6});
    var t_image;
    t_anim.start();
    t_anim.loop();

    // --- public methods --- 

    // implementing game_object interface
    
    // update makes tkiller chase target cell
    obj.my_update = function() {
        obj.move();
        obj.set_speed(obj.get_level()/2 + 1);
    };

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
        p.rectMode(p.CORNER);
		p.rect(rectx_offset, recty_offset, rect_width, rect_height);
		//p.image(t_image, 0, 0, obj.get_width(), obj.get_height());
        if (obj.get_target() === null) {
            t_anim.set_rate(6);
        }
        else {
            t_anim.set_rate(3);
        }
        t_image = t_anim.get_frame();

        if (obj.is_illustration()) {
            t_image = image_manager.get_image("tcell_2.png");
            // to make it less transparent draw twice
            p.image(t_image, 0, 0,
                    obj.get_width(), obj.get_height());
        }

        p.image(t_image, 0, 0,
                    obj.get_width(), obj.get_height());
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

    obj.stop_animation = function() {
        t_anim.pause();
    };

    obj.resume_animation = function() {
        t_anim.start();
    };

    return obj;
}
