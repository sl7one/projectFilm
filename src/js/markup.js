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
