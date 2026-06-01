console.log("video 51");
const element = document.getElementById("myBtn");
// element.addEventListener("click", function () {
//   console.log("Button clicked!");
// });
const handleClick = () => {
  console.log("Button clicked!");
};
element.addEventListener("click", handleClick);

console.log(element);
