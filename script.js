// Blue square
const newBlueImg = document.querySelector("#newBlueImg");

const squareBlueButton = document.querySelector("#squareBlueButton");

console.log(newBlueImg, squareBlueButton);


newBlueImg.src = "hamburger.png";
newBlueImg.alt = "hamburger icon";

newBlueImg.classList.add("hamburgerIcon");
newBlueImg.classList.add("hidden");

newBlueImg.appendChild(squareBlueButton);

squareBlueButton.addEventListener("click", function () {
  console.log("Button is clicked!");

  newBlueImg.classList.toggle("hidden");
});