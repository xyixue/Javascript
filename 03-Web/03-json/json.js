/* var objJson = '{"name": "青萍","sex":1}';

console.log(JSON.parse(objJson));

var obj = {
    name: "青萍",
    sex: 1,
    f: function () {
        console.log("function");
    }
}

var arrayJson = '[{"id" :1 , "name":"青萍"},{"id":2,"name":"小斌"}]'

var arr =[
    {
        id :1,
        name:"青萍"
    },{
        id:2,
        name:"小斌"
    }
]

console.log(JSON.stringify(arr)); */

var btn = document.querySelector(".btn")
btn.addEventListener('click', ajaxReq, false)

function ajaxReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);
        if (this.readyState === 4 && this.status === 200) {
            var obj = JSON.parse(this.responseText)
            console.log(obj);
            document.getElementById('container').innerText = obj.name;
        }
    }
    xhttp.open("Get", 'https://my-json-server.typicode.com/lirenmi/JsonServer/author', true);
    // xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhttp.send();
}