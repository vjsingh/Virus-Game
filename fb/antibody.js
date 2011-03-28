// --- inherits from seeker.js
// spec:
//  game_object spec +
//  speed = how fast the tkiller approaches the target
//  target = cell to move towards

var antibody = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 11;
    spec.height = spec.height || 7;
	spec.speed = spec.speed || 4;
	spec.no_target_speed = spec.no_target_speed || 2
	
	//spec.vel = random_vel();										
    // obj to return
    var obj = seeker(p, spec);

    obj.get_type = function() {
        return "antibody";
    };

    // --- private variables ---

    // flag denoting whether the antibody is attached to a cell
    var attached = false;

    // --- public methods --- 

    // should be called when an antibody attaches to a cell
    // tar will be the cell that it is attaching to (may not be its target)
    obj.attach = function(tar) {
        attached = true;
        obj.face_target(tar);
        // scoot it out just a bit
        obj.get_vel().mult(-1);
        obj.move();

        //obj.set_target(null);
    };

    // implementing game_object interface
    
    obj.my_update = function() {
        if (!attached) {
            obj.set_speed(obj.get_level() / 4 + 1)
            obj.move();
            // don't want two antibodies attacking one cell
            var tar = obj.get_target();
            if (tar && (tar.has_antibody()
                     // also don't want them to keep target
                     // if the target changes level
                    || tar.get_level() !== obj.get_level()
                    // or if it starts to die
                    || tar.get_state() === "dying")) {
                obj.set_target(null);
            }
        }
    };

    // should point towards target
    // Y-shaped (top of Y is front)
    obj.draw = function() {
        p.pushMatrix();
         
        var pos = obj.get_pos();
        var w = obj.get_width();
        var h = obj.get_height();
        p.shapeMode(obj.mode);
       
        p.translate(pos.x, pos.y);
        p.rotate(obj.get_target_angle());

        p.stroke(obj.get_color());
        p.strokeWeight(2);

        p.line(-w, 0, w/3, 0);
        p.line(w/3, 0, w, h/2);
        p.line(w/3, 0, w, -h/2);

        p.popMatrix();
    };

    return obj;
}
