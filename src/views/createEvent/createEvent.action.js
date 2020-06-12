// import axios from "axios";
import axios from "../../utils/axiosConfig";
// import dotenv from "dotenv";
import { toast } from "react-toastify";
import {
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_END,
} from "../../store/actionTypes";
import { getUser } from "../../utils/helper";

export const eventCreateStart = () => {
  return {
    type: CREATE_EVENT_START,
  };
};

export const eventCreateSuccess = (message, data) => {
  return {
    type: CREATE_EVENT_SUCCESS,
    message,
    data,
  };
};

export const eventCreateFailed = (error) => {
  return {
    type: CREATE_EVENT_FAIL,
    error,
  };
};

export const eventCreateEnd = (error) => {
  return {
    type: CREATE_EVENT_END,
  };
};

export const uploadImage = async (image, token) => {
  const formData = new FormData();
  formData.append("upload", image);

  try {
    const uploadImage = await axios.post("/v1/do/upload/event", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    });

    const { location } = uploadImage.data.data[0];

    const imageLocation = [{ url: location }];
    return imageLocation;
  } catch (error) {

    throw new "something went wrong"();
  }
};

export const createEvent = (eventDetails, image) => {
  const { token } = getUser();
  return async (dispatch) => {
    dispatch(eventCreateStart());
    try {
      const imageLocation = await uploadImage(image, token);


      eventDetails.images = imageLocation;
      const response = await axios.post("/v1/event/create", eventDetails, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const { data, message } = response.data.data;

      dispatch(eventCreateSuccess(message, data));
    } catch (error) {
      // const { message } = error.response.data;

      dispatch(eventCreateFailed("Please something went wrong"));
    }
  };
};

export const endCreateEvent = () => {
  return (dispatch) => {
    return dispatch(eventCreateEnd());
  };
};
