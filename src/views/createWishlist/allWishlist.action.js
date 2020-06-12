import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import {
  FETCH_ALL_WISHLIST_START,
  FETCH_ALL_WISHLIST_SUCCESS,
  FETCH_ALL_WISHLIST_FAIL,
  FETCH_USER_WISHLIST_START,
  FETCH_USER_WISHLIST_SUCCESS,
  FETCH_USER_WISHLIST_FAIL,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const fetchAllWishlistStart = () => {
  return {
    type: FETCH_ALL_WISHLIST_START,
  };
};

export const fetchAllWishlistSuccess = (wishlist) => {
  return {
    type: FETCH_ALL_WISHLIST_SUCCESS,
    wishlist,
  };
};

export const fetchAllWishlistFailed = (error) => {
  return {
    type: FETCH_ALL_WISHLIST_FAIL,
    error,
  };
};

export const fetchUserWishlistStart = () => {
  return {
    type: FETCH_USER_WISHLIST_START,
  };
};

export const fetchUserWishlistSuccess = (myWishlist) => {
  return {
    type: FETCH_USER_WISHLIST_SUCCESS,
    myWishlist,
  };
};

export const fetchUserWishlistFailed = (error) => {
  return {
    type: FETCH_USER_WISHLIST_FAIL,
    error,
  };
};

export const fetchAllWishlist = () => {
  const { token } = getUser();
  return (dispatch) => {
    dispatch(fetchAllWishlistStart());
    return axios
      .get("/v1/wishlist", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;

        dispatch(fetchAllWishlistSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchAllWishlistFailed("error"));
      });
  };
};

export const getUserWishlist = (userId) => {
  const { token } = getUser();
  let url = "/v1/user/wishlists";
  if (userId) {
    url = `/v1/user/wishlists/${userId}`;
  }

  return (dispatch) => {
    dispatch(fetchUserWishlistStart());
    return axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response.data;
        dispatch(fetchUserWishlistSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUserWishlistFailed("error"));
      });
  };
};
