function oneToTen() {
    document.getElementById("result").innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        document.getElementById("result").innerHTML += i;
        document.getElementById("result").innerHTML += "<br>";
    }
}