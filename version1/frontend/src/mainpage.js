import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

const WelcomePage = () => {
  const [dateTime, setDateTime] = useState('');
  const [username, setUsername] = useState('John Doe'); // Dynamically set the username

  // Update the date and time every second using useEffect
  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      };
      setDateTime(date.toLocaleString('en-US', options));
    };

    updateDateTime(); // Initial call to set the time
    const interval = setInterval(updateDateTime, 1000); // Update every second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      {/* Header section with user and datetime */}
      <div className="header">
        <div className="hello">Hello, <span>{username}</span></div>
        <div className="datetime">{dateTime}</div>
      </div>

      {/* Link section */}
      <div className="link">
        <h2>Welcome to the Eco-Logic App</h2>
        <p>Click below to go to your profile page:</p>
        <a href="/user/123">Go to your profile</a>
      </div>
    </div>
  );
};

export default WelcomePage;