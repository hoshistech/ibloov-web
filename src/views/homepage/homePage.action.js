import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
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
      .get("/v1/event")
      .then((response) => {
        const likedEvents = [];
        const events = response.data.data;
        dispatch(fetchAllEventSuccess(events, likedEvents));
      })
      .catch((error) => {
        console.log(99, error);
        dispatch(fetchAllEventFailed("error"));
      });
  };
};

export const fetchLiveEvents = () => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchAllEventStart());
    return (
      axios
        // .get("/v1/event")
        .get("/v1/event/live", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(99, response.data.data);

          const { events, likedEvents } = response.data.data;
          console.log(88, events);
          
          dispatch(fetchAllEventSuccess(events, likedEvents));
        })
        .catch((error) => {
          console.log(99, error);
          dispatch(fetchAllEventFailed("error"));
        })
    );
  };
};
