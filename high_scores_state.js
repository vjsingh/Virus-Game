var high_scores_state = function (p, prev_state) {

    // object to return
    var obj = game_state(p);
	obj.set_previous_state(prev_state);

    // --- private variables ---
	
	// Buttons

    var button_style = {
        text_size: 14,
        text_align: p.LEFT,
        text_x_offset: 25,
        width: 120,
        height: 50,
    };

	var quit_button = button(p, {
		state : function() { 
            // hide the div
            $("#scores-wrap").hide();
            $("#scores").tabs("destroy");
            return splash_state(p);
        },	
		rect : {
			pos : new p.PVector(550, 550),
			text: "Main Menu",
            //text_x_offset: -5,
            image: "quit.png",
            image_x_offset: -5,
            style: button_style
		}
	});
	
	//Not ordered
	var all_buttons = [ quit_button ];

    // --- public methods ---
    
    obj.get_type = function() {
        return "high_scores";
    };

    obj.update = function() {
    };

    obj.render = function() {
        p.noStroke();
        p.fill(0, 150);
        p.rect(0, 0, p.width, p.height);
    };

	obj.key_pressed = function(k) {
        /*
		if (k === 112 || p.keyCode == 13) { //p, enter
			obj.exit_state();
		}
        */
	};
	
	obj.get_all_buttons = function() {
		return all_buttons;
	};

    // init the scores immediately
    var init = (function() {
        // add a loading message to be removed on load
        $("#scores-wrap").prepend(
            "<div id='scores-loading' style='height:400; background: black; text-align:center;' ><div style='position:relative; top:50%; color:white;'>Loading high score data...</div></div>"
        );

        // show the div
        $("#scores-wrap").show();
        // update and render scores
        // TODO what if it fails?
        scores.do_scores();
    }());
	
    return obj;
};
