// Q11

let num = Number(prompt("Enter a number from 0 to 100"));

while (num < 0 || num > 100 || isNaN(num)) {
    num = Number(prompt("Enter a number from 0 to 100"));
}

console.log(num);