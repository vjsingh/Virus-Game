// Global settings
// Have to be wrapped in an object since primitives are pass-by-value
var game_settings = function() {
    var settings = {
        sound_fx : true,
        music : true,
        click_to_fire : true,
        mouse_to_select : false,
        spacebar_to_fire : true,
        background_color : 0xFF371010
    };

    var toggle = function(name) {
        settings[name] = !settings[name];
    };

    settings.toggle_sound_fx = function() { toggle("sound_fx"); };
    settings.toggle_click_to_fire = function() { toggle("click_to_fire"); };
    settings.toggle_spacebar_to_fire = function() { toggle("spacebar_to_fire"); };
    settings.toggle_mouse_to_select = function() { toggle("mouse_to_select"); };
    // TODO make this not start playing music on splash screen
    settings.toggle_music = function() {
        toggle("music");
        if (g.music) {
            play_background_music();
            console.log("starting music");
        }
        else {
            console.log("stopping music");
            stop_background_music();
        }
    };

    return settings;
};
// abbreviate it
var g = game_settings();


//getters
/*
var g_sound_fx_on = function() {
	return g_game_settings.sound_fx;
}
var g_music_on = function() {
	return g_game_settings.music;
}
var g_click_to_fire = function() {
	return g_game_settings.click_to_fire;
}
*/
