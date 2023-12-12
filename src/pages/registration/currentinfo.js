import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

const CurrentInfo = ({ formData, setFormData, handleNext }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div>
      <h1>Current Info</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Current Address"
              name="currentAddress"
              variant="outlined"
              fullWidth
              value={formData.currentAddress}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              variant="outlined"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ margin: '0 auto', display: 'grid', paddingBottom: '100px' }}>
          <Button type="submit" variant="contained" color="primary">
            Next Page
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default CurrentInfo;
