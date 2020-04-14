import axios from "axios";
// import dotenv from "dotenv";
import { toast } from "react-toastify";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
} from "../../store/actionTypes";
// import { setCurrentUser } from "../Auth/auth.action";

// dotenv.config();


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

export const authSignup = (userDetails, history) => {
  return (dispatch) => {
    dispatch(userSignupStart());
    return (
      axios
        //   .post(`${process.env.API}/v1/user/register`, userDetails)
        .post("http://198.199.91.181:4000/v1/user/register", userDetails)
        .then((response) => {
          const { data } = response.data;
          // localStorage.setItem("user", JSON.stringify(data));


          toast.success(
            "Registration Successful, Please check your mail to verify your account"
          );

          setTimeout(() => {
            // dispatch set auth
            //   dispatch(setCurrentUser(data));
            history.push("/events");
          }, 3000);

          dispatch(userSignupSuccess(data));
        })
        .catch((error) => {
          const { msg } = error.response.data.data[0];

          toast.error(msg);
          dispatch(userSignupFailed(msg));
        })
    );
  };
};
