//Booleans 

var tired = false;
var awake = true;
var hungry = true;
var sad = false;
var happyToWorkWithYall = true;
var corny = true;

console.log(corny);

//comparisons 
// == Equality 
// === Strict Equality 
// != Inequality 
//!== Strict Inequality 
// > greater than
// < less than 
// <= less than or equal to 
// >= Greater than or equal to 

console.log(2>1);
console.log(3<2);

var test = 2 >= 3 
console.log(test);

console.log("Two is greater than one? " + (2>1));

console.log("----------");


//When chekcing for equality, you always want to use === over the == in JavaScript
2 == "2" // true
2 ==="2" // false
2 === 2  // true
"2" === "2" // true

//inequality 
"Joey" !== "Tif" // true
10 !== 10 // false 

//overview, difference between =, ==, === 

var one =1;
var stringOne = "1";
console.log("Two equals? ", one === stringOne);
console.log("Two equals? ", one === stringOne); //3 is very safe and compares type and value

//Logical Operators
//Operators		Meaning 	True expressions 		conclusion 
// && 			and 		4 > 0 && -2 < 0 		true
// || 			or 			4 > 0 || -2 > 0			true
//! 			not 		!(5 < 0)				true 

console.log("&& operator: ", 2===2 && 1===1);
console.log("|| operator: ", 2===2 || 2===1);
console.log("1 operator: ", 2 != 1);






















