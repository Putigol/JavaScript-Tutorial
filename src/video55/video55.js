console.log("Video 55");
const submitBtnElement = document.getElementById("submitBtn");
const inputElement = document.getElementById("input");
// const yourNameElement = document.getElementById("yourName");
const previousNameElement = document.getElementById("previousName");
const prevName = localStorage.getItem("name");
//Lấy dữ liệu từ localStorage và hiển thị lên giao diện
if (prevName) {
  previousNameElement.innerHTML = `<b>${prevName}</b>`;
}
submitBtnElement.addEventListener("click", () => {
  console.log(inputElement.value);
  // yourNameElement.textContent = inputElement.value;
  //Lưu dữ liệu vào localStorage
  localStorage.setItem("name", inputElement.value);
  //Lấy dữ liệu từ input
  document.getElementById("yourName").innerHTML =
    `<b>${inputElement.value}</b>`;
});
