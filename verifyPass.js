const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

let typingTimer;
let doneTypingInterval = 700;
let passwordVal;
let confirmPasswordVal;

password.addEventListener("keyup", function(){
    passwordVal = document.getElementById("password").value;
    startTimerToVerify();   
});

confirmPassword.addEventListener("keyup", function(){
    confirmPasswordVal = document.getElementById("confirm_password").value;
    startTimerToVerify()
});

function startTimerToVerify(){
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
}

password.addEventListener('keydown', function () {
    clearTimeout(typingTimer);
});

confirmPassword.addEventListener('keydown', function () {
    clearTimeout(typingTimer);
});

function doneTyping () {
    if (passwordVal === confirmPasswordVal) {
        password.classList.replace("error", "correct");
        confirmPassword.classList.replace("error", "correct");
    } else {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        password.classList.remove("correct");
        confirmPassword.classList.remove("correct");
    }
}