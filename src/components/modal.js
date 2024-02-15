import {
  clearFormValidationProfil,
  clearFormValidationAddCard,
  clearFormValidationAvatar,
} from "./index";

function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeKeyPopup);
  clearFormValidationProfil();
  clearFormValidationAddCard();
  clearFormValidationAvatar();
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeKeyPopup);
}

//Проверка клика вне попапа
function closeOutOfPopup(evt) {
  const popupContent = evt.target;

  if (popupContent) {
    closePopup(popupContent);
  }
}

function closeKeyPopup(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closePopup(popup);
  }
}

export { openPopup, closePopup, closeOutOfPopup };
