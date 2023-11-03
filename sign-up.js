let inputElements = document.querySelectorAll('.inputs'); // Barcha "inputs" klassiga ega input elementlarni tanlaymiz
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
            alert("bo'sh joylar bo'lmasligi ") 
        }else{
            if (name && username && age && password) {
                const user = { name, username, age, password };
                localStorage.setItem(username, JSON.stringify(user));
            }
        }
        
    };
    kirish.style.display = "block";
    sign.style.display = "none"; 
});

enter.addEventListener('click', function () {
    
});