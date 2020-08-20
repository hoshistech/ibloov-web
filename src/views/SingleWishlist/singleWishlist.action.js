import axios from "../../utils/axiosConfig";
import {
  FETCH_SINGLE_WISHLIST_START,
  FETCH_SINGLE_WISHLIST_SUCCESS,
  FETCH_SINGLE_WISHLIST_FAIL
} from "../../store/actionTypes";
import { getUser, chunkArray } from "../../utils/helper";
import { toastr } from "react-redux-toastr";
import { fetchSingleEventFailed } from "../singleEvent/singleEvent.action";

export const fetchSingleWishlistStart = () => {
  return {
    type: FETCH_SINGLE_WISHLIST_START
  };
};

export const fetchSingleWishlistSuccess = (wishlist, items, itemsLength) => {
  return {
    type: FETCH_SINGLE_WISHLIST_SUCCESS,
    wishlist,
    items,
    itemsLength
  };
};

export const fetchSingleWishlistFailed = error => {
  return {
    type: FETCH_SINGLE_WISHLIST_FAIL,
    error
  };
};

export const getWishlist = eventId => {
  const { token } = getUser();
  return dispatch => {
    dispatch(fetchSingleWishlistStart());
    return axios(true)
      .get(`/v1/wishlist/${eventId}`)
      .then(async response => {
        const { data } = response.data;

        const itemsLength = data.items.length;

        dispatch(fetchSingleWishlistSuccess(data, data.items, itemsLength));
      })
      .catch(error => {
        dispatch(fetchSingleEventFailed("error"));
      });
  };
};
