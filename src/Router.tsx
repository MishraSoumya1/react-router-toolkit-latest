import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import UserProfile from './components/Users/UserProfile';
import InitializeReducers from './InitializeReducers';

const Router = () => {
  return (
    <React.Fragment>
      <InitializeReducers />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path={"/*"} element={<h1 className='text-center text-warning mt-4'>404: Not Found</h1>} />
      </Routes>
    </React.Fragment>
  );
};

export default Router;
