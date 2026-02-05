import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_CONSTANT} from '../../constants/ApiConstants';
import {GetUsersPayload, LoginPayload} from '../../utils/Type';
import {axiosInstance} from '../../services/AxiosInterceptor';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({username, password}: LoginPayload, thunkAPI) => {
    try {
      const response = await axiosInstance(
        `${API_CONSTANT.BASE_URL}${API_CONSTANT.USER_LOGIN}`,
        'POST',
        {
          username,
          password,
          expiresInMins: 30,
        },
      );

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

export const fetchCurrentUserProfile = createAsyncThunk(
  'user/fetchCurrentUserProfile',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance(
        `${API_CONSTANT.BASE_URL}${API_CONSTANT.USER_ME}`,
        'GET',
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);

export const getAllUserRecord = createAsyncThunk(
  'user/getAllUserRecord',
  async ({pageSize, offset}: GetUsersPayload, thunkAPI) => {
    try {
      const response = await axiosInstance(
        `${API_CONSTANT.BASE_URL}${API_CONSTANT.USERS}?limit=${pageSize}&skip=${offset}&select=firstName,lastName,image,company`,
        'GET',
      );

      return {
        users: response.users,
        offset,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  },
);
