const axios = require('axios').default;

export const API_KEY = 'ba9af9187d823167244a35c2fd918141';
const BASE_URL = `https://api.themoviedb.org/3`;
const paramsObj = {
  language: 'en-US',
  page: 3,
  include_adult: false,
  query: '',
};

paramsObj.query = '2011';
paramsObj.page = 2;

const searchParams = new URLSearchParams(paramsObj);

// type = movieSearch | trending | custom

// async function GetData(value) {
//   let url = BASE_URL;
//   //   console.log(params);
//   if (value && !isNaN(Number(value))) {
//     url += `/movie/${value}?api_key=${API_KEY}&language=en-US`;
//   } else if (value && isNaN(value)) {
//     url += `/search/movie?api_key=${API_KEY}&${value}`;
//   } else {
//     url += `/trending/all/day?api_key=${API_KEY}`;
//   }
//   const response = await fetch(url);
//   const result = await response.json();
//   return result;
// }
// // GetData().then(result => console.log(result));let genersList = {};

// const getGenres = async function () {
//   const genersRequest = await fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
//   );
//   const genersParse = await genersRequest.json();
//   genersParse.genres.forEach(e => {
//     genersList[e.id] = e.name;
//   });
// };
// getGenres();

// // const parseGenres = function (arr) {  let movieGeners = '';
// // for (let i = 0; i < arr.length; i++) {
// //   if (i === 2) {      movieGeners += ', Others';      break;    }
// //   movieGeners += `, ${genersList[arr[i]]}`;  }
// //   return movieGeners.slice(2);};
// // const render = function (arr) {  let movieList = '';
// // arr.forEach(e => {
// // movieItem = ;    movieList += movieItem;  });
// // return movieList;};

// const createPopular = async function () {

//   const object = await GetData();
//   console.log(object);
//   const { results, page, total_results } = object;
//   const res = render(results);
//   galleryEl.innerHTML = res;
//   console.log(render(results));
//   // createCard(results);
//   // console.log(results[1].title);
// };
// createPopular();

export const request = {
  async popular(page) {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`
      );
      const { data } = response;
      // console.log(data);
      return data;
    } catch (error) {}

    // const res = render(results);
    // galleryEl.innerHTML = res;
    // console.log(render(results));

    // try {
    //   const object = await axios.get(
    //     `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    //   );
    //   const { data } = object;
    //   return data;
    // } catch (error) {
    //   console.error('request', error);
    // }
  },

  async genres() {
    try {
      const genres = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      const { data } = genres;
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  // const res = render(results);
  // galleryEl.innerHTML = res;
  // console.log(render(results));

  async input() {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/76341?api_key=${API_KEY}`
      );
      // console.log(response);
      const { data } = response;
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
