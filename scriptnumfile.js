
"use strict";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "10");
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

 let a = prompt('Один из последних просмотренных фильмов?', ""),
     b = prompt('На сколько оцените его?', ""),
     c = prompt('Один из последних просмотренных фильмов?', ""),
     d = prompt('На сколько оцените его?', "");

     personalMovieDB.movies[a] = b;
     personalMovieDB.movies[c] = d;

     console.log(personalMovieDB); */

     /* let num = 50;
     if(num < 50) {
        console.log("ok");
     } else if (num > 100){
        console.log("error");
     } else {
         console.log("ok");
     }

     (num == 50) ? console.log("truth"): console.log("false"); */

     /* let num = 50;

     switch(num) {
         case 49: console.log("неверно");
         break;
         case 100: console.log("неверно");
         break;
         case 50: console.log("верно");
         break;
         default : console.log("не в этот раз");
         break;
     } */
/* let num = 50; */
     /* while (num <= 55){
        console.log(num);
         num++;
     } */

/*      do {
        console.log(num);
         num++;
     } while (num <= 55); */

     /* for (let i = 1; i < 8; i++){
         if(i == 6){
             continue;
         }
         console.log(i);
     } */
     /* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "10");
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

     for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов?', ""),
            b = prompt('На сколько оцените его?', "");
        if(a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--; /* если это условие не выполнилось мы вернемся на один цикл назад, чтобы снова задать вопросы заново */
        }
    }
    if(personalMovieDB.count < 10){
console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >30) {
        console.log("Вы киномань");
    } else {
        console.log("Ошибка");
    }
     console.log(personalMovieDB);