import { API_KEY } from './requestAPI';
export const markup = {
  gallery(data, genresDataBase) {
    //--------создаем нормализированную базу жанров ------//
    let newGenreBase = {};
    genresDataBase.genres.forEach(item => {
      newGenreBase[item.id] = item.name;
    });

    const newGenreKeys = Object.keys(newGenreBase);
    const newGenreValues = Object.values(newGenreBase);

    //------------------------------------------------------//
    const { results } = data;
    //--------------запускаем редьюс для создания разметки-------------------------------------//
    return results.reduce((acc, film) => {
      //-----------------запускаем цикл для поска совпадений по жарнрам нормализированной базы и текущих жанров---------------------------------------//
      const arrayOfGenresName = [];
      film.genre_ids.forEach(currenId => {
        const index = newGenreKeys.indexOf(currenId.toString());
        // console.log(newGenreKeys, currenId.toString());
        // console.log('');
        arrayOfGenresName.push(newGenreValues[index]);
      });
      // console.log(arrayOfGenresName);
      // console.log('');
      //---------------------------------------------------------//

      //----------------возвращаем аккумулированную разметку в метод редьюс---------------//
      return (acc += `<li class="gallery__item" data-id=${film.id}>
      <a class="film" href="#">
        <img
          class="film__image"
          src="https://image.tmdb.org/t/p/w500${
            film.poster_path
          }?api_key=${API_KEY}&language=en-US"
          alt="${film.title || film.name}"
          loading = 'lazy'/>
        <div class="film__meta">
          <p class="film__title">${film.title || film.name}</p>
          <p class="film__description">
            <span class="film__genre">Drama, Action</span>
            <span class="film__year">${parseInt(
              film.release_date || film.first_air_date
            )}</span>
            <span class="film__rating">${film.vote_average.toFixed(1)}</span>
          </p>
        </div>
      </a>
    </li >`);
    }, '');
  },

  modal() {},
};

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
