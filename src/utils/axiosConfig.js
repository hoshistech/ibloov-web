import axios from "axios";
const instance = axios.create({
  baseURL: "https://ibloov-backend.herokuapp.com/",
});

export default instance;
