// Helper for toggle classes
const toggleClasses = (element, classToAdd, classToRemove) => {
    let removeClass = element.classList.remove(classToAdd);
    let addClass = element.classList.add(classToRemove);

    return [removeClass, addClass];
}


selectElement = (selector) => {
    return document.querySelector(selector);
}

let leftPos = true;
const btn = selectElement('#btn');


btn.addEventListener("click", (e) => {
  e.preventDefault();
});

validate = () => {
    let name = selectElement('#nameField'),
        password = selectElement('#passwordField');

  if (!name.value) {
    toggleClasses(name, 'isValid', 'isInvalid');
    name.classList.toggle('shakeAnimation');
  } else {
    toggleClasses(name, 'isInvalid', 'isValid');
  }

  if (!password.value) {
    toggleClasses(password, 'isValid', 'isInvalid');
    password.classList.toggle('shakeAnimation');
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
