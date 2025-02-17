import React from "react";
import { signInWithGoogle } from "./firebaseConfig";
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      setUser(user);
      console.log(user.id); // Debug to check if the user ID is available
      // Redirect to the user page using backticks for proper template string
      navigate(`/user/${user.id}`);
    }
  };

  return (
    <div>
      <h1>Start Session</h1>
      <button onClick={handleLogin}>Start with Google</button>
    </div>
  );
};

export default Login;