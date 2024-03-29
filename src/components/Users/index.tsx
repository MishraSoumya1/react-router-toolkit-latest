import React, { useEffect } from 'react';
import { userActions } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: any) => state?.users?.users);

  useEffect(() => {
    dispatch(userActions.fetchUsersStart());
  }, [dispatch]);

  return (
    <React.Fragment>
      <>{JSON.stringify(users)}</>
      <Outlet />
    </React.Fragment>
  );
};

export default Users;
