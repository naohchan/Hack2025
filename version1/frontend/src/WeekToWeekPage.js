import React from 'react';

const WeekToWeekPage = () => {
  return (
    <div style={styles.page}>
      <h3>Week-to-Week Carbon Emissions</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Carbon Emissions (kg/week)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Weekly Grocery Shopping</td>
            <td>3.4</td>
          </tr>
          <tr>
            <td>Washing Clothes</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>Weekly Transportation</td>
            <td>10.5</td>
          </tr>
          {/* Add more activities and emissions */}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  page: {
    textAlign: 'center',
    marginTop: '50px',
    color: '#fff',
    backgroundColor: '#282c34',
    padding: '20px',
  },
  table: {
    margin: '20px auto',
    width: '80%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#61dafb',
    padding: '10px',
  },
  td: {
    textAlign: 'center',
    padding: '10px',
    border: '1px solid #ddd',
  },
};

export default WeekToWeekPage;