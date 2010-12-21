// *** game_object ***
// spec:
//  mode = p.CENTER or p.CORNERS (constants from processing)
//     - describes how the coords work, set by p.shapeMode()
//  p.PVector pos = initial position (x,y)
//  float width = width of the entire object
//  float height = height of the entire object
//  p.PVector vel = initial velocity
//  p.PVector accel = initial acceleration

var game_object = function (p, spec) {

    // object to return
    var obj = {};

    // should be overridden by subtypes
    obj.get_type = function() {
        return "game_object";
    };

    // --- private variables ---

    var mode = spec.mode || p.CENTER;
    var pos = spec.pos || new p.PVector(0, 0);
    var width = spec.width || 0;
    var height = spec.height || 0;
    var vel = spec.vel || new p.PVector(0, 0);
    var accel = spec.accel || new p.PVector(0, 0);

    // --- public methods ---

    // all game_objects must implement this interface:
    // void update() - called each frame to move/update objects
    // void draw() - called each frame to display the object
    // boolean is_dead() - returns true if the object should be
    //                      removed from the game

    // update moves obj by default
    obj.update = function() { obj.move(); };
    
    // draw does nothing by default
    obj.draw = function() {};
    
    // is_dead returns false by default
    obj.is_dead = function() { return false; };

    // returns true if the object is completely offscreen
    // i.e. checks pos + dimensions
    obj.is_offscreen = function() {
        var left_edge = pos.x - width;
        var right_edge = pos.x + width;
        var top_edge = pos.y - height;
        var btm_edge = pos.y + height;

        return (left_edge > p.width
            || right_edge < 0
            || top_edge > p.height
            || btm_edge < 0);
    }

    // updates the position according to accel and vel
    obj.move = function() {
        vel.add(accel);
        pos.add(vel);
    };

    // stops the object in its tracks by zeroing out vel
    obj.stop = function() {
        vel = new p.PVector(0, 0);
    };

    // --- setters --- 

    obj.set_accel = function(new_accel) {
        accel = new_accel;
    };

    obj.set_vel = function(new_vel) {
        vel = new_vel;
    };

    // --- getters --- 

    obj.get_pos = function() {
        return pos;
    };

    obj.get_width = function() {
        return width;
    };

    obj.get_height = function() {
        return height;
    };

    obj.get_mode = function() {
        return mode;
    };

    obj.get_vel = function() {
        return vel;
    };

    obj.get_accel = function() {
        return accel;
    };

    return obj;
}
