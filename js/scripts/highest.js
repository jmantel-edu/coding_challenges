let numbers = [2, 6, 8, 9, 12, 53, 4, 2, 8, 9]

function getResult(list) {
    sortedList = list.toSorted(function(a, b){return b-a});
    console.log(sortedList);
    document.getElementById("result").innerHTML = sortedList[0];
}