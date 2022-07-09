import axios from "axios";
import { ApiResponse } from "../types/Api";

const getBaseUrl = (): string =>
  process.env.API_ORIGIN ? process.env.API_ORIGIN : location.origin;

const buildRoute = (route: string): string => `${getBaseUrl()}/api/${route}`;

export const httpGet = <TResponse>(
  route: string,
  params: any = undefined
): Promise<ApiResponse<TResponse>> => axios.get(buildRoute(route), { params });

export const httpPost = <TRequest>(
  route: string,
  body: TRequest
): Promise<ApiResponse<void>> => axios.post(buildRoute(route), body);

export enum ApiRoutes {
  Articles = "articles",
  Comments = "comments",
}
