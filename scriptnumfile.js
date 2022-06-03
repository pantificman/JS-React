
"use strict";

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
        inputBtn.value = '';
    });

/* function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5); */

/* const obj = {
    a : 20,
    b : 15,
    sum: function(){
        function shout(){
            console.log(this);
        }
        shout();
    }
};
obj.sum(); */

class Rectangle {
    constructor(height, width){
        this.height = height;
        this. width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor} `);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');

div.showMyProps();
console.log(div.calcArea());

/* const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());
 */
// 1) Обычная функция : this = window, но если стоит "use strict" - undefined
// 2) Контекст у методов обекта - сам обект
// 3) this в конструкторах и классах - это новый экземпляр обекта