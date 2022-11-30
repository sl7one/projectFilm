import './footer';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { Loading } from 'notiflix/build/notiflix-loading-aio';

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

const onBtnWatchedClick = () => {
  boxForFilmsQueue.innerHTML = '';
  boxForFilmsWatched.innerHTML = '';
  btnForFilmsWatched.classList.add('current-btn');
  btnForFilmsQueue.classList.remove('current-btn');
  localStorageList.checkLocalWatched(boxForFilmsWatched);
};
const onBtnQueueClick = () => {
  boxForFilmsQueue.innerHTML = '';
  boxForFilmsWatched.innerHTML = '';
  btnForFilmsWatched.classList.remove('current-btn');
  btnForFilmsQueue.classList.add('current-btn');
  localStorageList.checkLocalQueue(boxForFilmsQueue);
};

btnForFilmsWatched.addEventListener('click', onBtnWatchedClick);
btnForFilmsQueue.addEventListener('click', onBtnQueueClick);

document
  .querySelector('[data-watched]')
  .addEventListener('click', onTargetClick);
document.querySelector('[data-queue]').addEventListener('click', onTargetClick);

async function onTargetClick(event) {
  if (event.target.nodeName === 'IMG') {
    // const data = await request.movieId(
    //   event.target.parentNode.parentNode.dataset.id
    // );
    await modalMovie(event);
    try {
      Loading.hourglass({
        clickToClose: true,
        svgSize: '200px',
        svgColor: '#ff6b01',
      });
      showModal();
      // render.lightBoxModal(data, markup.markupModal); //--------не трогать
      const btns = document.querySelectorAll(
        '.movie-info__wrapper  .button-wrapper [type="button"]'
      );

      btns[0].remove();
      btns[1].remove();
    } catch (e) {
    } finally {
      Loading.remove();
    }
  }
}
