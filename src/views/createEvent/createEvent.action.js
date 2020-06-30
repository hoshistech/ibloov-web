import axios from "../../utils/axiosConfig";
import { toastr } from "react-redux-toastr";
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

export const uploadImage = async (image, resource) => {
  const formData = new FormData();
  formData.append("upload", image);

  try {
    const uploadImage = await axios(true).post(
      `/v1/do/upload/${resource}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { location } = uploadImage.data.data[0];

    const imageLocation = [{ url: location }];
    return imageLocation;
  } catch (error) {
    throw new "something went wrong"();
  }
};

export const createEvent = (eventDetails, image) => {
  return async (dispatch) => {
    dispatch(eventCreateStart());
    try {
      let imageLocation;
      if (image) {
        imageLocation = await uploadImage(image, "event");
        eventDetails.images = imageLocation;
      }

      const response = await axios(true).post("/v1/event/create", eventDetails);
      const { data, message } = response.data.data;

      dispatch(eventCreateSuccess(message, data));
    } catch (error) {
      // const { message } = error.response.data;
      toastr.error("Error creating event", {
        timeOut: 0,
        type: "error",
        position: "top-right", // This will override the global props position.
        attention: true, // This will add a shadow like the confirm method.
      });
      dispatch(eventCreateFailed("Please something went wrong"));
    }
  };
};

export const endCreateEvent = () => {
  return (dispatch) => {
    return dispatch(eventCreateEnd());
  };
};
