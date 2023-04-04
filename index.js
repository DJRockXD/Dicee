
//Add names:
var p1 = prompt("Player 1 name:");
var p2 = prompt("Player 2 name:");
document.getElementById("p1").textContent = p1;
document.getElementById("p2").textContent = p2;
var ranNum1 = 0;
var ranNum2 = 0;
var count1 = 0;
var count2 = 0;

function Reset() {
  //Get yourself 2 random numbers.
  ranNum1 = Math.floor(Math.random()*6 + 1);
  ranNum2 = Math.floor(Math.random()*6 + 1);
  // Change the dice images to match the numbers.
  document.getElementById("dice-img1").src = "images/dice" + ranNum1 + ".png";
  document.getElementById("dice-img2").src = "images/dice" + ranNum2 + ".png";

  // Show winner:
  if (ranNum1 > ranNum2) {
    document.querySelector("h1").textContent = "🚩" + p1 + " Wins!";
    count1++;
    document.getElementById("p1c").textContent = count1;
  } else if (ranNum2 > ranNum1) {
    document.querySelector("h1").textContent = p2 + " Wins! 🚩";
    count2++;
    document.getElementById("p2c").textContent = count2;
  } else {
    document.querySelector("h1").textContent = "🚩Draw! 🚩";
  }
}
