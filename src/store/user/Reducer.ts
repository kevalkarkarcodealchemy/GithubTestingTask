import {createSlice} from '@reduxjs/toolkit';
import {
  fetchCurrentUserProfile,
  getAllUserRecord,
  loginUser,
} from './UserThunks';
import {UserProfile} from '../../utils/Type';

type initData = {
  userRecord: UserProfile[];
  userLoginToken: string;
  loginUserDetails: {
    image: string;
  };
  loading: boolean;
  error: string;
  hasMoreData: boolean;
};

const initialState: initData = {
  userRecord: [],
  userLoginToken: '',
  loginUserDetails: {
    image: '',
  },
  loading: false,
  error: '',
  hasMoreData: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRecord: (state, action) => {
      state.userRecord = action.payload;
    },
    setUserLoginToken: (state, action) => {
      state.userLoginToken = action.payload;
    },
    setLoginUserDetails: (state, action) => {
      state.loginUserDetails = action.payload;
    },
    setLogout(state) {
      Object.assign(state, initialState);
    },
  },

  extraReducers(builder) {
    builder.addCase(loginUser.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.userRecord = action.payload;
      state.userLoginToken = action.payload.accessToken;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    //getCurrentUser
    builder.addCase(fetchCurrentUserProfile.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchCurrentUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.loginUserDetails = action.payload;
    });
    builder.addCase(fetchCurrentUserProfile.rejected, state => {
      state.loading = false;
    });
    //getAllUserRecord
    builder.addCase(getAllUserRecord.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(getAllUserRecord.fulfilled, (state, action) => {
      const {users, offset} = action.payload;
      state.loading = false;
      state.error = '';

      if (offset === 0) {
        state.userRecord = users;
      } else {
        state.hasMoreData = users.length < 20;
        state.userRecord = [...state.userRecord, ...users];
      }
    });
    builder.addCase(getAllUserRecord.rejected, state => {
      state.loading = false;
    });
  },
});

export const {
  setLogout,
  setUserRecord,
  setUserLoginToken,
  setLoginUserDetails,
} = userSlice.actions;
export default userSlice.reducer;
