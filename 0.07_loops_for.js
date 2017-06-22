//For loops
//For loops are similar to while loops in that they let us reapeat statements 
//However, they are more specialized 

//for(counter;condition;increment){
//	code to be run
//}

function p(text){
	console.log(text);
}


// for(var i=1;i<50;i+=5){
// 		p(i);
// }

// for(var i=0;i<=100;i+=5){
// 	p(i);
// }

// for(var i=3;i<40; i+=7){
// 	p(i);
// }

//Break statement <- covered in switch earlier 
//breaks are used to prematurely exit a loop

for (var i=0;i<20;i++){
	p("Testing:", i);
	if(i===13){
		p("Found 13!");
		break;
	}
}

//for in loops
//do while loops 
//both can be looked up on our own 
