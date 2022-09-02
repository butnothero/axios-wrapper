import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface LocalhostRequest {
  port?: number;
  prefix?: string;
}

export interface CollectorOptions {
  collectRequests?: number;
  collectErrors?: number;
}

export interface InterceptorList {
  fulfilled?: any[];
  rejected?: any[];
}

export interface Interceptors {
  request?: InterceptorList;
  response?: InterceptorList;
}

export interface AxiosWrapperOptions {
  config?: AxiosRequestConfig;
  apiEndpoint?: string;
  collector?: CollectorOptions;
  localhost?: boolean | LocalhostRequest;
  interceptors?: Interceptors;
}

export interface CollectedRequestInfo {
  method: AxiosRequestConfig['method'];
  url: string;
  time: { start: number; end: number };
  status?: number;
  size: number;
  requestData: any;
  responseData: any;
  isError: boolean;
  isCancelled: boolean;
}

export interface RequestInfoToCollect {
  method: AxiosRequestConfig['method'];
  url: string;
  data: any;
  requestStart: number;
  response?: AxiosResponse<any>;
  responseError?: unknown;
  error?: boolean;
  cancelled?: boolean;
}

export interface ApiMethodParamsOptions {
  concurrentId?: string;
  collectRequest?: boolean;
}

export interface ApiMethodParams {
  method: AxiosRequestConfig['method'];
  url: string;
  data?: unknown;
  retries?: number;
  requestConfig?: AxiosRequestConfig;
  options?: ApiMethodParamsOptions;
}

export interface _Response<T> {
  data: T;
  httpStatus: number;
}
