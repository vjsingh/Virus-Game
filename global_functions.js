// ** Global Constants
//DEFAULT_SCROLL_DIST = -0.8;

// Global settings
// Have to be wrapped in an object since primitives are pass-by-value
var g_game_settings = {
	sound_fx : true,
	music : true,
	click_to_fire : true,
	mouse_to_select : true,
	spacebar_to_fire : true,
    background_color : 0xFF371010
}
// abbreviate it
var g = g_game_settings;

var g_toggle_sound_fx = function() {g_toggle("sound_fx");};
var g_toggle_music = function() {
    g_toggle("music");
    if (g.music) {
        play_background_music();
        console.log("starting music");
    }
    else {
        console.log("stopping music");
        stop_background_music();
    }
};
var g_toggle_click_to_fire = function() {g_toggle("click_to_fire");};
var g_toggle_spacebar_to_fire = function() {g_toggle("spacebar_to_fire");};
var g_toggle_mouse_to_select = function() {g_toggle("mouse_to_select");};

var g_toggle = function(global_var) {
	g_game_settings[global_var] = !g_game_settings[global_var];
}

//getters
var g_sound_fx_on = function() {
	return g_game_settings.sound_fx;
}
var g_music_on = function() {
	return g_game_settings.music;
}
var g_click_to_fire = function() {
	return g_game_settings.click_to_fire;
}
var g_mouse_to_select = function() {
	return g_game_settings.mouse_to_select;
}
var g_spacebar_to_fire = function() {
	return g_game_settings.spacebar_to_fire;
}

// *** global_functions ***
// Holds functions used in the whole project

//Have to catch it so fuck it
/*
function AssertException(message) { this.message = message};
function assert(exp, message) {
	if (!exp) {
		throw new AssertException(message);
	}
}
*/

var assert = function(exp, message) {
	if (!exp) {
		console.error("Assert error!: " + message);
	}
};

//Does something to every element of an arr
var for_each = function(arr, fun) {
	for (var i = 0; i < arr.length; i++) {
		fun(arr[i]);
	}
};

// returns the index+1 of an element in a list,
// otherwise false
// can't return just the index because 0 is false in js
var member = function(arr, elt) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === elt) {
            return i+1;
        }
    }
    return false;
};

// removes the first instance of elt from the array
var remove_elt = function(arr, elt) {
    remove_index(arr, arr.indexOf(elt));
};

// removes the element at index i from the array and returns it
var remove_index = function(arr, i) {
    return arr.splice(i, 1)[0];
};

// returns a random element from an array
var random_from = function(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
};

// to be used with objects within objects
// returns a nested property if there is one
// otherwise undefined
var retrieve = function(obj, key1, key2) {
    return obj[key1] ? obj[key1][key2] : undefined;
};

// returns an array of the property names (keys)
// of an object
var keys = function(obj) {
    var k = [];
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            k.push(key);
        }
    }
    return k;
};

// This function formats numbers by adding commas
// taken from http://www.mredkj.com/javascript/nfbasic.html
var add_commas = function (nStr,prefix){
    var prefix = prefix || '';
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return prefix + x1 + x2;
};


// TAKE OUT
on_server = false; 
