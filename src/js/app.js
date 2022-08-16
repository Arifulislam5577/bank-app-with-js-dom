const loginArea = document.querySelector(".login-area");
const accountArea = document.querySelector(".account-area");
const accountEmail = "hello@gmail.com";
const accountPassword = "111";

// LOGIN AREA
const loginData = document.querySelector("#login-data");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMsg = document.querySelector("#error");
const logoutBtn = document.querySelector("#logout");

//LOGIN USER
localStorage.getItem("user")
  ? (loginArea.style.display = "none")
  : (accountArea.style.display = "none");
errorMsg.style.display = "none";

function createNewUser({ email, password }) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email,
      password,
    })
  );
}

loginData.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value === accountEmail && password.value === accountPassword) {
    createNewUser(email.value, password.value);
    loginArea.style.display = "none";
    accountArea.style.display = "block";
    errorMsg.style.display = "none";
    email.value = "";
    password.value = "";
  } else {
    errorMsg.style.display = "block";
  }
});

// LOGOUT

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("user");
  loginArea.style.display = "block";
  accountArea.style.display = "none";
});

// STRING TO NUMBER CONVERTER FUNCTION

function strToNumber(str) {
  return parseFloat(str);
}

// ADD DEPOSIT AMOUT AND UPDATE BALANCE
const balanceAmount = document.getElementById("balanceAmount");

const depositAmount = document.getElementById("depositAmount");
const depositForm = document.getElementById("depositForm");
const depositField = document.getElementById("deposit-field");

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const depositValue = strToNumber(depositField.value);
  const depositAmountValue = strToNumber(depositAmount.innerText);
  const balanceAmountValue = strToNumber(balanceAmount.innerText);

  if (depositValue <= 0 || !depositValue) {
    alert(`Please Add Your Deposit Amount!`);
    depositField.value = "";
    return;
  } else {
    depositAmount.innerText = depositAmountValue + depositValue;
    balanceAmount.innerText = balanceAmountValue + depositValue;
    depositField.value = "";
  }
});

// ADD WIDTHDRAW AMOUT AND UPDATE BALANCE
const widthdrawForm = document.getElementById("widthdrawForm");
const widthdrawField = document.getElementById("widthdraw-field");
const widthdrawAmount = document.getElementById("widthdrawAmount");

widthdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const widthdrawValue = strToNumber(widthdrawField.value);
  const widthdrawAmountValue = strToNumber(widthdrawAmount.innerText);
  const balanceAmountValue = strToNumber(balanceAmount.innerText);

  if (widthdrawValue <= 0 || !widthdrawValue) {
    alert(`Please Widthdraw Your Amount!`);
    widthdrawField.value = "";
    return;
  } else if (balanceAmountValue < widthdrawValue) {
    alert(`You cannot withdraw more than ${balanceAmountValue}`);
    widthdrawField.value = "";
    return;
  } else {
    widthdrawAmount.innerText = widthdrawAmountValue + widthdrawValue;
    balanceAmount.innerText = balanceAmountValue - widthdrawValue;
    widthdrawField.value = "";
  }
});
