// --- inherits from game_object
// spec:
//  game_object spec

var multiplier = function(p, spec) {
	console.log("Creating multiplier");
    // --- defaults ---

    spec.width = spec.width || 5;
    spec.height = spec.height || 5;
    spec.vel = new p.PVector(Math.random(), Math.random());

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "multiplier";
    };

    // --- private variables ---
    
	var alive = true;
	
    // --- public methods --- 

    // implementing game_object interface
    
    obj.update = function() {
		obj.bounce();
        obj.move();
    };

    // (rectangle for now)
    obj.draw = function() {
        var pos = obj.get_pos();
        var w = obj.get_width();
        var h = obj.get_height();
        p.shapeMode(obj.mode);

        p.fill(0, 255, 0);

        p.ellipse(pos.x, pos.y,
                obj.get_width(), obj.get_height());
    };
	
	obj.die = function() {
		alive = false;
	}

    obj.is_dead = function() {
        return (!alive);
    };

    return obj;
};
