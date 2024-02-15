import addIcon from "../images/add-icon.svg";
import avatar from "../images/avatar.jpg";
import card1 from "../images/card_1.jpg";
import logo from "../images/logo.svg";
import "../styles/index.css";

import { createCard, like, deleteCard } from "./card";
import { openPopup, closePopup, closeOutOfPopup } from "./modal";
import { enableValidation, clearValidation } from "./validation";

import {
  getUserInfo,
  getInitialCards,
  updateUserInfo,
  saveNewCard,
  updateUserAvatar,
} from "./api";

import { renderLoading } from "./utils";

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: "add", link: addIcon },
  { name: "avatar", link: avatar },
  { name: "card1", link: card1 },
  { name: "logo", link: logo },
];

const promises = [getUserInfo(), getInitialCards()];

Promise.all(promises)
  .then(([userData, cardsData]) => {
    renderInitialCards(userData, cardsData);
  })
  .catch((error) => {
    // Обработка ошибок
    console.error("Error fetching data:", error);
  });
let userId = "";

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorSelector: ".error_visible",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

//Смена аватара
const profileAddImage = document.querySelector(".profile__image");
const popupFormAvatar = document.querySelector(".popup_type_new-avatar");
const popupCloseAvatarButton = popupFormAvatar.querySelector(".popup__close");

const formEditAvatar = popupFormAvatar.querySelector(".popup__form");

const editFormElementAvatar = document.forms["new-avatar"];
const urlImgAvatar = editFormElementAvatar.querySelector("[name='link']");

//Добавление города
const profileAddCard = document.querySelector(".profile__add-button");
const popupFormCard = document.querySelector(".popup_type_new-card");
const popupCloseCardButton = popupFormCard.querySelector(".popup__close");

const popupContainers = document.querySelectorAll(".popup");

const formAddCard = popupFormCard.querySelector(".popup__form");
const addFormCard = document.forms["new-place"];

//Редактирование профиля
const popupEditProfile = document.querySelector(".profile__edit-button");
const popuProfiledit = document.querySelector(".popup_type_edit");
const popupCloseProfileditButton =
  popuProfiledit.querySelector(".popup__close");

const formEditProfile = popuProfiledit.querySelector(".popup__form");

//Закрытие попапа с картинкой
const popupImage = document.querySelector(".popup_type_image");
const popupCloseImgeButton = popupImage.querySelector(".popup__close");

//Редактирование профиля
const editFormElement = document.forms["edit-profile"];
const inputNameProfile = editFormElement.querySelector("[name='name']");
const inputDescriptionProfile = editFormElement.querySelector(
  "[name='description']"
);

const profileInfo = document.querySelector(".profile__info");
const profilTitle = profileInfo.querySelector(".profile__title");
const profileDescription = profileInfo.querySelector(".profile__description");

//Добавление карточки
const places = document.querySelector(".places__list");

const editFormElementCart = document.forms["new-place"];
const inputNameCart = editFormElementCart.querySelector("[name='place-name']");
const inputUrlCart = editFormElementCart.querySelector("[name='link']");

//закрыт попап картинки
popupCloseImgeButton.addEventListener("click", () => closePopup(popupImage));

//открыт и закрыт попап профиля
popupEditProfile.addEventListener("click", () => {
  openPopup(popuProfiledit), fillInInputs(), clearFormValidationProfil();
});
popupCloseProfileditButton.addEventListener("click", () =>
  closePopup(popuProfiledit)
);

formEditProfile.addEventListener("submit", submitEditProfileForm);

//открыт и закрыт попап Аватара
profileAddImage.addEventListener("click", () => {
  openPopup(popupFormAvatar), clearFormValidationAvatar();
});
popupCloseAvatarButton.addEventListener("click", () =>
  closePopup(popupFormAvatar)
);

editFormElementAvatar.addEventListener("submit", addNewAvatar);

//открыт и закрыт попап карточек
profileAddCard.addEventListener("click", () => {
  openPopup(popupFormCard), clearFormValidationAddCard();
});
popupCloseCardButton.addEventListener("click", () => closePopup(popupFormCard));

formAddCard.addEventListener("submit", addNewCard);

//Находим все Form
const allForm = Array.from(document.querySelectorAll(".popup__form"));

//Добваление клика вне контента попап
popupContainers.forEach((popupContainer) => {
  popupContainer.addEventListener("click", closeOutOfPopup);
});

function fillInInputs() {
  inputNameProfile.value = profilTitle.textContent;
  inputDescriptionProfile.value = profileDescription.textContent;
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  renderLoading(true, editFormElement.querySelector(".popup__button"));
  updateUserInfo(inputNameProfile.value, inputDescriptionProfile.value)
    .then(() => {
      profilTitle.textContent = inputNameProfile.value;
      profileDescription.textContent = inputDescriptionProfile.value;
      closePopup(popuProfiledit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() =>
      renderLoading(false, editFormElement.querySelector(".popup__button"))
    );
}

function renderInitialCards(userData, cardsData) {
  userId = userData._id;
  console.log(userId, userData._id);
  //Данные с API для профиля
  profileDescription.textContent = userData.about;
  profilTitle.textContent = userData.name;
  profileAddImage.style.backgroundImage = `url(${userData.avatar})`;

  //Данные с API для карточек
  cardsData.forEach((item) => {
    places.append(
      createCard(
        item.name,
        item.owner._id,
        userData._id,
        item._id,
        item.link,
        item.altText,
        item.likes,
        deleteCard,
        like,
        openPopupImg
      )
    );
  });
}

function updatesListCards(res) {
  places.insertBefore(
    createCard(
      res.name,
      res.owner._id,
      userId,
      res._id,
      res.link,
      res.altText,
      res.likes,
      deleteCard,
      like,
      openPopupImg
    ),
    places.firstChild
  );
}

function updatesAvatar(res) {
  profileAddImage.style.backgroundImage = `url(${res.avatar})`;
}

function addNewAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, formEditAvatar.querySelector(".popup__button"));
  updateUserAvatar(urlImgAvatar.value)
    .then((res) => {
      console.log(res);
      updatesAvatar(res);
      closePopup(popupFormAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() =>
      renderLoading(false, formEditAvatar.querySelector(".popup__button"))
    );
}

function addNewCard(evt) {
  evt.preventDefault();
  renderLoading(true, formAddCard.querySelector(".popup__button"));
  saveNewCard(inputNameCart.value, inputUrlCart.value)
    .then((res) => {
      updatesListCards(res);
      closePopup(popupFormCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() =>
      renderLoading(false, formAddCard.querySelector(".popup__button"))
    );
}

function openPopupImg(popupElement, src, alt, textContent) {
  popupElement.querySelector(".popup__image").src = src;
  popupElement.querySelector(".popup__image").alt = alt;
  popupElement.querySelector(".popup__caption").textContent = textContent;

  openPopup(popupElement);

  popupElement.querySelector(".popup__image").focus();
}

allForm.forEach((evt) => {
  enableValidation({
    formSelector: evt,
    inputSelector: evt.querySelectorAll(".popup__input"),
    submitButtonSelector: evt.querySelector(".popup__button"),
    inputErrorClass: "popup__input_type_error",
    errorClass: "form__input-error_active",
  });
});

function clearFormValidationProfil() {
  clearValidation(editFormElement, validationConfig);
}

function clearFormValidationAddCard() {
  clearValidation(formAddCard, validationConfig);
}

function clearFormValidationAvatar() {
  clearValidation(formEditAvatar, validationConfig);
}

export {
  clearFormValidationProfil,
  clearFormValidationAddCard,
  clearFormValidationAvatar,
  updatesListCards,
};
