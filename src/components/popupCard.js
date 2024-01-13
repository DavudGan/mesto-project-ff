function closePopup  (popupElement) {
    popupElement.classList.remove('popup_is-opened');
};

function openPopup  (popupElement)  {
    popupElement.classList.add('popup_is-opened');
};

function openPopupImg (popupElement, src, alt, textContent) {
    popupElement.classList.add('popup_is-opened');
    popupElement.querySelector('.popup__image').src = src;
    popupElement.querySelector('.popup__image').alt = alt;
    popupElement.querySelector('.popup__caption').textContent = textContent;
    popupElement.classList.add('popup_is-opened');
}


export {openPopup, closePopup, openPopupImg}