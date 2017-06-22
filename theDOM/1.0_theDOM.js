// -----------------Lesson: The DOM-----------------------
//--------------------------------------------------------
//--------------------------------------------------------

/*What we've done so far is fun, but how do we display our awesome JS on a website?

The Document Object Model is created when a web page loads HTML
  It  defines the logical structure of an HTML document and how it is accessed and manipulated
  Using JS you can do stuff like.....

        change all the HTML elements in the page
        change all the HTML attributes in the page
        change all the CSS styles in the page
        remove existing HTML elements and attributes
        add new HTML elements and attributes
        react to all existing HTML events in the page
        create new HTML events in the page


//--------------------------------------------------------

//--------------------------------------------------------
DOM Access Methods*/

//Finding DOM nodes by id:
        //document.getElementById(id);
        
//Finding DOM nodes by tag name:
        //document.getElementsByTagName(tagName);
        
//Finding DOM nodes by class name:
        //document.getElementsByClassName(className);
//Finding DOM nodes by query selector:
          //document.querySelector(cssQuery);
          //document.querySelectorAll(cssQuery);

     
//---------JavaScript and use Chrome Dev Tools to see the console.log

function p(text){
	console.log(text);
}

// by ID
var hobbiesList = document.getElementById('hobby-list');
p(hobbiesList);

// by tagname
var hobbies = document.getElementsByTagName('li');
p(hobbies);
p(hobbies[0].innerHTML); //val of the first li

// by class name 
var alsoHobbies = document.getElementsByClassName('hobby');
p(alsoHobbies);

// by css query 
var firstHobby = document.querySelector('ul li.hobby');
p(firstHobby);

var allOfThem = document.querySelectorAll('ul li.hobby');
p(allOfThem);

// Rendering to HTMl
// each DOM node has an innerHTMl attribute 
// you can set innerHTMl yourself to replace the contents of a node

function favoriteSong(){
	document.getElementById("favorite").innerHTML="Skillet";
}
favoriteSong();
// worstSong
// bestSong

function worstSong(){
	document.getElementById("worst").innerHTML="What does the fox say";
}
worstSong();
function bestSong(){
	document.getElementById("best").innerHTML="Oh euchari in leta vita";
}
bestSong();


function addSong(){
	document.getElementById("best").innerHTML+=" , Oh Fortuna, and Welcome to the family";
}
addSong();

//--------------------------------------------------------
//MORE HTML MANIPULATIONS

// Adding and Deleting Elements

// document.createElement(element)      Create an HTML element
// document.removeChild(element)        Remove an HTML element
// document.appendChild(element)        Add an HTML element
// document.replaceChild(element)       Replace an HTML element
// document.write(text)                 Write into the HTML output stream

function addButton(){
	var btn = document.createElement("BUTTON");  //creates a <button> element
	var text = document.createTextNode("I JUST GOT ADDED!!"); // Create a text node
	btn.appendChild (text);
	document.body.appendChild(btn);
}
addbutton();

function removelist(){
	var list = document.getElementById('music');
	document.body.removeChild(list);
}

// function waterToChocolateMilk(){
// 	var textnode = document.createTextNode("ChocolateMilk!!!");
// 	var item = document.getElementById("myList").childnode[0];
// 	item.replaceChild(textnode, item.childnode[0]);
// }

function writeWords()
{
	document.write("Trevor added me!!!!!!!!");
}
















