//alert("working");
var image1 = document.querySelector("img.img1");
var image2 = document.querySelector("img.img2");
var mainHeading = document.querySelector("div.container h1");

function getRandom(){
  console.log("getRandom");
  return Math.floor(Math.random()*6)+1;
}

var randomNumber1 = getRandom();
console.log(randomNumber1);
var image = "images/dice"+randomNumber1+".png";
image1.setAttribute("src",image);

var randomNumber2 = getRandom();
console.log(randomNumber2);
var image = "images/dice"+randomNumber2+".png";
image2.setAttribute("src",image);

if (randomNumber1<randomNumber2){
  mainHeading.textContent="Player 2 WON";
}
else if(randomNumber1>randomNumber2){
  mainHeading.textContent="Player 1 WON";
}
else{
  mainHeading.textContent="Match DRAW";
}
