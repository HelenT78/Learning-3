//дан файл с турецкими словами и их переводом - каждая фраза отделена от перевода &&&

//нужно сделать тренажер на запоминание этих слов и фраз

//типа слово такое то введите перевод правильный ответ выдавать в случае ошибки или нескольких ошибок

//потом сделать с классами когда на вход получает слово и в ответ выдает прав или неправ перевод мы ввели


// подсказка от паши - массив массивов где нулевой элемент на русск а 1 на турецком

// ну или сравнение на точное соответствие по индексу


//var fs = require("fs");
//var text = fs.readFileSync("./tureng-vocab1.txt").toString('utf-8');

//let textByLang = text.split('&&&');

//console.log (textByLang, typeof textByLang);

let fs = require('fs');
let strings = fs.readFileSync('./tureng-vocab1.txt').toString().split("\n");
let preparedWords = [];
//console.log(array);
for(i in strings) {
    preparedWords.push(strings[i].split("&&&"));
}
console.log(preparedWords);
for (i in strings) {

    let randomIndex = Math.floor(Math.random() * Math.floor(preparedWords.length));
    console.log("random index=",randomIndex);
    console.log('random word now is', preparedWords[randomIndex][0]);
}
 //   console.log(preparedWords);

// еще нужно ввести вариант турецкого перевода этого слова от пользователя и потом сравнить 1й элемент массива с нулевым

//на потом - сделать грамматическую самообучающуюся прогу для построения турецких фраз и предложений