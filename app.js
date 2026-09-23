// ====================
// BOOKSTORE
// ====================

let name = prompt("What is your name");


// ====================
// Membership Validation
// ====================

function validationMembership() {
    let membership = prompt(
        "What is your membership? student or regular"
    );

    while (membership != "student" && membership != "regular") {
        membership = prompt(
            "What is your membership? student or regular"
        );
    }

    return membership;
}

let membership = validationMembership();


// ====================
// EX1: Welcome
// ====================

if (membership == "student") {
    alert("Welcome Scholar " + name);
} else {
    alert("Welcome Member " + name);
}


// ====================
// Book Information
// ====================

let genre = prompt(
    "Do you prefer fiction or non-fiction?"
);

let bookTitle = prompt(
    "What is the title of the book you want to borrow?"
);

alert("Your requested book is being reserved.");

console.log(name + " ordered the book " + bookTitle);


// ====================
// EX2: User Data
// ====================

function collectUserData(name, membership, genre, bookTitle) {
    let userData = [];

    userData.push(name);
    userData.push(membership);
    userData.push(genre);
    userData.push(bookTitle);

    return userData;
}

let userData = collectUserData(
    name,
    membership,
    genre,
    bookTitle
);

for (let i = 0; i < userData.length; i++) {
    console.log(userData[i]);
}


// ====================
// EX3: Arrays
// ====================

let availableGenres = [
    "Fiction",
    "Science",
    "History",
    "Biography"
];

function applyDiscount(userData) {
    if (userData[1] === "student") {
        userData.push("20% Discount");
    } else {
        userData.push("No Discount");
    }

    return userData;
}

let updatedData = applyDiscount(userData);

console.log("Updated User Data:");
console.log(updatedData);


function addNewGenre(genre) {
    availableGenres.push(genre);

    return availableGenres;
}

addNewGenre("Fantasy");


function displayGenres(availableGenres) {
    for (let i = 0; i < availableGenres.length; i++) {
        console.log("- We offer: " + availableGenres[i]);
    }
}

console.log("Available Genres:");
displayGenres(availableGenres);

// The code and files were organized after resolving all issues using an AI tool.