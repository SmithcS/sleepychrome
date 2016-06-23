var colorScheme = ["#13646B", "#207178", "#FFB866", "#FFC466", "#FFE184", "#FFF584"];

function calculateWakeImmediate() {
	//get current time 
	var currentDate =  new Date();
	var currentTime = currentDate.getTime();
	var times = [];

	// length of time in one sleep cycle (90 min) in ms 
	var cycle = 5400*1000;
	var elementId = "immWakeTime";

	// calculates the time you should fall asleep. no need to write out own
	// math for calculations - javascript built in Date functions work great
	for (i = 0; i < 6; i++) {
		//account for the minutes it takes to fall asleep
		if (i == 0) {
			sleepTime = currentTime+cycle + (900*1000)
		}
		else {
			sleepTime += cycle;
		}
		times[i] = new Date(sleepTime).toLocaleTimeString();
		// format so that all times strings will have a length of 11
		if (times[i].length == 10) {
			times[i] = "0" + times[i];
		}
		document.getElementById(elementId.concat(i+1)).innerHTML = (times[i].substr(0, 5) + " " + times[i].substr(-2));
		document.getElementById(elementId.concat(i+1)).style.color = colorScheme[i];
	}
}

function calculateWake() {
	var hours = document.getElementById("wakeHour").textContent;
	var minutes = document.getElementById("wakeMin").textContent;
	var amPm = document.getElementById("wakeAmPm").textContent;
	
	if (amPm == "PM") {
		hours += 12;
	}

	var date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);
	date.setSeconds(0);

	currentTime = date.getTime();

	var cycle = 5400*1000;
	var times = []
	var elementId = "wakeTime";

	//similar to the function calculateWakeImmediate() and calculateSleep(),
	//but instead subtracting the cycle times (working backwards)
	for (i = 5; i >= 0; i--) {
		if (i == 5) {
			sleepTime = currentTime-cycle -(900*1000);
		}
		else {
			sleepTime -= cycle;
		}
		times[i] = new Date(sleepTime).toLocaleTimeString();

		if (times[i].length == 10) {
			times[i] = "0" + times[i];
		}
		document.getElementById(elementId.concat(i)).innerHTML = (times[i].substr(0, 5) + " " + times[i].substr(-2));
		document.getElementById(elementId.concat(i)).style.color = colorScheme[i];
	}

	document.getElementById("wakeTimes").className = "times shadow-effect fadein";

}

function calculateSleep() {
	var hours = document.getElementById("sleepHour").textContent;
	var minutes = document.getElementById("sleepMin").textContent;
	var amPm = document.getElementById("sleepAmPm").textContent;
	
	if (amPm == "PM") {
		hours += 12;
	}

	var date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);
	date.setSeconds(0);

	currentTime = date.getTime();

	var times = [];
	var cycle = 5400*1000;
	var elementId = "sleepTime";

	for (i = 0; i < 6; i++) {
		if (i == 0) {
			sleepTime = currentTime+cycle + (900*1000)
		}
		else {
			sleepTime += cycle;
		}
		times[i] = new Date(sleepTime).toLocaleTimeString();
		if (times[i].length == 10) {
			times[i] = "0" + times[i];
		}
		console.log(times[i]);
		document.getElementById(elementId.concat(i+1)).innerHTML = (times[i].substr(0, 5) + " " + times[i].substr(-2));
		document.getElementById(elementId.concat(i+1)).style.color = colorScheme[i];
	}

	document.getElementById("sleepTimes").className = "times shadow-effect fadein";
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
				document.getElementById("wakeHour").style.paddingRight = "7px";
				break;
			case "wakeMinDropdown":
				document.getElementById("wakeMin").innerHTML = event.target.textContent;
				document.getElementById("wakeMin").style.paddingRight = "7px";
				break;
			case "wakeAmPmDropdown":
				document.getElementById("wakeAmPm").innerHTML = event.target.textContent;
				document.getElementById("wakeAmPm").style.paddingRight = "7px";
				break;
			case "sleepHourDropdown":
				document.getElementById("sleepHour").innerHTML = event.target.textContent;
				document.getElementById("sleepHour").style.paddingRight = "7px";
				break;
			case "sleepMinDropdown":
				document.getElementById("sleepMin").innerHTML = event.target.textContent;
				document.getElementById("sleepMin").style.paddingRight = "7px";
				break;
			case "sleepAmPmDropdown":
				document.getElementById("sleepAmPm").innerHTML = event.target.textContent;
				document.getElementById("sleepAmPm").style.paddingRight = "7px";
				break;
			default:
				break;
		}
	}
}
