//Functions: What do we use them for
	//Executes action or actions 
	//Allows us to reuse code without retyping 
	//Makes code cleaner

function hello(){
	console.log("Hello World");
}

hello();

function printOneNumber(){
	console.log(1);
}
printOneNumber();

function divide(){
console.log("--------------------------------------------------------------------");
}

divide();

//Scope with variables 
//Think of it as a rifle scope 
//doesn't see the variable outside of the function only uses x and y inside function 
//if doesn't find with in the function then it searches for another x 

function add(){
	var x=2;
	var y=7;
	console.log(x+y);
}
add();

function subtract(){
	var x=4;
	var y=1;
	console.log(x-y);
}

add();
subtract();
divide();

//Parameters/Arguments(Basically the same thing)
	//Parameters are what the names in the function definition 
	//Arguments are what is passed to the function 


function numberEntered(x){//x is a parameter 
	//x and 7 share the same value 
	console.log("Number entered:",x);
}
numberEntered(7); //7 is the argument 

function addTwoNums(x,y){//X and Y are parameters 
	console.log(x+y);
}

addTwoNums(4,7);//4 and 7 are arguments 

divide();

//return keyword 
//When JS hits the return keyword, it will stop executing the function, and return it's argument 

function mood(){
	return "I'm feeling great!"
}

console.log(mood());//Mood becomes the argument for console.log

function multiply(x,y){
	return x*y;
}
console.log(multiply(3,8));

//On your own:
//Write a funciton that takes two arguments, a first name and a last name, and combines them to 
//return <firstname> <lastname> and then print the return value to the console;

//var first="Trevor";
//var last="Lax";
function fullName(firstName,lastName){
	return firstName+ " " +lastName;
}
console.log(fullName("Trevor","Lax"));

//divide();
//divide();
//divide();
//divide();
//divide();


//Loops(small preview)

for(var i=0; i<5;i++){
	divide();
}


function p(theText){
	console.log(theText);
}
p("Hi.");












