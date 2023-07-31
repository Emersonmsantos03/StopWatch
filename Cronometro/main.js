var hour = 0;
var minutes = 0;
var seconds = 0;
var Interval;


var addHour = document.getElementById("hour");
var addMinutes = document.getElementById("minutes");
var addSeconds = document.getElementById("seconds");

var buttonStart = document.getElementById("start_button");
var buttonStop = document.getElementById("stop_button");
var buttonRestart = document.getElementById("restart_button");


buttonStart.onclick = function(){
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
}

buttonStop.onclick = function(){
  clearInterval(Interval);
}

buttonRestart.onclick = function(){
  clearInterval(Interval);
  seconds = "00";
  minutes = "00";
  hour = "00";

  addSeconds.innerHTML = seconds;
  addMinutes.innerHTML = minutes;
  addHour.innerHTML = hour;
}



function startTimer(){

  seconds++;

  if(seconds <= 9){
    addSeconds.innerHTML = "0" + seconds;
  }
  if((seconds > 9) && (seconds < 60)){
    addSeconds.innerHTML = seconds;
  }
  if(seconds > 60){
    console.log("seconds");
    minutes++ ;
    addMinutes.innerHTML = "0" + minutes;
    seconds = 1;
    addSeconds.innerHTML = "0" + seconds;
  }
  if(minutes > 9 && minutes < 60){
    addMinutes.innerHTML = minutes;
  }


  if(minutes > 60){
    console.log("minutes");
    hour++;
    minutes = 0;
    seconds = 1;
    addSeconds.innerHTML = "0" + 0;
    addMinutes.innerHTML = "0" + 0;
    addHour.innerHTML = "0" + hour;
  }

  if(hour > 9){
    addHour.innerHTML = hour;
  }








}