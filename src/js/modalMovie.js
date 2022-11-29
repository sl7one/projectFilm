import { request, API_KEY } from './requestAPI';

export const refsModal = {

  mainContainer: document.querySelector(".main.container"),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector("div.modal-movie-info"),
  closeModalBtn: document.querySelector('[data-modal-close]'),

  poster: document.querySelector('#poster__image'),
  movieName: document.querySelector('.move-info__name'),
  vote: document.querySelector('.vote-container'),
  votes: document.querySelector('.votes-container'),
  popularity: document.querySelector('.popularity-container'),
  originalTitle: document.querySelector('.original-title-container'),
  genre: document.querySelector('.genre-container'),
  about: document.querySelector('.movie-info__about-content'),
  btnWatched: document.querySelector('#add-to-watched'),
  btnQueue: document.querySelector('#add-to-queue'),
};

let offsetX = 0; 
let offsetY = 0;

refsModal.closeModalBtn.addEventListener("click", hideModal);
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") { hideModal() }
} )

export function showModal() {

  offsetX = window.pageXOffset;
  offsetY = window.pageYOffset;

  const body = document.body;
  refsModal.mainContainer.style.overflow = "hidden";
  body.style.overflow = "hidden";
  refsModal.modal.overflowY = "scroll";
  //window.scrollTo(offsetX, offsetY);
  refsModal.backdrop.classList.remove('is-hidden');

  // if (refsModal.modal.offsetHeight > window.innerHeight) {
  //   refsModal.modal.style.top = "5px";
  //   refsModal.modal.style.transform = "none";
  // }
}

export function hideModal() {
  
  refsModal.backdrop.classList.add('is-hidden');
  const body = document.body;
  body.style.overflow = "";

  
//  refsModal.closeModalBtn.removeEventListener("click", hideModal);
}

export async function modalMovie(event) {
  
  showModal();

  let movieCard = event.target.parentNode;
  
  while (
    movieCard.nodeName !== 'LI' &&
    movieCard.className !== 'gallery__item'
  ) {
    movieCard = movieCard.parentNode;
  }
  const id = movieCard.dataset.id;

  const data = await request.movieId(id);

  refsModal.poster.src =
    `https://image.tmdb.org/t/p/w500${data?.poster_path}?api_key=${API_KEY}&language=en-US` ??
    '#';

  refsModal.movieName.textContent = 
    data?.original_title ?? 
    data?.original_name ?? 'NAMELESS MOVIE';
  refsModal.vote.textContent = data?.vote_average ?? 0;
  refsModal.votes.textContent = '/ ' + data?.vote_count ?? 0;
  refsModal.popularity.textContent = data?.popularity ?? 0;
  refsModal.originalTitle.textContent = data?.original_title ?? '';
  refsModal.genre.textContent =
    data?.genres.map(genre => genre?.name).join(', ') ?? 'Not set';
  refsModal.about.textContent =
    data?.overview ?? 'There is no information provided.';
    
}
