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

const uploadImage = async (image, token) => {
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
  // const eventDetail = {
  //   name: "European awards 2019",
  //   category: "Concert",
  //   startDate: "2020-11-17 08:30",
  //   endDate: "2020-11-17 23:30",
  //   isPrivate: false,
  //   address: "Lagos, Nigeria",
  // };
  const tok = "ffff";
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
