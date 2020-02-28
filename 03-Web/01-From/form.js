function validateForm() {
    var form = document.loginForm;
    var userName = form.userName.value;
    var password = form.password.value;

    if (userName === null || userName === "") {
        alert("请输入用户名");
        return false;
    } else if (password.length <= 6) {
        alert("密码至少为六位");
        return false;
    }
}ß