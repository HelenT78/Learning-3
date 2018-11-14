<?php

echo "Hello World \r\n"; #Linux style comment
/* several rows
comment */
echo 'Let s write smth here',"\r\n"; // the other example of comments


echo "lets count smth in php \r\n";
$a = 5+1*0.5-3%2;
echo 'results - a =', $a, "\r\n";

/*exercise 4  */

$buses = 10;
$space_in_bus = 30;
$passengers = 5000;
$bus_drivers = 5;

$passengers_in_reality = $buses * $bus_drivers * $space_in_bus;

echo "we have ", $buses, " buses \r\n";
echo "but only ", $bus_drivers, " drivers\r\n";
echo "so we can help only ", $passengers_in_reality, " instead of ", $passengers, " passengers\r\n";

print ("Exercise 5 \r\n");

$name = "Protein";
$age = 39;
$height = 157;
$weight = 53;
$eyes = "brown";

$hair = "dark brown";

printf ("Lets talk about a person with name %s \r\n", $name);
printf ("she is %d tall \r\n", $height);
printf ("her weight is %d \r\n", $weight);
printf ("she has %s eyes and %s hair \r\n", $eyes, $hair);

printf ("if I will add %d, %d and %d, then I'll get %d \r\n", $age, $height, $weight, $age + $height + $weight);
printf (" %s s tallness  is %d foots and %d inches\r\n", $name, $height/2.54/12, $height%30.48);


printf ("Exercise 6 \r\n");

#присвоение строки с формат выводом числа 10
$people = 10;
printf("There are %d types of people",$people) ;


#присвоение значений текстовым строкам
$binary = "python";
$do_not = "no";
# то что с %r выводится еще и в кавычках, то что %s - просто буквами
printf("\r\nwho understand %r, and who - %s", $binary, $do_not);
#форматированный вывод

#вывод двух строк - добавление второй в качестве форм вывода - строка равна х
printf ("\r\nI said - there are %d types of people", $people);

printf ("\r\nand I also said \r\n There are %d types of people who understand %r, and who - %s\r\n",$people, $binary, $do_not);
$hilarious = False;
printf ("Isn't it %b ?\r\n", $hilarious);


$w = "This part of text is from the left part ...";
$e = "  and that is - from the right ";

echo ($w.= $e);  // конкатенация строк в php

#$stdin = fopen("php://stdin", "r");
#$line1 = gets($stdin);
#$line2 = gets($stdin);
#fclose($stdin);


// Set the limit to 5 MB.
$fiveMBs = 5 * 1024 * 1024;
$fp = fopen("php://temp/maxmemory:$fiveMBs", 'r+');

fputs($fp, "hello\n");

// Read what we have written.
rewind($fp);
echo stream_get_contents($fp);


