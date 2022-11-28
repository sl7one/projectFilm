import { API_KEY } from './requestAPI';

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
        if (!markup.nameGenre[`${elem}`]) {
          continue;
        }

        genresName.push(markup.nameGenre[`${elem}`]);
      }

      genre =
        genresName.length > 2
          ? genresName.slice(0, 2).join(', ') + `, Other`
          : genresName.slice(0, 2).join(',');

      //---------------------------------------------------------//

      // console.log('film.poster_path', film.poster_path);
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
          <p class="film__title js-tooltip"><span class="is-hidden js-tooltiptext">${
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

  modal() {},
};

function cutString(name) {
  filmName = '';
  if (name.length < 35) {
    return name;
  }
  if (name.length >= 35) {
    // ref.tooltip.classList.remove('is-hidden');
    return (filmName = name.slice(0, 31) + '...');
  }
}

// `<li class="gallery__item">
//       <a class="film" href="#">
//         <img
//           class="film__image"
//           src="./images/Rectangle 12.jpg"
//           alt="${data.title}"
//           width="375"
//           height="574"
//         />
//         <div class="film__meta">
//           <p class="film__title">${title}</p>
//           <p class="film__description">
//             <span class="film__genre">Drama, Action</span>
//             <span class="film__year">2020</span>
//             <span class="film__rating">10</span>
//           </p>
//         </div>
//       </a>
//     </li >`;

// `<li class="film-list-item" data-id=${e.id}>
// <div class="film-image">
// <img src ='https://image.tmdb.org/t/p/w500${e.poster_path}?api_key=${API_KEY}&language=en-US'; alt = '${e.title}'; loading = 'lazy';/>
// </div>
// <div class="film-list-wrapper">
// <h3 class="film-name">${e.titlee.name}</h3>
// <p class="film-about">${parseGenres(e.genre_ids)} | ${new Date(      e.release_date  e.first_air_date    ).getFullYear()}
// <span class="rating">  ${e.vote_average.toFixed(      1    )}</span><p/>
// </div>
// </li>`
