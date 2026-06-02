console.log("Lab 04");
const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const loginButton = document.getElementById("btnLogin");
loginButton.addEventListener("click", () => {
  console.log(usernameElement.value, passwordElement.value);
  const username = usernameElement.value;
  const password = passwordElement.value;
  if (username === "admin" && password === "123456") {
    alert("Login successful!");
    //Đường dẫn đến trang thành công
    window.location.href = "success.html";
  } else {
    alert("Login failed. Please check your username and password.");
    usernameElement.style.borderColor = "red";
    passwordElement.style.borderColor = "red";
  }
});
