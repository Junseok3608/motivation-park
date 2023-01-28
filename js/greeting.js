const loginForm = document.getElementById("login-form");
const greeting = document.getElementById("greeting");
const greetingUser = document.getElementById("greeting-user");
const loginId = document.querySelector("#login-form input[type='text']");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = function (e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginId.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `동기-Park과 함께 달리는 ${username}님!`;
  greetingUser.classList.remove(HIDDEN_CLASSNAME);
};

const paintGreeting = function (username) {
  greeting.innerText = `동기-Park과 함께 달리는 ${username}님!`;
  greetingUser.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetingUser.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `동기-Park과 함께 달리는 ${savedUsername}님!`;
}
