export function modalMovie() {

const refsModal = {
    
    modal: document.querySelector("[data-modal]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),  
    
    poster: document.querySelector("#poster__image"),
    vote: document.querySelector(".vote-container"),
    votes: document.querySelector(".votes-container"),
    popularity: document.querySelector(".popularity-container"),
    originalTitle: document.querySelector(".original-title-container"),
    genre: document.querySelector(".genre-container"),
    about: document.querySelector(".movie-info__about-title"),
  };
  
  refsModal.closeModalBtn.addEventListener("click", toggleModal);
  const data = request.movieID("1234")
  debugger
  console.dir(data)


  function toggleModal() {
    refsModal.modal.classList.toggle("is-hidden");
    refsModal.closeModalBtn.removeEventListener("click", toggleModal);
  }

  

}