import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserPage = ({ user }) => {
  // Get ID from the URL
  const { id } = useParams();
  const [datetime, setDatetime] = useState('');
  const [view, setView] = useState(''); // New state to control the view (day-to-day or week-to-week)

  // Function to update date and time
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
    setDatetime(date.toLocaleString('en-US', options));
  };

  // Update time every second
  useEffect(() => {
    const interval = setInterval(updateDateTime, 1000);
    updateDateTime(); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <div style={styles.hello}>Hello, <span id="username">{user ? user.displayName : 'User'}</span></div>
        <div style={styles.datetime}>{datetime}</div>
      </div>

      {/* Buttons using Link to navigate */}
      <div style={styles.buttons}>
        <Link to="/day-to-day">
          <button style={styles.button}>Day to Day</button>
        </Link>
        <Link to="/week-to-week">
          <button style={styles.button}>Week to Week</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensures the body takes full height of the screen
    backgroundColor: '#282c34',
    overflow: 'hidden', // Prevents overflow which might cause extra space
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    position: 'absolute', // Keep header at the top
    top: 0, // Position it at the very top
    left: 0,
    right: 0,
  },
  hello: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  datetime: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: '80px', // Adjust space for the buttons (to avoid overlap with the header)
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default UserPage;