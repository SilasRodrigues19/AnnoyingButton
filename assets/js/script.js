let leftPos = true;
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

validate = () => {
  let name = document.querySelector("#nameField"),
    password = document.querySelector("#passwordField");

  if (!name.value) {
    name.classList.remove("isValid");
    name.classList.add("isInvalid");
  } else {
    name.classList.remove("isInvalid");
    name.classList.add("isValid");
  }

  if (!password.value) {
    password.classList.remove("isValid");
    password.classList.add("isInvalid");
  } else {
    password.classList.remove("isInvalid");
    password.classList.add("isValid");
  }

  if (!name.value || !password.value) {
    btn.classList.remove("isValid");
    btn.classList.add("isInvalid");
    changePosition(btn);
    return;
  }
  btn.classList.remove("isInvalid");
  btn.classList.add("isValid");
};

changePosition = () => {
  if (leftPos) {
    btn.style.marginLeft = "75%";
    leftPos = false;
    return;
  }
  btn.style.marginLeft = "0px";
  leftPos = true;
};
