// *** game_object ***
// spec:
//  mode = p.CENTER or p.CORNERS (constants from processing)
//     - describes how the coords work, set by p.shapeMode()
//  p.PVector pos = initial position (x,y)
//  float width = width of the entire object
//  float height = height of the entire object
//  p.PVector vel = initial velocity
//  p.PVector accel = initial acceleration

var game_object = function (spec) {

    // private variables
    var mode = spec.mode;
    var pos = spec.pos;
    var width = spec.width;
    var height = spec.height;
    var vel = spec.vel;
    var accel = spec.accel;

    // object to return
    var obj = {};

    // all game_objects must implement this interface:
    // void update() - called each frame to move/update objects
    // void draw(Processing p) - called each frame to display the object
    //      - takes a Processing instance to draw to
    // boolean is_dead() - returns true if the object should be
    //                      removed from the game

    // update moves obj by default
    obj.update = function() { obj.move(); };
    
    // draw does nothing by default
    obj.draw = function(p) {};
    
    // is_dead returns false by default
    obj.is_dead = function() { return false; };

    // updates the position according to accel and vel
    obj.move = function() {
        vel.add(accel);
        pos.add(vel);
    }

    // stops the object in its tracks by zeroing out vel
    obj.stop = function() {
        vel = new p.PVector(0, 0);
    }

    // --- SETTERS --- 

    obj.set_accel = function(new_accel) {
        accel = new_accel;
    }

    obj.set_vel = function(new_vel) {
        vel = new_vel;
    }

    // --- GETTERS --- 

    obj.get_pos = function() {
        return pos;
    }

    obj.get_width = function() {
        return width;
    }

    obj.get_height = function() {
        return height;
    }

    obj.get_mode = function() {
        return mode;
    }

}
