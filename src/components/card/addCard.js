import {initialCards} from './cards';
import initialCard from '../card/initialCards'
import {closePopup} from '../popup/popupOpenAndClose'

const popupForm = document.querySelector('.popup_type_new-card');

const editFormElement = document.forms['new-place'];
let nameFormElement = editFormElement.querySelector("[name='place-name']")
let urlFormElement = editFormElement.querySelector("[name='link']");

function updatesListCards () {
    nameFormElement.value = null
    urlFormElement.value = null

    console.log(nameFormElement.value)
}


function addNewCard(evt) {
    evt.preventDefault();

    initialCards.unshift({name:nameFormElement.value,
        link:urlFormElement.value,
        altText:'Картинка загруженая пользователем'
    });
    // обновляем список карточек
    const places = document.querySelector('.places__list');
    places.innerHTML ='';
    initialCard();
    updatesListCards();
    closePopup(popupForm);
}

export {addNewCard}