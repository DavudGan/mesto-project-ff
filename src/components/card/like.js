export default function like(cardElement) {
    cardElement.addEventListener('click', function (evt) {
        if(evt.target.classList.contains('card__like-button')) {
            evt.target.classList.toggle('card__like-button_is-active');
        } 
    });
}