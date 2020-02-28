'use strict'

let color1 = 'red',
    color2 = 'yellow'

let say = '我喜欢的颜色是：' + color1 + '和' + color2 + '!';

console.log(say);
// 字符串模板
let sayColor = show `我喜欢的颜色是：${color1}和${color2}!`
console.log(sayColor);

//标签show
function show(strings, ...values) {
    console.log(strings);
    console.log(values);
}

// 新的字符串方法
//以什么开头，以什么结束
console.log(say.startsWith('我'));
console.log(say.endsWith('@@@'));
//是否包含某个字符串
console.log(say.includes('red'));