import {openPopup, closePopup, openPopupImg} from './popupCard'

const cardTemplate = document.querySelector('#card-template').content;

export default function createCard (titleValue, imageValue, alt, removeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    // const popupImage = document.querySelector('.popup_type_image')
    
    cardElement.querySelector('.card__image').src = imageValue;
    cardElement.querySelector('.card__image').alt = alt;

    cardElement.querySelector('.card__title').textContent = titleValue;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(){removeCard(cardElement)});


// const cardElementd = document.querySelector('.card')
// const popupImage = document.querySelector('.popup_type_image')
// const imge = cardElementd.querySelector('.card__image')
// const title = cardElementd.querySelector('.card__title')


// imge.addEventListener('click', () => openPopupImg(popupImage, imge.src, imge.alt, title.textContent))

// console.log(imge.src)

    
    return cardElement;
};