// *** wall_cell ***
// --- inherits from cell
// spec:
//  game_object spec

var wall_cell = function(p, spec) {
    
    // --- defaults ---
    // inherited from cell

    // obj to return
    var obj = cell(p, spec);

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

    // (circle for now)
    obj.draw = function() {
        var pos = obj.get_pos();
        p.shapeMode(obj.mode);

        p.fill(0);
        p.noStroke();

        p.ellipse(pos.x, pos.y,
                obj.get_width(), obj.get_height());
    };

    obj.is_dead = function() {
        return !alive;
    };

    obj.die = function() {
        alive = false;
    };

    return obj;
}
