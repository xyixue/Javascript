var timer;
window.onload = function(){
    var btn = document.querySelector('.btn')
    btn.onclick = function(){
        timer = window.setInterval(showTime,1000);  // 每隔1秒循环执行
    }
    var closeBtn = document.getElementById("close")
    closeBtn.onclick = function(){
        window.clearInterval(timer)
    }
}
var showTime = function(){
    var d = new Date();
    console.log(d.toLocaleTimeString())
} 



/* var timer;
window.onload = function(){
    var btn = document.querySelector('.btn')
    btn.onclick = function(){
        timer = window.setTimeout(showMsg,2000);  // 延迟2秒执行
    }
    var closeBtn = document.getElementById("close")
    closeBtn.onclick = function(){
        window.clearTimeout(timer)
    }
}
var showMsg = function(){
    console.log("2秒后按钮被点击了")
}  */