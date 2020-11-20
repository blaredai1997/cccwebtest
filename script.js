var isAfterCalc = false;
function removeLeadingZero() {
	var val = document.getElementById("result").innerHTML;
	if (val == "0") {
		val = "";
		document.getElementById("result").innerHTML = val;
	}
}

function display(val, clicked_id) {
	removeLeadingZero();
	if ((isAfterCalc && 
		clicked_id != "divide" &&
		clicked_id != "multiply" &&
		clicked_id != "minus" &&
		clicked_id != "plus") ||
		document.getElementById("result").innerHTML == "undefined" ||
		document.getElementById("result").innerHTML == "NaN") {
		document.getElementById("result").innerHTML = "";
		isAfterCalc = false;
	}
	else if (clicked_id == "divide" ||
			clicked_id == "multiply" ||
			clicked_id == "minus" ||
			clicked_id == "plus") {
		isAfterCalc = false;
	}
	document.getElementById("result").innerHTML += val;
}

function calculation() {
	removeLeadingZero();
	var val = document.getElementById("result").innerHTML;
	try {
		var result = eval(val);
	}
	catch(err) {
		
	}
	document.getElementById("result").innerHTML = result;
	isAfterCalc = true;
}

function percentage() {
	removeLeadingZero();
	var val = document.getElementById("result").innerHTML;
	val = val/100;
	document.getElementById("result").innerHTML = val;
	isAfterCalc = true;
}

function clearResult() { 
	document.getElementById("result").innerHTML = "0"; 
}