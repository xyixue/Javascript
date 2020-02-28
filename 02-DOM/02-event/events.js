clickMe = function () {
    console.log('被点击了');
}
mouseUp = function () {
    console.log('鼠标移上去了');
}
mouseOut = function () {
    console.log('鼠标移走了');
}
window.onload = function () {
    var btn2 = document.querySelector('.btn2')
    /* btn2.onclick = function () {
        console.log('被点击了');
    } */
    function showMsg(event){
        console.log('被点击了');
        console.log(event);
        console.log(event.target.innerText);
        
        
    }
    btn2.addEventListener('click',showMsg,false);
}