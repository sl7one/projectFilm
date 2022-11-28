import { ref } from './ref';
import { markup } from './markup';
import { render } from './render';
import { request } from './requestAPI';
import { shema } from './shema';
import { refsModal, showModal, hideModal, modalMovie } from './modalMovie';
import { localStorageList } from './localStorage';


const boxForFilmsWatched = document.querySelector('.gallery.watched');
const boxForFilmsQueue = document.querySelector('.gallery.queue');
const btnForFilmsWatched = document.querySelector('.lib-btn.watched');
const btnForFilmsQueue = document.querySelector('.lib-btn.queue');

console.log(btnForFilmsWatched);

const onBtnWatchedClick = () => {
  boxForFilmsQueue.innerHTML = '';
  boxForFilmsWatched.innerHTML = '';
  localStorageList.checkLocalWatched(boxForFilmsWatched);
};
const onBtnQueueClick = () => {
  boxForFilmsQueue.innerHTML = '';
  boxForFilmsWatched.innerHTML = '';
  localStorageList.checkLocalQueue(boxForFilmsQueue);
};

btnForFilmsWatched.addEventListener('click', onBtnWatchedClick);
btnForFilmsQueue.addEventListener('click', onBtnQueueClick);

