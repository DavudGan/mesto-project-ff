import {initialCards} from './cards'

export default function deleteCard (cardEl) {
    const a = cardEl.querySelector('.card__image').src;
    initialCards.forEach((element, ind) => {
        if(element.link === a){
            initialCards.splice(ind, 1);
        }
    });
    cardEl.remove();
};