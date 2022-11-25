import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 1,
  centerAlign: false,
  template: {
    page: '<a href="#" class="tui-custon">{{page}}</a>',
    currentPage:
      '<span class="tui-custon tui-custon-is-selected">{{page}}</span>',
    moveButton:
      '<a href="#" class="tui-custon tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-custon tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-custon tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

import './js/footer';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { ref } from './js/ref';
import { filmId } from './js/film';
import { markup } from './js/markup';
import { render } from './js/render';
import { request } from './js/requestAPI';
import { shema } from './js/shema';

const pagination = new Pagination('pagination', options);
const page = pagination.getCurrentPage();

const loadMorePopylarPhotos = event => {
  const currentPage = event.page;
  console.log(currentPage);
};

pagination.on('beforeMove', loadMorePopylarPhotos);

main();
async function main() {
  const data = await request.popular();
  pagination.reset(data.total_results);
  const genres = await request.genres();
  render.print(data, genres, markup.gallery);
}
