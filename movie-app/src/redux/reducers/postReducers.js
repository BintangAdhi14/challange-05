// import { createSlice } from "@reduxjs/toolkit";
import {
    FETCH_MOVIE_DETAILS_REQUEST,
    FETCH_MOVIE_DETAILS_SUCCESS,
    FETCH_MOVIE_DETAILS_FAILURE,
  } from '../actions/postActions';

// Initial state
const initialState = {
movie: null,
loading: false,
error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIE_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_MOVIE_DETAILS_SUCCESS:
        return {
          ...state,
          movie: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_MOVIE_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default postReducer;