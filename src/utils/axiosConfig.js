import axios from "axios";
import { getUser } from "./helper";

// const options = {
//   baseURL: "https://ibloov-backend.herokuapp.com/",
// };

// const instance = axios.create({
//   baseURL: "https://ibloov-backend.herokuapp.com/",
// });

// var instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });

const instance = (protectedRoute) => {
  const options = {
    baseURL: "https://ibloov-backend.herokuapp.com/",
  };

  if (protectedRoute) {
    const { token } = getUser();
    options.headers = {
      authorization: `Bearer ${token}`,
    };
  }
  return axios.create(options);
};

export default instance;
