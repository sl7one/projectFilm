const axios = require('axios').default;

const API_KEY = 'ba9af9187d823167244a35c2fd918141';

export const request = {
  async popular() {},

  async name() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`
      );
      const { data } = response;
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

request.name();
