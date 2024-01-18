import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MaskingResume = () => {

  const navigate = useNavigate();  // Get the history object from react-router-dom

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
      <p>マスキング履歴書設定</p>
    </div>
   
    <BottomNav />
  </Box>
  );
};

export default MaskingResume;
