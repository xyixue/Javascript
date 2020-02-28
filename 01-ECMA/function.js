/* //定义函数
function sayHi(message,name){
    console.log(message + name);
}
//调用函数
sayHi('Hello',"Qp"); */

//函数表达式
/* var sayHi= function(message){
    console.log('Hello , Xb');
}
sayHi(); */

var msg = 'Hello javascript'  //全局变量

var sayHi = function(){
    var i = 0;
    console.log(msg + i);
}
sayHi();
console.log(i);  // 函数内部变量 i is not defined
