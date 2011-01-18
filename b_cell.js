// --- inherits from seeker.js
// spec:
//  game_object spec +
//  speed = how fast the tkiller approaches the target
//  target = cell to move towards
//  state = just leave to be default (alive)

var b_cell = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 30;
    spec.height = spec.height || 30;
    spec.speed = spec.speed || 5;

    // obj to return
    var obj = seeker(p, spec);

    obj.get_type = function() {
        return "b_cell";
    };

    // --- private variables ---

	var b_image = image_manager.get_image("bcell_normal.png");

    // state can be "alive", "active", "shooting", "outdated"
	
	// Antibodies are created in update, and returned in get_antibodies()
	var new_antibodies = null;

	// --- private methods
	
	// Makes one antibody and adds it to new_antibodies
	var make_antibody = function() {
		if (!new_antibodies) {
			new_antibodies = [];
		}
		var obj_pos = obj.get_pos();
		new_antibodies.push(antibody(p, {
			pos : new p.PVector(obj_pos.x, obj_pos.y + (obj.get_height() / 2)),
            mutation_info: obj.get_mutation_info()
		}));
	};


    // --- public methods --- 

	// Makes this target stop and begin producing antibodies
    obj.make_antibodies = function() {
        obj.set_state("shooting");
        obj.set_target(null);
        // production will happen in update
    };
	
    // to be called on collision with floater
    obj.activate = function() {
        obj.set_state("active");
        // send the bcell to the top
        obj.set_target(game_object(p, {
            pos: new p.PVector(p.width - (obj.get_width() / 2), 0)
        })); 
    };
	
	// Returns any newly created antibodies
	obj.get_antibodies = function() {
		if (new_antibodies) {
			var to_return = new_antibodies;
			new_antibodies = null;
			return to_return;
		}
		else {
			return [];
		}
	};
	
    obj.is_activated = function() {
        return obj.get_state() === "active";
    };

    obj.is_alive = function() {
        return obj.get_state() === "alive";
    };

    obj.get_scroll_dist = function() {
		var state = obj.get_state();
        if (state === "shooting"
                || state === "alive"
                || state === "active" ) {
			return 0;
		}
		else if (state === "outdated") {
			return obj.DEFAULT_SCROLL_DIST * 2;
		}
		else {
			return obj.DEFAULT_SCROLL_DIST;
		}
    };

    // implementing game_object interface
    
    obj.my_update = function() {
        if (obj.get_state() === "shooting") {
            //obj.stop();
            // make it face downwards
            obj.set_target_angle(p.PI/2);
			if (Math.random() < .019) {
				make_antibody();
			}
        }
        else {
            obj.move();
        }
    }

    // should point towards target
    // (triangle for now)
    obj.draw = function() {
		/*
        p.pushMatrix();
         
        var pos = obj.get_pos();
        var w = obj.get_width();
        var h = obj.get_height();
        p.shapeMode(obj.mode);
       
        p.translate(pos.x, pos.y);
        p.rotate(obj.get_target_angle());

        p.fill(obj.get_color());
		// If outdated, draw differently?
		if (obj.get_state() === "outdated") {
			p.fill(0);
		}
        p.noStroke();

        // rightward triangle
        p.triangle(-w/2, -h/2, -w/2, h/2, w/2, 0);

        p.fill(255);
        p.ellipse(-w/4, 0, 10, 10);

        p.popMatrix();
		*/
		
		p.pushMatrix();

		var pos = obj.get_pos();

        p.translate(pos.x, pos.y);
		p.rotate(obj.get_target_angle() + p.PI / 2);
		p.fill(obj.get_color());
		p.noStroke();
		//p.rect(rectx_offset, recty_offset, rect_width, rect_height);
		p.imageMode(obj.get_mode());
		p.image(b_image, 0, 0, obj.get_width(), obj.get_height());

		p.popMatrix();
    };

    return obj;
}
