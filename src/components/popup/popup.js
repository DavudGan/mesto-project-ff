import {openPopup, closePopup, closeKeyPopup} from './popupOpenAndClose';
import {handleFormSubmit, updatesProfileDataInputPopup} from '../profil/editingProfile';
import {addNewCard} from '../card/addCard';

function popup  () {
    
    //Добавление города
    const profileAddCaed = document.querySelector('.profile__add-button');
    const popupForm = document.querySelector('.popup_type_new-card');
    const popupCloseCard = popupForm.querySelector('.popup__close');

    const editformElementCard = popupForm.querySelector('.popup__form');

    //Редактирование профиля
    const profilEeditButton = document.querySelector ('.profile__edit-button');
    const popuProfiledit = document.querySelector ('.popup_type_edit');
    const popupCloseProfiledit = popuProfiledit.querySelector('.popup__close');

    const editformElement = popuProfiledit.querySelector('.popup__form');

    //Закрытие попапа с картинкой 
    const popupImage = document.querySelector('.popup_type_image')
    const popupCloseImge = popupImage.querySelector('.popup__close')

    profileAddCaed.addEventListener('click', () => openPopup(popupForm));
    popupCloseCard.addEventListener('click',() => closePopup(popupForm));
    profileAddCaed.addEventListener('keydown', evt => {closeKeyPopup(evt, popupForm)});

    editformElementCard.addEventListener('submit', addNewCard); 

    profilEeditButton.addEventListener('click', evt => {openPopup(popuProfiledit),updatesProfileDataInputPopup()});
    popupCloseProfiledit.addEventListener('click',() => closePopup(popuProfiledit));
    profilEeditButton.addEventListener('keydown', evt => {closeKeyPopup(evt, popuProfiledit)});

    editformElement.addEventListener('submit', handleFormSubmit); 

    popupCloseImge.addEventListener('click',() => closePopup(popupImage));
    popupImage.addEventListener('keydown', evt => {closeKeyPopup(evt, popupImage)});


}

export {popup}