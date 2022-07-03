document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
var tot = 0;
function score(){
    var s = uchoice;
    tot += s;
    var h = "Half Century";
    var c = "Century";
    document.getElementById('score').innerHTML = tot;
    if(tot >= 50 && tot <= 55){
        document.getElementById('achievement').innerHTML = h;
    }
    else if(tot >= 100 && tot <= 105){
        document.getElementById('achievement').innerHTML = c;
    }
    else{
    document.getElementById('achievement').innerHTML = "";
    }
}
function play1(){
    uchoice = 1;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 1){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}
 
function play2(){
    uchoice = 2;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 2){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}
function play3(){
    uchoice = 3;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 3){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}
 
function play4(){
    uchoice = 4;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 4){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}
 
function play5(){
    uchoice = 5;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 5){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}
 
function play6(){
    uchoice = 6;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 6){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function play7(){
    uchoice = 7;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 7){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function play8(){
    uchoice = 8;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 8){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function play9(){
    uchoice = 9;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 9){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function play10(){
    uchoice = 10;
    var cchoice = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userchoiceshow").innerHTML = uchoice;
    document.getElementById("computerchoiceshow").innerHTML = cchoice;
    if(cchoice === 10){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        tot = 0;
    }
    else{
        var c = " ";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}