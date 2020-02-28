'use strict'

// set 集合
let colors = new Set('red')

console.log(colors);

let rams = new Set(['4G'])

rams.add('8G').add('16G').add("4G") // 自动过滤，不许重复

console.log(rams);
console.log(rams.size);

console.log(rams.has("32G")); // set 集合是否包含

rams.delete('4G') //删除元素

console.log(rams);

rams.forEach(ram => {
    console.log(ram);
})

rams.clear();

console.log(rams);

//map 集合   一对数据

let colorMap = new Map();

colorMap.set('r', 'red').set('y', 'yellow');

console.log(colorMap);

console.log(colorMap.get('r'));

colorMap.forEach((value, key) => {
    console.log(`${key} == ${value}`);
})

colorMap.clear();
console.log(colorMap);