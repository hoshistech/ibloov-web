import { updateObject } from "../../utils/helper";
import {
  FETCH_ALL_EVENTS_START,
  FETCH_ALL_EVENTS_SUCCESS,
  FETCH_ALL_EVENTS_FAIL,
  FETCH_USER_EVENTS_START,
  FETCH_USER_EVENTS_SUCCESS,
  FETCH_USER_EVENTS_FAIL,
  FILTER_BY_CATEGORY,
  FILTER_BY_LOCATION
} from "../../store/actionTypes";

const initialState = {
  events: null,
  likedEvents: null,
  loading: false,
  userEvents: null,
  filteredEvents: null
};

const allEventStart = state => {
  return updateObject(state, {
    loading: true
  });
};

const allEventSuccess = (state, action) => {
  return updateObject(state, {
    events: action.events,
    likedEvents: action.likedEvents,
    loading: false
  });
};

const allEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const userEventStart = state => {
  return updateObject(state, {
    loading: true
  });
};

const userEventSuccess = (state, action) => {
  return updateObject(state, {
    userEvents: action.myEvents,
    loading: false
  });
};

const userEventFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const filterByCategory = (state, action) => {
  let value = action.category.toLowerCase();
  let eventsFilter = [...state.events];

  let filteredValues = eventsFilter.filter(event => {
    if (value === "all") {
      return state.events;
    }
    return event.category === value;
  });

  return updateObject(state, {
    loading: true,
    filteredEvents: filteredValues
  });
};

const filterByLocation = (state, action) => {
  const value = action.location.toLowerCase();
  const eventsList = state.events;
  const newFilteredEvents = state.filteredEvents;
  let eventsFilter = "";

  if (value == "") {
    return updateObject(state, {
      loading: false,
      filteredEvents: null
    });
  }
  if (newFilteredEvents.length > 0) {
    eventsFilter = newFilteredEvents;
  } else {
    eventsFilter = eventsList;
  }

  const filteredValues = eventsFilter.filter(event => {
    return event.location.address.toLowerCase().includes(value);
  });

  return updateObject(state, {
    loading: false,
    filteredEvents: filteredValues
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_EVENTS_START:
      return allEventStart(state, action);
    case FETCH_ALL_EVENTS_SUCCESS:
      return allEventSuccess(state, action);
    case FETCH_ALL_EVENTS_FAIL:
      return allEventFail(state, action);
    case FETCH_USER_EVENTS_START:
      return userEventStart(state, action);
    case FETCH_USER_EVENTS_SUCCESS:
      return userEventSuccess(state, action);
    case FETCH_USER_EVENTS_FAIL:
      return userEventFail(state, action);
    case FILTER_BY_CATEGORY:
      return filterByCategory(state, action);
    case FILTER_BY_LOCATION:
      return filterByLocation(state, action);

    default:
      return state;
  }
};
