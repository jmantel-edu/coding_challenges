var fruits = ["Apple", "Orange", "Banana", "Lime", "Blueberry", "Grape"];

function getValue() {
    return document.getElementById("addfruit").value;
}

function addFruit() {
    fruits.push(getValue());
}

function printFruits() {
    document.getElementById("result").innerHTML = "";
    for (let i = 0; i < fruits.length; i++) {
        document.getElementById("result").innerHTML += "<br>";
        document.getElementById("result").innerHTML += fruits[i];
    }
}