const enableValidation = (settings) => {
  const formList = Array.from(settings.formSelector);
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  });
  setEventListeners(settings.inputSelector, settings);
};

const setEventListeners = (inputList, settings) => {
  const buttonElement = settings.submitButtonSelector;

  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      toggleButtonState(inputList, buttonElement);
      checkInputValidity(settings, inputElement);
    });
  });
};

const checkInputValidity = (settings, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(settings, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(settings, inputElement);
  }
};

const showInputError = (settings, inputElement, errorMessage) => {
  const errorElement = settings.formSelector.querySelector(
    `.${inputElement.id}-error_visible`
  );
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (settings, inputElement) => {
  const errorElement = settings.formSelector.querySelector(
    `.${inputElement.id}-error_visible`
  );
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

const hasInvalidInput = (inputList) => {
  for (let i = 0; i < inputList.length; i++) {
    if (!inputList[i].validity.valid) {
      return true;
    }
  }
  return false;
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }
};

function clearValidation(profileForm, validationConfig) {
  console.log(profileForm, validationConfig);
  const inputList = Array.from(
    profileForm.querySelectorAll(validationConfig.inputSelector)
  );
  const errorList = profileForm.querySelectorAll(
    validationConfig.errorSelector
  );
  inputList.forEach((inputElement) => {
    inputElement.classList.remove(validationConfig.inputErrorClass);
  });

  errorList.forEach((errorElement) => {
    errorElement.textContent = "";
    errorElement.classList.remove(validationConfig.errorActiveClass);
  });
}

export { enableValidation, clearValidation };
