
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

// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Do something with response error
//   console.log(23, error);
//   if(error.response.status === 401) { console.log("Redirection needed !"); }

//   // Trow errr again (may be need for some other catch)
//   return Promise.reject(error);
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

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  console.log(23, error);
  if(error.response.status === 401) { console.log("Redirection needed !"); }

  // Trow errr again (may be need for some other catch)
  return Promise.reject(error);
});


// const axiosApiInstance = axios.create();
// axiosApiInstance.interceptors.response.use(response => {
//   return response;
// }, error => {
//   console.log(56, error);
//  if (error.response.status === 401) {
//   //place your reentry code
//  return <Redirect to="/login" />;
//  }
//  return error;
// });



export default instance;
