import React, { useState } from 'react';
import AlertList from './components/alert';
import FilterForm from './components/filterform';
import { hardcodedAlerts, hardcodedVehicles } from './components/hardcoded';

const App = () => {
  const [filteredAlerts, setFilteredAlerts] = useState(hardcodedAlerts);

  const filterAlerts = filters => {
    let filtered = [...hardcodedAlerts];

    if (filters.freeText) {
      filtered = filtered.filter(alert => alert.alert_type.toLowerCase().includes(filters.freeText.toLowerCase()));
    }

    if (filters.vehicle) {
      filtered = filtered.filter(alert => alert.vehicle_friendly_name.toLowerCase().includes(filters.vehicle.toLowerCase()));
    }

    if (filters.startDate && filters.endDate) {
      filtered = filtered.filter(alert => 
        {
        const timestamp = new Date(alert.timestamp).getTime();
        const start = new Date(filters.startDate).getTime();
        const end = new Date(filters.endDate).getTime();
        return timestamp >= start && timestamp <= end;
        } );
    }
    setFilteredAlerts(filtered);
  };

  const markAsFalseAlarm = alertId => {
    console.log(`Marked as false alarm: ${alertId}`);
  };

  return (
    <>
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ color: '#333' }}> Driver Monitoring Dashboard </h1>
    </div>
    <div>
      <FilterForm onFilter={filterAlerts} vehicles={hardcodedVehicles} />
      <AlertList alerts={filteredAlerts} markAsFalseAlarm={markAsFalseAlarm} />
    </div>
  </>
  );
};
export default App;
