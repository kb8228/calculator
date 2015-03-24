var input = document.getElementById("input");
var buttons = document.getElementsByTagName("button");
var operators = document.getElementsByClassName("operator");
var arr = [];

function display (button) {
	button.addEventListener("click", function(){
		if(this.innerText !== "="){
			input.value = input.value + "" + this.innerText;
			arr.push(this.innerText);
		}
		// else{
		// 	input.value = calculate().toString();
		// }
	});
}

function calculate (operator){
	operator.addEventListener("click", function(){
		if(//its not an operator){
			//push value to array
		}
		else{
			//take index0, perform action of index1 on index2
			//show result in output
		}
	});
 
}

//function getExpression (){
	for(var i = 0; i < buttons.length; i++){
		display(buttons[i]);
	}
//}

// function getExpression () {
// 	for(var i = 0; i < expressionString.length; i++){
// 		if(expressionString[i] === "/"){

// 		}
// 	}
// }