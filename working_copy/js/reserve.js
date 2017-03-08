'use strict';
function showTimes() {
    document.getElementById('reserve-times').removeAttribute("hidden");
    document.getElementById("reserve-times").setAttribute("aria-hidden", "false");
}

function timeSelect1() {
    document.getElementById('reserve-form').removeAttribute("hidden");
    document.getElementById("reserve-form").setAttribute("aria-hidden", "false");
    document.getElementById("time-1").style.backgroundColor = "#E85E5E";
    document.getElementById('time-2').style.backgroundColor = "#BDBDBD";
    document.getElementById('time-3').style.backgroundColor = "#BDBDBD";
    document.getElementById('time-4').style.backgroundColor = "#BDBDBD";
}

function timeSelect2() {
    document.getElementById('reserve-form').removeAttribute("hidden");
    document.getElementById("reserve-form").setAttribute("aria-hidden", "false");
    document.getElementById('time-1').style.backgroundColor = "#BDBDBD";
    document.getElementById("time-2").style.backgroundColor = "#E85E5E";
    document.getElementById('time-3').style.backgroundColor = "#BDBDBD";
    document.getElementById('time-4').style.backgroundColor = "#BDBDBD";
}

function timeSelect3() {
    document.getElementById('reserve-form').removeAttribute("hidden");
    document.getElementById("reserve-form").setAttribute("aria-hidden", "false");
    document.getElementById('time-1').style.backgroundColor = "#BDBDBD";
    document.getElementById('time-2').style.backgroundColor = "#BDBDBD";
    document.getElementById("time-3").style.backgroundColor = "#E85E5E";
    document.getElementById('time-4').style.backgroundColor = "#BDBDBD";
}

function timeSelect4() {
    document.getElementById('reserve-form').removeAttribute("hidden");
    document.getElementById("reserve-form").setAttribute("aria-hidden", "false");
    document.getElementById('time-1').style.backgroundColor = "#BDBDBD";
    document.getElementById('time-2').style.backgroundColor = "#BDBDBD";
    document.getElementById('time-3').style.backgroundColor = "#BDBDBD";
    document.getElementById("time-4").style.backgroundColor = "#E85E5E";
}

function confirmation() {
    document.getElementById('confirm-form').style.visibility = "hidden";
    document.getElementById("confirm-form").setAttribute("aria-hidden", "true");
    document.getElementById('map').style.visibility = "hidden";
    document.getElementById("map").setAttribute("aria-hidden", "true");
    document.getElementById('confirmation-message').removeAttribute("hidden");
    document.getElementById("confirmation-message").setAttribute("aria-hidden", "false");
}

window.onresize = function() {    
    var width = window.document.body.clientWidth;
    console.log(width);  
	if (width < 720) {
		document.getElementById('map-move-location').appendChild(document.getElementById('map'));
	} else {
		document.getElementById('map-original-location').appendChild(document.getElementById('map'));
	}       
}
