import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage = ({ user }) => {
  const { id } = useParams(); // Obtiene el ID de la URL (si se usa)

  return (
    <div>
      <h1>Welcome, {user ? user.displayName : "User"}</h1>
      {user && <img src={user.photoURL} alt="User" />}
      <p>Tu ID: {user ? user.uid : id}</p>
    </div>
  );
};

export default UserPage;
