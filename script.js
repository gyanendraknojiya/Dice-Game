var randNum1 = Math.floor(((Math.random() * 6) + 1));
document.querySelector(".img1").setAttribute("src", "images/dice" + randNum1 + ".png");
var randNum2 = Math.floor(((Math.random() * 6) + 1));
document.querySelector(".img2").setAttribute("src", "images/dice" + randNum2 + ".png");
if (randNum1 > randNum2) {
    document.querySelector("#winPlayer").innerHTML = "🚩Player 1 Won";
} else if (randNum1 === randNum2) {
    document.querySelector("#winPlayer").innerHTML = "Draw!";
} else {
    document.querySelector("#winPlayer").innerHTML = "🚩Player 2 Won";
}