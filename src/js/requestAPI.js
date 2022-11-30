const axios = require('axios').default;
import { Loading } from 'notiflix/build/notiflix-loading-aio';

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

export const request = {
  query: '',
  async popular(page) {
    try {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
      );
      const { data } = response;
      return data;
    } catch (error) {}
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

  async input(page) {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${this.query}&include_adult=false&page=${page}`
      );
      const { data } = response;
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async movieId(movie_id) {
    try {
      Loading.hourglass({
        clickToClose: true,
        svgSize: '200px',
        svgColor: '#ff6b01',
      });
      const response = await axios.get(
        `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
      );
      const { data } = response;
      console.log(data);
      return data;
    } catch (error) {
      console.log('error', error);
    } finally {
      Loading.remove();
    }
  },
};
