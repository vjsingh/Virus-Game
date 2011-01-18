// *** floater ***
// --- inherits from game_object
// spec:
//  game_object spec
//  state = leave to be default "alive"

var floater = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 30;
    spec.height = spec.height || 50;
    spec.vel = new p.PVector(0, 0.3);

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "floater";
    };

    // --- private variables ---
    
	var macrophage_image = image_manager.get_image("macrophage_1.png");
	var macrophage_active = image_manager.get_image("macrophage_1_active.png");
	
    // how far up or down it can move
    var range = 50;
    var btm_lim = obj.get_pos().y + range;
    var top_lim = obj.get_pos().y - range;
    // state can be "alive", "activated", or "dead"
    var state = spec.state || "alive";

    // --- public methods --- 

    // implementing game_object interface
    
    obj.update = function() {
        // if we reach a limit
        var y = obj.get_pos().y;
        if (y <= top_lim || y >= btm_lim) {
            // turn around
            var v = obj.get_vel();
            obj.set_vel(new p.PVector(v.x, -v.y));
        }
        obj.move();
    };

    // (rectangle for now)
    obj.draw = function() {
		/*
        var pos = obj.get_pos();
        var w = obj.get_width();
        var h = obj.get_height();
        p.shapeMode(obj.mode);

        p.fill(obj.get_color());

        p.stroke(0);
        p.strokeWeight(1);

        // had to hack to center rect
        // might need to change
        p.rect(pos.x-w/2, pos.y-h/2, w, h);
        */
        var pos = obj.get_pos();
		p.imageMode(obj.get_mode());
		if (state === "active") {
			var w = obj.get_width();
			var h = obj.get_height();
			p.shapeMode(obj.mode);
			p.fill(obj.get_color());
			p.noStroke();
			p.ellipse(pos.x + w / 8, pos.y - w / 8 + 1, 15, 15);
			p.image(macrophage_active, pos.x, pos.y, w, h);
		}
		else {
			p.image(macrophage_image, pos.x, pos.y, obj.get_width(), obj.get_height());
		}
    };

    obj.is_dead = function() {
        return state === "dead";
    };

    obj.is_alive = function() {
        return state === "alive";
    };

    obj.is_activated = function() {
        return state === "active";
    };

    obj.get_state = function() {
        return state;
    };

    obj.activate = function() {
        state = "active";
    };

    return obj;
}
