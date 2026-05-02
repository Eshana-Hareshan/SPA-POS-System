let userName = document.getElementById('user-name');
let password = document.getElementById('user-password');
let submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    const UserName = "Eshana";
    const Password = "123";

    if (userName.value === UserName) {
        if (password.value === Password) {

            $('#login-page').hide();
            $('#customer_content').show();
            $('#navbar').show();
            $('#sidebar').show();

        } else {
            alert("Password incorrect");
        }
    } else {
        alert("Username incorrect");
    }
});