import axios from "axios";

const api = axios.create({
  baseURL: "https://api-plataformavoto.herokuapp.com/",
});

export default api;
