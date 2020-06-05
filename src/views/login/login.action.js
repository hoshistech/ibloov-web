import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../../store/actionTypes";
// import { setCurrentUser } from "../Auth/auth.action";

// dotenv.config();

export const userLoginStart = () => {
  return {
    type: USER_LOGIN_START,
  };
};

export const userLoginSuccess = (token, user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    user,
  };
};

export const userLoginFailed = (authError) => {
  return {
    type: USER_LOGIN_FAIL,
    authError,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const authLogin = (userDetail, history, previousLocation) => {
  // const userDetails = {
  //   email: "dami@yahoo.com",
  //   password: "ibloov",
  // };
  return (dispatch) => {
    dispatch(userLoginStart());
    return axios
      .post("/auth/local/web", userDetail)
      .then(async (response) => {
        const { data } = response.data;

        const decodedToken = jwt.decode(data);

        const user = {
          firstName: decodedToken.user.local.firstName,
          lastName: decodedToken.user.local.lastName,
          ...decodedToken.user,
        };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(data));

        if (previousLocation) {
          history.push(previousLocation);
        } else {
          history.push("/dashboard");
        }

        dispatch(userLoginSuccess(data, user));
      })
      .catch((error) => {
        dispatch(userLoginFailed("email/password incorrect"));
      });
  };
};

export const logout = () => {
  // remove token
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("persist:root");
  return (dispatch) => {
    dispatch(userLogout());
  };
};
