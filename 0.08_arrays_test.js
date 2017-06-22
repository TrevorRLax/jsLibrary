// Bronze 

var hobbies = ["Hiking", "Rucking", "Reading", "Playing cards"];

// Silver

var cars = ["Corolla", "Sequioa","Tundra", "Tacoma"];

for (var i =0; i<cars.length; i++) {
	console.log(cars[i]);
}

// Gold 
var knives = ["Tanto", "drop point", "karambit", "kukri"];
var everything = [[hobbies], [cars], [knives]];

for (var i=0; i<everything.length; i++){
	for(var i=0; i<hobbies.length; i++){
		console.log(hobbies[i]);
	}
	for(var i=0; i<cars.length; i++){
		console.log(cars[i]);
	}
	for (var i=0; i<knives.length; i++){
	console.log(knives[i]);
}
}



// var avg= [["Tennis", "Guitar", "Gaming", "Hockey"],
// ["Honda", "Toyota", "BMW", "VW"],
// ["John Mayer", "Ed Sheeran", "Migos", "The Game"]]

// console.log("---------------")

// for(var i = 0; i<avg.length; i++){
//     console.log("The index is:", i);
//     console.log(avg[i])
// }




// other challenges 

// var randomNum = Math.floor((Math.random()*50)+1);
// console.log(randomNum);


primeNum = [];
	for(i=0;i<=15;i++){
        primeNum[i] = Math.floor((Math.random()*50)+1);
    }

    if (primeNum[i]%i == 0) {
    	console.log("prime");
    }
console.log(primeNum);


number = []
	for(i=0; i<=20; i++){
		number[i] = Math.floor((Math.random()*40)+5);
		if (number[i]==3){
		number.splice(i, 1);
	}
	if (number[i]==5){
		number.splice(i, 1);
	}
	}
	// if (number[i]==3){
	// 	number.splice(i, 1);
	// } else if (number[i]==5){
	// 	number.splice(i, 1);
	// }
	
console.log(number);


words1 = ["despair", "anger", "pain", "darkness", "suffering", "hatred"];
numbers1 = [];
for (i=0; i<=5; i++){
	numbers1[i] = Math.floor((Math.random()*100)+1)
}
words1AndNumbers1 = []
	for(i=0; i<=5; i++){
		words1AndNumbers1[i] = [words1[i]+"-"+numbers1[i]];
	};

console.log(words1);
console.log(numbers1);
console.log(words1AndNumbers1)

// Create an array with every letter in the alphabet 
// Write code to make an array of 5 words, each with 5 random letters
// (["jeodp", "bactg", "aqpvy", "bqwzs", "poebt", "xtser"])
 
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// ranWord1 = [];
// ranWord2 = [];
// ranWord3 = [];
// ranWord4 = [];
// ranWord5 = [];
ran5Words = [];

	// for(i=0; i<=4; i++){
	// 	ranWord1[i] = alphabet[Math.floor((Math.random()*26)+0)];
	// }

	for(i=0;i<=4;i++){
		ran5Words[i] =  
	}


// console.log(ranWord1);
console.log(ran5Words);






///////////////////// for the prime number/////////////////


// function genRandom(){
//   //0-9 Math.random() 0 - 0.999999999 ->
//   var randomNum = Math.random();
//   randomNum *= 50;
//   return Math.floor(randomNum); 
// }

// var arrayName = [];

// for(var i = 1; i<16; i++){
//     arrayName.push(genRandom());

// }

// function prime(num) {
//   for(var i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num !== 1;
// }

// var num4 = 0;
//   for(var i = 0; i < arrayName.length; i++){
//     //console.log();
//     if(prime(arrayName[i]) === true){
//         num4 += 1;
//     }

// }
// console.log(arrayName);
// console.log(num4);



//////////////////////////part for random strings of letters///////////////////
////////////////////////////////////////////////////////////////////////


// /*Create an array with every letter in the alphabet 
// Write code to make an array of 5 words, each with 5 random letters
// (["jeodp", "bactg", "aqpvy", "bqwzs", "poebt", "xtser"])*/


// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// var index1 = Math.trunc(randomNum);
// var hope = [];
// var index2 = Math.trunc(randomNum);
// var hope1 = [];
// var index3 = Math.trunc(randomNum);
// var hope2 = [];
// var index4 = Math.trunc(randomNum);
// var hope3 = [];
// var index5 = Math.trunc(randomNum);
// var hope4 = [];


// for(i=0; i<=4; i++){
// var randomNum = (Math.random()*100)/4;
// var index1 = Math.trunc(randomNum);
// var randomNum = (Math.random()*100)/4;
// var index2 = Math.trunc(randomNum);
// var randomNum = (Math.random()*100)/4;
// var index3 = Math.trunc(randomNum);
// var randomNum = (Math.random()*100)/4;
// var index4 = Math.trunc(randomNum);
// var randomNum = (Math.random()*100)/4;
// var index5 = Math.trunc(randomNum);

// hope.push(alphabet[index1]);
// hope1.push(alphabet[index2]);
// hope2.push(alphabet[index3]);
// hope3.push(alphabet[index4]);
// hope4.push(alphabet[index5]);
// }

// var y = hope[0] + hope[1] + hope[2] +hope[3] + hope[4];
// var x = hope1[0] + hope1[1] + hope1[2] +hope1[3] + hope1[4];
// var z = hope2[0] + hope2[1] + hope2[2] +hope2[3] + hope2[4];
// var w = hope3[0] + hope3[1] + hope3[2] +hope3[3] + hope3[4];
// var p = hope4[0] + hope4[1] + hope4[2] +hope4[3] + hope4[4];
// console.log(y + " " + x + " " + z + " " + w + " " + p);


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


















































