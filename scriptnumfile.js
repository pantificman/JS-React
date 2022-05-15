
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
    
/* function sayHello(name){
    return `Hello ${name}`;
}

let result = sayHello("Anton");
console.log(result);


function returnNeighboringNumbers(a){
return [a-1, a, a+1];
}
let rez = returnNeighboringNumbers(2);
console.log(rez); */
// Место для первой задачи
function sayHello(name) {
    return `Hello ${name}`;
    }
    
    // Место для второй задачи
    function returnNeighboringNumbers(a) {
    return [a-1, a, a+1];
    }
    
    // Место для третьей задачи
    function getMathResult(a,b) {
    let str = "";
        if( typeof(b) !== "number" || b <= 0){
             return a;
        }
        for(let i = 1; i<=b; i++){
            if(i == b){
                str = str + i*a;
            }else{
            str = str + i*a +"---";
            }
            }
        return str;
    }
