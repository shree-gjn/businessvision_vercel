// Import necessary React and Material-UI components
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import bvlogo from '../assets/bvlogo.svg'

// Create the functional component for the app bar
const MyAppBar = () => {
  return (
    <AppBar position="static" style={{backgroundColor:'#fff'}}>
      <Toolbar>
        {/* Left corner logo/icon */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Replace 'your_logo_image_path' with the actual path to your logo image */}
          <img src={bvlogo} alt="Logo" style={{ width: '70px', height: '40px', marginLeft: '10px' }} />
        </IconButton>
        {/* App title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Your App Name */}
        </Typography>

        {/* Right corner icons */}
        <IconButton color="blue">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="blue">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
