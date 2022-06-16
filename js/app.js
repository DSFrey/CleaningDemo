'use strict';
console.log('app js file is connected');

function iscolor(strcolor) {
    let s = new Option().style;
    s.color = strcolor;
    return s.color == strcolor;
}

function askcolor() {
    let color = prompt('What color do you want?').toLowerCase();
    if(iscolor(color)){
        document.getElementById('background').style.backgroundColor = color;
    } else {
    alert('I do not know that color')
    }
}
