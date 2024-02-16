import { removeCard, addLike, removeLike } from "./api";

const cardTemplate = document.querySelector("#card-template").content;
const popupImage = document.querySelector(".popup_type_image");

function createCard(
  nameCard,
  cardUserId,
  userId,
  cardId,
  imageSrc,
  alt,
  likeSum,
  deleteCard,
  like,
  openPopupImg
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = imageSrc;
  cardElement.querySelector(".card__image").alt = alt;
  cardElement.querySelector(".card__title").textContent = nameCard;
  cardElement.querySelector(".card__like-sum").textContent = likeSum.length;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    deleteCard(cardId, cardElement);
  });

  if (cardUserId === userId) {
    deleteButton.style.display = "block";
  } else {
    deleteButton.style.display = "none";
  }

  if (likeSum.length > 0) {
    likeSum.forEach((element) => {
      if (element._id === userId) {
        cardElement
          .querySelector(".card__like-button")
          .classList.add("card__like-button_is-active");
      }
    });
  }

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", (evt) => {
    like(evt, cardId, cardElement);
  });

  //Открытый popup для картинок
  const imge = cardElement.querySelector(".card__image");
  const title = cardElement.querySelector(".card__title");

  imge.addEventListener("click", () =>
    openPopupImg(imge.src, imge.alt, title.textContent)
  );

  return cardElement;
}

function like(evt, cardId, cardElement) {
  if (evt.target.classList.contains("card__like-button")) {
    if (
      cardElement
        .querySelector(".card__like-button")
        .classList.contains("card__like-button_is-active")
    ) {
      removeLike(cardId)
        .then((res) => {
          cardElement.querySelector(".card__like-sum").textContent =
            res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addLike(cardId)
        .then((res) => {
          cardElement.querySelector(".card__like-sum").textContent =
            res.likes.length;
          cardElement
            .querySelector(".card__like-button")
            .classList.toggle("card__like-button_is-active");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

function deleteCard(cardId, cardEl) {
  removeCard(cardId)
    .then(() => {
      cardEl.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

export { createCard, like, deleteCard };
