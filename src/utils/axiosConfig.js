import axios from "axios";
const instance = axios.create({
  baseURL: "https://198.199.91.181:4000",
});

export default instance;
