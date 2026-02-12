function getInput() {
    return document.getElementById("text").value;
}

function getConsiderYs() {
    return document.getElementById("considerYs").checked;
}

function findVowels(text, considerYs) {
    let counter = 0;
    if (considerYs === true) {
        var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
    } else {
        var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    }
    for (let character = 0; character < text.length; character++) {
        if(vowels.includes(text.charAt(character))) {
            counter++
        }
    }
    document.getElementById("result").innerHTML = counter;
}