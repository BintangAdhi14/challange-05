import axios from 'axios';

export const SET_USER = 'SET_USER';

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${import.meta.env.VITE_API}/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.data;

      dispatch({ type: SET_USER, payload: data });
    } catch (error) {
      // Handle errors
    }
  };
};
