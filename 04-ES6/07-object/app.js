'use strict'

let name = '青萍',
    sex = '女'

/* let author = {
        name: name,
        sex: sex,
        show: function() {
            console.log(`${name},${sex}`);
        }
    } */
// 01、对象表达式，如果对象的属性名和赋值的变量名一样 可以省略
let author = {
    name,
    sex,
    show: function() {
        console.log(`${name},${sex}`);
    }
}
author.show();

// 02、对象的属性名
let student = {}

student.name = '青萍'
student.location = '上海'

student['new location'] = '北京'

console.log(student);

// Object.is   判断两个值是否相等

console.log(+0 === -0);
console.log(NaN == NaN);
console.log(Object.is(NaN, NaN));

// Object.assign  复制

let zuozhe = {}

Object.assign(
    zuozhe, { name: '青萍', sex: '女' }, { name: '小斌', location: 'Geermu' }
);
console.log(zuozhe);

// Object.setPrototype

/* let Animal = {
    name: '',
    walk() {
        console.log("walk");
    }
} */
function Animal(name) {
    this.name = name;
    this.walk = function() {
        console.log('walking');
    }
}

var a1 = new Animal('兔子')
var a2 = new Animal('老鼠')

console.log(a1);
console.log(a2);
console.log(a1.walk === a2.walk);

Animal.prototype.color = 'blank'

console.log(a1.color === a2.color);
Animal.prototype.run = function() {
    console.log(this.name + 'is running.....');
}

a1.run();
a2.run();

// Object.setPrototype

let dog = {
    color: 'yellow',
    run() {
        console.log('running.....');

    }
}

let cat = {
    name: 'katy',
    color: 'black',
    sleep() {
        console.log('...sleeping....');
    }

}

// Object.setPrototypeOf(dog, cat)
console.log(dog, cat)
console.log(dog.color)
console.log(dog.__proto__.color);
// dog.sleep();


// __proto__ // 设置原型对象

dog.__proto__ = cat;

let dw = {
    __proto__: dog,
    run() {
        super.run();
        console.log('....dw is running.....');
    }
}

console.log(dw);

// super  指向原型本身
dw.run();