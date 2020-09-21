import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_ALL_EVENTS_FAIL,
  FETCH_USER_EVENTS_START,
  FETCH_USER_EVENTS_SUCCESS,
  FETCH_USER_EVENTS_FAIL,
  FILTER_BY_CATEGORY,
  FILTER_BY_LOCATION,
  FETCH_BLOOVING_PLACES_SUCCESS,
  FILTER_BY_DATE
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const fetchAllEventStart = () => {
  return {
    type: FETCH_ALL_EVENTS_START
  };
};

export const fetchAllEventSuccess = (events, likedEvents) => {
  return {
    type: FETCH_ALL_EVENTS_SUCCESS,
    events,
    likedEvents
  };
};

export const fetchAllEventFailed = error => {
  return {
    type: FETCH_ALL_EVENTS_FAIL,
    error
  };
};

export const fetchUserEventsStart = () => {
  return {
    type: FETCH_USER_EVENTS_START
  };
};

export const fetchUserEventsSuccess = myEvents => {
  return {
    type: FETCH_USER_EVENTS_SUCCESS,
    myEvents: myEvents
  };
};

export const fetchUserEventsFailed = error => {
  return {
    type: FETCH_USER_EVENTS_FAIL,
    error
  };
};

export const filterByCategory = category => {
  return {
    type: FILTER_BY_CATEGORY,
    category
  };
};

export const filterByLocation = location => {
  return {
    type: FILTER_BY_LOCATION,
    location
  };
};

export const filterByDate = date => {
  return {
    type: FILTER_BY_DATE,
    date
  };
};

export const fetchBloovingPlaces = locations => {
  return {
    type: FETCH_BLOOVING_PLACES_SUCCESS,
    locations
  };
};

export const fetchEvents = () => {
  const { token } = getUser();
  return dispatch => {
    dispatch(fetchAllEventStart());
    return axios(false)
      .get("/v1/event")
      .then(response => {
        const likedEvents = [];
        const events = response.data.data;

        dispatch(fetchAllEventSuccess(events, likedEvents));
      })
      .catch(error => {
        dispatch(fetchAllEventFailed("error"));
      });
  };
};

export const fetchLiveEvents = () => {
  return dispatch => {
    dispatch(fetchAllEventStart());
    return axios(true)
      .get("/v1/event/live")
      .then(response => {
        const { events, likedEvents } = response.data.data;
        dispatch(fetchAllEventSuccess(events, likedEvents));
      })
      .catch(error => {
        dispatch(fetchAllEventFailed("error"));
      });
  };
};

export const getUserEvents = userId => {
  let url = "/v1/user/events";
  if (userId) {
    url = `/v1/user/events/${userId}`;
  }

  return dispatch => {
    dispatch(fetchUserEventsStart());
    return axios(true)
      .get(url)
      .then(response => {
        const { data } = response.data;
        dispatch(fetchUserEventsSuccess(data));
      })
      .catch(error => {
        dispatch(fetchUserEventsFailed("error"));
      });
  };
};


export const getMostBloovingPlaces = userId => {
  let url = "/v1/event/blooving/cities";

  return dispatch => {
    dispatch(fetchUserEventsStart());
    return axios(true)
      .get(url)
      .then(response => {
        const { data } = response.data;
        dispatch(fetchBloovingPlaces(data.slice(0,5)));
      })
      .catch(error => {
        dispatch(fetchUserEventsFailed("error"));
      });
  };
};
