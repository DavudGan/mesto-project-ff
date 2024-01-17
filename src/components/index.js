// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import addIcon from '../images/add-icon.svg';
import avatar from '../images/avatar.jpg';
import card1 from '../images/card_1.jpg';
import logo from '../images/logo.svg';
import '../styles/index.css';

import {createCard, like, deleteCard} from './card';
import {initialCards} from './cards';
import {openPopup, closePopup, closeOutOfPopup} from './modal';

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

const popupContainers = document.querySelectorAll('.popup')

const editformElementCard = popupFormCard.querySelector('.popup__form');

//Редактирование профиля
const profilEeditButton = document.querySelector ('.profile__edit-button');
const popuProfiledit = document.querySelector ('.popup_type_edit');
const popupCloseProfileditButton = popuProfiledit.querySelector('.popup__close');

const editformElement = popuProfiledit.querySelector('.popup__form');

//Закрытие попапа с картинкой 
const popupImage = document.querySelector('.popup_type_image')
const popupCloseImgeButton = popupImage.querySelector('.popup__close')

//Редактирование профиля
const editFormElement = document.forms['edit-profile'];
const inputNameormProfile = editFormElement.querySelector("[name='name']");
const inputDescriptionProfile = editFormElement.querySelector("[name='description']");

const profileInfo = document.querySelector('.profile__info');
const profilTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');

//Добавление карточки
const places = document.querySelector('.places__list');

const editFormElementCart = document.forms['new-place'];
const inputNameCart = editFormElementCart.querySelector("[name='place-name']")
const inputUrlCart = editFormElementCart.querySelector("[name='link']");
 

//закрыт попап картинки
popupCloseImgeButton.addEventListener('click',() => closePopup(popupImage));

//открыт и закрыт попап профиля
profilEeditButton.addEventListener('click', () => {openPopup(popuProfiledit),updatesProfileDataInputPopup()});
popupCloseProfileditButton.addEventListener('click',() => closePopup(popuProfiledit));

editformElement.addEventListener('submit', updatesProfile); 

//открыт и закрыт попап карточек
profileAddCard.addEventListener('click', () => openPopup(popupFormCard));
popupCloseCardButton.addEventListener('click',() => closePopup(popupFormCard));

editformElementCard.addEventListener('submit', addNewCard); 

//Добваление клика вне контента попап
popupContainers.forEach((popupContainer) =>{ popupContainer.addEventListener('click', closeOutOfPopup)})

function updatesProfileDataInputPopup () {
  inputNameormProfile.value =  profilTitle.textContent;
  inputDescriptionProfile.value = profileDescription.textContent;
}

function  updatesProfile(evt) {
  evt.preventDefault();
  
  profilTitle.textContent = inputNameormProfile.value;
  profileDescription.textContent = inputDescriptionProfile.value;

  closePopup(popuProfiledit)
}

function initial () {
    initialCards.forEach((item) => {
      places.append(createCard(item.name, item.link, item.altText, deleteCard, like, openPopupImg));
   }
  );
}

function updatesListCards () {
  editFormElementCart.reset()
}

function addNewCard(evt) {
  evt.preventDefault();

  const places = document.querySelector('.places__list');
  const newCard = createCard(inputNameCart.value, inputUrlCart.value, 'Картинка загруженная пользователем', deleteCard, like, openPopupImg);
  places.insertBefore(newCard, places.firstChild);
  updatesListCards();
  closePopup(popupFormCard);
}

function openPopupImg (popupElement, src, alt, textContent) {
  popupElement.querySelector('.popup__image').src = src;
  popupElement.querySelector('.popup__image').alt = alt;
  popupElement.querySelector('.popup__caption').textContent = textContent;
  
  openPopup(popupElement)
  
  popupElement.querySelector('.popup__image').focus();
}

//Загрузка карточек при первом входе на сайт
initial();

export {openPopupImg}