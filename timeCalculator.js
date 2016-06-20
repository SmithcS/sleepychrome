
function calculateWakeImmediate() {
	var currentDate =  new Date();
	var currentTime = currentDate.getTime();
	var times = [];

	// length of time in one sleep cycle (90 min) in ms 
	var cycle = 5400*1000;
	var elementId = "immWakeTime";
	// calculates the time you should fall asleep. no need to write out own
	// math for calculations - javascript built in Date functions work great
	for (i = 0; i < 5; i++) {
		sleepTime = currentTime+cycle + (900*1000);
		times[i] = new Date(sleepTime).toLocaleTimeString();
		document.getElementById(elementId.concat(i+1)).innerHTML = times[i];
		cycle += cycle;
	}
}

function calculateWake() {

}

function calculateSleep() {

}

window.onload = function() {
	calculateWakeImmediate();
}

window.onclick = function(event) {
	var srcID = event.target.id;
	var srcParentID = event.target.parentNode.id;
	console.log(srcID);

	if (srcID == "calculateWake") {
		calculateWake();
	}
	else if (srcID == "calculateSleep") {
		calculateSleep();
	}
	else {
		switch (srcParentID) {
			case "wakeHourDropdown":
				document.getElementById("wakeHour").innerHTML = event.target.textContent;
				break;
			case "wakeMinDropdown":
				document.getElementById("wakeMin").innerHTML = event.target.textContent;
				break;
			case "wakeAmPmDropdown":
				document.getElementById("wakeAmPm").innerHTML = event.target.textContent;
				break;
			case "sleepHourDropdown":
				document.getElementById("sleepHour").innerHTML = event.target.textContent;
				break;
			case "sleepMinDropdown":
				document.getElementById("sleepMin").innerHTML = event.target.textContent;
				break;
			case "sleepAmPmDropdown":
				document.getElementById("sleepAmPm").innerHTML = event.target.textContent;
				break;
			default:
				break;
		}
	}
}
