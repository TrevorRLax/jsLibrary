//Loops are used to do things a multiple times easily
//the while loop tells JS to repeat statements until a condition is false

//Example
function p(text){
	console.log(text);
}
var score=0;

while(score<10){
	score++;//This is shorthand for saying (score = score+1)
	console.log("Score is:", score);
}

//Another example 
var age=0;
while(age<100){
	age+=10;//shorthand for (age = age +10)
	console.log("Our age is:", age);
}
if(age===100){
	console.log("I'm a century old! Literally");
}

//Challenge 
//Write a while loop that 10-100 by 10s 
//At 50, print "Halfway there"

var num=0
while(num<100){
	num+=10;
	console.log(num);
	if(num===50){
	console.log("Halfway there:");
}
}


