import axios from "axios";
const instance = axios.create({
  baseURL: "http://198.199.91.181:4000",
});

export default instance;
