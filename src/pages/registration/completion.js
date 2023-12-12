import React from 'react';
import { Button, Grid } from '@mui/material';

const Completion = ({ handleNext }) => {
  return (
    <div>
      <h1>Completion</h1>
      <Grid item xs={12} style={{ margin: '0 auto', display: 'grid', paddingBottom: '100px' }}>
        <Button type="submit" variant="contained" color="primary" onClick={handleNext}>
          Finish
        </Button>
      </Grid>
    </div>
  );
};

export default Completion;
