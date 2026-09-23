// let name = prompt("What is your name");
// let membership = prompt("What is a membership? student or regular");

// if (membership == "student") {
//     alert("Welcome Scholar " + name);
// }
// else if (membership == "regular") {
//     alert("Welcome Member " + name);
// }
// else {
//     alert("welcom" + name)
// }

// let genre = prompt("Do you prefer fiction or non-fiction ?");
// let bookTitle = prompt("What is the title of the book you want to borrow ?");

// alert("Your requested book is being reserved.");

// console.log(name + " ordered the book " + bookTitle);

// let x1 = -9*3;
// console.log(x1);

// console.log("value is"+ 50);

// let x2 = 17%5;
// console.log(x2);

// let x3 = 5%17;
// console.log(x3);

// let x = 5/10;
// console.log(x);

// console.log(4==4);

// console.log(4!=5);


// console.log(7<=8);

// let x = 3.4;
// let y;
// y= Math.ceil(x) - Math.floor(x);
// console.log(y);

// let x = 3;
// let y;
// y= Math.ceil(x) - Math.floor(x);
// console.log(y);

// console.log(typeof(100));
// console.log(typeof(73.9));
// console.log(typeof(NaN));
// console.log(typeof("Water"));
// console.log(typeof(false));
// console.log(typeof(9!=11));

// console.log("Orang"+"e");
// console.log("Orang"-"s");

// console.log("4"+"8");
// console.log("4"-"8");

// console.log("name"+3);
// console.log("name"-3);
// console.log(82*"word");
// console.log(1 + "hello");
// console.log("hello" + 1 );
// console.log(1+true);
// console.log("hello" + true);
// console.log(typeof(Infinity));
// console.log(1=='1');
// console.log(1==='1');

// let number= prompt("enter a number ?");
// alert(number);

// let number1 = Number(prompt("enter the first number "));
// let number2 = Number(prompt("enter the second  number "));

// if (number1>=number2)
//     console.log(number1,number2)
// else
//     console.log(number2,number1)

// let number1 = Number(prompt("enter the first number "));
// let number2 = Number(prompt("enter the second  number "));

// if (number1>=number2)
//     console.log(number1)
// else
//     console.log(number2)

// let number1 = Number(prompt("enter the first number "));
// let number2 = Number(prompt("enter the second  number "));
// let result = number1+number2;
// console.log(result);
// console.log(typeof(result));


// let num = Number(prompt("enter a number :"));
// if (num == 1){
//     console.log("ONE")
// }
// else if (num === 2)
// {
//     console.log("TWO")
// }
// else if (num === 3)
// {
//     console.log("THREE")
// }
// else if (num === 4)
// {
//     console.log("FOUR")
// }
// else if (num === 5)
// {
//     console.log("FIVE")
// }
// else if (num === 6)
// {
//     console.log("SIX")
// }
// else if (num === 7)
// {
//     console.log("SEVEN")
// }
// else if (num === 8)
// {
//     console.log("EIGHT")
// }
// else if (num === 9)
// {
//     console.log("NINE")
// }
// else
// {
//     console.log("PLEASE TRY AGAIN")
// }

// let currentYear = new Date().getFullYear();
// let birthYear = Number(prompt("Enter your birth year:"))
// let age = currentYear - birthYear;

// if (age > 60) {
//     console.log("You may join the seniors' program.");
// } else if (age > 30) {
//     console.log("You are not eligible. You may join other programs.");
// } else if (age >= 18 && age <= 30) {
//     console.log("You are eligible. Start your application.");
// } else {
//     console.log("You may join the kids' program.");
// }

// function changeCase(text) {

//     let result = "";

//     for (let i = 0; i < text.length; i++) {

//         if (text[i] === text[i].toUpperCase()) {

//             result += text[i].toLowerCase();

//         } else {

//             result += text[i].toUpperCase();

//         }
//     }

//     return result;
// }

// console.log(changeCase("OrAnGe"));


// function toCamelCase(text) {
//     let words = text.split(" ");
//     let result = words[0];

//     for (let i = 1; i < words.length; i++) {
//         result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     return result;
// }

// console.log(toCamelCase("Coding Academy by Orange"));



//LoopsFunctionsTask

function validationMembership() {
    let membership = prompt("What is your membership? student or regular");

    while (membership != "student" && membership != "regular") {
        membership = prompt("What is your membership? student or regular");
    }

    return membership;
}

let membership = validationMembership();

function collectUserData(membership) {
    let name = prompt("What is your name");
    let genre = prompt("Do you prefer fiction or non-fiction ?");
    let bookTitle = prompt("What is the title of the book you want to borrow ?");

    let userData = [];
    userData.push(name);
    userData.push(membership);
    userData.push(genre);
    userData.push(bookTitle);

    return userData;
}

let userData = collectUserData(membership);

for (let i = 0; i < userData.length; i++) {
    console.log(userData[i]);
}