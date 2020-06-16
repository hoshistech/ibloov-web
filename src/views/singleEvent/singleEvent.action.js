import axios from "../../utils/axiosConfig";
import {
  FETCH_SINGLE_EVENT_START,
  FETCH_SINGLE_EVENT_SUCCESS,
  FETCH_SINGLE_EVENT_FAIL,
  FOLLOW_EVENT_SUCCESS,
  FOLLOW_EVENT_ERROR,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";
import { toastr } from "react-redux-toastr";

export const fetchSingleEventStart = () => {
  return {
    type: FETCH_SINGLE_EVENT_START,
  };
};

export const fetchSingleEventSuccess = (event, isFollowing) => {
  return {
    type: FETCH_SINGLE_EVENT_SUCCESS,
    event,
    isFollowing,
  };
};

export const fetchSingleEventFailed = (error) => {
  return {
    type: FETCH_SINGLE_EVENT_FAIL,
    error,
  };
};

export const followEventSuccess = (follow) => {
  return {
    type: FOLLOW_EVENT_SUCCESS,
    follow,
  };
};

export const followEventFailed = (error) => {
  return {
    type: FOLLOW_EVENT_ERROR,
    error,
  };
};

export const getEvent = (eventId) => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchSingleEventStart());
    return axios(false)
      .get(`/v1/event/${eventId}`)
      .then((response) => {
        const { data } = response.data;
        dispatch(fetchSingleEventSuccess(data, data.followers));
      })
      .catch((error) => {
        dispatch(fetchSingleEventFailed("error"));
      });
  };
};

export const followEvent = (eventId) => {
  const { token } = getUser();
  return (dispatch) => {
    return axios(true)
      .patch(`/v1/event/togglefollow/${eventId}`, { none: "none" })
      .then((response) => {
        const { data, message } = response.data;
        toastr.success(message);
        dispatch(followEventSuccess(data.followers));
      })
      .catch((error) => {
        toastr.error("failed to follow event", {
          timeOut: 5000,
          type: "error",
          attention: true,
        });
        dispatch(fetchSingleEventFailed("error"));
      });
  };
};

export const bloovEvent = (eventId) => {
  const { token } = getUser();
  return (dispatch) => {
    return axios(true)
      .patch(`/v1/event/invite/setattendingstatus/${eventId}`, {
        status: "YES",
      })
      .then((response) => {
        const { data } = response.data;
        toastr.success("operation successful");
        dispatch(fetchSingleEventSuccess(data, data.followers));
      })
      .catch((error) => {
        toastr.error("failed to bloov event", {
          timeOut: 5000,
          type: "error",
          attention: true,
        });
        dispatch(fetchSingleEventFailed("error"));
      });
  };
};
