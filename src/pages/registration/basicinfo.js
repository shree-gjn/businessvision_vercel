import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const BasicInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <TextField
        label="Field 1"
        name="field1"
        value={formData.field1 || ''}
        onChange={handleChange}
      />
      <TextField
        label="Field 2"
        name="field2"
        value={formData.field2 || ''}
        onChange={handleChange}
      />
    </div>
  );
};

export default BasicInfo;
