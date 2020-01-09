var round = 0;
var questions = [];
var qCount = 0;
var qTimer = NaN;
var answers = [];
var sounds = [];

function gobj(id) {
 return document.getElementById(id) }
 
 function init() {
   buttons = document.querySelectorAll("button");
   for (var i = 0; i < buttons.length; i++) {
     buttons[i].onclick = function(e) {
       if (qTimer) { return; }
         var index = e.target.id.charAt(1);
         blink(index);
         answer(index);
       }
       sounds[i] = new Audio("sound" + (i + 1) + ".mp3");
       sounds[i].preload = "auto";
       sounds[i].load();
     }
     nextRound();
   }
   
   function showMessage(mess) {
     gobj("message").textContent = mess;
     }
     
   function blink(index) {
     var fgcolors = ["#F00", "#FF0", "#0F0", "#00F"];
     var bgcolors = ["#600", "#660", "#060", "#006"];
     gobj("b" + index).style.backgroundColor = fgcolors[index];
     sounds[index].currentTime = 0;
     sounds[index].play();
     
     setTimeout(function () {
       for (var i = 0; i < 4; i++) {
         gobj("b" + i).style.backgroundColor = bgcolors[i];
         }
       },400)
     }
     
     function nextRound() {
       round++;
       showMessage("round:" + round);
       var r = Math.floor(Math.random() * 4);
