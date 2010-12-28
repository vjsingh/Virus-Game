// --- inherits from seeker.js
// spec:
//  game_object spec +
//  speed = how fast the tkiller approaches the target
//  target = cell to move towards

var b_cell = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 30;
    spec.height = spec.height || 30;

    // obj to return
    var obj = seeker(p, spec);

    obj.get_type = function() {
        return "b_cell";
    };

    // --- private variables ---

    var alive = true;

    // --- public methods --- 

    // implementing game_object interface
    
    obj.my_update = function() {
        obj.move();
    }

    // should point towards target
    // (triangle for now)
    obj.draw = function() {
        p.pushMatrix();
         
        var pos = obj.get_pos();
        var w = obj.get_width();
        var h = obj.get_height();
        p.shapeMode(obj.mode);
       
        p.translate(pos.x, pos.y);
        p.rotate(obj.get_target_angle());

        p.fill(0);
        p.noStroke();

        // rightward triangle
        p.triangle(-w/2, -h/2, -w/2, h/2, w/2, 0);

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
