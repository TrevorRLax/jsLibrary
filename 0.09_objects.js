// Objects 

function p(text){
	console.log(text);
}
// how fix with array
var emptyObject = {};

var name="Trevor";

var johnQualls = {
	// properties
	name 		:"John Qualls",
	age 		:49,
	vocation	:"President of Eleven Fifty Academy",
	isRetired	:false,
	//Methods
	greeting :function(){
		p("Hello, I am " +this.name+"."+" I am"+this.vocation);
	},
	ageOf :function(){
		p("Hello, esteemed colleages. I am "+this.name+" and I am "+this.age+" years of old");
	},
	extendedGreeting :function(){
		this.greeting();
		this.ageOf();
	}
};

p("##############################");
johnQualls.greeting();
johnQualls.ageOf();
johnQualls.extendedGreeting();
p("##############################");


console.log(johnQualls);
p(johnQualls.name);
p(johnQualls.age);
p(johnQualls.middlename); //undefined

p("---------------");

var animal ={
	type 			:"bear",
	habitat 		:"Forests",
	weight 			:1000,
	commonInIndiana :false
}

p(animal.weight);
p(animal["weight"]);
animal.weight=1200;
p(animal.weight);
p(animal.weight+50);
p(animal.weight);
animal.type="oneFatCat";
p(animal.type);
p("-----------------------------");
p(animal.favoriteFood);
p(animal.favoriteFood="carrots");
p(animal.favoriteFood);
animal.color ="orange";
animal.geneticModificationGoneWrong=true;
p(animal.color);
p(animal.geneticModificationGoneWrong);
delete animal.geneticModificationGoneWrong;
p(animal.geneticModificationGoneWrong);



// student exercise 

// friend object 4 properties 
// movie with 3 objects 
// object about anything 

var friend ={
	name :"Philip",
	habitat :"His room",
	weight :"Fasting monk",
	diet : "Monster drinks"
}

var movie ={
	name :"Bourne: Identity",
	Release :"Early 2000's",
	Sequal :"Bourne Supremacy"
}

var heraclitus ={
	type : "Pre-socratic",
	contribution :"attempted to explain relation between changing and unchanging realms",
	idea :"Said that the world was made of fire."
}

// properties can be more than just strings, booleans, and numbers 
// can include arrays and other objects 

animal.moviesAboutMe =["Lion King","Happy Feet", "Marley and Me"];
p(animal.moviesAboutMe);

p(animal.moviesAboutMe[1]);

p(Object.keys(animal));

//Inheritance

//Longish hand way but instructors favorite
var car = {
	make :"",
	model :"",
	year :0,
	constructor: function(make, model, year){
		this.make = make;// same as car, this is contextual
		this.model = model;
		this.year = year;
	}
};

var myCar = Object.create(car);
myCar.constructor("Toyota", "Corolla", "2001");
p(myCar.year);

// shorthand way of inheritance 

var book={
	title:"",
	yearPublished:0,
	numPages:0,
	constructor: function(title, yearPublished, numPages){
		this.title = title;
		this.yearPublished = yearPublished;
		this.numPages = numPages;
		return this;
	}
};

var myFavBook = new book.constructor("Bible", "~6000BC", 1500);
p(myFavBook.title);

// shorterhand version
// Javascript is chaos
// technially......functions are also objects 
// sooooooooooooooooooooooo
// we can do something like this

function computer(screenSize, hardDriveSize, hasNumPad){
	// we never technically defined these properties 
	// or the object really
	// but its ok because we are using javascript and JS loves us and lets us do stupid stuff like this
	this.screenSize = screenSize;
	this.hardDriveSize = hardDriveSize;
	this.hasNumPad = hasNumPad;
};

var myPC = new computer(13, "256GB", true);
p(myPC);
p(myPC.screenSize);


// Objects are references 
// var car
// *****************************object************
//                             car^
//                      myOtherCar^

var pcOne = new computer(12, "500GB", false);
var pcTwo = new computer(14, "2tb", true);
var pcThree = pcTwo;

p(pcOne.hardDriveSize);
p(pcTwo.screenSize);
p(pcThree.screenSize);

pcTwo.screensize = 15;
p(pcTwo.screensize);
p(pcThree.screensize);

// Objects are not copied!!!!!!!!! They are referenced




















