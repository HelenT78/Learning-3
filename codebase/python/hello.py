# -*- coding: utf- 8 -*-

print ("Это у нас текст на русском")
print('и он даже напечатался нормально')
print('and this is just sentence in english')
# комментарий которого не видно
print ('выше был коммент  - по идее его не видно')

print ('lets count smth', 1/5.0+2-(5.0%3))

print ("Exercise 4")

buses = 10
space_in_bus = 30
passengers = 5000
bus_drivers = 5

passengers_in_reality = buses * bus_drivers * space_in_bus

print ("we have", buses, "buses")
print ("but only", bus_drivers, "drivers")
print ("so we can help only", passengers_in_reality, "instead of", passengers, "passengers")

print ("Exercise 5")

name = "Helen"
age = 39
height = 157
weight = 53
eyes = "brown"
teeth = "almost white"
hair = "dark brown"

print ("Lets talk about a person with name %s" %name)
print ("she is %d tall" %height)
print ("her weight is %d" %weight)
print ("she has %s eyes and %s hair" %(eyes, hair))

print ("if I will add %d, %d and %d, then I'll get %d" %(age, height, weight, age + height + weight))

print ("%s's tallness  is %d foots and %d inches" %(name, height/2.54/12, height%30.48))

print ("Exercise 6")

#присвоение строки с формат выводом числа 10
x = "There are %d types of people" %10
#присвоение значений текстовым строкам
binary = "python"
do_not = "no"
# то что с %r выводится еще и в кавычках, то что %s - просто буквами
y = "who understand %r, and who - %s" %(binary, do_not)
#форматированный вывод
print (x)
print (y)
#вывод двух строк - добавление второй в качестве форм вывода - строка равна х
print ("I said %s" %x)
print ("and I also said '%s'" %y)
hilarious = False
joke_evaluation = "Isn't it funny? %r"
print (joke_evaluation % hilarious)

w = "It s part of string from the left....."
e = "and that is - from the right"

print (w + e)

print ("Exercise 7")
print ("Genellikle Istanbula gitmek %s" %'hissetiyorum')
print ("Nisan fotolar muzesi gormek %s" %'istiyorum')

end1 = "m"
end2 = "y"
end3 = " "
end4 = "p"
end5 = "l"
end6 = "a"
end7 = "n"
end8 = "s"

print (end1 + end2 + end3 + end4 + end5 + end6 + end7 + end8)

print ("Dokuzcu dersi ")
days = "\nCuma Cumartesi Pazar Pazartesi Salı Çarşamba Perşembe"
months = "\nOcak Şubat \nMart Nisan Mayis \nHaziran Temmuz Ağustos \nEylül Ekim Kasım \nOralık "

print ("\nburada haftanın günleri", days)
print ("\nburası yılın ayları", months)

print ("""
Istanbul - sevgilim
Turkce okuyorum
""")



