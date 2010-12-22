// *** rectangle ***
// A rectangle with 4 corners
// Can tell you if a point is inside it
// spec:
//  p.PVector pos = top-left coord (x,y)
//  width
//  height

var rectangle = function (p, spec) {

    // object to return
    var obj = {};

    // --- private variables ---

    var pos = spec.pos
    var width = spec.width;
    var height = spec.height;
	var leftx = pos.x, rightx = pos.x + width;
	var topy = pos.y, bottomy = pos.y + height;

    // --- public methods ---

	obj.is_in = function(x, y) {
		return (x >= leftx && x <= rightx &&
					y <= topy && y >= bottomy);
	}
	
    return obj;
}
