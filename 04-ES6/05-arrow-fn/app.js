'use strict'

// var show = function() {
//     console.log('something');
// }

// 无参数
let show = () => {
    console.log('arrow');
}
show();

//有一个参数

// let showName(name){
// console.log(name);
// }

let showName = name => name;

console.log(showName("青萍"));

//有两个参数
// function sum(n1, n2) {
//     var a = n1 + n2;
//     console.log(`n1:${n1},n2:${n2}`);
// }
let sum = (n1, n2) => {
    console.log(`n1:${n1},n2:${n2}`);
}


sum(5, 4)