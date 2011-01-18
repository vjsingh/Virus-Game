// --- inherits from game_object
// spec:
//  game_object spec
//  boolean is_top = true if its a top edge, otherwise false
// 

var background_edge = function(p, spec) {

	//var background_image = p.loadImage("images/background.jpg");
    //var background_image = p.loadImage("images/background1.png");
    var edge = spec.is_top ? 
        image_manager.get_image("background_topside.png") :
        image_manager.get_image("background_bottomside.png");

    // --- defaults ---

    spec.mode = p.CORNERS;
    spec.width = spec.width || edge.width;
    spec.height = spec.height || edge.height;

    // if bottom, height should have been set to bottom of screen
    // so we need to shift it up
    if (!spec.is_top) {
        spec.pos.add(new p.PVector(0, -spec.height));
    }

    // obj to return
    var obj = background_object(p, spec);


    // --- private variables ---

	
    // --- public methods --- 

    // override draw method only
    obj.draw = function() {
		p.imageMode(obj.get_mode());
        p.image(edge, obj.get_pos().x, obj.get_pos().y);
    };

    return obj;
};

