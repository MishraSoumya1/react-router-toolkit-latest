import React from 'react';
import { useUserSlice } from './redux/slices/userSlice';

const InitializeReducers = () => {
  useUserSlice();
  return <React.Fragment />;
};

export default InitializeReducers;
