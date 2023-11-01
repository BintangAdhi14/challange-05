import axios from 'axios';

export const FETCH_MOVIE_DETAILS_REQUEST = 'FETCH_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const FETCH_MOVIE_DETAILS_FAILURE = 'FETCH_MOVIE_DETAILS_FAILURE';

export const getPostDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIE_DETAILS_REQUEST });

    const detailsApiUrl = `${import.meta.env.VITE_API}/v1/movie/${id}`;

    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(detailsApiUrl, config)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIE_DETAILS_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIE_DETAILS_FAILURE,
          error: 'Error fetching movie details',
        });
      });
  };
};
