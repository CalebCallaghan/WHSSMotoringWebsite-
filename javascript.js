function loadpage() {
	updateTime();
	carousel();
}

//clock
function updateTime() {
	var currentTime = new Date ( );

	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
	currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;

	var timeOfDay = (currentHours < 12 ) ? "AM" : "PM";
	currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
	currentHours = (currentHours == 0) ? 12 : currentHours;

	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
	document.getElementById("clock").firstChild.nodeValue = currentTimeString;

}

window.setInterval(updateTime, 1000);
//clock

// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

window.onload = loadpage;
