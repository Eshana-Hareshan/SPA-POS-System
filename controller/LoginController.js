let userName = document.getElementById('user-name');
let password = document.getElementById('user-password');
let submitButton = document.getElementsByClassName('btn-submit');

submitButton.addEventListener('click', function(){
    userName.value = 'Eshana';
    password.value = '123';
})