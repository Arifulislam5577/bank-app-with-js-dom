const loginArea = document.querySelector(".login-area");
const accountArea = document.querySelector(".account-area");
const accountEmail = "hello@gmail.com";
const accountPassword = "111";

// LOGIN AREA
const loginData = document.querySelector("#login-data");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMsg = document.querySelector("#error");

//LOGIN USER
localStorage.getItem("user")
  ? (loginArea.style.display = "none")
  : (accountArea.style.display = "none");
errorMsg.style.display = "none";

loginData.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value === accountEmail && password.value === accountPassword) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email.value,
        password: password.value,
      })
    );
    loginArea.style.display = "none";
    accountArea.style.display = "block";
    errorMsg.style.display = "none";
    email.value = "";
    password.value = "";
  } else {
    errorMsg.style.display = "block";
  }
});
