
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
    
    /* minusBtn.addEventListener("click", function(){
        inputBtn.value = parseInt(inputBtn.value);

        let numone = inputBtn.value;
        let numtwo = inputBtn.value-numone;
        let result = numone-numtwo;
        result = inputBtn.value;
    })

    oneBtn.addEventListener("click", function (){
        inputBtn.value = inputBtn.value + "1"});

    twoBtn.addEventListener("click", function (){
        inputBtn.value = inputBtn.value + "2"}); */

const lines = 5;
let result = '';

/* for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += "*";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "+"; 
    }
    result += "\n";
}

console.log(result); */

for(let i = 0; i <= lines; i++){
    for(let j = 0; j < lines - i; j++){
        result += " ";
    }
    for(let k = 0; k < 2*i + 1; k++){
        result += "*";
    }
result += "\n";
}
console.log(result);