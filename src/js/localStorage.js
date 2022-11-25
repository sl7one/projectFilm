export const localStorage = {
  //-----------------зімнні для роботи---------------------------------------------
  elementsWatched: [],
  elementsQueue:[],
  WATCHED_LOCAL: "list-of-films-watched",
  QUEUE_LOCAL: "list-of-films-queue",
  boxForFilms: document.querySelector(".gallery"),
// --------------------додаємо в список переглянутих----------------------------
  watchedList(elem) {

    this.elementsWatched.push(elem);
    localStorage.setItem(this.WATCHED_LOCAL, JSON.stringify(this.elementsWatched));


  },
  // --------------------додаємо в список в черзі-------------------------------
  queueList(elem) {

    this.elementsQueue.push(elem);
    localStorage.setItem(this.QUEUE_LOCAL, JSON.stringify(this.elementsQueue));

  },
  checkLocal() {

    // ------------------------------Перевіряємо список переглянутих----------------------------
    if (JSON.parse(localStorage.getItem(this.WATCHED_LOCAL))) {
      this.elementsWatched.push(...JSON.parse(localStorage.getItem(this.WATCHED_LOCAL)));
this.boxForFilms.innerHTML = (JSON.parse(localStorage.getItem(this.WATCHED_LOCAL))).join('')
    }

    // ------------------------------Перевіряємо список в черзі----------------------------------
    if (JSON.parse(localStorage.getItem(this.QUEUE_LOCAL))) {
      this.elementsQueue.push(...JSON.parse(localStorage.getItem(this.QUEUE_LOCAL)));
      this.boxForFilms.insertAdjacentHTML("beforeend",(JSON.parse(localStorage.getItem(this.WATCHED_LOCAL))).join(''))
    }
    //------------------------Якщо локад пустий - пуста секція------------------------------------
    this.boxForFilms.innerHTML = ""
  },
};
