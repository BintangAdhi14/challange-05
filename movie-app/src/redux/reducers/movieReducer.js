import { SET_POPULAR_MOVIES } from '../actions/movieActions';

const initialState = {
  popularMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
