// *** rectangle ***
// A rectangle with 4 corners
// Can tell you if a point is inside it
// spec:
//  p.PVector pos = 'middle' x and y
//  width
//  height
//  optional:
//  	text : text to display
// 		text_color : color of text (defaults to black);
//		text_size : size of text (default to processings default)
//		rect_color : color of rectangle (defaults to white)
// 		image 		: string location of image to display instead of a rectangle

var rectangle = function (p, spec) {

    // object to return
    var obj = {};

    // --- private variables ---

    var pos = spec.pos;
    var width = spec.width, half_width = width / 2;
    var height = spec.height, half_height = height / 2;
	var leftx = pos.x - half_width, rightx = pos.x + half_width;
	var topy = pos.y - half_height, bottomy = pos.y + half_height;
	var text = spec.text || "";
	var text_color = spec.text_color || 0;
	var text_size = spec.text_size || 12;
	var rect_color = spec.rect_color || 255;
	var rect_image;
	if (spec.image) {
		rect_image = p.loadImage(spec.image);
	}
	var rect_mode = p.CENTER;

    // --- public methods ---

	obj.is_in = function(x, y) {
		return (x >= leftx && x <= rightx &&
					y >= topy && y <= bottomy);
	};
	
	obj.draw = function() {
		//console.log("drawing");
		if (rect_image) {
			p.imageMode(rect_mode);
			rect_image.resize(width, height);
			p.image(rect_image, pos.x, pos.y);//, width, height);
		}
		else {
			p.shapeMode(rect_mode);
			
			p.fill(rect_color);
			p.noStroke();
			
			p.rect(leftx, topy, width, height);
		}
		
		p.fill(text_color);
        p.textAlign(p.CENTER, p.CENTER);
		p.textSize(text_size);
        p.text(text, pos.x, pos.y);
	};
	
	obj.update_text = function(t) {
		text = t;
	}
	
	// Getters
	obj.get_left_x = function() {
		return leftx;
	}
	obj.get_top_y = function() {
		return topy;
	}
	
	
    return obj;
};
