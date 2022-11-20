// switch statement

trafficLight = '';

switch (trafficLight) {
	case 'green':
		console.log("Drive");
		break
	case 'red':
		console.log('stop');
		break
	case 'yellow':
		console.log("Get Ready");
		break
    default:
        console.log("Light is not working")
}

var age = 67;

if (age>=65) {
    console.log("You get your income from your pension")

}else if (age<65 && age >=18){
    console.log("Each month you get a salary")

}else if (age<18){
    console.log( "You get an allowance")
}else {
    console.log("The value of the age variable is not numerical")
}

