import axios from "axios";

export const KenziHubAPi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
});
