[...document.getElementsByTagName("input")].forEach((e) =>
  e.addEventListener("change", () => e.classList.add("touched"))
);

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const arePasswordsMatching = () => {
  if (password.value === confirmPassword.value) {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  } else {
    password.setCustomValidity("Passwords don't match");
    confirmPassword.setCustomValidity("Passwords don't match");
  }
};

password.addEventListener("input", arePasswordsMatching);
confirmPassword.addEventListener("input", arePasswordsMatching);
