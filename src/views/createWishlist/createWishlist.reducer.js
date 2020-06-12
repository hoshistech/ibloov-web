import { updateObject } from "../../utils/helper";
import {
  FETCH_WISHLIST_ITEMS_FAIL,
  FETCH_WISHLIST_ITEMS_START,
  FETCH_WISHLIST_ITEMS_SUCCESS,
  CREATE_WISHLIST_START,
  CREATE_WISHLIST_SUCCESS,
  CREATE_WISHLIST_END,
  CREATE_WISHLIST_FAIL,
} from "../../store/actionTypes";

const initialState = {
  wishlistItems: null,
  loading: false,
  error: null,
  createdWishlist: null,
  success: false,
  createError: null,
};

const wishlistItemsStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const wishlistItemsSuccess = (state, action) => {
  return updateObject(state, {
    wishlistItems: action.wishlistItems,
    loading: false,
  });
};

const wishlistItemsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const createWishlistStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const createWishlistSuccess = (state, action) => {
  return updateObject(state, {
    createdWishlist: action.data,
    loading: false,
    success: true,
    createError: null,
  });
};

const createWishlistEnd = (state, action) => {
  return updateObject(state, {
    loading: false,
    createError: null,
  });
};

const createWishlistFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    success: false,
    createdWishlist: null,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST_ITEMS_START:
      return wishlistItemsStart(state, action);
    case FETCH_WISHLIST_ITEMS_SUCCESS:
      return wishlistItemsSuccess(state, action);
    case FETCH_WISHLIST_ITEMS_FAIL:
      return wishlistItemsFail(state, action);
    case CREATE_WISHLIST_START:
      return createWishlistStart(state, action);
    case CREATE_WISHLIST_SUCCESS:
      return createWishlistSuccess(state, action);
    case CREATE_WISHLIST_FAIL:
      return createWishlistFail(state, action);
    case CREATE_WISHLIST_END:
      return createWishlistEnd(state, action);

    default:
      return state;
  }
};
