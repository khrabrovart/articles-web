import axios from "axios";

const getBaseUrl = (): string =>
  process.env.API_ORIGIN ? process.env.API_ORIGIN : location.origin;

export const httpGet = <T>(route: string): Promise<T> =>
  axios.get(`${getBaseUrl()}/api/${route}`);
