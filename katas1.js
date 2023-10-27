function oneThroughTwenty() {
	document.write("<h2>Print 1 through 20 as variable 'a' <br /></h2>");
	for (var a = 1; a <= 20; a++) {
		document.write("a = " + a + "<br/>");
	}
	document.write("<br/>");
}
oneThroughTwenty();

function evensToTwenty() {
	document.write(
		"<h2>Print even numbers through 20 as variable 'b' <br /></h2>"
	);
	for (var b = 0; b <= 20; b += 2) {
		document.write("b = " + b + "<br/>");
	}
	document.write("<br/>");
}
evensToTwenty();

function oddsToTwenty() {
	for (var c = 0; c <= 20; c++) {
		if (c % 2 == 0) {
			continue;
		}
		console.log("c = " + c);
	}
}
oddsToTwenty();

function multiplesOfFive() {
	for (var d = 0; d <= 100; d += 5) {
		console.log("d = " + d);
	}
}
multiplesOfFive();

function squareNumbers() {
	for (var e = 1; e <= 10; e++) {
		console.log("e = " + e * e);
	}
}
squareNumbers();

function countingBackwards() {
	for (var f = 20; f >= 0; f--) {
		console.log("f = " + f);
	}
}
countingBackwards();

function evenNumbersBackwards() {
	for (var g = 20; g >= 0; g -= 2) {
		console.log("g = " + g);
	}
}
evenNumbersBackwards();

function oddNumbersBackwards() {
	for (var h = 20; h >= 0; h--) {
		if (h % 2 == 0) {
			continue;
		}
		console.log("h = " + h);
	}
}
oddNumbersBackwards();

function multiplesOfFiveBackwards() {
	for (var i = 100; i >= 0; i -= 5) {
		console.log("i = " + i);
	}
}
multiplesOfFiveBackwards();

function squareNumbersBackwards() {
	for (var k = 10; k >= 1; k--) {
		console.log("k = " + k * k);
	}
}
squareNumbersBackwards();
