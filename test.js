// all the processing code goes in the function
// which gets passed in a processing instance p
var pCode = function(p) {

    var p1, p2, p3;

    // built in functions are attributes of the processing instance
    p.setup = function() {
        p.size(500, 500);

        // the constructor for the PVector class is also an attribute of p
        // (it's useful to glance at the processing.js code for stuff like this)
        var v = new p.PVector();
        //alert(v === null); // should be false

        // though we can put js in java code, we can't put java in js
        // PVector v2 = new PVector(); // doesn't work


        // make some test particles
        p1 = particle(p, {
            pos: new p.PVector(100, 100),
            vel: new p.PVector(.2, .2)
        });

        p2 = particle(p, {
            pos: new p.PVector(300, 100),
            vel: new p.PVector(-.2, .2)
        });

        p3 = particle(p, {
            pos: new p.PVector(100, 300),
            vel: new p.PVector(.2, -.2)
        });

    };

    // draw is called repeatedly
    p.draw = function() {
        p.background(200);
        p.fill(0);
        p.text("testing", p.width/2, p.height/2);

        p1.update();
        p1.draw();

        p2.update();
        p2.draw();

        p3.update();
        p3.draw();
    };
}


// attaches the processing code to the canvas
// note that we need to do this AFTER the canvas element is created
var canvas = document.getElementById("test_canvas");
var pInstance = new Processing(canvas, pCode);
