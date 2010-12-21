// *** tkiller ***
// --- inherits from game_object
// spec:
//  game_object spec +
//  speed = how fast the tkiller approaches the target
//  target = cell to move towards

var tkiller = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 30;
    spec.height = spec.height || 30;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "tkiller";
    };

    // --- private variables ---

    var speed = spec.speed || 0.2;
    var alive = true;
    var target = spec.target || null;
    var target_angle = p.PI;

    // --- public methods --- 

    // implementing game_object interface
    
    // update makes tkiller chase target cell
    obj.update = function() {
        var pos = obj.get_pos();
        var tpos;

        // if no target
        if (target === null) {
            // meander
            if (p.int(p.random(150)) === 0) {
                target_angle += p.random(-p.PI/16, p.PI/16);
            }
            // laze
            speed = 0.02;
        }
        else {
            tpos = target.get_pos();

            // update target_angle
            target_angle = p.atan2(tpos.y-pos.y,
                    tpos.x-pos.x); // y first!
                
            // when we get there, stop
            if (pos.dist(tpos) < target.get_width()/2) {
                target = null;
            }
        }

        // change velocity to point towards target
        obj.set_vel(new p.PVector(speed*p.cos(target_angle),
                speed*p.sin(target_angle)));


        obj.move();
    }

    // should point towards target
    // (triangle for now)
    obj.draw = function() {
        p.pushMatrix();
         
        var pos = obj.get_pos();
        p.shapeMode(obj.mode);
       
        p.translate(pos.x, pos.y);
        p.rotate(target_angle);

        p.fill(50);
        p.noStroke();

        var w = obj.get_width();
        var h = obj.get_height();
        
        // rightward triangle
        p.triangle(0, -w/2, 0, w/2, h, 0);

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

    // target should be the active cell
    obj.set_target = function(new_target) {
        target = new_target;
    }

    return obj;
}
