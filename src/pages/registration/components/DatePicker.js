import React, { useState} from 'react';

const CustomDatePicker = ({ value, onChange, error }) => {
  const [selectedDate, setSelectedDate] = useState('');

  // const handleDateChange = (event) => {
  //   const formattedDate = event.target.value; // Get the selected date
  //   setSelectedDate(formattedDate); // Update the state
  //   onChange(formattedDate);
  // };

  // // Function to format the date as month-date-year
  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  // };

  const handleDateChange = (event) => {
    const formattedDate = event.target.value; // Get the selected date
    setSelectedDate(formattedDate); // Update the state
    onChange({ target: { name: 'date', value: formattedDate } }); // Pass event object with name and value
  };

  // Function to format the date as month-date-year
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  };


  return (
    <div>
      <input
        type="date"
        id="customDatePicker"
        value={value}
        // onChange={(e) => onChange(e.target.value)}
        onChange={handleDateChange}
        // placeholder="MM-DD-YYYY" // Set placeholder text for desired date format
        style={{ fontSize: '14px', width: '100%', height: '50px', padding: '0 10px', boxSizing: 'border-box'}}
        // required={required} // Add or remove this line based on the 'required' prop
      />
      {selectedDate && <p style={{marginTop: '5px'}}>Selected Date: {formatDate(selectedDate)}</p>}
    </div>
  );
};

export default CustomDatePicker;
