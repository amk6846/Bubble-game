var timer = 15;
var rn;
var score = 0;
function makebubble(){
    var barbar = " ";
for(i = 1; i<=175; i++)
{
    rn = Math.floor(Math.random()*10);
    barbar += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".panelbottom").innerHTML = barbar;
document.getElementById('gameSound').play();
}
function TimerRun(){
    var time = setInterval( function() {
        if(timer>0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.getElementById('gameover').play();
            clearInterval(time);
            document.querySelector(".panelbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
function Newhit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#newrand").textContent = rn;
}
function increasescore(){
    score += 5;
    document.querySelector("#scorec").textContent = score;
}
//query selector use to acces elements from html
//number function use to convert string to int / target give me the div and text content give me the value
//addeventlistner use to click and function give me the details
     document.querySelector(".panelbottom")
     .addEventListener("click",function(details){ 
     var clickednum = Number(details.target.textContent); 
     if(clickednum === rn)
     {
        increasescore();
        makebubble();
        Newhit();
     }
})
TimerRun();
makebubble();
Newhit();



