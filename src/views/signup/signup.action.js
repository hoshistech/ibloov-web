import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import { toast } from "react-toastify";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
} from "../../store/actionTypes";

export const userSignupStart = () => {
  return {
    type: USER_SIGNUP_START,
  };
};

export const userSignupSuccess = (authData) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    authData,
  };
};

export const userSignupFailed = (authError) => {
  return {
    type: USER_SIGNUP_FAIL,
    authError,
  };
};

export const authSignup = (userDetails, phoneDetails, history) => {
  return (dispatch) => {
    dispatch(userSignupStart());
    return axios
      .post("/v1/user/register", userDetails)
      .then((response) => {
        const { data } = response.data;
        // localStorage.setItem("user", JSON.stringify(data));

        const { _id, email, phoneNumber } = data;
        const registeredUser = {
          userId: _id,
          email: email,
          phoneNumber: phoneNumber,
          phoneDetails,
        };

        toast.success(
          "Registration Successful, Please check your mail to verify your account"
        );

        setTimeout(() => {
          // dispatch set auth
          //   dispatch(setCurrentUser(data));
          history.push("/verify-phone");
        }, 3000);
        dispatch(userSignupSuccess(registeredUser));
      })
      .catch((error) => {
        const { data } = error.response.data;

        const authErrors = {};

        data.map((error) => {
          authErrors[error.param] = error.msg;
        });

        toast.error(...Object.values(authErrors));
        dispatch(userSignupFailed(authErrors));
      });
  };
};
