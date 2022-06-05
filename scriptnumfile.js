
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

class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH();
    }
    //создаем метод для изменения валюты
    changToUAH(){
        this.price = this.price * this.transfer;
    }
    render(){
        const element = document.createElement('div');
        element.innerHTML = `
        <div class='menu__item'>
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle"Меню "Фитнес" </h3>
        </div>
        `;
    }
}

const logs = function(a, b, ...restOp){
    console.log(a, b, restOp);
};
logs ('basic', 'rest', "operator", 'usage');

function calc(number, basic = 2){
    console.log(number * basic);
}

calc(3);
