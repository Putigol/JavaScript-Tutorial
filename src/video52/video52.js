console.log("Video 52");
const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const myBackBtnElement = document.getElementById("myBackButton");

console.log(myBtnElement, myTextElement);
myBtnElement.addEventListener("click", () => {
  console.log("Button clicked");
  myTextElement.innerHTML = "<h1>Xin chào các bạn</h1><p>Đây là video 52</p>";
});
myBackBtnElement.addEventListener("click", () => {
  console.log("Back button clicked");
  myTextElement.innerText = "Video 52";
});
