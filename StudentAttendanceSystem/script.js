// 登录结果提示数组
const loginMessages = ["密码错误", "账户名不存在", "登录成功"];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 模拟登录检查（这里简单判断用户名和密码是否为空）
    if (username && password) {
        // 随机生成登录结果索引
        const randomIndex = Math.floor(Math.random() * loginMessages.length);
        const resultMessage = loginMessages[randomIndex];

        if (resultMessage === "登录成功") {
            // 隐藏登录表单，显示主页
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('homepage').style.display = 'block';

            // 使用AJAX获取数据并显示在主页
            fetchData();
        } else {
            alert(resultMessage);
        }
    } else {
        alert("请输入用户名和密码");
    }
}

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // 这里可以添加实际的注册逻辑
    if (newUsername && newPassword) {
        alert("注册成功");
        // 隐藏注册表单，显示登录表单
        showLogin();
    } else {
        alert("请输入用户名和密码");
    }
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function fetchData() {
    // 使用AJAX的GET请求获取数据
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            const attendanceList = document.getElementById('attendanceList');
            data.forEach(function (item) {
                const listItem = document.createElement('li');
                listItem.textContent = item.title;
                attendanceList.appendChild(listItem);
            });
        }
    };
    xhr.send();
}