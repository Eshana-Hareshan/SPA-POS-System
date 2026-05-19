let userName = document.getElementById('user-name');
let password = document.getElementById('user-password');
let submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function () {

    const UserName = "Eshana";
    const Password = "1";

    if (userName.value === UserName) {
        if (password.value === Password) {

            $('#login-page').hide();
            $('#dashboard_content').show();
            $('#navbar').show();

        } else {
            alert("Password incorrect");
        }
    } else {
        alert("Username incorrect");
    }
});