console.log(window.innerWidth);
console.log(window.innerHeight);

// IE中
console.log(document.documentElement.clientWidth);
console.log(document.body.clientWidth);

window.onload = function () {
    var newWin;
    var btn = document.querySelector('.btn')
    var newBtn = document.getElementById('newBtn')
    //打开窗口
    btn.onclick = function () {
        newWin = window.open('https://baidu.com', '_blanl', 'width=400,height=400');
    }
    //关闭窗口
    newBtn.onclick = function(){
        newWin.close();
    }
    //打印窗口 
    var printBtn = document.querySelector('.print')
    printBtn.onclick = function(){
        window.print();
    }
}