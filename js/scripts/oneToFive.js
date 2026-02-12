let i = 1;
function oneToFive() {
    document.getElementById("result").innerHTML += "<br>";
    while (i <= 5) {
        document.getElementById("result").innerHTML += i;
        document.getElementById("result").innerHTML += "<br>";
        i += 1;
    }
}