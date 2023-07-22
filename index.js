var random = Math.floor(Math.random()*6)+1;
var image = "images/dice"+random+".png";
document.querySelectorAll("img")[0].setAttribute("src",image);
var random2=Math.floor(Math.random()*6)+1;
var image2= "images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(random>random2)
{
    document.querySelector("h1").innerHTML=" 💪 PLAYER 1 WINS";
}
 else if(random<random2)
{
document.querySelector("h1").innerHTML= "💪 PLAYER 2 WINS";
}
else
{
document.querySelector("h1").innerHTML= "! DRAW";
}
