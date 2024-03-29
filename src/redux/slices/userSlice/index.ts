import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import usersSaga from './saga';

const initialState = {
  users: [],
  loading: false,
  error: '',
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      return { ...state, loading: true, error: '' };
    },
    fetchUsersSuccess: (state, action) => {
      console.log('->', action);
      return {
        ...state,
        users: action.payload.data,
        loading: false,
        error: '',
      };
    },
    fetchUsersFail: (state, action) => {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        users: [],
        ...action.payload,
      };
    },

    resetUsers: () => initialState,
  },
});

const { actions: userActions, reducer, name } = slice;

const useUserSlice = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: usersSaga });
};

export { userActions, reducer, name, useUserSlice };
