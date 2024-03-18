import axios from "axios";

export const http = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/"
})