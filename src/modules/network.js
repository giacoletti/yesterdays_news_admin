import axios from "axios";
import apiURL from "./apiURL";

export const api = axios.create({ baseURL: apiURL });
