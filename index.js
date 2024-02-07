const headingElement = document.querySelector(".heading");
headingElement.innerHTML = headingElement.innerHTML.toUpperCase();

const inputElement = document.querySelector("input");

const errorImgElement = document.querySelector(".error-img");
const errorElement = document.querySelector(".error");

inputElement.addEventListener("click", () => {
  errorImgElement.classList.remove("ani");
  errorElement.classList.remove("ani");
  inputElement.style.borderColor = "none";
});

document.querySelector(".arrow").addEventListener("click", () => {
  const email = inputElement.value;
  inputCheck(email);
});

function inputCheck(email) {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  inputElement.style.borderColor = isValidEmail ? "none" : "red";

  isValidEmail
    ? errorImgElement.classList.remove("ani")
    : errorImgElement.classList.add("ani");

  isValidEmail
    ? errorElement.classList.remove("ani")
    : errorElement.classList.add("ani");
}
