import axios from 'axios';

export const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';

export const fetchPopularMovies = () => {
  return async (dispatch) => {
    try {
      const apiUrl = `${import.meta.env.VITE_API}/v1/movie/popular`;
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(apiUrl, config);

      dispatch({ type: SET_POPULAR_MOVIES, payload: response.data.data });
    } catch (error) {
      // Handle errors
    }
  };
};

export const searchMovies = (query) => {
  return async (dispatch) => {
    try {
      const apiSearch = `${import.meta.env.VITE_API}/v1/search/movie?page=1&query=${query}`;
      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(apiSearch, config);

      dispatch({ type: SET_POPULAR_MOVIES, payload: response.data.data });
    } catch (error) {
      // Handle errors
    }
  };
};
