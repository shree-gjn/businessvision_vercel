import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

const BasicInfo = ({ formData, setFormData, handleNext }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div>
      <h1>Basic Info</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ margin: '0 auto', display: 'grid', paddingBottom: '100px' }}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default BasicInfo;
