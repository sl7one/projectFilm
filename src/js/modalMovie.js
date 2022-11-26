import { request } from './requestAPI';

export const refsModal = {
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),

  poster: document.querySelector('#poster__image'),
  vote: document.querySelector('.vote-container'),
  votes: document.querySelector('.votes-container'),
  popularity: document.querySelector('.popularity-container'),
  originalTitle: document.querySelector('.original-title-container'),
  genre: document.querySelector('.genre-container'),
  about: document.querySelector('.movie-info__about-title'),
  btnWatched: document.querySelector('#add-to-watched'),
  btnQueue: document.querySelector('#add-to-queue'),
};

export function showModal() {
  refsModal.modal.classList.remove('is-hidden');
}

export function hideModal() {
  refsModal.modal.classList.add('is-hidden');
}

export function modalMovie(event) {
  console.log(event);
  const data = request.movieId('774752');
  console.log(data);
}
