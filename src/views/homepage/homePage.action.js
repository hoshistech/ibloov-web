import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_ALL_EVENTS_FAIL,
  FETCH_USER_EVENTS_START,
  FETCH_USER_EVENTS_SUCCESS,
  FETCH_USER_EVENTS_FAIL,
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

export const fetchUserEventsStart = () => {
  return {
    type: FETCH_USER_EVENTS_START,
  };
};

export const fetchUserEventsSuccess = (myEvents) => {
  return {
    type: FETCH_USER_EVENTS_SUCCESS,
    myEvents: myEvents,
  };
};

export const fetchUserEventsFailed = (error) => {
  return {
    type: FETCH_USER_EVENTS_FAIL,
    error,
  };
};

export const fetchEvents = () => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchAllEventStart());
    return axios
      .get("/v1/event")
      .then((response) => {
        const likedEvents = [];
        const events = response.data.data;
        dispatch(fetchAllEventSuccess(events, likedEvents));
      })
      .catch((error) => {
        dispatch(fetchAllEventFailed("error"));
      });
  };
};

export const fetchLiveEvents = () => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchAllEventStart());
    return axios
      .get("/v1/event/live", {
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

export const getUserEvents = (userId) => {
  const { token } = getUser();
  let url = "/v1/user/events";
  if (userId) {
    url = `/v1/user/events/${userId}`;
  }

  return (dispatch) => {
    dispatch(fetchUserEventsStart());
    return axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;
        console.log(222, data);
        dispatch(fetchUserEventsSuccess(data));
      })
      .catch((error) => {
        console.log(222, error);

        dispatch(fetchUserEventsFailed("error"));
      });
  };
};
