'use strict'

//类
class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.todo = [];
    }

    // set
    set todolist(item) {
        this.todo.push(item)
    }

    //static
    get todolist() {
        return this.todo
    }

    intro() {
        return `${this.name},${this.sex}`
    }

    show() {
            console.log(this.name);
        }
        //静态
    static display(name) {
        console.log(name);
    }
}

let qp = new Person('青萍')
qp.show();
qp.todolist = '健身'
qp.todolist = '读书'
console.log(qp.todolist);

Person.display('青萍')

// 继承

class Author extends Person {
    constructor(name, sex) {
        super(name, sex);
    }
}

Author.display("Hello")

let qingping = new Author("亦雪", '女')

console.log(qingping.intro());