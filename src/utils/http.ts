import Axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const axios = Axios.create({
  baseURL: BASE_URL,
});

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then(res => res.data);
  },

  post: function post<Request = any, Response = unknown>(url: string, data?: Request, config?: AxiosRequestConfig) {
    return axios
      .post<Response>(url, data, config)
      .then(res => res.data)
      .catch(e => e.response.data);
  },
};
