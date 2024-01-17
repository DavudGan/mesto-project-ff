const cardTemplate = document.querySelector('#card-template').content;
const popupImage = document.querySelector('.popup_type_image');

function createCard (titleValue, imageValue, alt, deleteCard, like, openPopupImg) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    cardElement.querySelector('.card__image').src = imageValue;
    cardElement.querySelector('.card__image').alt = alt;
    cardElement.querySelector('.card__title').textContent = titleValue;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {deleteCard(cardElement)});

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', evt => {like(evt)});

    //открытm popup для картинок
    const imge = cardElement.querySelector('.card__image');
    const title = cardElement.querySelector('.card__title');
    
    imge.addEventListener('click', () => openPopupImg(popupImage, imge.src, imge.alt, title.textContent));

    return cardElement
};

function like(evt) {
    if(evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle('card__like-button_is-active');
    } 
}

function deleteCard (cardEl) {
    cardEl.remove();
};

export {createCard, like, deleteCard}