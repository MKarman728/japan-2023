// Set password with pw variable
const pw = 'ramen';
console.log(pw);
const passwordInput = document.getElementById('password');
const passwordContainer = document.getElementById('password-container');
const navbar = document.getElementById('navbar');


function passwordVerification(e) {
    e.preventDefault();
    if (passwordInput.value === pw) {
        localStorage.setItem('pw', passwordInput.value);
        navbar.style.display = 'flex';
        passwordContainer.style.display = 'none';
    }
    else {
        passwordInput.value = '';
    }
}

function passwordCheck() {
    const passwordVerification = localStorage.getItem('pw');
    if (passwordVerification === pw) {
        navbar.style.display = 'flex';
        passwordContainer.style.display = 'none';
    }
}

document.getElementById('password-submit').addEventListener('click', passwordVerification);
document.addEventListener('DOMContentLoaded', passwordCheck);