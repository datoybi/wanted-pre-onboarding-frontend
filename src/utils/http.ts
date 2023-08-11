import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const axios = Axios.create({
  baseURL: BASE_URL,
});

export const http = {
  get: function get<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    return axios.get<Response>(url, config).then(res => res.data);
  },

  delete: function remove<Response = unknown>(url: string, config?: AxiosRequestConfig) {
    return axios.delete<Response>(url, config).then(res => res.data);
  },

  post: function post<Request = any, Response = unknown>(url: string, data?: Request, config?: AxiosRequestConfig) {
    return axios
      .post<Response>(url, data, config)
      .then(res => res.data)
      .catch(e => e.response.data);
  },

  put: function put<Request = any, Response = unknown>(url: string, data?: Request, config?: AxiosRequestConfig) {
    return axios
      .put<Response>(url, data, config)
      .then(res => res.data)
      .catch(e => e.response.data);
  },
};
