import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const CurrentInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <TextField
        label="Field 3"
        name="field3"
        value={formData.field3 || ''}
        onChange={handleChange}
      />
      <TextField
        label="Field 4"
        name="field4"
        value={formData.field4 || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default CurrentInfo;