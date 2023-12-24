import React, { useState } from 'react';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';

const AlertList = ({ alerts, markAsFalseAlarm }) => {
  const [falseAlarmStatus, setFalseAlarmStatus] = useState({});

  const handleMarkAsFalseAlarm = alertId => {
    markAsFalseAlarm(alertId);
    setFalseAlarmStatus(prevState => ({ ...prevState, [alertId]: !prevState[alertId] }));
  };

  return (
    <div style={alertListStyle}>
      {alerts.map(alert => (
        <div key={alert.id} style={alertStyle}>
          <div style={alertContentStyle}>
            <p> <strong>{alert.alert_type}</strong>    ◉{new Date(alert.timestamp).toLocaleString()} </p> {/*type of driver */}
            <p><strong>Driver:</strong> {alert.driver_friendly_name}   /{alert.vehicle_friendly_name}</p>{/*name and vehicle*/}
            
            {/* <p><strong>Vehicle:</strong> {alert.vehicle_friendly_name}</p> */}
            {/* <p><strong> {new Date(alert.timestamp).toLocaleString()} </strong></p> */}
            {/* <p><strong>{alert.id}</strong> </p> */}

            {/* This are the other information that can be displayed.*/}
          </div>


{/*This is the logic for the false alarm*/}
          <div style={switchContainerStyle}>
            <div style={falseAlarmBoxStyle}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch checked={falseAlarmStatus[alert.id]} onChange={() => handleMarkAsFalseAlarm(alert.id)} />}
                  label={falseAlarmStatus[alert.id] ? 'False Alarm (🔔)' : 'Make as False Alarm (🔴)'}
                />
              </FormGroup>
            </div>
          </div>
          <hr style={hrStyle} />
        </div>
      ))}
    </div>
  );
};


//Required css for styling of the alarm.
const alertListStyle = {
  marginTop: '20px',
};

const alertStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  margin: '10px 0',
};

const alertContentStyle = {
  flex: '1',
};

const switchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px', // Adjust the margin 
};

const falseAlarmBoxStyle = {
  border: '1px solid black',
  borderRadius: '4px',
  padding: '5px',
  margin: '0 auto', // Center the box horizontally of the page at the rightmost part
};

const hrStyle = {
  margin: '10px 0',
};

export default AlertList;
