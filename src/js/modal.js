const refsModal = {
    
    modal: document.querySelector("[data-modal]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),  
    
  };
  

  refsModal.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refsModal.modal.classList.toggle("is-hidden");
    refsModal.closeModalBtn.removeEventListener("click", toggleModal);
  }