// Green Square
const squareGreenHide = document.querySelector("#squareGreenHide");

const squareGreenButton= document.querySelector("#squareGreenButton");

console.log(squareGreenHide, squareGreenButton)

squareGreenButton.addEventListener("click", function(){
  console.log(" Button is clicked!");

  console.log("squareGreenHide");

  console.log("SquaregreenShow");

  squareGreenHide.classList.add("hidden");
});

''
