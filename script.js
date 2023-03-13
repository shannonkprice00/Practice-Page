var keyHeading = document.querySelector("#myHouse");
var button = document.querySelector("#button");
var houses = ["Griffindor", "Ravenclaw", "Hufflepuff", "Slytherin"]

button.addEventListener("click", function() {
    var index = Math.floor(Math.random() * houses.length);
    var myHouse = houses[index];

    keyHeading.textContent = myHouse;

    if (myHouse === "Griffindor") {
        keyHeading.setAttribute("class", "griffindor");
    } else if (myHouse === "Ravenclaw") {
        keyHeading.setAttribute("class", "ravenclaw");
    } else if (myHouse === "Hufflepuff") {
        keyHeading.setAttribute("class", "hufflepuff");
    } else if (myHouse === "Slytherin") {
        keyHeading.setAttribute("class", "slytherin");
    }

})

