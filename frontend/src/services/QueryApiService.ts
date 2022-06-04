import axios from "axios";

const getBaseUrl = (): string => {
  if (!process.env.API_BASE_URI || !process.env.API_PROTOCOL) {
    throw new Error("API URI is not defined");
  }

  return `${process.env.API_PROTOCOL}://${process.env.API_BASE_URI}`;
};

export const httpGet = <T>(route: string): Promise<T> =>
  axios.get(`${getBaseUrl()}/api/${route}`);
