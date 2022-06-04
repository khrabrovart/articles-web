import axios from "axios";
import { ApiResponse } from "../types/Server";

const getBaseUrl = (): string =>
  process.env.API_ORIGIN ? process.env.API_ORIGIN : location.origin;

export const httpGet = <T>(route: string): Promise<ApiResponse<T>> =>
  axios.get(`${getBaseUrl()}/api/${route}`);
