import axios from "axios";
// import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_ALL_EVENTS_FAIL,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const fetchAllEventStart = () => {
  return {
    type: FETCH_ALL_EVENTS_START,
  };
};

export const fetchAllEventSuccess = (events, likedEvents) => {
  return {
    type: FETCH_ALL_EVENTS_SUCCESS,
    events: events,
    likedEvents,
  };
};

export const fetchAllEventFailed = (error) => {
  return {
    type: FETCH_ALL_EVENTS_FAIL,
    error,
  };
};

export const fetchEvents = () => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchAllEventStart());
    return axios
      .get("https://198.199.91.181:4000/v1/event", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;
        dispatch(fetchAllEventSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        console.log(23, error);
        dispatch(fetchAllEventFailed("error"));
      });
  };
};
