let leftPos = true;
const btn = document.querySelector("#btn");

// Helper for toggle classes
const toggleClasses = (element, classToAdd, classToRemove) => {
    let removeClass = element.classList.remove(classToAdd);
    let addClass = element.classList.add(classToRemove);

    return [removeClass, addClass];
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
});

validate = () => {
  let name = document.querySelector("#nameField"),
    password = document.querySelector("#passwordField");

  if (!name.value) {
    toggleClasses(name, 'isValid', 'isInvalid');
  } else {
    toggleClasses(name, 'isInvalid', 'isValid');
  }

  if (!password.value) {
    toggleClasses(password, 'isValid', 'isInvalid');
  } else {
    toggleClasses(password, 'isInvalid', 'isValid');
  }

  if (!name.value || !password.value) {
    toggleClasses(btn, 'isValid', 'isInvalid');
    changePosition(btn);
    return;
  }
  toggleClasses(btn, 'isInvalid', 'isValid');
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
