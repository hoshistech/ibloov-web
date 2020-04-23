import axios from "axios";
// import dotenv from "dotenv";
import { toast } from "react-toastify";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../../store/actionTypes";
import { userSignupFailed } from "../signup/signup.action";
// import { setCurrentUser } from "../Auth/auth.action";

// dotenv.config();

export const userLoginStart = () => {
  return {
    type: USER_LOGIN_START,
  };
};

export const userLoginSuccess = (token) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
  };
};

export const userLoginFailed = (authError) => {
  return {
    type: USER_LOGIN_FAIL,
    authError,
  };
};

export const authLogin = (userDetails, history) => {
  return (dispatch) => {
    dispatch(userLoginStart());
    return (
      axios
        //   .post(`${process.env.API}/v1/user/register`, userDetails)
        .post("http://198.199.91.181:4000/auth/local", userDetails)
        .then((response) => {
          const { data } = response.data;
          // localStorage.setItem("user", JSON.stringify(data));

          console.log(83, data);

          toast.success("Login Successful");

          setTimeout(() => {
            // dispatch set auth
            //   dispatch(setCurrentUser(data));
            history.push("/events");
            // history.push("/verify-phone");
          }, 3000);

          dispatch(userLoginSuccess(data));
        })
        .catch((error) => {
          toast.error("email/password incorrect");
          dispatch(userSignupFailed("email/password incorrect"));
        })
    );
  };
};
