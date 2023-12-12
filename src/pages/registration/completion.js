import React from 'react';
import { Button, Grid } from '@mui/material';

const Completion = ({ handleNext }) => {
  return (
    <div>
      <h1>完了</h1>
      <h3> マイページが完成しました </h3>
      <p> 専用のページより求人を見たり検索を することができます。 </p>
      <Grid item xs={12} style={{ margin: '10px auto', display: 'grid'}}>
        <Button type="submit" variant="contained" color="primary" onClick={handleNext}>
        マイページへ
        </Button>
      </Grid>
    </div>
  );
};

export default Completion;
