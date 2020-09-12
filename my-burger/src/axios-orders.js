import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-my-burger-9008d.firebaseio.com/",
});

export default axiosInstance;
