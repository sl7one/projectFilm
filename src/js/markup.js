export const markup = {
  gallery(data) {
    return data.reduce((acc, item) => {
      return (acc += `<li class="gallery__item">
      <a class="film" href="#">
        <img
          class="film__image"
          src="./images/Rectangle 12.jpg"
          alt="title"
          width="375"
          height="574"
        />
        <div class="film__meta">
          <p class="film__title">GREYHOUND</p>
          <p class="film__description">
            <span class="film__genre">Drama, Action</span>
            <span class="film__year">2020</span>
            <span class="film__rating">10</span>
          </p>
        </div>
      </a>
    </li >`);
    }, '');
  },
  modal() {},
};

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
