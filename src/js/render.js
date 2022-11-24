import { markup } from './markup';

export const render = {
  print(data, markupCallBack) {
    // console.log(data);
    const markup = markupCallBack(data);
  },
  clear() {},
};
