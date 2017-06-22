// arrays are a collection of items 
//We define them using []s
function p(text){
	console.log(text);
}
//fix this function with an array

var rainbowColows = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"];
var raceWinners = [33,72,64];
var myFavoriteThings = ["Pizza",112358,"Seether",true,[1,2,3]];//mixed type array
//Don't actually ever do that
//Just because you can
//Doesn't mean should

p(rainbowColows);
p(myFavoriteThings);


//Arrays have indexes

var countries = ["USSA","Mother Russia","Fatherland"]
//Indexes: 	      0		       1		     2 
p(countries);
p(countries[1]);
p(countries[3]);


// Iterating over arrays
// tricky at first but get pretty easy

var movies = ["die Hard","Dumb and Dumber Too", "Lord of the Rings","The departed","Fight Club","Harry Potter"];
p(movies);
for (var i = 0; i < movies.length; i++){
	console.log("The index is:",i);
	p(movies[i]);
}

var philosophers= ["Socrates","Plato","Aristotle","Heraclitus","Parmenides"];
var movies = ["Jason Bourne", "Daredevil", "Iron Man", "Captain America"];
var lordOfTheRings = ["Gandalf", "Legolas", "Frodo", "Sam", "Gollum"];
var names = ["Trevor", "Philip", "Anna", "Andrew", "Skylar"];

for( var i=0; i<philosophers.length; i++){
	console.log("The index is;",i);
	p(philosophers[i]);
}
for(var i=0; i<movies.length; i++){
	console.log("The index number is;",i);
	p(movies[i]);
}
for( var i=0; i<lordOfTheRings.length; i++){
	console.log("The index is;",i);
	p(lordOfTheRings[i]);
}
for(var i=0; i<names.length; i++){
	console.log("The index number is;",i);
	p(names[i]);
}








