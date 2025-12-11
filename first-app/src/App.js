const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginClick() {
  console.log("Login button clicked!");
}

loginButton.addEventListener("click", handleLoginClick);
