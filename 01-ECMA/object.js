//创建对象
/* var phone = {};
phone.color = 'red';
phone['RAM'] = '8G';
phone.brands = 'iphone';
console.log(phone); */

var phone = {
    color: 'green',
    brands: 'iphone',
    RAM: '8G',
    SIZE: ['64G', '128G', '256G', '512G'],
    showSizes: function () {
        for (var i = 0; i < this.SIZE.length; i++) {
            console.log(this.SIZE[i]);
        }
    }
}
// console.log(phone);

//访问属性
console.log(phone['color']);
console.log(phone.RAM);
console.log(phone.SIZE[1]);

//更新属性
phone.SIZE[3] = '480G'
console.log(phone);

//删除属性
delete phone.RAM;
console.log(phone);

/* phone.showSizes = function(){
    for(var i =0;i<this.SIZE.length;i++){
        console.log(this.SIZE[i]);
    }
} */

phone.showSizes();

//输出对象的所有属性
var property;
for (property in phone) {
    if (typeof(phone[property]) !== 'function') {
        console.log(property + ' : ' + phone[property]);
    }
}