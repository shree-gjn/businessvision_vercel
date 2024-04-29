import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';

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

const SecretFilterGrid = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [statusValue, setStatusValue] = useState('１次面接案内');
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    // Use the selected values as needed
    console.log("ステータス:", statusValue);

    // Add your logic to handle the submit action

    // Navigate to '/messages/scout'
    navigate('/messages/scout');

    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Button onClick={handleClick} style={{borderRadius: '5px', border: '1px solid #EEE', background: '#FFF', width: '100%'}}>
          <FilterListIcon /> 絞り込む
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <div style={{padding:'20px'}}>
            <div>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '14px', marginBottom: '5px'}}> ステータス </Typography>
              <Select value={statusValue} onChange={(e) => setStatusValue(e.target.value)} sx={{width:'100%'}}>
                <MenuItem value={'１次面接案内'}>１次面接案内</MenuItem>
                <MenuItem value={'書類選考案内'}>書類選考案内</MenuItem>
                <MenuItem value={'匿名選考中'}>匿名選考中</MenuItem>
                <MenuItem value={'期日経過'}>期日経過</MenuItem>
                <MenuItem value={'選考不通過'}>選考不通過</MenuItem>
                <MenuItem value={'ゴミ箱'}>ゴミ箱</MenuItem>
                <MenuItem value={'全て'}>ゴミ箱</MenuItem>
              </Select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button fullWidth variant="outlined" color="primary" onClick={handleSubmit}>
                この条件で絞り込む
              </Button>
            </div>
          </div>
        </Popover>
      </>
    </ThemeProvider>
  );
};

export default SecretFilterGrid;
