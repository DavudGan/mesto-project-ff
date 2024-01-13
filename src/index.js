// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import addIcon from './images/add-icon.svg';
import avatar from './images/avatar.jpg';
import card1 from './images/card_1.jpg';
import logo from './images/logo.svg';
import './styles/index.css';
import initialCards  from '../src/blocks/card/initialCards';
import {openPopup, closePopup, openPopupImg} from './components/popupCard'

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'add', link: addIcon },
  { name: 'avatar', link: avatar },
  { name: 'card1', link: card1 },
  { name: 'logo', link: logo },
];


const profileAddCaed = document.querySelector('.profile__add-button');
const popupForm = document.querySelector('.popup_type_new-card');
const popupCloseCard = popupForm.querySelector('.popup__close');

const profilEeditButton = document.querySelector ('.profile__edit-button')
const popuProfiledit = document.querySelector ('.popup_type_edit')
const popupCloseProfiledit = popuProfiledit.querySelector('.popup__close');

const cardElement = document.querySelector('.card')
const popupImage = document.querySelector('.popup_type_image')
const imge = cardElement.querySelector('.card__image')
const title = cardElement.querySelector('.card__title')


imge.addEventListener('click', () => openPopupImg(popupImage, imge.src, imge.alt, title.textContent))

console.log(imge.src)



profileAddCaed.addEventListener('click', () => openPopup(popupForm));
popupCloseCard.addEventListener('click',() => closePopup(popupForm));

profilEeditButton.addEventListener('click', () => openPopup(popuProfiledit));
popupCloseProfiledit.addEventListener('click',() => closePopup(popuProfiledit));




