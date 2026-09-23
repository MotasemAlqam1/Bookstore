function changeCase(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            result += text[i].toLowerCase();
        } else {
            result += text[i].toUpperCase();
        }
    }

    return result;
}

let text = prompt("Enter a text:");

console.log(changeCase(text));