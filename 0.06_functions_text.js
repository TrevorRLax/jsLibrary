// Bronze 
function makeModel(laptop,company){
	return laptop+" "+company
}
console.log(makeModel("MacBook pro","Apple Inc."));

// Silver 
water = 150;
ac=225;
cable = 300;

function monthlybill(water,ac,cable){
	return ((150+225+300)*1.07);
}
console.log("Here is your monthly total:" + monthlybill());

// Gold
soda = .99
function party(soda,num){
	return ((.99*100)*1.07)
}
greeting = "100 Cokes will cost you $"

console.log(greeting + party());
