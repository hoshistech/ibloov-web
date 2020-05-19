import axios from "../../utils/axiosConfig";
import {
  FETCH_SINGLE_EVENT_START,
  FETCH_SINGLE_EVENT_SUCCESS,
  FETCH_SINGLE_EVENT_FAIL,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const fetchSingleEventStart = () => {
  return {
    type: FETCH_SINGLE_EVENT_START,
  };
};

export const fetchSingleEventSuccess = (event) => {
  return {
    type: FETCH_SINGLE_EVENT_SUCCESS,
    event,
  };
};

export const fetchSingleEventFailed = (error) => {
  return {
    type: FETCH_SINGLE_EVENT_FAIL,
    error,
  };
};

export const getEvent = (eventId) => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchSingleEventStart());
    return axios
      .get(`/v1/event/${eventId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;

        dispatch(fetchSingleEventSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchSingleEventFailed("error"));
      });
  };
};
