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

console.log ("Dokuzcu dersi ");
days = "\nCuma Cumartesi Pazar Pazartesi Salı Çarşamba Perşembe";
months = "\nOcak Şubat \nMart Nisan Mayis \nHaziran Temmuz Ağustos \nEylül Ekim Kasım \nOralık ";


console.log ("Oncu dersi");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('kaç yaşındasın? ', (answer) => {
// TODO: Log the answer in a database
console.log(`Sen ${answer} yasindasin, hanim efendi )`);
rl.close();
});



