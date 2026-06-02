console.log("Video 53");
const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const myBackBtnElement = document.getElementById("myBackBtn");
console.log(myBtnElement, myTextElement, myBackBtnElement);
myBtnElement.addEventListener("click", () => {
  console.log("Button Clicked");
  myTextElement.style.color = "white";
  myTextElement.style.backgroundColor = "black";
  myTextElement.classList.add("highlight");
});
myBackBtnElement.addEventListener("click", () => {
  console.log("Back Button Clicked");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "white";
  myTextElement.classList.remove("highlight");
});
