import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  template: {
    page: '<a href="#" class="tui-custon">{{page}}</a>',
    currentPage:
      '<span class="tui-custon tui-custon-is-selected">{{page}}</span>',
    moveButton:
      '<a href="#" class="tui-custon tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-custon tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-custon tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import './js/footer';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { ref } from './js/ref';
import { markup } from './js/markup';
import { render } from './js/render';
import { request } from './js/requestAPI';
import { shema } from './js/shema';
import { refsModal, showModal, hideModal, modalMovie } from './js/modalMovie';
import { localStorageList } from './js/localStorage';
import { randomModal } from './js/randomModal';
const pagination = new Pagination('pagination', options);
const page = pagination.getCurrentPage();

const loadMorePopylarPhotos = async event => {
  const currentPage = event.page;
  Loading.hourglass({
    clickToClose: true,
    svgSize: '200px',
    svgColor: '#ff6b01',
  });
  render.clear();
  const data = await request.popular(currentPage);
  const genres = await request.genres();
  render.print(data, genres, markup.gallery);
  Loading.remove();
};

pagination.on('beforeMove', loadMorePopylarPhotos);

//--------рендер популярных фильмов при загрузке-------------//
main(page);
async function main(page) {
  Loading.hourglass({
    clickToClose: true,
    svgSize: '200px',
    svgColor: '#ff6b01',
  });
  render.clear();
  const data = await request.popular(page);
  const genres = await request.genres();
  pagination.reset(data.total_results);
  render.print(data, genres, markup.gallery);
  //---------------модалка при клике на карточку-------------//
  ref.gallery.addEventListener('click', onClickCardGallery);
  function onClickCardGallery(event) {
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
      // const data = await request.movieId(
      //   event.target.parentNode.parentNode.dataset.id
      // );
      modalMovie(event);
      showModal();
      // render.lightBoxModal(data, markup.markupModal); //--------не трогать
      localStorageServise(event);
    }

    // --------------закрытие модалки------------------------//
    refsModal.closeModalBtn.addEventListener('click', onClickCloseModalBtn, {
      once: true,
    });
    function onClickCloseModalBtn(event) {
      hideModal();
    }
  }
  Loading.remove();
}

//---------------рендер фильмов по запросу-----------------//
ref.form.addEventListener('submit', onInputSabmit);

const loadMoreOueryPhotos = async event => {
  const currentPage = event.page;
  Loading.hourglass({
    clickToClose: true,
    svgSize: '200px',
    svgColor: '#ff6b01',
  });
  render.clear();
  const data = await request.input(currentPage);
  const genres = await request.genres();
  render.print(data, genres, markup.gallery);
  Loading.remove();
};

async function onInputSabmit(event) {
  event.preventDefault();
  request.query = event.currentTarget.elements[0].value.trim().toLowerCase();

  if (request.query === '') {
    return ref.errorString.classList.remove('is-hidden');
  }
  Loading.hourglass({
    clickToClose: true,
    svgSize: '200px',
    svgColor: '#ff6b01',
  });
  render.clear();
  const data = await request.input();
  if (data.results.length === 0) {
    ref.errorString.classList.remove('is-hidden');
    ref.pagination.classList.add('is-hidden');
    Loading.remove();
    return;
  }
  ref.errorString.classList.add('is-hidden');
  ref.pagination.classList.remove('is-hidden');
  const genres = await request.genres();

  pagination.off('beforeMove', loadMorePopylarPhotos);
  pagination.off('beforeMove', loadMoreOueryPhotos);
  pagination.on('beforeMove', loadMoreOueryPhotos);

  pagination.reset(data.total_results);
  render.print(data, genres, markup.gallery);
  Loading.remove();
  event.target.reset();

  //---------------модалка при клике на карточку-------------//
  ref.gallery.addEventListener('click', onClickCardGallery);
  function onClickCardGallery(event) {
    if (event.target.nodeName === 'IMG') {
      // const data = await request.movieId(
      //   event.target.parentNode.parentNode.dataset.id
      // );
      modalMovie(event);
      showModal();
      // render.lightBoxModal(data, markup.markupModal); ///----- не трогать
      localStorageServise(event);
    }
  }
}
//------------------------------манипуляции с локал стореджем------------------//
function localStorageServise(codeCardFilm) {
  //   //----сохраняем в просмотренные фильмы---------//

  const lightBoxQueueBtn = document.querySelector(
    '.basicLightbox  #add-to-queue'
  );
  (lightBoxQueueBtn || refsModal.btnQueue).addEventListener(
    'click',
    onQueueClick
  );
  function onQueueClick() {
    localStorageList.queueList(codeCardFilm);
    refsModal.btnWatched.removeEventListener('click', onAddClick);
  }

  //   //----сохраняем в очередь фильмы---------//
  const lightBoxAddBtn = document.querySelector(
    '.basicLightbox  #add-to-watched'
  );
  (lightBoxAddBtn || refsModal.btnWatched).addEventListener(
    'click',
    onAddClick
  );
  function onAddClick() {
    localStorageList.watchedList(codeCardFilm);
    refsModal.btnQueue.removeEventListener('click', onQueueClick);
  }
}
