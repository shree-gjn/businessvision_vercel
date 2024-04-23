import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MessagesFilterGrid = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [unreadReadValue, setUnreadReadValue] = useState('未読');
  const [statusValue, setStatusValue] = useState('応募済み');
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

    // Add your logic to handle the submit action

    // Navigate to '/messages/scout'
    navigate('/messages/scout');

    handleClose();
  };

  return (
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
              <MenuItem value={'応募済み'}>応募済み</MenuItem>
              <MenuItem value={'辞退済み'}>辞退済み</MenuItem>
              <MenuItem value={'ゴミ箱'}>ゴミ箱</MenuItem>
              <MenuItem value={'すべて'}>すべて</MenuItem>
              <MenuItem value={'気になる'}>気になる</MenuItem>
              <MenuItem value={'書類選考期日経過'}>書類選考期日経過</MenuItem>
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
  );
};

export default MessagesFilterGrid;
