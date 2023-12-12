import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

const DesiredCondition = ({ formData, setFormData, handleNext }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div>
      <h1>Desired Condition</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Desired Field 1"
              name="desiredField1"
              variant="outlined"
              fullWidth
              value={formData.desiredField1}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Desired Field 2"
              name="desiredField2"
              variant="outlined"
              fullWidth
              value={formData.desiredField2}
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

export default DesiredCondition;
