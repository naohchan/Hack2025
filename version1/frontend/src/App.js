import React, { useState } from 'react';
import './App.css';
import Login from './login'; // Asegúrate de importar el componente de Login
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './UserPage'; // Página personalizada del usuario



function App() {

  const [user, setUser] = useState(null); // Agregamos un estado para el usuario


  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h2>Welcome to eco-logic</h2>
        
        {/* 
        {user ? (
          <div>
            <h2>Bienvenido, {user.displayName}</h2>
            <img src={user.photoURL} alt="Usuario" />
          </div>
        ) : (
        <Login setUser={setUser} /> 
        // Aquí estamos usando el componente Login
        )
        }
        */}

        <Routes>
          {/* Ruta principal con login */}
          <Route path="/" element={user ? <UserPage user={user} /> : <Login setUser={setUser} />} />
          {/* Ruta dinámica para cada usuario */}
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </header>
    </div>
    </Router>
  );
}
export default App;