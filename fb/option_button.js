// Have a rectangle representing their position and a state to go to when clicked
// spec:
//		rect 		: spec for a rectangle representing the button
//		click_fun 	: what to do when clicked
//		global_var 	: var that determines whether this option is enabled or not 

var option_button = function(p, spec) {
	
    // --- defaults ---
    //spec.rect.width = spec.width || 200;
    //spec.rect.height = spec.height || 60;

    // obj to return
    var obj = {};

    // --- private variables ---

    var but = button(p, spec);
	var rect = rectangle(p, spec.rect);
	// Left-edge x and top-edge y coordinates of 'checkbox' indicating whether
	// option is enabled
	var status_x = rect.get_left_x() + 28//50;
	var status_y = rect.get_top_y() + 30//37;
    var tick_size = 30;
    var tick_yes_image = image_manager.get_image("check1.png");
    var tick_no_image = image_manager.get_image("check0.png");

    // --- public methods --- 

	obj.draw = function() {
        //rect.draw();
        but.draw();

        p.imageMode(p.CENTER);
		if (g[spec.global_var]) {
			//p.fill(255, 255, 255);
			//p.ellipse(status_x, status_y, 10, 10);
            p.image(tick_yes_image, status_x, status_y, tick_size, tick_size);
		}
        else {
            p.image(tick_no_image, status_x, status_y, tick_size, tick_size);
        }
	};
	
	// Returns the state to go to if clicked, or
	// null if not clicked
	obj.click = function(x, y) {
        //but.is_clicked();
		if (rect.is_in(x, y)) {
			spec.click_fun();
		}
		// Redraw in case anything changes
		obj.draw();
	};	

    obj.is_clicked = function() { return null; };

    obj.mouse_moved = function(x, y) {
        but.mouse_moved(x, y);
    };
	
    return obj;
};
