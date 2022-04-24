
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

/* let result = "";
let lenght = 15;
first: for(let i = 1; i < lenght; i++){
    console.log(i);
    for(let j = 1; j < i; j++){
        console.log(j);
        for( let k =1; k < j; k++){
     console.log(k);
     if(k === 2){
         break first;}
        }
    }
        } */

let arr = [3, 5, 8, 16, 20, 23, 50];
let result = [];
/* let result = [...arr, 60, 80]; */

/* result[0]= 3;
result[1]= 5;
result[2]= 8;
result[3]= 16;
result[4]= 20;
result[5]= 23;
result[6]= 50; */

/* for(let i = 0; i < arr.length; i++){
    result[i] = arr[i]; 
}*/

/* console.log(arr);
console.log(result); */

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let j = 0; j < data.length; j++){
    if(typeof(data[j]) === "string"){
        data[j] = `${data[j]} - done`;
    } else if (typeof(data[j]) === "number"){
        data[j] = data[j]*2;
    }
  }
console.log(data);

for (let i = 1; i <= data.length; i++){
result[i - 1] = data[data.length - i];
}
console.log(result);
