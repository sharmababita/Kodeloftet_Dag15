// Blue Square
const squareBlueShowImg = document.querySelector("#squareBlueShowImg");

const squareBlueButton = document.querySelector("#squareBlueButton");

console.log(squareBlueShowImg, squareBlueButton);

const newBlueImg= document.createElement("img");

newBlueImg.src = "hamburger.png"
newBlueImg.alt = "hamburger icon"

newBlueImg.classList.add("hamburgerIcon");
newBlueImg.classList.add("hidden")



squareBlueShowImg.appendChild(newBlueImg);
squareBlueButton.addEventListener("click", function() {

  console.log("Button is clicked!");

  squareBlueShowImg.classList.toggle("hidden");

});
// Red Square
// Lag variable som henter ID+ene som hører til red square
// set opp en event listener til red square knappen
// Bonus: Leg til funksjonenalliteten til red square i den anonyme



