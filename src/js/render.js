import { markup } from './markup';
import { ref } from './ref';

export const render = {
  print(data, genres, markupCallBack) {
    const markup = markupCallBack(data, genres);
    ref.gallery.insertAdjacentHTML('beforeend', markup);
  },
  clear() {},
};
