// *** floater ***
// --- inherits from game_object
// spec:
//  game_object spec
//  state = leave to be default "alive"

var floater = function(p, spec) {
    
    // --- defaults ---

    spec.width = spec.width || 30;
    spec.height = spec.height || 50;
    spec.vel = new p.PVector(0, 0.1);

    // obj to return
    var obj = game_object(p, spec);

    obj.get_type = function() {
        return "floater";
    };

    // --- private variables ---
    
    // how far up or down it can move
    var range = 40;
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
