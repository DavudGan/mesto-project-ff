// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import addIcon from '../images/add-icon.svg';
import avatar from '../images/avatar.jpg';
import card1 from '../images/card_1.jpg';
import logo from '../images/logo.svg';
import '../styles/index.css';

import {createCard} from './card';
import {initialCards} from './cards';
import {openPopup, closePopup, closeKeyPopup} from './modal';

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'add', link: addIcon },
  { name: 'avatar', link: avatar },
  { name: 'card1', link: card1 },
  { name: 'logo', link: logo },
];

//Добавление города
const profileAddCard = document.querySelector('.profile__add-button');
const popupFormCard = document.querySelector('.popup_type_new-card');
const popupCloseCardButton = popupFormCard.querySelector('.popup__close');

const editformElementCard = popupFormCard.querySelector('.popup__form');

//Редактирование профиля
const profilEeditButton = document.querySelector ('.profile__edit-button');
const popuProfiledit = document.querySelector ('.popup_type_edit');
const popupCloseProfileditButton = popuProfiledit.querySelector('.popup__close');

const editformElement = popuProfiledit.querySelector('.popup__form');

//Закрытие попапа с картинкой 
const popupImage = document.querySelector('.popup_type_image')
const popupCloseImgeButton = popupImage.querySelector('.popup__close')

profileAddCard.addEventListener('click', () => openPopup(popupFormCard));
popupCloseCardButton.addEventListener('click',() => closePopup(popupFormCard));
profileAddCard.addEventListener('keydown', evt => {closeKeyPopup(evt, popupFormCard)});

editformElementCard.addEventListener('submit', addNewCard); 

profilEeditButton.addEventListener('click', evt => {openPopup(popuProfiledit),updatesProfileDataInputPopup()});
popupCloseProfileditButton.addEventListener('click',() => closePopup(popuProfiledit));
profilEeditButton.addEventListener('keydown', evt => {closeKeyPopup(evt, popuProfiledit)});

editformElement.addEventListener('submit', updatesProfile); 

popupCloseImgeButton.addEventListener('click',() => closePopup(popupImage));
popupImage.addEventListener('keydown', evt => {closeKeyPopup(evt, popupImage)});

function updatesProfileDataInputPopup () {
  nameFormElement.value =  profilTitle.textContent;
  descriptionFormElement.value = profileDescription.textContent;
}

function  updatesProfile(evt) {
  evt.preventDefault();
  
  profilTitle.textContent = nameFormElement.value;
  profileDescription.textContent = descriptionFormElement.value;

  closePopup(popuProfiledit)
}

const editFormElement = document.forms['edit-profile'];
const nameFormElement = editFormElement.querySelector("[name='name']");
const descriptionFormElement = editFormElement.querySelector("[name='description']");

const profileInfo = document.querySelector('.profile__info');
const profilTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');

const places = document.querySelector('.places__list');

const editFormElementCart = document.forms['new-place'];
const nameFormElementCart = editFormElementCart.querySelector("[name='place-name']")
const urlFormElementCart = editFormElementCart.querySelector("[name='link']");

function initial () {
    initialCards.forEach((item) => {
      places.append(createCard(item.name, item.link, item.altText));
   }
  );
}

function updatesListCards () {
  editFormElementCart.reset()
}

function addNewCard(evt) {
  evt.preventDefault();

  const places = document.querySelector('.places__list');
  places.append(createCard(nameFormElementCart.value, urlFormElementCart.value, 'Картинка загруженная пользователем'));
  updatesListCards();
  closePopup(popupFormCard);
}

function openPopupImg (popupElement, src, alt, textContent) {
  popupElement.querySelector('.popup__image').src = src;
  popupElement.querySelector('.popup__image').alt = alt;
  popupElement.querySelector('.popup__caption').textContent = textContent;
  openPopup(popupElement)
  
  popupElement.querySelector('.popup__image').focus();

  closeOutOfPopup(popupElement);
}

function closeOutOfPopup (popupElement) {
  popupElement.addEventListener('click', function (evt) {
      if (!evt.target.closest('.popup__content')) {
          closePopup(popupElement);
      }
  });
  
}

//Загрузка карточек при первом входе на сайт
initial();

export {openPopupImg}