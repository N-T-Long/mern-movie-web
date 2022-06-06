import axiosClient from "./axiosClient";
import { authConstants, userConstants } from "./constants";
import { useNavigate } from "react-router-dom";

const authApi = {
  signUp: (username, email, password) => {
    let Navigate = useNavigate();
    return async (dispatch) => {
      try {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axiosClient.post("/auth/register", {
          username,
          email,
          password,
        });
        console.log(res);
        if (res.success === true) {
          const { accessToken, user } = res;
          localStorage.setItem("token", accessToken);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token: accessToken,
              user: user,
            },
          });
          console.log("true");
          Navigate("/");
        } else {
          console.log("asdsad");
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.message },
          });
        }
      } catch (err) {
        console.log(err);
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: null },
        });
      }
    };
  },
  signIn: (username, password, history) => {
    return async (dispatch) => {
      try {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axiosClient.post("/auth/login", {
          username,
          password,
        });
        console.log(res);

        if (res.status === 201) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
          const navigate = useNavigate();
          return navigate("/");
        } else {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.message },
          });
        }
      } catch (err) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: null },
        });
      }
    };
  },
  isUserLoggedIn: () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");
      if (token) {
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: null },
        });
      }
    };
  },
  signout: () => {
    return async (dispatch) => {
      localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
    };
  },
};

export default authApi;
