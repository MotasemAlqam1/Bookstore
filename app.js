let userData = [];

const bookForm = document.getElementById("bookForm");
const results = document.getElementById("results");
const registerButton = document.getElementById("registerButton");
const successMessage = document.getElementById("successMessage");

const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


registerButton.disabled = true;

function validateForm() {
    const userNameValue = username.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    if (userNameValue != "" && passwordValue != "" && passwordValue === confirmPasswordValue) {
        registerButton.disabled = false;
    }
    else {
        registerButton.disabled = true;
    }

}

username.addEventListener("input" , function(){
    validateForm();
});

password.addEventListener("input" , function(){
    validateForm();
});

confirmPassword.addEventListener("input" , function(){
    validateForm();
});



function renderUsers(userData) {
    results.textContent = "";
    for (let i = 0; i < userData.length; i++) {
        const resultCard = document.createElement("div");
        resultCard.className = "result-card";

        const userName = document.createElement("p");
        userName.textContent = "userName: " + userData[i][0];
        resultCard.appendChild(userName)

        const membershipElement = document.createElement("p");
        membershipElement.textContent = "Membership: " + userData[i][1];
        resultCard.appendChild(membershipElement)

        const genreElement = document.createElement("p");
        genreElement.textContent = "genre: " + userData[i][2];
        resultCard.appendChild(genreElement)

        const bookTitleElement = document.createElement("p");
        bookTitleElement.textContent = "bookTitle: " + userData[i][3];
        resultCard.appendChild(bookTitleElement)

        results.appendChild(resultCard);

    }
}


bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userNameValue = username.value;
    const usernameError = document.getElementById("usernameError");
    if (userNameValue === "") {
        usernameError.textContent = "Username is required";
    }
    else {
        usernameError.textContent = "";

    }

    const passwordValue = password.value;
    const passwordError = document.getElementById("passwordError");
    if (passwordValue === "") {
        passwordError.textContent = "password is required";
    } else {
        passwordError.textContent = "";
    }

    const confirmPasswordValue = confirmPassword.value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPasswordValue === "") {
        confirmPasswordError.textContent = "confirm Password is required";
    } else {
        confirmPasswordError.textContent = "";
    }


    if (passwordValue != confirmPasswordValue) {
        confirmPasswordError.textContent = "Passwords do not match";
    } else {
        confirmPasswordError.textContent = "";
    }



    const membership = document.getElementById("membership");
    const membershipValue = membership.value;

    const genre = document.getElementById("genre");
    const genreValue = genre.value;

    const bookTitle = document.getElementById("bookTitle");
    const bookTitleValue = bookTitle.value;

    if (membershipValue != "student" && membershipValue != "regular") {
        alert("wrong input");
        return;
    }

    userData.push([userNameValue
        , membershipValue
        , genreValue,
        bookTitleValue]);


    renderUsers(userData);
    successMessage.textContent = "Registration successful!";


});







