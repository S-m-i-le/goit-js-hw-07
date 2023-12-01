const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", emailAndPassword);
function emailAndPassword(event) {
  event.preventDefault();
  const loginForm = event.target;
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const user = {
    email: email,
    password: password,
  };
  console.log(user);
  loginForm.reset();
}
