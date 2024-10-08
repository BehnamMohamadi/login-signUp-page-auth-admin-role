//render sign up page
const signUpNowBtn = document.querySelector(".sign-up-button");

//fetch login page
const loginBtn = document.querySelector("#input-login");

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const userInfo = {
    username: document.querySelector("#userNameInput").value,
    password: document.querySelector("#passwordInput").value,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    const statusResult = document.querySelector(".status-result");

    if (response.ok) {
      alert("login successful");
    } else {
      alert("login failed");
    }
  } catch (error) {
    console.error("Error> login:", error);
  }
});

signUpNowBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  window.location.href = "http://127.0.0.1:8000/auth/signup";
});
