var btn = document.querySelector(".btn")
btn.addEventListener('click', ajaxReq, false)

function ajaxReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            document.getElementById('container').innerText = this.responseText;
        }
    }
    xhttp.open("Get", 'https://my-json-server.typicode.com/lirenmi/JsonServer/author', true);
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
    xhttp.send("name=Qp&location=shangdong");
}