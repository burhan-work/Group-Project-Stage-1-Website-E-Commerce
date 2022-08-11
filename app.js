const form = document.getElementById('form_sign_in');
const username = document.getElementById('username');
const password = document.getElementById('password');
const form1 = document.getElementById('form_sign_up');
const email = document.getElementById('email');
const username1 = document.getElementById('username1');
const password1 = document.getElementById('password1');

form.addEventListener('submit', (e) => {
  e.preventDefault();

});

const signup = {
  username1: "gorse",
  email: "gorse@gmail.com",
  password1:"gorse271",
};

localStorage.setItem("signup", JSON.stringify(signup))














const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  if ( container.classList.add("sign-up-mode")) {
 container.classList.add("sign-up-mode")
 }
 });

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
