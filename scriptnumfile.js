
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
/* let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "10");
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
            i--;
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
     console.log(personalMovieDB); */

     /* function showFirstMessage(){
console.log("Hi everyone!");
     }
     showFirstMessage(); */

    /*  function fun(a, b){
         return (a + b);
         console.log()
     }
   
     console.log(fun(6,8)); */

    /*  let logger=function(){
        console.log("ok");
     };
logger();
 const calc=( a,b ) => a+b; */

/*  const str = "test";
 console.log(str.toUpperCase()); */

/*  let fruit = "Some fruit";
 console.log(fruit.indexOf("fruit")); */

/*  let logg = "hello world";
 console.log(logg.slice(6, 10)); */

/*  let num = 12.2;
 console.log(Math.round(num)); */

 /* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

/* let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "10");
    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "10");
    }
}

start();

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function myFavouriteFilms(){
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов?', ""),
            b = prompt('На сколько оцените его?', "");
        if(a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}   

myFavouriteFilms();

function detectPersonallevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count >30) {
                console.log("Вы киномань");
            } else {
                console.log("Ошибка");
            }
}

detectPersonallevel();

function showMyDB(){
    if (personalMovieDB.privat == false){
 console.log(personalMovieDB);
    }
}
  
showMyDB();

     console.log(personalMovieDB);

function writeYourGenres(){
    for(let i = 1; i<=3; i++){
        let genre=prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres(); */

/* function learnJS(lang, callback) {
    console.log(`Я изучаю ${lang}`);
    callback();
}

function done(){
    console.log("Я прошел этот урок");
}

learnJS("JS", done); */

/* let options = {
    name: "test",
    hight: 1024,
    width: 1024,
    colors: {
        border: "red",
        bg: "black"
    },
    makeTest: function(){
      console.log("test");
    }
};

options.makeTest();

let {border, bg} = options.colors;
console.log(border);
delete options.name;

console.log(options);


for (let key in options) {
    if(typeof(options[key]) === "object"){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
   
}

console.log(Object.keys(options).length); */
/* 
let arr = [1, 2, 3, 6, 8];
arr.pop();
console.log(arr); */

/* let str = prompt("","");
let products = str.split("","");
console.log(products.join(';')); */
/* const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передает ссылку, а не значение

copy.a = 10; */

/* const add = {
    d: 6,
    e: 8
};

const clone = Object.assign({}, add); */

/* const Arreyfirst = ["a", "b", "c"];

const Arreysecond = ["d", "e", "f"];

const newArr = [...Arreyfirst, ...Arreysecond, "g", "h"];

console.log(newArr); */

/* function log(a, b, c){
console.log(a);
console.log(b);
console.log(c);
}

const arr=[5, 88, 7];

log(...arr); */

/* const arr = [8, 71, 2];

const arr2 = [...arr];  */

/* const obj = {
    f: 5,
    t: 9
};

const newObj = {...obj}; */

/* const john = {
    health: 100,
    armour: 300
};
const soldier = {
    health: 80
};

/* john.__proto__= soldier; // старый метод, не используется */

/* Object.setPrototypeOf(john, soldier);

const johnny = Object.create(soldier); */
/* 
function checkAge(age) {
    if (age < 18) {
      const message = "Sorry, you're too young.";
    } else {
      const message = "Yay! You're old enough!";
    }

    return message;
  }
  
  console.log(checkAge(21)); */

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



/* let personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start :  function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "10");
        while (personalMovieDB.count == null || personalMovieDB.count == "" || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "10");
        }
    },
    myFavouriteFilms: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt('Один из последних просмотренных фильмов?', ""),
                b = prompt('На сколько оцените его?', "");
            if(a != null && b != null && a != "" && b != "" && a.length < 50){
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonallevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
                } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
                    console.log("Вы классический зритель");
                } else if (personalMovieDB.count >30) {
                    console.log("Вы киномань");
                } else {
                    console.log("Ошибка");
                }
    },
    showMyDB: function(){
        if (personalMovieDB.privat == false){
     console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i<=3; i++){
            let genre=prompt(`Ваш любимый жанр под номером ${i}`);

            if( genre == "" || genre == null){
                console.log("Вы ввели некорректные данные");
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }

}; */

