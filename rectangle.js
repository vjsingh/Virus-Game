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
//		text_align : alignment of text (default to p.CENTER)
//		text_x_offset : offset for the text x coordinate
//		text_y_offset : offset for the text y coordinate
//		image_x_offset: offset for the image
//		rect_color : color of rectangle (defaults to white)
// 		image 		: string location of image to display instead of a rectangle
// 		style : object that can specify text_color, text_size, rect_color, width, height, text_align, text_x_offset

var rectangle = function (p, spec) {

    // object to return
    var obj = {};
    
    // default to catch errors
    if (!spec.style) { spec.style = {}; }

    // --- private variables ---

    var pos = spec.pos;
    var width = spec.style.width || spec.width, half_width = width / 2;
    var height = spec.style.height || spec.height, half_height = height / 2;
	var leftx = pos.x - half_width, rightx = pos.x + half_width;
	var topy = pos.y - half_height, bottomy = pos.y + half_height;
	var text = spec.text || "";
	var text_color = spec.style.text_color || spec.text_color || 0;
	var text_size = spec.style.text_size || spec.text_size || 14;
	var text_x_offset = spec.style.text_x_offset || spec.text_x_offset || 0;
	var text_y_offset = spec.style.text_y_offset || spec.text_y_offset || 0;
    var text_align = spec.style.text_align || spec.text_align || p.CENTER;
	var rect_color = spec.style.rect_color || spec.rect_color || 255;
	var rect_image;
	if (spec.image) {
		rect_image = image_manager.get_image(spec.image);// p.loadImage(spec.image);
	}
    spec.image_x_offset = spec.image_x_offset || 0;
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
			//rect_image.resize(width, height);
			p.image(rect_image, 
                    pos.x+spec.image_x_offset, pos.y,
                    width, height);
		}
		else {
			p.rectMode(p.CORNER);
			
			p.fill(rect_color);
			p.noStroke();
            // for debugging
            //p.stroke(255);
			
			p.rect(leftx, topy, width, height);
		}
		
		p.fill(text_color);
        p.textAlign(text_align, p.CENTER);
        var text_x = pos.x;
        // draw left aligned text to the left, not centered
        if (text_align === p.LEFT) {
            text_x = pos.x - half_width + 10; 
        }
		p.textSize(text_size);
        p.text(text, text_x+text_x_offset, pos.y+text_y_offset);
	};
	
	obj.update_text = function(t) {
		text = t;
	};
	
	// Getters
	obj.get_left_x = function() {
		return leftx;
	};
	obj.get_top_y = function() {
		return topy;
	};
	
	
    return obj;
};
