import React, { useState } from 'react';

const CustomDatePicker = ({ required = true }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <input
        type="date"
        id="customDatePicker"
        value={selectedDate}
        onChange={handleDateChange}
        style={{ fontSize: '14px', width: '100%', height: '45px' }}
        // required={required} // Add or remove this line based on the 'required' prop
      />
      {selectedDate && <p>Selected Date: {selectedDate}</p>}
    </div>
  );
};

export default CustomDatePicker;
