let i = 1;
function oneToFive() {
    document.getElementById("result").innerHTML += "<br>";
    do {
        document.getElementById("result").innerHTML += i;
        document.getElementById("result").innerHTML += "<br>";
        i += 1;
    } while (i <= 5);
}