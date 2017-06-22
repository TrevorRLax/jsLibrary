//If/Else statements 
//Else statements give JS an alternative statement to execute 

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up");
}else{
	console.log("Going Down");
}

//With an if/else statment 
//Describe if the elevatro is broken or not 

if(elevatorBroken === true){
	console.log("Take the stairs.");
}else{
	console.log("Which floor are you going to?");
}

//Combining variable types for conditionals 
if(elevatorStuckWhileWeAreOnIt && elevatorNumber === 13){
	console.log("Today is not our lucky day")
}else{
	console.log("Who needs exercise")
}