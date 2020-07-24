import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import {
FILTER_BY_CATEGORY,
FILTER_BY_LOCATION
} from "../../store/actionTypes";

import { getUser } from "../../utils/helper";

export const filterByCategory = () => {
  return {
    type: FILTER_BY_CATEGORY,
  };
};

export const filterByLocation = (events, likedEvents) => {
  return {
    type: FILTER_BY_LOCATION,
    events,
    likedEvents,
  };
};


