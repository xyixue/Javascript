window.onload = function(){
    var goBtn = document.querySelector(".goBtn");
    goBtn.onclick = function(){
        window.location.assign("./new.html")
    };

    var backBtn = document.querySelector(".backBtn")
    backBtn.onclick = function(){
        window.history.back();
    }
}