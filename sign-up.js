let inputElements = document.querySelectorAll('.inputs'); 
let button = document.getElementById('btn');
let kirish = document.getElementById('kirish');
let sign = document.getElementById('sign-up');
kirish.style.display = "none";
let enter = document.getElementById('enter')
let password_2 = document.getElementById('password_2');

button.addEventListener('click', function () {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    for (let input of inputElements) {
        if (!input.value) {
            alert("bo'sh joylar bo'lmasligi kerak ") 
        }else{
            if (name && username && age && password) {
                var user = { name, username, age, password };
                localStorage.setItem(username, JSON.stringify(user));
            }
        }
        
    };
    kirish.style.display = "block";
    sign.style.display = "none"; 
});

enter.addEventListener('click', function () {
    const username_2 = document.getElementById('username_2').value;
    const parol = document.getElementById('password_2').value;
    const user1 = JSON.parse(localStorage.getItem(username_2));

    if (user1 && user1.password === parol) {
        alert("Siz shaxsiy kabinetingizga kirdingiz")
    } else {
        alert("Username yoki parolda xatolik bor")
    }
});
