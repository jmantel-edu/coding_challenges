const grades = {};
grades["Aaron"] = 89;
grades["Olivia"] = 79;
grades["Noah"] = 83;
grades["Emma"] = 29;
grades["Charlotte"] = 74;
grades["Theo"] = 95;
grades["Sophia"] = 92;
grades["Henry"] = 88;
grades["Ava"] = 75;

function printDict(dictionary) {
    console.log("Reached inside of function");
    let keys = Object.keys(dictionary);
    let values = Object.values(dictionary);

    for (let i = 0; i < Object.keys(dictionary).length; i++) {
        document.getElementById("result").innerHTML += keys[i];
        document.getElementById("result").innerHTML += ": ";
        document.getElementById("result").innerHTML += values[i];
        document.getElementById("result").innerHTML += "<br>";
    }
}
/* Python Dictionary for Reference
grades = {
    "Aaron": 89,
    "Olivia": 79,
    "Noah": 83,
    "Emma": 29,
    "Charlotte": 74,
    "Theo": 95,
    "Sophia": 92,
    "Henry": 88,
    "Ava": 75
}
*/