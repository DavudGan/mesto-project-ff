import createCard from '../../components/createCard'
import deleteCard from './deleteCard'
import {initialCards} from '../../scripts/cards'

const places = document.querySelector('.places__list');

export default initialCards.forEach((item) => {
    places.append(createCard(item.name, item.link, item.altText, deleteCard));
});
