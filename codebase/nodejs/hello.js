var sprintf = require("sprintf-js").sprintf;
console.log('Türkçe konuşuyor musun?');



// komment burada
console.log ('üzerinde komment görmek musun?');

//let a = 5;
console.log('math okuyorum', 5+3*0.3-14%5);

//exercise 4

let buses = 10;
let space_in_bus = 30;
let passengers = 5000;
let bus_drivers = 5;

let passengers_in_reality = buses * bus_drivers * space_in_bus;

console.log ("Biz", buses, "otobus var");
console.log ("ve", bus_drivers, "sofor var");
console.log ("böylece yardımcı olabiliriz", passengers_in_reality, "yerine", passengers, "yolcu");


//from python
console.log ("Exercise 5");

let name = "Helen";
let age = 39;
let height = 157;
let weight = 53;
let eyes = "brown";
let hair = "dark brown";

console.log (sprintf("Lets talk about a person with name %s", name));
console.log (sprintf ("she is %d tall", height));
console.log (sprintf("her weight is %d", weight));
console.log (sprintf("she has %s eyes and %s hair", eyes, hair));

console.log (sprintf("if I will add %d, %d and %d, then I'll get %d", age, height, weight, age + height + weight));

console.log (sprintf("%s's tallness  is %d foots and %d inches", name, height/2.54/12, height%30.48));

console.log ("Exercise 6");

//присвоение строки с формат выводом числа 10
let x = "There are %d types of people";
    //%10;
//присвоение значений текстовым строкам
//let binary = "programming languages";
//let do_not = "no";
// то что с %r выводится еще и в кавычках, то что %s - просто буквами
//let y = "who understand %r, and who - %s", binary, do_not);
//форматированный вывод
console.log (sprintf(x));
//console.log (y);
//вывод двух строк - добавление второй в качестве форм вывода - строка равна х
console.log (sprintf("I said %s" , x));
//console.log (sprintf("and I also said '%s'" %y));
let hilarious = 0;
let joke_evaluation = "Isn't it funny? %r";
console.log (sprintf (joke_evaluation % hilarious));

let w = "It s part of string from the left.....";
let e = "and that is - from the right";

console.log (w + e);

