window.onload = function () {
    var imgGroup = document.querySelector('.img-group')
    // false 事件从内向外传播  true 事件从外向内传播  捕获
    imgGroup.addEventListener('click', showMsg, true)

    function showMsg(event) {
        console.log(event.target.alt);
        event.stopPropagation();   // 阻止事件传播
    }

    var neil =document.getElementById('neil')
    
    neil.addEventListener('click',showAnthorMsg,false) 
    function showAnthorMsg(){
        console.log('点击了图片');
    }
}