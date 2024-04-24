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

const FilterGrid = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [unreadReadValue, setUnreadReadValue] = useState('未読');
  const [statusValue, setStatusValue] = useState('逆指名');
  const [otherValue, setOtherValue] = useState('気になる');
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    // Use the selected values as needed
    console.log("未読/閱読:", unreadReadValue);
    console.log("ステータス:", statusValue);
    console.log("その他:", otherValue);

    // Add your logic to handle the submit action

    // Navigate to '/recruitment'
    navigate('/recruitment');

    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Button onClick={handleClick} style={{borderRadius: '5px', border: '1px solid #EEE', background: '#FFF'}}>
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
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 未読/閱読 </Typography>
              <Select value={unreadReadValue} onChange={(e) => setUnreadReadValue(e.target.value)} sx={{width:'100%'}}>
                <MenuItem value={'未読'}>未読</MenuItem>
                <MenuItem value={'既読'}>既読</MenuItem>
                <MenuItem value={'すべて'}>すべて</MenuItem>
              </Select>
            </div>
            <div>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> ステータス </Typography>
              <Select value={statusValue} onChange={(e) => setStatusValue(e.target.value)} sx={{width:'100%'}}>
                <MenuItem value={'逆指名'}>逆指名</MenuItem>
                <MenuItem value={'正式応募ずみ'}>正式応募ずみ</MenuItem>
                <MenuItem value={'書類選考'}>書類選考</MenuItem>
                <MenuItem value={'期日経過'}>期日経過</MenuItem>
              </Select>
            </div>
            <div>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> その他 </Typography>
              <Select value={otherValue} onChange={(e) => setOtherValue(e.target.value)} sx={{width:'100%'}}>
                <MenuItem value={'気になる'}>気になる</MenuItem>
                <MenuItem value={'ゴミ箱'}>ゴミ箱</MenuItem>
                <MenuItem value={'辞退する​'}>辞退する​</MenuItem>
              </Select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                この条件で絞り込む
              </Button>
            </div>
          </div>
        </Popover>
      </>
    </ThemeProvider>
  );
};

export default FilterGrid;
