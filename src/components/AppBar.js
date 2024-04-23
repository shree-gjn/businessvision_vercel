// Import necessary React and Material-UI components
import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import bvlogo from '../assets/bvlogo.svg';

// Create the functional component for the app bar
const MyAppBar = () => {
  
  return (
    <AppBar position="static" style={{backgroundColor:'#fff'}}>
      <Toolbar>
        {/* Left corner logo/icon */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={bvlogo} alt="Logo" style={{ width: '70px', height: '40px', marginLeft: '10px' }} />
        </IconButton>
        {/* App title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Your App Name */}
        </Typography>

        {/* Right corner icons */}
        <IconButton color="blue" sx={{display:'block'}}>
            <AccountCircle /> <br /> 
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:'12px' }} >エージェント</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;


