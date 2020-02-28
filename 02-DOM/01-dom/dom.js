var pageTitle = document.getElementById('page-title');
var list = document.getElementsByTagName('li');

var li= document.querySelector('.todo-list li')
// console.log(li);

var lis = document.querySelectorAll('.todo-list li')

// console.log(lis);

//常用属性 
/* console.log(pageTitle.nodeName);
console.log(pageTitle.innerText);
console.log(pageTitle.parentElement);
console.log(pageTitle.previousSibling);
console.log(pageTitle.nextElementSibling.innerText);

var TodoList= document.querySelector('.todo-list')

console.log(TodoList.childNodes);
console.log(TodoList.childElementCount);
console.log(TodoList.firstElementChild);
console.log(TodoList.lastElementChild); */

//改变页面结构
var newItem= document.createElement('li')
// newItem.innerText= '健身'
var newTextItem = document.createTextNode('做家务')
newItem.appendChild(newTextItem)

var TodoList= document.querySelector('.todo-list')
TodoList.appendChild(newItem)  //添加到最后位置
TodoList.removeChild(newItem)   //删除节点

TodoList.insertBefore(newItem,TodoList.firstElementChild)

var subTitle = document.createElement('h3')
subTitle.innerText = '每日清单'
TodoList.parentElement.insertBefore(subTitle,TodoList.previousElementSibling)
