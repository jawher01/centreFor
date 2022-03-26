import axios from "axios";
import {
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  EDIT_USER,
  GET_USER,
} from "../const/user";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("http://localhost:6500/register", user);
    dispatch({ type: REGISTER_USER, payload: result.data });
    alert("user enregistrer avec succes")
  } catch (error) {
    const { errors,msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
    if (msg) {
      alert(msg);
    }
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("http://localhost:6500/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    if (msg) {
      alert(msg);
    }
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("http://localhost:6500/current", options);
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
    console.log(error);
  }
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    let result = await axios.get("http://localhost:6500/admin/user");
    dispatch({ type: GET_USERS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILED, payload: error });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  axios
    .delete(`http://localhost:6500/admin/${id}`)
    .then((res) => dispatch(getAllUsers()))
    .then(() => alert("User supprimer avec succes"))
    .catch((err) => console.log(err));
};

export const getUser = (id) => (dispatch) => {
  axios
    .get(`http://localhost:6500/user/profil/${id}`)
    .then((res) => dispatch({ type: GET_USER, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const editUser = (id, user) => (dispatch) => {
  axios
    .put(`http://localhost:6500/profil/${id}`,user)
    .then((res) => {
      alert("user modifier avec succes");

      dispatch({ type: EDIT_USER, payload: { ...res.data.user } });
    })
    .catch((err) => console.log(err));
};
