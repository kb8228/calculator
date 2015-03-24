// save INPUT field to var INPUT -------->
var input = document.getElementById("input");
var arr = [];

// save BUTTONS in vars ----------------->
var clear = document.getElementById("clear");
var sqrt = document.getElementById("sqrt");
var percent = document.getElementById("percent");
var divide = document.getElementById("divide");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var multiply = document.getElementById("multiply");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var subtract = document.getElementById("subtract");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var add = document.getElementById("add");
var zero = document.getElementById("zero");
var dblzero = document.getElementById("dblzero");
var dot = document.getElementById("dot");
var equal = document.getElementById("equal");

// add event listeners to buttons
// set input field value to button id
// NUMBERS --------------------->
seven.addEventListener("click", function(){
	input.value = input.value + "7";

});
eight.addEventListener("click", function(){
	input.value = input.value + "8";
	//input.value = arr.toString();
});
nine.addEventListener("click", function(){
	input.value = input.value + "9";
});
four.addEventListener("click", function(){
	input.value = input.value + "4";
});
five.addEventListener("click", function(){
	input.value = input.value + "5";
});
six.addEventListener("click", function(){
	input.value = input.value + "6";
});
one.addEventListener("click", function(){
	input.value = input.value + "1";
});
two.addEventListener("click", function(){
	input.value = input.value + "2";
});
three.addEventListener("click", function(){
	input.value = input.value + "3";
});
zero.addEventListener("click", function(){
	input.value = input.value + "0";
});
dblzero.addEventListener("click", function(){
	input.value = input.value + "00";
});
dot.addEventListener("click", function(){
	input.value = input.value + ".";
});
// OPERATORS --------------------->
clear.addEventListener("click", function(){
	input.value = "";
	arr = [];
});
/*sqrt.addEventListener("click", function(){
	input.value = "sqrt";
});*/
divide.addEventListener("click", function(){
	arr.push(input.value);
	arr.push("/");
	input.value = input.value + " / ";
});
multiply.addEventListener("click", function(){
	arr.push(input.value);
	arr.push("x");
	input.value = input.value + " x ";
});
add.addEventListener("click", function(){
	arr.push(input.value);
	arr.push("+");
	input.value = input.value + " + ";
});
subtract.addEventListener("click", function(){
	arr.push(input.value);
	arr.push("-");
	input.value = input.value + " - ";
});
equal.addEventListener("click", function(){
	arr = input.value.split(" ");
	var op1 = parseFloat(arr[0]);
	var op2 = parseFloat(arr[2]);
	if(arr[1] === "+"){
		input.value = (op1 + op2).toString();
		return op1 + op2;
	}
	else if(arr[1] === "-"){
		input.value = (op1 - op2).toString();
		return op1 - op2;
	}
	else if(arr[1] === "x"){
		input.value = (op1 * op2).toString();
		return op1 * op2;
	}
	else if(arr[1] === "/"){
		input.value = (op1/op2).toString();
		return op1 / op2;
	}
	else{
		input.value = "N/A";
		return "operation not available";
	}
});
