function closePopup  (popupElement) {
    popupElement.classList.remove('popup_is-opened');
};

function openPopup  (popupElement)  {
    popupElement.classList.add('popup_is-opened');
    closeOutOfPopup(popupElement);
};

function openPopupImg (popupElement, src, alt, textContent) {
    popupElement.classList.add('popup_is-opened');
    popupElement.querySelector('.popup__image').src = src;
    popupElement.querySelector('.popup__image').alt = alt;
    popupElement.querySelector('.popup__caption').textContent = textContent;
    popupElement.classList.add('popup_is-opened');

    popupElement.querySelector('.popup__image').focus();

    closeOutOfPopup(popupElement);
}


//Проверка клика вне попапа
function closeOutOfPopup (popupElement) {
    popupElement.addEventListener('click', function (evt) {
        if (!evt.target.closest('.popup__content')) {
            closePopup(popupElement);
        }
    });
    
}

function closeKeyPopup (evt,popupElement) {

    if (evt.key === 'Escape') {
        closePopup(popupElement);
    }

}


export {openPopup, closePopup, openPopupImg, closeKeyPopup}