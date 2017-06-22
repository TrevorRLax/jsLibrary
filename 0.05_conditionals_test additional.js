//Bronze
var age =18;

switch(age){
case 3:
	result = "One day my child";
	break;
case 7:
	result = "Still have a way to go";
	break;
case 17:
	result = "Oh so close you can tast the elect and regret";
	break;
case 18:
	result = "Congratulations! You cna now vote!"
	break;
default: //last one it looks at so doesn't need a break
	result = "Hail Hydra";
}
console.log(result);

//Silver 
numColtWin = 2;
numPatriotWin = 3;

if(numColtWin>numPatriotWin){
	console.log("SuperBowl here we come.");
}else if(numColtWin<numPatriotWin){
	console.log("What? Deflate-gate? Didn't catch that.");
}else
	console.log("Guess you didnt' deflate those balls enough");

// Gold 

for(var i=1; i<101;i++){
	if(i%3===0){
		console.log("Fizz");
	}else if(i%5===0){
		console.log("Buzz");
	}else
	console.log(i);
}









