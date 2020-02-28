'use strict'

/* let colors = ['red', 'green', 'blue']

console.log(colors); //输出数组

//展开数组里面的元素
console.log(...colors);

let newColors = ['yellow', 'grey', ...colors];
console.log(newColors); */

function colors(color1, color2, ...colors) {
    console.log(color1, color2, ...colors);
    console.log(color1, color2, colors);
}

colors('red', 'green', 'blue', 'white')