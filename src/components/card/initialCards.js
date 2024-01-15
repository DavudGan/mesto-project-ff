import createCard from './createCard';
import deleteCard from './deleteCard';
import {initialCards} from './cardsData';
import like from './like';

const places = document.querySelector('.places__list');

export default function initial () {
    initialCards.forEach((item) => {
        places.append(createCard(item.name, item.link, item.altText, deleteCard, like));
   });
} 

