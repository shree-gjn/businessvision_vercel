import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius, Box } from '@mui/system';
import Paper from '@mui/material/Paper';

const theme = createTheme({
  palette: {
    primary: {
      main: '#16375A',
    },
    secondary: {
      main: '#877151',
    },
    grey: {
      main: '#949494', // Change to your desired color
    },
    text: {
      grey: '#ffffff', // Change to your desired text color
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));



const Skillentryeleven = ({onBack, onNext}) => {

  const handleNext = () => {
    onNext();
  }

  const handleBack = () => {
    onBack();
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <p>経験業務を選択してください</p>
      </div>

      <Box sx={{flexGrow: 1, p: 2}}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Item sx={{fontSize: '12px', display: 'flex', width: '100%', padding: '0', background: '#EEEEEE'}}>
              <div style={{width: '20%', padding: '8px'}}>一般会計</div>
              <div style={{width: '20%', padding: '8px'}}>管理会計​</div>
              <div style={{width: '20%', padding: '8px'}}>社保給与</div>
              <div style={{width: '20%', padding: '8px'}}>税務</div>
              <div style={{width: '20%', padding: '8px', background: '#16375A', color: '#fff', position: 'relative'}}>上場会計 <span style={{display: 'block', borderTop: '17px solid transparent', borderLeft:'10px solid #16375A', borderBottom: '17px solid transparent', position: 'absolute', top: '0', right: '0', marginRight: '-9px'}}></span></div>
            </Item>
          </Grid>

          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Item sx={{width: '70%', position: 'relative', padding: '0'}}>
              <div style={{width: '100%', background: '#E3E6EA', height: '12px', borderRadius: '10px'}}></div>
              <div style={{width: '91.66%', background: '#16375A', height: '12px', position: 'absolute', top: '0', left: '0', borderRadius: '15px 0 0 15px'}}></div>
            </Item>
            <Item>
              11/12 ページ
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item sx={{background: '#16375A', marginBottom: '10px'}}>
              <Typography variant="h6" align="left" sx={{fontSize: '14px', color: '#fff'}}>
              連結決算
              </Typography>
            </Item>
            <Item>
              <Typography variant="h6" align="left" sx={{fontSize: '14px', marginBottom: '10px', fontWeight: '600'}}>
                具体的な業務内容
              </Typography>
              <Typography variant="h6" align="left" sx={{fontSize: '12px'}}>
                連結会計、持分法、連結財務諸表、注記情報、セグ メント情報          
              </Typography>
            </Item>
            <Item sx={{textAlign: 'left'}}>
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  // defaultValue="L4"
                  name="radio-buttons-group"
                  fullWidth 
                  sx={{fontSize: '13px'}}
                >
                  <FormControlLabel value="L4" control={<Radio />} label={<Typography sx={{fontSize: '12px'}}>指導・管理できる</Typography> } fullWidth />
                  <FormControlLabel value="L3" control={<Radio />} label={<Typography sx={{fontSize: '12px'}}>自身で判断しながら処理す ることができる</Typography>} fullWidth />
                  <FormControlLabel value="L2" control={<Radio />} label={<Typography sx={{fontSize: '12px'}}>指導を受けながら一通り処 理することができる</Typography>} fullWidth />
                  <FormControlLabel value="L1" control={<Radio />} label={<Typography sx={{fontSize: '12px'}}>指導を受けながら一部処理 することができる</Typography>} fullWidth />
                  <FormControlLabel value="L0" control={<Radio />} label={<Typography sx={{fontSize: '12px'}}>実務経験がない</Typography>} fullWidth />
                </RadioGroup>
              </FormControl>
            </Item>
          </Grid>
          <Grid xs={12} sx={{display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant='outlined' color="primary" sx={{fontSize: '12px'}} onClick={handleBack}>戻る</Button>
            <Button variant='contained' color="primary" sx={{fontSize: '12px'}} onClick={handleNext}>次へ</Button>
          </Grid>
        </Grid>
      </Box>

    </ThemeProvider>
  );
};

export default Skillentryeleven;

