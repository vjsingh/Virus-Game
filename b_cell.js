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

	var b_image = animated_image("bcell", {reverse : true});//image_manager.get_image("bcell_normal.png");
    // where to go and shoot from
    var slot = null;

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
	    var new_antibody = antibody(p, {
			pos : new p.PVector(obj_pos.x, obj_pos.y + (obj.get_height() / 2)),
            mutation_info: obj.get_mutation_info()
		});
        new_antibodies.push(new_antibody);
        return new_antibody;
	};


    // --- public methods --- 

	// Makes this target stop and begin producing antibodies
    obj.make_antibodies = function() {
        obj.set_state("shooting");
        obj.set_target(null);
        // production will happen in update
    };
	
    // to be called on collision with floater
    // takes a slot pos 
    obj.activate = function(aslot) {
        obj.set_state("active");
        slot = aslot;
        // send the bcell to the top
        obj.set_target(game_object(p, {
            pos: slot.pos //new p.PVector(p.width - (obj.get_width() / 2), 0)
        })); 
    };

    obj.get_slot = function() {
        return slot;
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

    obj.is_shooting = function() {
        return obj.get_state() === "shooting";
    };

    obj.get_scroll_dist = function() {
		var state = obj.get_state();
        if (state === "shooting"
                //|| state === "alive"
                || state === "active" ) {
			return 0;
		}
		else if (state === "outdated") {
			return obj.DEFAULT_SCROLL_DIST;// * 2;
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
            var angle = p.PI/2
            // switch if at bottom
            if (!slot.is_top) {
                angle = -p.PI/2;
            }
            obj.set_target_angle(angle);
			if (Math.random() < .03) {
				var new_anti = make_antibody();
                new_anti.set_target_angle(p.random(0, 2*angle));
			}
        }
        else {
            obj.move();
        }
    };
	
	var draw_antibody = function() {
		// private vars
		var counter = 0;
		var c_max = 30;
		var ascending = true;

        // for illustrations
        obj.set_anti_count = function(c) {
            counter = c;
        };
		
		return function(){
		
			p.pushMatrix();
			
			var pos = obj.get_pos();
			
			p.translate(pos.x, pos.y);
			p.rotate(obj.get_target_angle());
			
			// Copied from antibody.js to avoid overhead of
			// creating new antibody every time
			p.stroke(obj.get_color());
			p.strokeWeight(1 + (counter / 6));
			
			var w = 11;
			var h = 7;
			p.line(-w, 0, w / 3, 0);
			p.line(w / 3, 0, w, h / 2);
			p.line(w / 3, 0, w, -h / 2);
			
			p.popMatrix();
			
			if (ascending === true) {
				counter++;
			}
			else if (ascending === false) {
				counter--;
			}
			if (counter === c_max) {
				ascending = false;
			}
			else if (counter === 0) {
				ascending = true;
			}
		};
	}();

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
		p.image(b_image.get_frame(), 0, 0, obj.get_width(), obj.get_height());

		p.popMatrix();
		
		var state = obj.get_state();
		if (state === "active" || state === "shooting") {
			draw_antibody();
		}
    };

    return obj;
}
