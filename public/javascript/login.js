//render sign up page
const signUpNowBtn = document.querySelector(".sign-up-button");

//fetch login page
const loginBtn = document.querySelector("#input-login");

loginBtn.addEventListener("click", (e) => {
  const userInfo = {
    username: document.querySelector("#userNameInput").value,
    passwordInput: document.querySelector("#passwordInput").value,
  };
  console.log(userInfo);

  const response = fetch();
});

signUpNowBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:8000/auth/signup";

  console.log(e.target);
});
