// Global settings
// Have to be wrapped in an object since primitives are pass-by-value
var game_settings = function() {
    var settings = {
        sound_fx : true,
        music : true,
        track: "no track",
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
    // note that this only toggles the flag, not the actual music
    // that should be done with a sound manager method
    settings.toggle_music = function() { 
        toggle("music"); 
        //console.log(settings.music);
    };

    settings.next_track = function() {
        var t = sounds.next_track();
        settings.track = t;
    };
    
    settings.prev_track = function() {
        var t = sounds.prev_track();
        settings.track = t;
    };

    settings.set_track = function(t) {
        settings.track = t;
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
