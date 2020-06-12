import { updateObject } from "../../utils/helper";
import {
  FETCH_ALL_WISHLIST_START,
  FETCH_ALL_WISHLIST_SUCCESS,
  FETCH_ALL_WISHLIST_FAIL,
  FETCH_USER_WISHLIST_START,
  FETCH_USER_WISHLIST_SUCCESS,
  FETCH_USER_WISHLIST_FAIL,
} from "../../store/actionTypes";

const initialState = {
  wishlist: null,
  likedWishlist: null,
  loading: false,
  userWishlist: null,
};

const allWishlistStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const allWishlistSuccess = (state, action) => {
  return updateObject(state, {
    wishlist: action.wishlist,
    loading: false,
  });
};

const allWishlistFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const userWishlistStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const userWishlistSuccess = (state, action) => {
  return updateObject(state, {
    userWishlist: action.myWishlist,
    loading: false,
  });
};

const userWishlistFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_WISHLIST_START:
      return allWishlistStart(state, action);
    case FETCH_ALL_WISHLIST_SUCCESS:
      return allWishlistSuccess(state, action);
    case FETCH_ALL_WISHLIST_FAIL:
      return allWishlistFail(state, action);
    case FETCH_USER_WISHLIST_START:
      return userWishlistStart(state, action);
    case FETCH_USER_WISHLIST_SUCCESS:
      return userWishlistSuccess(state, action);
    case FETCH_USER_WISHLIST_FAIL:
      return userWishlistFail(state, action);

    default:
      return state;
  }
};
