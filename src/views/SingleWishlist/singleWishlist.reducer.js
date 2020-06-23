import { updateObject } from "../../utils/helper";
import {
  FETCH_SINGLE_WISHLIST_START,
  FETCH_SINGLE_WISHLIST_SUCCESS,
  FETCH_SINGLE_WISHLIST_FAIL,
} from "../../store/actionTypes";

const initialState = {
  wishlist: null,
  loading: false,
  error: null,
  wishlistItems: null,
  itemsLength: null,
};

const fetchWishlistStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchWishlistSuccess = (state, action) => {
  return updateObject(state, {
    wishlist: action.wishlist,
    loading: false,
    error: null,
    wishlistItems: action.items,
    itemsLength: action.itemsLength,
  });
};

const fetchWishlistFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_WISHLIST_START:
      return fetchWishlistStart(state, action);
    case FETCH_SINGLE_WISHLIST_SUCCESS:
      return fetchWishlistSuccess(state, action);
    case FETCH_SINGLE_WISHLIST_FAIL:
      return fetchWishlistFail(state, action);

    default:
      return state;
  }
};
