export const footer = () => console.log('hello footer');

//import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import sprite from '../images/icons.svg';

const markupTeam = `
		<div class="modal-team">
            <div class="team-card">
                <a href="https://github.com/sl7one" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Slava</p>
                <p class="team-role">Team Lead</p>
            </div>
            <div class="team-card">
                <a href="https://github.com/SofiiaShevtsova" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Sofia</p>
                <p class="team-role">Scrum</p></div>
            <div class="team-card">
                <a href="https://github.com/AlenaUshakova" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Alena</p>
                <p class="team-role">Developer</p></div>
            <div class="team-card">
                <a href="https://github.com/MimesisVI/" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Vadim</p>
                <p class="team-role">Developer</p></div>
            <div class="team-card">
                <a href="https://github.com/tanyadeineka" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Tanya</p>
                <p class="team-role">Developer</p></div>
            <div class="team-card">
                <a href="https://github.com/Loki99911" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Nikita</p>
                <p class="team-role">Developer</p></div>
            <div class="team-card">
                <a href="https://github.com/HollowMax" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Max</p>
                <p class="team-role">Developer</p></div>
            <div class="team-card">
                <a href="https://github.com/chuzhov" target="_blank" class="team-git">
                    <svg class="icon-github" width="50" height="50">
                        <use href="${sprite}#icon-github"></use>
                    </svg>
                </a>
                <p class="team-name">Dan</p>
                <p class="team-role">Developer</p></div>
            </ul>
        </div>      
`;
const linkFooter = document.querySelector('.js-team-modal');
linkFooter.addEventListener('click', openModal);
const modalTeam = basicLightbox.create(markupTeam);
function openModal(e) {
  e.preventDefault();
  modalTeam.show();

  window.addEventListener('keydown', closeModalTeam);

  function closeModalTeam(e) {
    if (e.code === 'Escape') {
      modalTeam.close();
      window.removeEventListener('keydown', closeModalTeam);
    }
  }
}
