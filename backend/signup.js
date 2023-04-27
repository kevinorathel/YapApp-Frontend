const signUp = document.querySelector(".btn-primary");

signUp.addEventListener('click', (event) => {
    
    event.preventDefault();
    const userName = document.querySelector('#userName').value;
    const email = document.querySelector('#email').value;
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    const flag = checker(userName, email, firstName, lastName, password, confirmPassword);
    if(flag){
        alert("Account created succesfully!");
        window.location.href = "../Code/login.html";
    }
});

function checker(userName, email, firstName, lastName, password, confirmPassword){

    if(userName === ""){
        alert("Please enter a username.");
        return false;
    }
    else if(email === ""){
        alert("Please enter a email.");
        return false;
    }
    else if(firstName === ""){
        alert("Please enter a first name.");
        return false;
    }
    else if(lastName === ""){
        alert("Please enter a last name.");
        return false;
    }
    else if(password === ""){
        alert("Please enter a password.");
        return false;
    }
    else if(confirmPassword === ""){
        alert("Please re enter your password.");
        return false;
    }
    else if(password != confirmPassword){
        alert("Password and Confirm Password dont match.");
        return false;
    }
    else{
        return true;
    }
}

