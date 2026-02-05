import {Alert} from 'react-native';
import axios from 'axios';
import {store} from '../store/Store';
import {ApiMethod} from '../utils/Type';

const api = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = store.getState().userList.userLoginToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const errorMessage =
        error.response.data?.message || 'Something went wrong';

      if (error.response.status === 401) {
        Alert.alert('Session Expired', 'Please login again');
      }
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  },
);

export const axiosInstance = async (
  url: string,
  method: ApiMethod,
  body?: Record<string, unknown>,
) => {
  const response = await api({
    url,
    method,
    data: body,
  });
  return response.data;
};
