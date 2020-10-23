import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {returnErrors} from "./errorAction"
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";// Register User

export const registerUser = ({firstname, lastname, email, password, password2}) => dispatch => {
//Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
//Request body

const body = JSON.stringify({
  firstname, lastname,email,password,password2
});
axios.post('/api/users/register', body, config)
.then(res => dispatch({
  type: REGISTER_SUCCESS,
  payload: res.data
}))
.catch(err => {
  dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
  dispatch({
    
    type: REGISTER_FAIL
  });

})
}

/*
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
*/
// Login - get user token
// Login User
export const loginUser = ({ email, password })=> dispatch => {
 
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post('/api/users/login', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
/*
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};// Set logged in user
*/

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
  
};// User loading

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};// Log user out

export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}

/*
export const logoutUser = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}
*/
/*
export function logoutUser(){
  const request = axios.get('/api/users/logout')
                  .then( response => { 
                      return null
                  });
  return {
      type: LOGOUT_SUCCESS,
      payload:request
  }        
}
*/