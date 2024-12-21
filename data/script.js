function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = "YXJ0ZW0=";  
    const correctPassword = "YXJ0ZW1vbg==";

    const encodedBurgerHtml = "cHVibC5odG1s";

    const decodedBurgerHtml = atob(encodedBurgerHtml);

    if (username === atob(correctUsername) && password === atob(correctPassword)) {
       
        window.location.href = decodedBurgerHtml;  
    } else {
        window.location.href = "404/index.html";
    }
}