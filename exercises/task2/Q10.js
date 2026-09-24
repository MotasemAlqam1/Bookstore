// Q10

let num = Number(prompt("Enter a number from 0 to 100"));

while (num < 0 || num > 100) {
    num = Number(prompt("Enter a number from 0 to 100"));
}

console.log(num);