import axios from "../../utils/axiosConfig";
import { toastr } from "react-redux-toastr";
import {
  FETCH_WISHLIST_ITEMS_FAIL,
  FETCH_WISHLIST_ITEMS_START,
  FETCH_WISHLIST_ITEMS_SUCCESS,
  CREATE_WISHLIST_START,
  CREATE_WISHLIST_SUCCESS,
  CREATE_WISHLIST_FAIL,
  CREATE_WISHLIST_END,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";
import { uploadImage } from "../createEvent/createEvent.action";

export const getWishlistItemsStart = () => {
  return {
    type: FETCH_WISHLIST_ITEMS_START,
  };
};

export const getWishlistItemsSuccess = (items) => {
  return {
    type: FETCH_WISHLIST_ITEMS_SUCCESS,
    wishlistItems: items,
  };
};

export const getWishlistItemsFail = (error) => {
  return {
    type: FETCH_WISHLIST_ITEMS_FAIL,
    error,
  };
};

export const createWishlistStart = () => {
  return {
    type: CREATE_WISHLIST_START,
  };
};

export const createWishlistSuccess = (message, data) => {
  return {
    type: CREATE_WISHLIST_SUCCESS,
    message,
    data,
  };
};

export const createWishlistFailed = (error) => {
  return {
    type: CREATE_WISHLIST_FAIL,
    error,
  };
};

export const createWishlistEnd = (error) => {
  return {
    type: CREATE_WISHLIST_END,
  };
};

export const getSearchedItems = (searchValue) => {
  return (dispatch) => {
    dispatch(getWishlistItemsStart());
    return axios(false)
      .get(`/v1/shopping/product?q=${searchValue}`)
      .then(async (result) => {
        const items = result.data.data.shopping_results;
        dispatch(getWishlistItemsSuccess(items));
      })
      .catch((error) => {
        dispatch(getWishlistItemsFail("something went wrong"));
      });
  };
};

export const createWishlist = (wishlistDetails, image) => {
  return async (dispatch) => {
    dispatch(createWishlistStart());
    try {
      let imageLocation;
      if (image) {
        imageLocation = await uploadImage(image, "wishlist");
        wishlistDetails.images = imageLocation;
      }

      const response = await axios(true).post(
        "/v1/wishlist/create",
        wishlistDetails
      );
      const { data, message } = response.data.data;
      dispatch(createWishlistSuccess(message, data));
    } catch (error) {
      // const { message } = error.response.data;
      toastr.error(
        "WishList Error",
        "Error creating wishlist, Please fill detail appropriately",
        {
          timeOut: 0,
          type: "error",
          position: "top-right", // This will override the global props position.
          attention: true, // This will add a shadow like the confirm method.
        }
      );

      dispatch(createWishlistFailed("something went wrong"));
    }
  };
};

export const endCreateWishlist = () => {
  return (dispatch) => {
    return dispatch(createWishlistEnd());
  };
};
