

function getValue() {
    return document.getElementById("number").value;
}

function multiplyArray(arr) {                           // This function borrowed from Geeks For Geeks
    return arr.reduce((acc, curr) => acc * curr, 1);    // Thank you Geeks For Geeks
}

function factorial(n) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    console.log(numbers);
    return multiplyArray(numbers);
}

function getResult(n) {
    document.getElementById("result").innerHTML = factorial(n);
}