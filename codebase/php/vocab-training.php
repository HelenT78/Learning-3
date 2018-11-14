<?php
/**
 * Created by PhpStorm.
 * User: helen
 * Date: 2018-11-11
 * Time: 8:21 PM
 */

//Поочередно получаем строки и выводим в браузер
$descriptor = fopen('./tureng-vocab2.txt', 'r');
$preparedWords = array();

//print_r ($preparedWords);
// echo массив не печатает - только строчку !!! можно еще var_dump

if ($descriptor) {
    while (($string = fgets($descriptor)) !== false) {
        array_push($preparedWords, $string);
        echo $string;
    }
    fclose($descriptor);
} else {
    echo 'Can not open this file';
}
print_r ($preparedWords);
$readyForCheckWords = array();

foreach ($preparedWords as $v) {
  //  echo "Current value of \$preparedWords: $v.\n";
    $englTurkWords = explode("&&&", $v);

  //  echo $englTurkWords[0], "\n";
    array_push($readyForCheckWords, $englTurkWords);
  //  echo $englTurkWords[1], "\n";
}
print_r ($readyForCheckWords[3][0]);
//[0] или [1] вторым индексом чтобы достучаться до англ-тур варианта
foreach ($readyForCheckWords as $v){
    echo ('')
}
