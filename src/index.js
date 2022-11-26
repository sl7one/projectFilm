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

import './js/footer';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { ref } from './js/ref';
import { filmId } from './js/film';
import { markup } from './js/markup';
import { render } from './js/render';
import { request } from './js/requestAPI';
import { shema } from './js/shema';
import { modal } from './js/modal';
import { refsModal, showModal, hideModal, modalMovie } from './js/modalMovie';
import { normalizedValue } from './js/valueServis';
import { localStorage } from './js/localStorage';

hideModal();

const pagination = new Pagination('pagination', options);
const page = pagination.getCurrentPage();

const loadMorePopylarPhotos = async event => {
  const currentPage = event.page;
  const data = await request.popular(currentPage);
  const genres = await request.genres();
  render.print(data, genres, markup.gallery);
};

pagination.on('beforeMove', loadMorePopylarPhotos);

//--------рендер популярных фильмов при загрузке-------------//
main(page);
async function main(page) {
  const data = await request.popular(page);
  const genres = await request.genres();
  pagination.reset(data.total_results);
  render.print(data, genres, markup.gallery);
  //---------------модалка при клике на карточку-------------//
  ref.gallery.addEventListener('click', onClickCardGallery);
  function onClickCardGallery(event) {
    const nodeName = event.target.parentNode.nodeName;
    if (nodeName === 'A' || nodeName === 'DIV' || nodeName === 'P') {
      modalMovie(event);
      showModal();
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
}

//---------------рендер фильмов по запросу-----------------//
ref.form.addEventListener('submit', onInputSabmit);

const loadMoreOueryPhotos = async event => {
  const currentPage = event.page;
  const data = await request.input(currentPage);
  const genres = await request.genres();
  render.print(data, genres, markup.gallery);
};

async function onInputSabmit(event) {
  event.preventDefault();
  request.query = event.currentTarget.elements[0].value.trim().toLowerCase();

  if (request.query === '') {
    return ref.errorString.classList.remove('is-hidden');
  }

  render.clear();
  const data = await request.input();
  if (data.results.length === 0) {
    ref.errorString.classList.remove('is-hidden');
    ref.pagination.classList.add('is-hidden');
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
  event.target.reset();

  //---------------модалка при клике на карточку-------------//
  refsModal.gallery.addEventListener('click', onClickCardGallery);
  function onClickCardGallery(event) {
    modalMovie(event);
  }
}

//------------------------------манипуляции с локал стореджем------------------//
function localStorageServise(event) {
  const id = event.target.parentElement.parentElement.dataset.id;
  //----сохраняем в просмотренные фильмы---------//
  refsModal.btnWatched.addEventListener('click', onAddClick);
  function onAddClick() {
    localStorage.watchedList(id);
  }
  //----сохраняем в очередь фильмы---------//
  refsModal.btnQueue.addEventListener('click', onQueueClick);
  function onQueueClick() {
    localStorage.queueList(id);
  }
}
