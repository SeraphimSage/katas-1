function oneThroughTwenty() {
	document.write("<h2>Print 1 through 20 as variable 'a'. <br /></h2>");
	for (var a = 1; a <= 20; a++) {
		document.write("a = " + a + "<br/>");
	}
	document.write("<br/>");
}
oneThroughTwenty();

function evensToTwenty() {
	document.write(
		"<h2>Print even numbers through 20 as variable 'b'. <br /></h2>"
	);
	for (var b = 0; b <= 20; b += 2) {
		document.write("b = " + b + "<br/>");
	}
	document.write("<br/>");
}
evensToTwenty();

function oddsToTwenty() {
	document.write(
		"<h2>Print odd numbers through 20 as variable 'c'. <br /></h2>"
	);
	for (var c = 0; c <= 20; c++) {
		if (c % 2 == 0) {
			continue;
		}
		document.write("c = " + c + "<br/>");
	}
	document.write("<br/>");
}
oddsToTwenty();

function multiplesOfFive() {
	document.write(
		"<h2>Print multiples of 5 from 0 to 100 as variable 'd'. <br /></h2>"
	);
	for (var d = 0; d <= 100; d += 5) {
		document.write("d = " + d + "<br/>");
	}
	document.write("<br/>");
}
multiplesOfFive();

function squareNumbers() {
	document.write(
		"<h2>Print the square of variable 'e' from 1 to 10. <br /></h2>"
	);
	for (var e = 1; e <= 10; e++) {
		document.write("e = " + e * e + "<br/>");
	}
	document.write("<br/>");
}
squareNumbers();

function countingBackwards() {
	document.write(
		"<h2>Print variable 'f' counting down from 20 to 0. <br /></h2>"
	);
	for (var f = 20; f >= 0; f--) {
		document.write("f = " + f + "<br/>");
	}
	document.write("<br/>");
}
countingBackwards();

function evenNumbersBackwards() {
	document.write(
		"<h2>Print variable 'g' counting down from 20 to 0 by even numbers. <br /></h2>"
	);
	for (var g = 20; g >= 0; g -= 2) {
		document.write("g = " + g + "<br/>");
	}
	document.write("<br/>");
}
evenNumbersBackwards();

function oddNumbersBackwards() {
	document.write(
		"<h2>Print variable 'h' counting down from 20 to 0 by odd numbers. <br /></h2>"
	);
	for (var h = 20; h >= 0; h--) {
		if (h % 2 == 0) {
			continue;
		}
		document.write("h = " + h + "<br/>");
	}
	document.write("<br/>");
}
oddNumbersBackwards();

function multiplesOfFiveBackwards() {
	document.write(
		"<h2>Print variable 'i' counting down from 100 to 0 by increments of 5.<br /></h2>"
	);
	for (var i = 100; i >= 0; i -= 5) {
		document.write("i = " + i + "<br/>");
	}
	document.write("<br/>");
}
multiplesOfFiveBackwards();

function squareNumbersBackwards() {
	document.write(
		"<h2>Print variable 'k' that takes the square of 10 to 1.<br /></h2>"
	);
	for (var k = 10; k >= 1; k--) {
		document.write("k = " + k * k + "<br/>");
	}
	document.write("<br/>");
}
squareNumbersBackwards();
