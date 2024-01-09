import React, { useState } from 'react';

const CustomDatePicker = () => {
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
        style={{fontSize:'14px', width:'100%', height:'45px'}}
      />
      {selectedDate && <p>Selected Date: {selectedDate}</p>}
    </div>
  );
};

export default CustomDatePicker;
