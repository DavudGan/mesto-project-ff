// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import addIcon from "../images/add-icon.svg";
import avatar from "../images/avatar.jpg";
import card1 from "../images/card_1.jpg";
import logo from "../images/logo.svg";
import "../styles/index.css";

import { createCard, like, deleteCard } from "./card";
import { openPopup, closePopup, closeOutOfPopup } from "./modal";
import { enableValidation, clearValidation } from "./validation";

import {
  getProfilData,
  getInitialCards,
  editingProfile,
  saveNewCard,
  editingProfilAvatar,
} from "./api";

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: "add", link: addIcon },
  { name: "avatar", link: avatar },
  { name: "card1", link: card1 },
  { name: "logo", link: logo },
];

const promises = [getProfilData(), getInitialCards()];

Promise.all(promises)
  .then(([userData, cardsData]) => {
    initial(userData, cardsData);
  })
  .catch((error) => {
    // Обработка ошибок
    console.error("Error fetching data:", error);
  });
let userId = "";

//Смена аватара
const profileAddImage = document.querySelector(".profile__image");
const popupFormAvatar = document.querySelector(".popup_type_new-avatar");
const popupCloseAvatarButton = popupFormAvatar.querySelector(".popup__close");

const editformAvatar = popupFormAvatar.querySelector(".popup__form");

const editFormElementAvatar = document.forms["new-avatar"];
const urlImgAvatar = editFormElementAvatar.querySelector("[name='link']");

//Добавление города
const profileAddCard = document.querySelector(".profile__add-button");
const popupFormCard = document.querySelector(".popup_type_new-card");
const popupCloseCardButton = popupFormCard.querySelector(".popup__close");

const popupContainers = document.querySelectorAll(".popup");

const editformElementCard = popupFormCard.querySelector(".popup__form");

//Редактирование профиля
const profilEeditButton = document.querySelector(".profile__edit-button");
const popuProfiledit = document.querySelector(".popup_type_edit");
const popupCloseProfileditButton =
  popuProfiledit.querySelector(".popup__close");

const editformElement = popuProfiledit.querySelector(".popup__form");

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
profilEeditButton.addEventListener("click", () => {
  openPopup(popuProfiledit), updatesProfileDataInputPopup();
});
popupCloseProfileditButton.addEventListener("click", () =>
  closePopup(popuProfiledit)
);

editformElement.addEventListener("submit", updatesProfile);

//открыт и закрыт попап Аватара
profileAddImage.addEventListener("click", () => openPopup(popupFormAvatar));
popupCloseAvatarButton.addEventListener("click", () =>
  closePopup(popupFormAvatar)
);

editFormElementAvatar.addEventListener("submit", addNewAvatar);

//открыт и закрыт попап карточек
profileAddCard.addEventListener("click", () => openPopup(popupFormCard));
popupCloseCardButton.addEventListener("click", () => closePopup(popupFormCard));

editformElementCard.addEventListener("submit", addNewCard);

//Добваление клика вне контента попап
popupContainers.forEach((popupContainer) => {
  popupContainer.addEventListener("click", closeOutOfPopup);
});

function updatesProfileDataInputPopup() {
  inputNameProfile.value = profilTitle.textContent;
  inputDescriptionProfile.value = profileDescription.textContent;
}

async function updatesProfile(evt) {
  evt.preventDefault();
  renderLoading(true, editFormElement.querySelector(".popup__button"));
  await editingProfile(
    inputNameProfile.value,
    inputDescriptionProfile.value
  ).finally(() =>
    renderLoading(false, editFormElement.querySelector(".popup__button"))
  );
  profilTitle.textContent = inputNameProfile.value;
  profileDescription.textContent = inputDescriptionProfile.value;

  closePopup(popuProfiledit);
}

function initial(userData, cardsData) {
  userId = userData._id;
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

function updatesListCards() {
  places.innerHTML = "";
  getInitialCards().then((res) => {
    res.forEach((item) => {
      places.append(
        createCard(
          item.name,
          item.owner._id,
          userId,
          item._id,
          item.link,
          item.altText,
          item.likes.length,
          deleteCard,
          like,
          openPopupImg
        )
      );
    });
  });
}

async function updatesAvatar() {
  await getProfilData()
    .then((res) => {
      profileAddImage.style.backgroundImage = `url(${res.avatar})`;
    })
    .finally(() =>
      renderLoading(false, editformAvatar.querySelector(".popup__button"))
    );
}

async function addNewAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, editformAvatar.querySelector(".popup__button"));
  await editingProfilAvatar(urlImgAvatar.value).finally(() =>
    renderLoading(false, editformAvatar.querySelector(".popup__button"))
  );

  updatesAvatar();
  closePopup(popupFormAvatar);
}

async function addNewCard(evt) {
  evt.preventDefault();
  renderLoading(true, editformElementCard.querySelector(".popup__button"));
  await saveNewCard(inputNameCart.value, inputUrlCart.value).finally(() =>
    renderLoading(false, editformElementCard.querySelector(".popup__button"))
  );

  updatesListCards();
  closePopup(popupFormCard);
}

function openPopupImg(popupElement, src, alt, textContent) {
  popupElement.querySelector(".popup__image").src = src;
  popupElement.querySelector(".popup__image").alt = alt;
  popupElement.querySelector(".popup__caption").textContent = textContent;

  openPopup(popupElement);

  popupElement.querySelector(".popup__image").focus();
}

//Валидация добавление карточки
enableValidation({
  formSelector: editformElementCard,
  inputSelector: editformElementCard.querySelectorAll(".popup__input"),
  submitButtonSelector: editformElementCard.querySelector(".popup__button"),
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
});

// Валидация профиля
enableValidation({
  formSelector: editFormElement,
  inputSelector: editFormElement.querySelectorAll(".popup__input"),
  submitButtonSelector: editFormElement.querySelector(".popup__button"),
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
});

// Валидация Автара
enableValidation({
  formSelector: editformAvatar,
  inputSelector: editformAvatar.querySelectorAll(".popup__input"),
  submitButtonSelector: editformAvatar.querySelector(".popup__button"),
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
});

function clearFormValidationProfil() {
  clearValidation(editFormElement, {
    inputSelector: editFormElement.querySelectorAll(".popup__input"),
    submitButtonSelector: editFormElement.querySelector(".popup__button"),
    errorSelector: ".error_visible",
    inputErrorClass: "popup__input_type_error",
    buttonElementDisabled: false,
  });
}

function clearFormValidationAddCard() {
  clearValidation(editformElementCard, {
    inputSelector: editformElementCard.querySelectorAll(".popup__input"),
    submitButtonSelector: editformElementCard.querySelector(".popup__button"),
    errorSelector: ".error_visible",
    inputErrorClass: "popup__input_type_error",
    buttonElementDisabled: true,
  });
}

function clearFormValidationAvatar() {
  clearValidation(editformAvatar, {
    inputSelector: editformAvatar.querySelectorAll(".popup__input"),
    submitButtonSelector: editformAvatar.querySelector(".popup__button"),
    errorSelector: ".error_visible",
    inputErrorClass: "popup__input_type_error",
    buttonElementDisabled: true,
  });
}

function renderLoading(isLoading, element) {
  if (isLoading) {
    element.textContent = "Сохранение...";
  } else {
    element.textContent = "Сохранить";
  }
}

export {
  clearFormValidationProfil,
  clearFormValidationAddCard,
  clearFormValidationAvatar,
  updatesListCards,
};
