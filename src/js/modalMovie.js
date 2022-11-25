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

  getMovieInfo("777");

  function toggleModal() {
    refsModal.modal.classList.toggle("is-hidden");
    refsModal.closeModalBtn.removeEventListener("click", toggleModal);
  }

  async function getMovieInfo(id) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      console.dir(response);
      const { data } = response;
      return data;
    } catch (error) {
      console.error(error);
    }
  }