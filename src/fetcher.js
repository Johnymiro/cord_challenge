import axios from "axios";

const baseUrl = "https://api.themoviedb.org";
const api_key = "c221948889b111d729e531cf016a7ea8";

// All of your API requests should be in this file

export const getConfig = () => {
  const configUrl = `${baseUrl}/3/configuration?api_key=${api_key}`;
  return axios.get(configUrl);
};

export const getDiscoverList = (page = 1) => {
  const discoverURL = `${baseUrl}/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
  return axios.get(discoverURL);
};

export const searchMovieByName = (name) => {
  const queryString = name.toLowercase().split(" ").join("+");
  const url = `${baseUrl}/3/search/movie?api_key=${api_key}&query=${queryString}`;

  return axios.get(url);
};
