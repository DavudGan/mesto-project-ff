import {openPopupImg} from '../popup/popupOpenAndClose';

const cardTemplate = document.querySelector('#card-template').content;

export default function createCard (titleValue, imageValue, alt, removeCard, likeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    
    cardElement.querySelector('.card__image').src = imageValue;
    cardElement.querySelector('.card__image').alt = alt;
    cardElement.querySelector('.card__title').textContent = titleValue;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {removeCard(cardElement)});

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeCard(cardElement));

    //открытm popup для картинок
    const popupImage = document.querySelector('.popup_type_image');
    const imge = cardElement.querySelector('.card__image');
    const title = cardElement.querySelector('.card__title');
    
    imge.addEventListener('click', () => openPopupImg(popupImage, imge.src, imge.alt, title.textContent));


    return cardElement
};