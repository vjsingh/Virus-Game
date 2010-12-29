// *** rectangle ***
// A rectangle with 4 corners
// Can tell you if a point is inside it
// spec:
//  p.PVector pos = 'middle' x and y
//  width
//  height
//  optionally: text : text to display

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

    // --- public methods ---

	obj.is_in = function(x, y) {
		return (x >= leftx && x <= rightx &&
					y >= topy && y <= bottomy);
	};
	
	obj.draw = function() {
        p.shapeMode(obj.mode);

        p.fill(0);
        p.noStroke();

		p.rect(leftx, topy, width, height);
		
		p.fill(255)
        p.textAlign(p.CENTER);
        p.text(text, pos.x, pos.y);
	};
	
	obj.update_text = function(t) {
		text = t;
	}
	
	
    return obj;
};
