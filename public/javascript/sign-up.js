//render login page
const loginBtn = document.querySelector(".login-button");

//fetch sign up page
const signUpBtn = document.querySelector("#input-sign-up");

signUpBtn.addEventListener("click", (e) => {
  const userInfo = {
    firstNameInput: document.querySelector("#firstNameInput").value,
    lastNameInput: document.querySelector("#lastNameInput").value,
    userNameInput: document.querySelector("#userNameInput").value,
    passwordInput: document.querySelector("#passwordInput").value,
  };
  console.log(userInfo);
});

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:8000/auth/login";
});
