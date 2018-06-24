alert("play music");

function _(id) {
	// body...
	return document.getElementById('id');
}

function songList() {
	var audio = new Audio();
	var audio_folder = "music/";
	var audio_ext = ".mp3";
	var audio_index = 1;
	var is_playing = false;
	var playbtnarray;
	var playingtrack;
	var songtracks = _("songtracks");
	var tracks = {
		"tracks1":["Falling into you","Falling_into_you"],
		"tracks2":["If i let you go", "If_I_Let_You_Go"],
		"tracks3":["Miss you nights", "Miss_You_Nights"],
		"tracks4":["My love", "mylove"]
	};
 
}

window.addEventListener("load", songList);