'use strict';
console.log('app js file is connected');

// let userName = prompt('What is your name?');

// console.log('Well hello there,',userName);

// let age = prompt('How old are you');

// let ageNum = parseInt(age);

// console.log('You are',ageNum);

// let message;

// if(age <= 12){
//     message = 'Aw, you\'re cute';
// } else if(age <= 19){
//     message = 'GROW UP';
// } else if(age > 19){
//     message = 'You are old';
// } else {
//     message = 'I need a number'
// }

// console.log(message);

// document.getElementById(askcolor)

function iscolor(strcolor) {
    let s = new Option().style;
    s.color = strcolor;
    return s.color == strcolor;
}



function askcolor() {
    let color = prompt('What color do you want?');
    if(iscolor(color)){
        document.getElementById('background').style.backgroundColor = color;
    } else {
    alert('I do not know that color')
    }
}
