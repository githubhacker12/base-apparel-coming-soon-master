const headingElement = document.querySelector(".heading");
headingElement.innerHTML = headingElement.innerHTML.toUpperCase();

const inputElement = document.querySelector("input");
const errorImgElement = document.querySelector(".error-img");
const errorElement = document.querySelector(".error");

inputElement.addEventListener("click", () => {
  errorImgElement.style.display = "none";
  errorElement.style.display = "none";
  inputElement.style.borderColor = "none";
});

document.querySelector(".arrow").addEventListener("click", () => {
  const email = inputElement.value;
  inputCheck(email);
});

function inputCheck(email) {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  errorImgElement.style.display = isValidEmail ? "none" : "block";
  errorElement.style.display = isValidEmail ? "none" : "block";
  inputElement.style.borderColor = isValidEmail ? "none" : "red";
}
