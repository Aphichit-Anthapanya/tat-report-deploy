import httpClientAxios from "axios";
import { EnvConfig } from "@/config";

console.log(EnvConfig.apiUrl, "EnvConfig");

// Create an instance of axios
const axios = httpClientAxios.create({
  baseURL: EnvConfig.apiUrl, // Your API URL
  withCredentials: true,
});

export default axios;
