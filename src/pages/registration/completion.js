import React from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Completion = ({ handleNext }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/mypage');
  };
  
  return (
    <div>
      <h1>完了</h1>
      <h3> マイページが完成しました </h3>
      <p> 専用のページより求人を見たり検索を することができます。 </p>
      <Grid container>
      <Grid item xs={4} style={{ margin: '10px auto', display: 'grid'}}>
        <Button type="submit" variant="contained" color="primary" onClick={handleButtonClick}>
        マイページへ
        </Button>
      </Grid>
      </Grid>
    </div>
  );
};

export default Completion;
