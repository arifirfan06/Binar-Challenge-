var choices = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;

function score(){
  var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}

setInterval(score, 50);
function convert(word){
  if(word === "rock") return '<img src="/images/batu.png" alt="" width="50px">';
  if(word === "paper") return '<img src="/images/kertas.png" alt="" width="30px">';
  return '<img src="/images/gunting.png" alt="" width="30px">'
}

function game(UserChoice){
  var box = document.getElementById("challenge");
  box.style.display = "inline-flex";
  var userDiv = document.getElementById("YourObject");
  userDiv.innerHTML = convert(UserChoice);
  var comDiv = document.getElementById("ComObject");
  comDiv.innerHTML = convert(ComChoice);
  if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
    win(UserChoice);
  }
  else if(UserChoice === ComChoice){
    draw(UserChoice);
  }
  else{
    lose(UserChoice);
  }
  function continuGame(){
    i = Math.floor(Math.random() * 3);
    ComChoice = choices[i];
    box.style.display = "none";
  }
  setTimeout(continuGame, 1200);
}

function win(bn){
  UserPoints++;
  document.getElementById("who").innerHTML = "You win!";
  var bn = document.getElementById(bn);
  bn.classList.remove("bn");
  bn.classList.add("green");
  setTimeout(() => {
    bn.classList.add("bn");
    bn.classList.remove("green");
  }, 1200);
}

function draw(bn){
  document.getElementById("who").innerHTML = "It's a Draw.";
  var bn = document.getElementById(bn);
  bn.classList.remove("bn");
  bn.classList.add("gray");
  setTimeout(() => {
    bn.classList.add("bn");
    bn.classList.remove("gray");
  }, 1200);
}

function lose(bn){
  ComPoints++;
  document.getElementById("who").innerHTML = "You lose...";
  var bn = document.getElementById(bn);
  bn.classList.remove("bn");
  bn.classList.add("red");
  setTimeout(() => {
    bn.classList.add("bn");
    bn.classList.remove("red");
  }, 1200);
}