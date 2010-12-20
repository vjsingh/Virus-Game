// *** particle ***
// --- inherits from game_object
// spec:
//  game_object spec

var particle = function(spec) {
    
    // --- defaults ---

    spec.width = spec.width || 10;
    spec.height = spec.height || 10;

    // obj to return
    var obj = game_object(spec);

    // --- private variables ---

    var alive = true;

    // --- public methods --- 

    // implementing game_object interface
    
    // update is default (move)

    // draw makes a small virus particle
    // (circle for now)
    var obj.draw = function(p) {
        var pos = obj.get_pos();
        p.ellipse(pos.x, pos.y, obj.get_width(), obj.get_height());
    }

    // is_dead just returns whether it isn't alive 
    var obj.is_dead = function() {
        return !alive;
    }

    // which means we need a way to die
    var obj.die = function() {
        alive = false;
    }

}
