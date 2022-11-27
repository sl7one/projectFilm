import { request, API_KEY } from './requestAPI';

export const refsModal = {
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),

  poster: document.querySelector('#poster__image'),
  movieName: document.querySelector(".move-info__name"),
  vote: document.querySelector('.vote-container'),
  votes: document.querySelector('.votes-container'),
  popularity: document.querySelector('.popularity-container'),
  originalTitle: document.querySelector('.original-title-container'),
  genre: document.querySelector('.genre-container'),
  about: document.querySelector('.movie-info__about-content'),
  btnWatched: document.querySelector('#add-to-watched'),
  btnQueue: document.querySelector('#add-to-queue'),
};

export function showModal() {
  refsModal.modal.classList.remove('is-hidden');
}

export function hideModal() {
  refsModal.modal.classList.add('is-hidden');
}

export async function modalMovie(event) {
  console.log("Event: ", event);

  let movieCard = event.target.parentNode;
  console.dir(movieCard);
  while (movieCard.nodeName !== "LI" && movieCard.className !== "gallery__item") {
    movieCard = movieCard.parentNode;
  }
  const id = movieCard.dataset.id;
  console.log(id);

  const data = await request.movieId(id);

  refsModal.poster.src = `https://image.tmdb.org/t/p/w500${data?.poster_path}?api_key=${API_KEY}&language=en-US` ?? "#"
  refsModal.movieName.textContent = data?.original_title ?? "NAMELESS MOVIE";
  refsModal.vote.textContent = data?.vote_average ?? 0;
  refsModal.votes.textContent = "/ "+ data?.vote_count ?? 0;
  refsModal.popularity.textContent = data?.popularity ?? 0;
  refsModal.originalTitle.textContent = data?.original_title ?? "";
  refsModal.genre.textContent = data?.genres.map((genre)=>genre?.name).join(", ") ?? "Not set"
  refsModal.about.textContent = data?.overview ?? "There is no information provided."

}
