import React, { useState } from 'react';

const DayToDayPage = () => {
  // Initialize state for carbon emissions input by the user
  const [emissions, setEmissions] = useState({
    drivingCar: 0, // in minutes per day
    train: 0, // in minutes per day
    bus: 0, // in minutes per day
    meatConsumption: 3.0,
    foodWaste: 1.5,
  });

  // Initialize state to handle collapsible sections (Transportation, Food & Diet)
  const [showTransportation, setShowTransportation] = useState(false);
  const [showFoodDiet, setShowFoodDiet] = useState(false);

  // Handle input changes for each activity
  const handleInputChange = (event, activity) => {
    const { value } = event.target;
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      [activity]: value,
    }));
  };

  return (
    <div style={styles.page}>
      <h3>Day-to-Day Carbon Emissions</h3>
      
      {/* Transportation Tab */}
      <div>
        <button onClick={() => setShowTransportation(!showTransportation)} style={styles.tabButton}>
          Transportation
        </button>
        {showTransportation && (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Activity</th>
                <th>Time Spent (minutes/day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Car</td>
                <td>
                  <input
                    type="number"
                    value={emissions.drivingCar}
                    onChange={(e) => handleInputChange(e, 'drivingCar')}
                    style={styles.input}
                    placeholder="minutes"
                  />
                </td>
              </tr>
              <tr>
                <td>Train</td>
                <td>
                  <input
                    type="number"
                    value={emissions.train}
                    onChange={(e) => handleInputChange(e, 'train')}
                    style={styles.input}
                    placeholder="minutes"
                  />
                </td>
              </tr>
              <tr>
                <td>Bus</td>
                <td>
                  <input
                    type="number"
                    value={emissions.bus}
                    onChange={(e) => handleInputChange(e, 'bus')}
                    style={styles.input}
                    placeholder="minutes"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Food & Diet Tab */}
      <div>
  <button onClick={() => setShowFoodDiet(!showFoodDiet)} style={styles.tabButton}>
    Food & Diet
  </button>
  {showFoodDiet && (
    <table style={styles.table}>
      <thead>
        <tr>
          <th>Activity</th>
          <th>Kilograms Per Day (kg/day)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Meat Consumption</td>
          <td>
            <input
              type="number"
              value={emissions.meatConsumption}
              onChange={(e) => handleInputChange(e, 'meatConsumption')}
              style={styles.input}
            />
          </td>
        </tr>
        <tr>
          <td>Dairy Consumption</td>
          <td>
            <input
              type="number"
              value={emissions.dairyConsumption}
              onChange={(e) => handleInputChange(e, 'dairyConsumption')}
              style={styles.input}
            />
          </td>
        </tr>
        <tr>
          <td>Plant-Based Consumption</td>
          <td>
            <input
              type="number"
              value={emissions.plantBasedConsumption}
              onChange={(e) => handleInputChange(e, 'plantBasedConsumption')}
              style={styles.input}
            />
          </td>
        </tr>
        <tr>
          <td>Food Wastage</td>
          <td>
            <input
              type="number"
              value={emissions.foodWastage}
              onChange={(e) => handleInputChange(e, 'foodWastage')}
              style={styles.input}
            />
          </td>
        </tr>
        <tr>
          <td>Composting</td>
          <td>
            <input
              type="number"
              value={emissions.composting}
              onChange={(e) => handleInputChange(e, 'composting')}
              style={styles.input}
            />
          </td>
        </tr>
        <tr>
          <td>Plastic Packaging</td>
          <td>
            <input
              type="number"
              value={emissions.plasticPackaging}
              onChange={(e) => handleInputChange(e, 'plasticPackaging')}
              style={styles.input}
            />
          </td>
        </tr>
        <tr>
          <td>Sustainable Packaging</td>
          <td>
            <input
              type="number"
              value={emissions.sustainablePackaging}
              onChange={(e) => handleInputChange(e, 'sustainablePackaging')}
              style={styles.input}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )}
</div>

      {/* Button to Calculate Carbon Emissions */}
      <button onClick={() => alert('Calculate Carbon Emissions')} style={styles.calculateButton}>
        Calculate Carbon Emissions
      </button>
    </div>
  );
};

// Styles
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
  input: {
    width: '80px',
    padding: '5px',
    fontSize: '14px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  tabButton: {
    backgroundColor: '#61dafb',
    padding: '10px 20px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '10px',
    marginTop: '10px',
  },
  calculateButton: {
    backgroundColor: '#61dafb',
    padding: '10px 20px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default DayToDayPage;