var video;

window.addEventListener("load", function() {
	// Turn off video autoplay and looping upon loading window
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});

// Play video and update video volume when user clicks "Play Video" button
document.querySelector("#play").addEventListener("click", function() {
	// Update volume value to 50% upon playing video
	let volume_value = 50
	video.volume = volume_value / 100;
	// Play video
	video.play();
	// Update volume information on slider and "Volume is..." indicator
	volume_slider = document.querySelector("#slider").value = volume_value;
	document.querySelector("#volume").innerHTML = volume_value;
});

// Pause video when user interacts with "Pause Video" button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

// Update video volume when user interacts with slider
document.querySelector("#slider").addEventListener("click", function() {
	// Update video volume
	let new_volume = document.querySelector("#slider").value
	video.volume = new_volume / 100;
	// Update "Volume is..." indicator
	document.querySelector("#volume").innerHTML = new_volume + "%";
})

// Slow down video by 10% each time button is clicked
document.querySelector("#slower").addEventListener("click", function() {
	// Slow down video until playback is ~0.1
	if (video.playbackRate > 0.2) {
		video.playbackRate = video.playbackRate - 0.1
		console.log("New video playback rate: " + video.playbackRate)
	}
})

// Speed up video by 10% each time button is clicked
document.querySelector("#faster").addEventListener("click", function() {
	// Increase video playback by 0.1
	video.playbackRate = video.playbackRate + 0.1
	// Log video playback value to console
	console.log("New video playback rate: " + video.playbackRate)
})

// Skip ahead in video when "Skip Ahead" button is clicked
document.querySelector("#skip").addEventListener("click", function() {
	// Skip ahead video by 10s
	second_jump = 10;
	if (video.currentTime + second_jump <= video.duration) {
		video.currentTime = video.currentTime + second_jump
	}
	// If current time is end of video, go to video start
	else {
		video.currentTime = 0
	}
	// Log video current time to console
	console.log("Current video time: " + video.currentTime)
})

// Mute / unmute video when user clicks button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
})

// Add oldSchool to video classes when "Old School" button is clicked
document.querySelector("#vintage").addEventListener("click", function() {
	// Only add class if it has not been added already
	if (video.className != "video oldSchool") {
		video.className += " oldSchool";
	}
})

// Set video class to "video" alone when button is clicked
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
})