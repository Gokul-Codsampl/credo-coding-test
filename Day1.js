//program for Multiplication Table
let n = 2;
for (let i = 1; i <= 10; ++i)
	console.log(n + " * " + i + " = " + n * i);

//program for current date 
var CurrentDate = new Date();

var day = CurrentDate.getDate();
var month = CurrentDate.getMonth()+1;
var year =CurrentDate.getFullYear();

var  date = day+" /"+month+"/"+year;

console.log("current date:"+date)

//Program for convert first letter to uppercase
function capitalizeFLetter() {

    let string = 'credo systemz';

    console.log(string.replace(/^./, string[0].toUpperCase()));
}
capitalizeFLetter()

//Program for add element to start array
const fruits = ["Gokul", "Vishal", "Tharun", "Hari"];
fruits.unshift("Tharun","Hari");
console.log(fruits)
