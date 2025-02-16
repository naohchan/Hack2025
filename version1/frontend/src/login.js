
import React from "react";
//import { firebaseConfig } from './firebaseConfig'; // Ajusta según sea necesario
//import { firebaseConfig, auth, signInWithGoogle, logout } from './firebaseConfig';

import { signInWithGoogle } from "./firebaseConfig";
import { useNavigate} from 'react-router-dom'

const Login = ({ setUser }) => {

  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await signInWithGoogle();
    if (user) {
      setUser(user);
      //redirige a la pagina del usuario
      navigate('/user/${user.id}');
      //
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
