var r1 = Math.floor(Math.random()*6)+1;
var r2 = Math.floor(Math.random()*6)+1;

var rImg = "images/dice" + r1 + ".png";
var rImage = "images/dice" + r2 + ".png";

var imageArray1 = document.querySelectorAll("img")[0].setAttribute("src",rImg);

var imageArray2 = document.querySelectorAll("img")[1].setAttribute("src",rImage);

if (r1>r2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (r1<r2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else {
  document.querySelector("h1").innerHTML = "TIE!"
}
