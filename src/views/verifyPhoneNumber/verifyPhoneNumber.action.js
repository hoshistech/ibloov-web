import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import { toast } from "react-toastify";
import {
  VERIFY_CODE_START,
  VERIFY_CODE_SUCCESS,
  VERIFY_CODE_FAIL,
} from "../../store/actionTypes";
// import { setCurrentUser } from "../Auth/auth.action";

// dotenv.config();

export const verifyCodeStart = () => {
  return {
    type: VERIFY_CODE_START,
  };
};

export const verifyCodeSuccess = (authData) => {
  return {
    type: VERIFY_CODE_SUCCESS,
    authData,
  };
};

export const verifyCodeFailed = (authError) => {
  return {
    type: VERIFY_CODE_FAIL,
    authError,
  };
};

export const verifiyPhoneNumber = (code, userId, history) => {
  return (dispatch) => {
    dispatch(verifyCodeStart());
    return (
      axios
        //   .post(`${process.env.API}/v1/user/register`, userDetails)
        .get(`/v1/user/mobilenumber/verifycode/${userId}/${code}`)
        .then((response) => {
          const { data } = response.data;

          // localStorage.setItem("user", JSON.stringify(data));

          //   const { _id, email, phoneNumber } = data;
          //   const registeredUser = {
          //     userId: _id,
          //     email: email,
          //     phoneNumber: phoneNumber,
          //     phoneDetails,
          //   };

          //   toast.success(
          //     "Registration Successful, Please check your mail to verify your account"
          //   );

          //   setTimeout(() => {
          //     // dispatch set auth
          //     //   dispatch(setCurrentUser(data));
          //     history.push("/verify-phone");
          //   }, 3000);

          //   dispatch(userSignupSuccess(registeredUser));
        })
        .catch((error) => {
          const { message } = error.response.data;

          if (error.status === 422) {
            toast.error("There was an error contact the support team.");
          }

          if (message === "Error: Verification code has expired.") {
            toast.error(
              "Verification code has expired. kindly generate another code"
            );
          } else {
            toast.error(message);
          }

          //dispatch(userSignupFailed(msg));
        })
    );
  };
};

export const sendVerificationCode = (userId, history) => {
  return (dispatch) => {
    // dispatch(verifyCodeStart());
    return (
      axios
        //   .post(`${process.env.API}/v1/user/register`, userDetails)
        .post(`/v1/user/mobilenumber/sendverificationcode/${userId}`)
        .then((response) => {
          const { data } = response.data;

          // localStorage.setItem("user", JSON.stringify(data));

          //   const { _id, email, phoneNumber } = data;
          //   const registeredUser = {
          //     userId: _id,
          //     email: email,
          //     phoneNumber: phoneNumber,
          //     phoneDetails,
          //   };

          //   toast.success(
          //     "Registration Successful, Please check your mail to verify your account"
          //   );

          //   setTimeout(() => {
          //     // dispatch set auth
          //     //   dispatch(setCurrentUser(data));
          //     history.push("/verify-phone");
          //   }, 3000);

          //   dispatch(userSignupSuccess(registeredUser));
        })
        .catch((error) => {
          const { message } = error.response.data;

          toast.error("There was an error, Contact the support team");

          //dispatch(userSignupFailed(msg));
        })
    );
  };
};
