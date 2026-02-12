function getValue() {
    return document.getElementById("number").value;
}

function isEven(n) {
    if (n % 2 == 1) {
        document.getElementById("result").innerHTML = "Odd";
    } else {
        document.getElementById("result").innerHTML = "Even";
    }
}