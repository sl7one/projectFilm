const basicLightbox = require('basiclightbox');
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { markup } from './markup';
import { ref } from './ref';
import { request } from './requestAPI';

export const render = {
  print(data, genres, markupCallBack) {
    const markup = markupCallBack(data, genres);
    ref.gallery.innerHTML = markup;
  },

  clear() {
    ref.gallery.innerHTML = '';
  },

  lightBoxModal(data, markupCallBack) {
    const markup = markupCallBack(data);

    const instance = basicLightbox.create(markup);
    instance.show();

    document
      .querySelector('.basicLightbox  button')
      .addEventListener('click', () => instance.close(), {
        once: true,
      });
  },
};
