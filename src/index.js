import { footer } from './js/footer';
import { filmId } from './js/film';
import { markup } from './js/markup';
import { render } from './js/render';
import { request } from './js/requestAPI';
import { shema } from './js/shema';

main();
async function main() {
  const data = await request.name();
  console.log(data);

  render.print(data);
}
request.popular()
