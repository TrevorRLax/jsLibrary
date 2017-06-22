//Strings are a group of characters 
//Strings must go in quotes 

console.log("He's the most intersting man in the world.");

var tweet = "Kanye is broke. No joke!";
console.log(tweet);
var username = 'Hyena'  
console.log(username);
// single and double quotes are both fine

var password ='Kicking @$$ and taking names!!!';
console.log(password);

var birthCity = "Timbuktu";
var birthState = "Free";
console.log(birthCity+birthState);
var commaSpace = ",";
console.log( birthCity+commaSpace+birthState);
console.log(birthCity+","+birthState);
console.log(birthCity+','+birthState+112358);

//Mixing Strings and Integers 

var ageInAugust = 40; 
var highSchool = "Carmel HS";
var graduatedHS = 1994;

console.log(highSchool+commaSpace+graduatedHS);
console.log("My age in august:",ageInAugust);
console.log("My 'age' in august:",ageInAugust);
console.log('My "age" in august:',ageInAugust);
console.log("My \"age\" in august:",ageInAugust);


//I graduation from (HS) in (year). 
var myHsName = "Aspen Ridge Academy";
var myHsYear = 2016;
console.log("I graduated from: " + myHsName + " in " + myHsYear);

//String Methods (functions)

console.log(myHsName.length); //length is property of the string 
console.log(myHsName.toUpperCase()); //toUpperCase is a method so it requires the paraenthesis
console.log(myHsName.toLowerCase());

console.log(myHsName.split(" "));
console.log(myHsName.split("a"));
//slices everything before specified index 
//indicies of strings start at 0
console.log(myHsName.slice(5)); 






























