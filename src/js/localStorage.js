export const localStorageList = {
  //-----------------зімнні для роботи---------------------------------------------
  elementsWatched: [],
  elementsQueue: [],
  WATCHED_LOCAL: 'list-of-films-watched',
  QUEUE_LOCAL: 'list-of-films-queue',

  // --------------------додаємо в список переглянутих----------------------------
  watchedList(elem) {
    const filmsItem = elem.target.parentNode.parentNode;

    const renderW = `<li class="gallery__item" data-id="${filmsItem.dataset.id}">${filmsItem.innerHTML}</li>`;

    if (
      localStorage.getItem(this.WATCHED_LOCAL) & this.elementsWatched.length
    ) {
      this.elementsWatched.push(
        JSON.parse(localStorage.getItem(this.WATCHED_LOCAL))
      );
    }

    if (this.elementsWatched.includes(renderW)) {
      return;
    }
    this.elementsWatched.push(renderW);
    localStorage.setItem(
      this.WATCHED_LOCAL,
      JSON.stringify(this.elementsWatched)
    );
  },
  // --------------------додаємо в список в черзі-------------------------------
  queueList(elem) {
    const filmsItem = elem.target.parentNode.parentNode;
    const renderQ = `<li class="gallery__item" data-id="${filmsItem.dataset.id}">${filmsItem.innerHTML}</li>`;

    if (localStorage.getItem(this.QUEUE_LOCAL) & this.elementsQueue.length) {
      this.elementsQueue.push(
        JSON.parse(localStorage.getItem(this.QUEUE_LOCAL))
      );
    }

    if (this.elementsQueue.includes(renderQ)) {
      return;
    }

    this.elementsQueue.push(renderQ);
    localStorage.setItem(this.QUEUE_LOCAL, JSON.stringify(this.elementsQueue));
  },
  checkLocalWatched(elem) {
    // ------------------------------Перевіряємо список переглянутих----------------------------
    if (localStorage.getItem(this.WATCHED_LOCAL)) {
      elem.innerHTML = JSON.parse(
        localStorage.getItem(this.WATCHED_LOCAL)
      ).join('');
    } else {
      elem.innerHTML = '';
    }
  },

  // ------------------------------Перевіряємо список в черзі----------------------------------

  checkLocalQueue(elem) {
    if (JSON.parse(localStorage.getItem(this.QUEUE_LOCAL))) {
      elem.innerHTML = JSON.parse(localStorage.getItem(this.QUEUE_LOCAL)).join(
        ''
      );
    } else {
      elem.innerHTML = '';
    }
  },
};
