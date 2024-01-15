import {closePopup} from '../popup/popupOpenAndClose';

const popuProfiledit = document.querySelector ('.popup_type_edit');

const editFormElement = document.forms['edit-profile'];
let nameFormElement = editFormElement.querySelector("[name='name']");
let descriptionFormElement = editFormElement.querySelector("[name='description']");

const profileInfo = document.querySelector('.profile__info');
let profilTitle = profileInfo.querySelector('.profile__title');
let profileDescription = profileInfo.querySelector('.profile__description');

function updatesProfileDataInputPopup () {
    nameFormElement.value =  profilTitle.textContent;
    descriptionFormElement.value = profileDescription.textContent;
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    
    profilTitle.textContent = nameFormElement.value;
    profileDescription.textContent = descriptionFormElement.value;

    nameFormElement.value =  profilTitle.textContent;
    descriptionFormElement.value = profileDescription.textContent;

    closePopup(popuProfiledit)

}

export {handleFormSubmit, updatesProfileDataInputPopup}