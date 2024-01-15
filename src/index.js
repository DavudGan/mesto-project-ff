// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import addIcon from './images/add-icon.svg';
import avatar from './images/avatar.jpg';
import card1 from './images/card_1.jpg';
import logo from './images/logo.svg';
import './styles/index.css';
import initialCards  from './components/card/initialCards';
import {popup} from './components/popup/popup';


const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'add', link: addIcon },
  { name: 'avatar', link: avatar },
  { name: 'card1', link: card1 },
  { name: 'logo', link: logo },
];

//Открытие и закрытие popups
popup();
//Загрузка карточек при первом входе на сайт
initialCards();
