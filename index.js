// dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// we concatinated this string images 1- 6 all have same format dice_.png
var randomDiceImg = "dice" + randomNumber1 + ".png";//dice.png1-dice6.png

var randomDiceSrc = "images/" + randomDiceImg; //img 1-6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSrc);

// dice 2 more condensed code combined diceImg and DiceSrc to one variable
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSrc2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
