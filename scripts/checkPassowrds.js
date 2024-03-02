document.addEventListener('DOMContentLoaded', function () {
    const confirmPassword = document.getElementById('confirm-password');
    confirmPassword.addEventListener('blur', checkPasswords);
    // const pageRating = document.getElementById('pageRating');
    // pageRating.addEventListener('onclick', updateValue);
});


function checkPasswords() {
    var password1 = document.getElementById('password');
    var password2 = document.getElementById('confirm-password');
    if (password1.value !== password2.value) {
        alert('Passwords do not match. Please try again.');
        password1.value = '';
        password2.value = '';
        password1.focus();
    }
}

function updateValue() {
    var pageRating = document.getElementById('pageRating');
    var currentValue = document.getElementById('currentValue');
    currentValue.textContent = pageRating.value;
}