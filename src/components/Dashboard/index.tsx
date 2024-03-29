import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from '../../middlewares/react-router-redux';

const Dashborad = () => {
  const dispatch = useDispatch();

  const state = useSelector((s: any) => s?.router)

  console.log(state);

  return (
    <React.Fragment>
      <div>Dashborad</div>
      <button onClick={() => dispatch(push('/'))}>Go to home</button>
    </React.Fragment>
  );
};

export default Dashborad;
