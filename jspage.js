//function for squaring a number 
function squareNumber(num) {
	var squaredNumber = num * num;
	console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
	document.write('The result of squaring the number ' + num + ' is ' + squaredNumber + '. ')
	return squaredNumber;
}

squareNumber(4);

//function for halving a number
function halfOf(num) {
	var half = num / 2;
	console.log('Half of ' + num + ' is ' +  half);
	document.write('Half of ' + num + ' is ' +  half + '. ');
	return half;
}

halfOf(6);

//function for finding the percent of a number
function percentOf(num1, num2) {
	var percent = (num1/num2) * 100;
	console.log(num1 + ' is ' + percent + '% of ' + num2);
	document.write(num1 + ' is ' + percent + '% of ' + num2 + '. ');
	return percent;
}

percentOf(5, 100);

//second squaring function to prevent double printing of results
function squareNumber2(num3) {
	var squaredNumber2 = num3 * num3;
	console.log('The result of squaring the number ' + num3 + ' is ' + squaredNumber2 + '. ');
	return squaredNumber2;
}

squareNumber2(2);

//function for finding the area of a circle
function areaOfCircle(radius) {
	var area = Math.PI * squareNumber2(radius);
	console.log('The area of circle with radius ' + radius + ' is ' + area);
	document.write('The area of circle with radius ' + radius + ' is ' + area + '. ');
	return area;
}

areaOfCircle(3);

//function to perform all previous functions in sequence 
function calculateAll(num) {
    var half    = halfOf(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var result  = percentOf(squared, area);
}

calculateAll(5);










