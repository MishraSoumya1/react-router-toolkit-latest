import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from '../../middlewares/react-router-redux';


const Home = () => {
  const dispatch = useDispatch();


  return (
    <React.Fragment>
      <div>Home</div>
      <button onClick={() => dispatch(push('/dashboard'))}>
        Go to dashboard
      </button>
    </React.Fragment>
  );
};

export default Home;
