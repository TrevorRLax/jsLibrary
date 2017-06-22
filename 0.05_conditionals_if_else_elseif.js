//If/ElseIf/Else statments
//ElseIf states allow for more than just two possible outcomes

var isFast = true;
var isSmart = true;

//only one will happen, it picks the first true one and skips the rest of them
if(isFast){
	console.log("Wow you're fast!")
}else if(isSmart){
	console.log("Well, at least you're smart");
}else{
	console.log("Maybe spend more time in the gym and school")
}