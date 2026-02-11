function getValue() {
    return document.getElementById("name").value;
}

function printGreeting(name) {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML += "Hello, ";
    document.getElementById("result").innerHTML += name;
    document.getElementById("result").innerHTML += "!";
}