import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  let params = useParams();

  return <div>{params.userId}</div>;
};

export default Profile;
