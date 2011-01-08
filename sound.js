// Taken from
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
				audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration * 1000;
				audiochannels[a]['channel'].src = document.getElementById(s).src;
				audiochannels[a]['channel'].load();
				audiochannels[a]['channel'].play();
				break;
			}
		}
	}
	return to_return;
}());
