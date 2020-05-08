import axios from "axios";
// import dotenv from "dotenv";
import { toast } from "react-toastify";
import {
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_END,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const eventCreateStart = () => {
  return {
    type: CREATE_EVENT_START,
  };
};

export const eventCreateSuccess = (message, data) => {
  return {
    type: CREATE_EVENT_SUCCESS,
    message,
    data,
  };
};

export const eventCreateFailed = (error) => {
  return {
    type: CREATE_EVENT_FAIL,
    error,
  };
};

export const eventCreateEnd = (error) => {
  return {
    type: CREATE_EVENT_END,
  };
};

export const createEvent = (eventDetails) => {
  console.log(12, eventDetails);
  const { token } = getUser();
  const eventDetail = {
    name: "African awards 2021",
    category: "Concert",
    startDate: "2020-11-17 08:30",
    endDate: "2020-11-17 23:30",
    isPrivate: false,
    address: "Lagos, Nigeria",
  };
  const tok = "ffff";
  return (dispatch) => {
    dispatch(eventCreateStart());
    return axios
      .post("http://198.199.91.181:4000/v1/event/create", eventDetail, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data, message } = response.data.data;

        console.log(response.data);

        dispatch(eventCreateSuccess(message, data));
      })
      .catch((error) => {
        // const { message } = error.response.data;
        console.log(888, error.response.data.data);

        dispatch(eventCreateFailed("Please something went wrong"));
      });
  };
};

export const endCreateEvent = () => {
  return (dispatch) => {
    return dispatch(eventCreateEnd());
  };
};
