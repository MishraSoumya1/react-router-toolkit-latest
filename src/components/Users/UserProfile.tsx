import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  let params = useParams();

  useEffect(() => {
    console.log('params', params);
  }, [params]);

  return (
    <React.Fragment>
      <>userProfile</>
    </React.Fragment>
  );
};

export default UserProfile;
