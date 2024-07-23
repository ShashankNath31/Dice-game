var randomnumber=Math.floor(Math.random() * 6)+1;
var imgsource="images/dice"+randomnumber +".png";
var img1=document.querySelectorAll("img")[0].setAttribute("src",imgsource);



var randomnumber2=Math.floor(Math.random() * 6)+1;
var imgsource2="images/dice"+randomnumber2 +".png";
var img2=document.querySelectorAll("img")[1].setAttribute("src",imgsource2);


if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";}
    else if(randomnumber<randomnumber2){
        document.querySelector("h1").innerHTML="Player 2 wins!";}
        else{
            document.querySelector("h1").innerHTML="😅It's a tie!";}
