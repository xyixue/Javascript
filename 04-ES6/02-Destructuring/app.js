'use strict'

function getColor(){
    return ['red','green','blue']
}
function getPhone(){
    return {
        1:'huawei',
        2:'xiaomi'
    }
}

// 解构数组 
let[color1,color2,color3] = getColor();
console.log(color1,color2,color3);

// 解构对象

let {'1':one,'2':two} = getPhone();
console.log(one,two);

//解构参数
function show(type,location,{name,sex}){
    console.log(type,location,name,sex);
}

var student = {
    name :'青萍',
    sex:'女'
}

show('英语','6号考场',student)