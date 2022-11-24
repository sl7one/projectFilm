export const localStorage = {


  save(elem) {
    const LIST_FILM = `save-film`
    localStorage.setItem(LIST_FILM, JSON.stringify(elem));

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
  },
};