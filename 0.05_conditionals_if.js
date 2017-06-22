v//If statements: Are used to JS which statments to execute based on a condition

var isOn = true;
var isHot = true;
 
 //Shorthand for checking for true
if(isOn){
	console.log("The light is on."); // only executed if the if statements is true
}

//Longhand for checking for true //{}=then

if(isOn===true){
	console.log("The light is still on ")
}

//Conditional Operators
//AND -> &&
//OR  -> ||
//NOT -> !

isOn = true;
isHot = true;

if(isOn && isHot){
	console.log("The light is on and it is hot.")
}

if(isOn||isHot){
	console.log("I'm not sure what to say")
}

//if(!()) -> if(negate(value))
if(!isOn){
	console.log("The light is not on")
}










