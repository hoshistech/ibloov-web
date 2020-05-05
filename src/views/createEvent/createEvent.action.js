import axios from "axios";
// import dotenv from "dotenv";
import { toast } from "react-toastify";
import {
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const eventCreateStart = () => {
  return {
    type: CREATE_EVENT_START,
  };
};

export const eventCreateSuccess = (newEvent) => {
  return {
    type: CREATE_EVENT_SUCCESS,
    newEvent,
  };
};

export const eventCreateFailed = (error) => {
  return {
    type: CREATE_EVENT_FAIL,
    error,
  };
};

export const createEvent = (eventDetails) => {
  console.log(12, eventDetails);
  const { token } = getUser();
  const user = {
    name: "2babas concert",
    category: "Naming ceremony",
    startDate: "2020-11-17 22:30",
    endDate: "2020-11-17 23:30",
    isPrivate: false,
    address: "london, UK",
  };
  const tok = "ffff";
  return (dispatch) => {
    dispatch(eventCreateStart());
    return axios
      .post("http://198.199.91.181:4000/v1/event/create", eventDetails, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;

        console.log(response.data);

        dispatch(eventCreateSuccess(data.message));
      })
      .catch((error) => {
        // const { message } = error.response.data;
        console.log(888, error.response.data.data);

        dispatch(eventCreateFailed("Please something went wrong"));
      });
  };
};
