import React from 'react';

const FilterForm = ({ onFilter, vehicles }) => {
    return (
      <div style={filterFormStyle}>
        <div style={filterBoxStyle}>
          {/* <label>Search Bar</label> */}
          <input type="text" placeholder="Free Text Search" onChange={e => onFilter({ freeText: e.target.value })} style={inputStyle} />
        </div>
        <div style={filterBoxStyle}>
          {/* <label>Vehicles</label> */}
          <select onChange={e => onFilter({ vehicle: e.target.value })} style={inputStyle}>
            <option value="">All Vehicles</option>
            {vehicles.map(vehicle => (
              <option key={vehicle.id} value={vehicle.friendly_name}>
                {vehicle.friendly_name}
              </option>
            ))}
          </select>
        </div>
        <div style={filterBoxStyle}>
          {/* <label>Date Range</label> */}
          <div style={dateRangeInputStyle}>
            <input type="date" onChange={e => onFilter({ startDate: e.target.value })} style={dateInputStyle} />
            <span style={dateRangeSeparatorStyle}>to</span>
            <input type="date" onChange={e => onFilter({ endDate: e.target.value })} style={dateInputStyle} />
          </div>
        </div>
      </div>
    );
  };
  

const filterFormStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
};

const filterBoxStyle = {
  width: '30%',
};

const inputStyle = {
  padding: '8px',
  margin: '5px',
  width: '100%',
};

const dateRangeSeparatorStyle = {
  margin: '0 5px',
};
const dateRangeInputStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
  const dateInputStyle = {
    padding: '8px',
    margin: '5px',
    width: '48%', // Adjust the width as needed
  };
  
  export default FilterForm;