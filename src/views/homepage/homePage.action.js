import axios from "../../utils/axiosConfig";
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
    events,
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
      .get("/v1/event", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { events, likedEvents } = response.data.data;
        dispatch(fetchAllEventSuccess(events, likedEvents));
      })
      .catch((error) => {
        dispatch(fetchAllEventFailed("error"));
      });
  };
};
