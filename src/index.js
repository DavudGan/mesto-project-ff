// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import {initialCards} from './scripts/cards.js'
import addIcon from './images/add-icon.svg';
import avatar from './images/avatar.jpg';
import card1 from './images/card_1.jpg';
import logo from './images/logo.svg';
import './styles/index.css';

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'add', link: addIcon },
  { name: 'avatar', link: avatar },
  { name: 'card1', link: card1 },
  { name: 'logo', link: logo },
];

// // @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// // @todo: DOM узлы
const places = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard (titleValue, imageValue, alt, removeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    cardElement.querySelector('.card__image').src = imageValue;
    cardElement.querySelector('.card__image').alt = alt;

    cardElement.querySelector('.card__title').textContent = titleValue;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(){removeCard(cardElement)});
    
    return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard (cardEl) {
    cardEl.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    places.append(createCard(item.name, item.link, item.altText, deleteCard));
});

