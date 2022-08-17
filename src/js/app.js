const loginArea = document.querySelector(".login-area");
const accountArea = document.querySelector(".account-area");
const accountEmail = "hello@gmail.com";
const accountPassword = "11111";

// LOGIN
const loginData = document.querySelector("#login-data");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorMsg = document.querySelector("#error");
const logoutBtn = document.querySelector("#logout");

// USER VERIFY FUNCTION

function verifyUser() {
  localStorage.getItem("user")
    ? (loginArea.style.display = "none")
    : (accountArea.style.display = "none");
  errorMsg.style.display = "none";
}
verifyUser();

//LOGIN USER

function loginUser(email, password) {
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
}

loginData.addEventListener("submit", (event) => {
  event.preventDefault();

  if (email.value === accountEmail && password.value === accountPassword) {
    loginUser(email, password);
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

// GET THE INPUT VALUE WITH NUMBER FORMAT FUNCTION

function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}
// GET THE TEXT VALUE WITH NUMBER FORMAT FUNCTION

function getTextValueById(textFieldId) {
  const textField = document.getElementById(textFieldId);
  const textValue = parseFloat(textField.innerText);
  return textValue;
}

// GET THE ELEMENT BY ID AND SET INNERTEXT FUNCTION

function getElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function bankCalculateBalance(
  type,
  formId,
  typeField,
  typeAmount,
  balanceAmount
) {
  document.getElementById(formId).addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = getInputValueById(typeField);
    const amountValue = getTextValueById(typeAmount);
    const balanceAmountValue = getTextValueById(balanceAmount);

    if (type === "widthdraw") {
      if (!balanceAmountValue) {
        alert(`Your Balance is ${balanceAmountValue},Please deposit!`);
        return;
      } else if (balanceAmountValue < inputValue) {
        alert(`You cannot withdraw more than ${balanceAmountValue}`);
        return;
      }
    }

    if (inputValue <= 0 || !inputValue) {
      type === "deposit"
        ? alert(`Please Add Your Deposit Amount!`)
        : alert(`Please Widthdraw Your Amount!`);

      return;
    } else {
      const amountTotal = amountValue + inputValue;
      const balanceAmountTotal =
        type === "deposit"
          ? balanceAmountValue + inputValue
          : balanceAmountValue - inputValue;
      getElementById(typeAmount, amountTotal);
      getElementById(balanceAmount, balanceAmountTotal);
    }
  });
}

bankCalculateBalance(
  "deposit",
  "depositForm",
  "deposit-field",
  "depositAmount",
  "balanceAmount"
);

bankCalculateBalance(
  "widthdraw",
  "widthdrawForm",
  "widthdraw-field",
  "widthdrawAmount",
  "balanceAmount"
);
