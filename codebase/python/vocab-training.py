#дан файл с турецкими словами и их переводом - каждая фраза отделена от перевода &&&
#нужно сделать тренажер на запоминание этих слов и фраз
#типа слово такое-то введите перевод
#правильный ответ выдавать в случае ошибки или нескольких ошибок

#перемешать массив и нарезать его на блоки по 10 (slice)
#вывести сообщенько - сколько блоков вы готовы пройти сейчас из ... сколько их всего, по умолчанию - все
#и если вбито больше чем можно то все, если меньше чем 1 - берем 1
#научиться выводить все тремя цветами -красным желтым зеленым для errors warnings success
#после выбора - выдать ему их по 1, давать статистику какой блок и из скольки пройден и сколько правильных ответов было

#подготовка к сертификации на QA
#потом сделать с классами когда на вход получает слово и в ответ выдает прав или неправ перевод мы ввели

with open("tureng-vocab3.txt") as file:
    words = [row.strip() for row in file]

#    for row in words:
#        print(*row)

    for row in words:
        for item in row:
            print(item, end='')
        print()

for c, value in enumerate(words, 1):
    print(c, value)
