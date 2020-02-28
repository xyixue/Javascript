'use strict'

if(true){
    let words = 'hello, ES6'  //块级作用域  没有变量提升
}

// console.log(words);

const color = 'red'  // 常量 不可以重复声明，不可以再次赋值

console.log(color);

// const color = 'blue'  //Identifier 'color' has already been declared

// color = 'blue'  //Uncaught TypeError: Assignment to constant variable.

const ram = ['8g']

ram.push('16g')
console.log(ram);  //可以改变