/* const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button")[1];
console.log(btns[1]); */

/* const btns = document.getElementsByClassName("cercle"); */

/* const btns = document.querySelectorAll("#box"); */

/* const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circles"),
      hearts = document.querySelectorAll("hearts"),
      oneHearts = document.querySelector("heart");

box.style.backgroundcolor = 'blue';
box.style.width = "500px";

btns[1].style.hight = "20px";
circles[3].style.cssText = "background-color: blue; width: 50px"; */

/* const div = document.createElement('div');
div.classlist.add('black');
document.body.append(div);
document.querySelector("wrapper").append(div);

hearts[0].before(div);

circles[0].remove();

hearts[0].replaceWith(circles[0]);
div.innerHTML = "<h1>Hello World</h1>";

div.textContent = "<h1>Hello World</h1>"; */


/* let arr = ["audi"," BMW", " porsh", ' Opel', ' Suzuki'];

let author = document.querySelector(".authorOfCourse");



arr[5] = "lada";

console.log(arr);
author.innerText = arr;

let arr1 = document.querySelectorAll("span");

arr1[0].innerText = "ГЛАВНАЯ";

arr1[1].style.color = "white";

const div = document.createElement('div');
document.body.append(div);
div.innerHTML = "<p> Новый параграф </p>";

function sum(a,b){
    let с = a+b;
    return с;
}
arr[6] = sum(1,3);

const div2 = document.createElement('div');
document.body.append(div2);
div2.innerHTML = `<p> Параграф ${sum(1,3)}</p>`;

let inputClass = document.querySelector(".inpClass");
let buttonClass = document.querySelector(".butClass");

buttonClass.addEventListener("click", function(){
    let inputValue = inputClass.value;
    div2.innerText = `Слова автора: ${inputValue}`;
});

let division=5%2;
console.log(5%2);

function lovefunc(flower1, flower2){
    if (flower1%2 == true && flower2%2 == false || flower1%2 == false && flower2%2 == true){
      return true;
    } else {
      return false;
    }
  }

console.log(lovefunc(12,12)); */

let inputBtn = document.querySelector(".inputNum"),
    resetBtn = document.querySelector(".reset"),
    oneBtn = document.querySelector(".one"),
    twoBtn = document.querySelector(".two"),
    threeBtn = document.querySelector(".three"),
    fourBtn = document.querySelector(".four"),
    fiveBtn = document.querySelector(".five"),
    sixBtn = document.querySelector(".six"),
    sevenBtn = document.querySelector(".seven"),
    eightBtn = document.querySelector(".eight"),
    nineBtn = document.querySelector(".nine"),
    zeroBtn = document.querySelector(".zero"),
    plusBtn = document.querySelector(".additione"),
    minusBtn = document.querySelector(".substructione"),
    divideBtn = document.querySelector(".divisione"),
    multiplyBtn = document.querySelector(".multiplication"),
    equalBtn = document.querySelector(".equal");

    resetBtn.addEventListener("click", function (){
        inputBtn.value = ''
    });
    
    minusBtn.addEventListener("click", function(){
        inputBtn.value = parseInt(inputBtn.value);

        let numone = inputBtn.value;
        let numtwo = inputBtn.value-numone;
        let result = numone-numtwo;
        result = inputBtn.value;
    })

    /* oneBtn.addEventListener("click", function (){
        inputBtn.value = inputBtn.value + "1"});

    twoBtn.addEventListener("click", function (){
        inputBtn.value = inputBtn.value + "2"});


        let buttoninput = document.createElement("input");
        buttoninput.setAttribute("type", "number");

        let buttonEnter = document.createElement("button");
        buttonEnter.innerText = "нажать";

        let body = document.querySelector("body");

        body.appendChild(buttoninput);
        body.appendChild(buttonEnter); */

let body = document.querySelector("body");


        for (let i = 1; i < 10; i++){ 
            let inputAny = document.createElement("input");
            inputAny.setAttribute("type", "number");
            body.appendChild(inputAny); 

            let buttonAny = document.createElement("button");
            body.appendChild(buttonAny);
            buttonAny.innerText = "кнопка";
            }