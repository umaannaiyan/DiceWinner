



let rand1=randomNumber();
let rand1Image=getImage(rand1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",rand1Image);


let rand2=randomNumber();
let rand2Image=getImage(rand2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",rand2Image);

if(rand1 > rand2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if( rand2 > rand1){
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "🚩Draw"
}

function getImage(randomNumber1) {
    let randomDiceImage = "dice" + randomNumber1 + ".png";
    let randomImageSource="images/" + randomDiceImage;
    return randomImageSource;
}
function randomNumber() {
    return Math.floor(Math.random()*6+1);
}