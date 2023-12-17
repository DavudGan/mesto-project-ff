// // @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// // @todo: DOM узлы
const places = document.querySelector('.places__list');
const deleteElement = document.querySelector('.card__delete-button');

// @todo: Функция создания карточки
function addCard (titleValue, imageValue) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__image').src = imageValue;
    cardElement.querySelector('.card__title').textContent = titleValue;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(){deleteCard(cardElement)});
    
    places.append(cardElement);
};

// @todo: Функция удаления карточки
function deleteCard (cardEl) {
    const deleteButton = cardEl.querySelector('.card__delete-button');
    const cardToRemove = deleteButton.parentElement;
    cardToRemove.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((item, index) => {
    addCard(initialCards[index].name, initialCards[index].link);
});

