import { request, API_KEY } from './requestAPI';

export const markup = {
  nameGenre: {},

  gallery(data, genresDataBase) {
    //--------создаем нормализированную базу жанров ------//

    for (const elem of genresDataBase.genres) {
      const id = Object.values(elem)[0];
      const name = Object.values(elem)[1];

      markup.nameGenre = { ...markup.nameGenre, [id]: name };
    }

    //------------------------------------------------------//
    const { results } = data;

    //--------------запускаем редьюс для создания разметки-------------------------------------//
    return results.reduce((acc, film) => {
      //-----------------запускаем цикл для поска совпадений по жарнрам нормализированной базы и текущих жанров---------------------------------------//

      const genresName = [];
      let genre = ``;

      for (const elem of film.genre_ids) {
        if (
          !markup.nameGenre[`${elem}`] ||
          markup.nameGenre[`${elem}`].length > 10
        ) {
          continue;
        }

        genresName.push(markup.nameGenre[`${elem}`]);
      }

      genre =
        genresName.length > 2
          ? genresName.slice(0, 2).join(', ') + `, Other`
          : genresName.slice(0, 2).join(', ');

      //---------------------------------------------------------//
      const defaultUrl =
        'https://cdn-www.comingsoon.net/assets/uploads/2014/09/file_123131_0_defaultposterlarge.jpg';
      const url = film.poster_path
        ? `https://image.tmdb.org/t/p/w500${film.poster_path}?api_key=${API_KEY}&language=en-US"`
        : defaultUrl;
      //----------------возвращаем аккумулированную разметку в метод редьюс---------------//
      return (acc += `<li class="gallery__item" data-id=${film.id}>
      <a class="film" href="#">
        <img
          class="film__image"
          src=${url}
          alt="${film.title || film.name}"
          loading = 'lazy'/>
        <div class="film__meta">
          <p class="film__title js-tooltip"><span class="js-tooltiptext">${
            film.title || film.name
          }</span>${cutString(film.title || film.name)}</p>
          <p class="film__description">
            <span class="film__genre">${genre || `Other`}</span>
            <span class="film__year">${parseInt(
              film.release_date || film.first_air_date
            )}</span>
            <span class="film__rating">${film?.vote_average?.toFixed(1)}</span>
          </p>
        </div>
      </a>
    </li >`);
    }, '');
  },

  markupModal(data) {
    //----------------------------------------//
    const film = data;
    // ----------------------------------genres----------------------
    const genresName = [];
    let genre = ``;
    for (const elem of film.results.genre_ids) {
      if (
        !markup.nameGenre[`${elem}`] ||
        markup.nameGenre[`${elem}`].length > 15
      ) {
        continue;
      }

      genresName.push(markup.nameGenre[`${elem}`]);
    }

    genre =
      genresName.length > 2
        ? genresName.slice(0, 2).join(', ') + `, Other`
        : genresName.slice(0, 2).join(', ');
    //----------------------------------------------------------------
    const defaultUrl =
      'https://cdn-www.comingsoon.net/assets/uploads/2014/09/file_123131_0_defaultposterlarge.jpg';
    const url = film.poster_path
      ? `https://image.tmdb.org/t/p/w500${film.poster_path}?api_key=${API_KEY}&language=en-US"`
      : defaultUrl;

    return `  <div class="modal-movie-info">
    <button class="close-button" type="button" data-modal-close>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 8L22 22" stroke="black" stroke-width="2" />
        <path d="M8 22L22 8" stroke="black" stroke-width="2" />
      </svg>
    </button>

    <div class="poster__wrapper">
      <img
        id="poster__image"
        src=${url}
        alt=${film.title || film.name}
        width="375px"
        height="478px"
      />
    </div>
    <div class="movie-info__wrapper">
      <h2 class="move-info__name">${film.title || film.name}</h2>

      <div class="movie-info__facts">
        <p class="votes-title movie-info__facts--title">Vote / votes</p>
        <p class="popularity-title movie-info__facts--title">Popularity</p>
        <p class="original-title movie-info__facts--title">
          Original title
        </p>
        <p class="genre-title movie-info__facts--title">Genre</p>
        <div class="votes-info">
          <p class="vote-container">${film.vote_average.toFixed(1)}</p>
          <p class="votes-container moovie-info__container">/ ${
            film.vote_count
          }</p>
        </div>
        <p class="popularity-container moovie-info__container">${film.popularity.toFixed(
          1
        )}</p>
        <p class="original-title-container moovie-info__container">${film.original_title.toUpperCase()}</p>
        <p class="genre-container moovie-info__container">${
          genre || `Other`
        }</p>
      </div>

      <p class="movie-info__about-title">About</p>
      <p class="movie-info__about-content">
        ${film.overview}
      </p>
      <button
        class="button button--highlited"
        id="add-to-watched"
        type="button"
      >
        Add to watched
      </button>
      <button class="button button--blank" id="add-to-queue" type="button">
        Add to queue
      </button>
    </div>
  </div>`;
    //-----------------------------------------//
  },
};

function cutString(name) {
  let filmName = '';
  if (name.length < 35) {
    return name;
  }
  if (name.length >= 35) {
    // ref.tooltip.classList.remove('is-hidden');
    return (filmName = name.slice(0, 31) + '...');
  }
}
