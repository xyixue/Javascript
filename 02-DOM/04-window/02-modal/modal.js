window.onload = function () {
    var btn = document.querySelector('.btn')
    btn.onclick = function () {
        // window.alert('青萍')   第一种
        /* var result = window.confirm('你确定吗？') //第二种
        if (result) {
            console.log('确定');

        } else {
            console.log("不确定");
        } */
        // window.prompt("请输入你的名字：",'qP') //第三种
        var name =prompt("请输入你的名字：","青萍")
        if (name !== null || name === ""){
            console.log(name);
            
        }else{
            alert("您没有输入内容")
        }
    }
}