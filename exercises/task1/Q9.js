function toCamelCase(text) {
    let words = text.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return result;
}

let text = prompt("Enter a text:");

console.log(toCamelCase(text));