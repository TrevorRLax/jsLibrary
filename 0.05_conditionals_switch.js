//Switch statements
//Very similar to if/ifelse/else statements 

//How it works:
//The value is evaluated once 
//It is then compared with cases
//If a matching case is found, executes code 

var marginOfSuperBowlWin = 17;
var result;

switch(marginOfSuperBowlWin){
case 3:
	result = "That will be a good game";
	break;
case 7:
	result = "I like it. Pretty close game";
	break;
case 17:
	result = "Sweet we can just focus on the commercials";
	break;
default: //last one it looks at so doesn't need a break
	result = "I don't know lets see what happens";
}

console.log("Switch result:", result); // console.log("Switch Result:" + result);
