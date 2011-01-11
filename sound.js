// Taken from http://www.storiesinflight.com/html5/audio.html
var play_sound = (function() {
	var channel_max = 10;										// number of channels
	audiochannels = new Array();
	for (a=0;a<channel_max;a++) {									// prepare the channels
		audiochannels[a] = new Array();
		audiochannels[a]['channel'] = new Audio();						// create a new audio object
		audiochannels[a]['finished'] = -1;							// expected end time for this channel
	}
	var to_return = function(s){
		for (a = 0; a < audiochannels.length; a++) {
			thistime = new Date();
			if (audiochannels[a]['finished'] < thistime.getTime()) { // is this channel finished?
				audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration * 1000 + 50; // + 50 for a safety margin
				// Audio is encoded as base64
				
				// SO IT WILL WORK LOCALLY
				// TODO: take out
				if (on_server) {
					audiochannels[a]['channel'].src = g_soundDataMap[s]; //document.getElementById(s).src;
					audiochannels[a]['channel'].load();
					audiochannels[a]['channel'].play();
				}
				break;
			}
		}
	}
	return to_return;
}());

var background_music = new Audio();
var play_background_music = function(s) {
	stop_background_music();
	background_music.src = document.getElementById(s).src;
	background_music.load();
	background_music.play();
}
var stop_background_music = function() {
	background_music.pause();
}

