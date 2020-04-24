import axios from "axios";
// import dotenv from "dotenv";
import jwt from "jsonwebtoken";
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

export const authLogin = (userDetail, history) => {
  const userDetails = {
    email: "dami@yahoo.com",
    password: "ibloov",
  };
  return (dispatch) => {
    dispatch(userLoginStart());
    return (
      axios
        //   .post(`${process.env.API}/v1/user/register`, userDetails)
        .post("http://198.199.91.181:4000/auth/local", userDetails)
        .then(async (response) => {
          const { data } = response.data;

          const decodedToken = jwt.decode(data);

          const {
            local,
            email,
            isPhoneNumberVerified,
            isEmailVerified,
          } = decodedToken.user;

          const user = {
            firstName: local.firstName,
            lastName: local.lastName,
            email,
            isEmailVerified,
            isPhoneNumberVerified,
          };

          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", JSON.stringify(data));

          toast.success("Login Successful");

          setTimeout(() => {
            history.push("/events");
          }, 3000);

          dispatch(userLoginSuccess(data, user));
        })
        .catch((error) => {
          console.log(error);

          toast.error("email/password incorrect");
          dispatch(userSignupFailed("email/password incorrect"));
        })
    );
  };
};
