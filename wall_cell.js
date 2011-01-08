// *** wall_cell ***
// --- inherits from game_object
// spec:
//  game_object spec

var wall_cell = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 40;
    spec.height = spec.height || 20;

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "wall_cell";
    };

    // --- private variables ---

    var alive = true;

    // --- public methods --- 

    // implementing game_object interface
   
    // update is back to the default 
    obj.update = function() {
        obj.move();
    };

    // (rect for now)
    obj.draw = function() {
        var pos = obj.get_pos();
        p.shapeMode(obj.mode);

        p.fill(100);
        p.noStroke();

        var w = obj.get_width();
        var h = obj.get_height();
        p.rect(pos.x-w/2, pos.y-h/2, w, h);
    };

    obj.is_dead = function() {
        return !alive;
    };

    obj.die = function() {
        alive = false;
    };


    return obj;
}
