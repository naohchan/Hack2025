import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DayToDayPage from './DayToDayPage'; // Import new page component for day-to-day
import WeekToWeekPage from './WeekToWeekPage'; // Import new page component for week-to-week
import UserPage from './UserPage'; // Assuming you have the UserPage component

function App() {
  const [user, setUser] = useState(null); // State to hold user info

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Welcome to eco-logic</h2>

          <Routes>
            {/* Main route with conditional rendering based on user */}
            <Route
              path="/"
              element={user ? <UserPage user={user} /> : <login setUser={setUser} />}
            />
            {/* Route to User page */}
            <Route
              path="/user/:id"
              element={<UserPage user={user} />}
            />
            {/* Route for Day to Day Page */}
            <Route
              path="/day-to-day"
              element={<DayToDayPage />}
            />
            {/* Route for Week to Week Page */}
            <Route
              path="/week-to-week"
              element={<WeekToWeekPage />}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;