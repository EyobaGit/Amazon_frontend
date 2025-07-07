import axios from "axios"

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-e752e/us-central1/api",

  //firebase
  // baseURL: "https://api-e6cratvzyq-uc.a.run.app/",
  baseURL:"https://amazon-api-5.onrender.com"
});

export {axiosInstance}