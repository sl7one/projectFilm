export const localStorage = {
<<<<<<< Updated upstream


  save(elem) {
    const LIST_FILM = `save-film`
    localStorage.setItem(LIST_FILM, JSON.stringify(elem));
=======
  elements: [],

  save(elem) {
    this.elements.push(elem);
>>>>>>> Stashed changes

  },
  load(elem) {},
  check(elem) {},
};
export const Notes = {
  elements: [],

  addNotes(elem) {
    this.elements.push(elem);
    this.createNotes(this.elements);
  },

  removeNotes(elem) {
    for (let i = 0; i < this.elements.length; i += 1) {
      if (this.elements[i] === elem) {
        this.elements.splice(i, 1);
      }
    }
    this.createNotes(this.elements);
  },

  cleanNotes() {
    this.elements = [];
    localStorage.removeItem(LIST_NOTES);
    boxForNotes.innerHTML = "";
  },

  createNotes(elements) {
    const newCodeNotes = elements
      .map((elem) => {
        return makeTemplateNotes(elem);
      })
      .join("");
    boxForNotes.innerHTML = newCodeNotes;
<<<<<<< Updated upstream
=======
    localStorage.setItem(LIST_NOTES, JSON.stringify(this.elements));
>>>>>>> Stashed changes
  },
};