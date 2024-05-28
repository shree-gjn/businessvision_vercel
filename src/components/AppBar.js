// Import necessary React and Material-UI components
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import bvlogo from '../assets/bvlogo.svg';
import tennavi from '../assets/tennavi-logo.png'

// Create the functional component for the app bar
const MyAppBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authKey = sessionStorage.getItem('authKey');
      console.log('Auth Key:', authKey);
      if (authKey) {
        setIsLoggedIn(true);
        console.log('User is logged in');
      } else {
        console.log('User is not logged in');
      }
    };

    // Initial check
    checkAuth();

    // Listen for custom login success event
    const handleLoginSuccess = () => {
      checkAuth();
    };

    window.addEventListener('loginSuccess', handleLoginSuccess);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('loginSuccess', handleLoginSuccess);
    };
  }, []);
  
  return (
    <AppBar position="static" style={{backgroundColor:'#fff'}}>
      <Toolbar>
        {/* Left corner logo/icon */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={tennavi} alt="Logo" style={{ width: 'auto', height: '30px', marginLeft: '10px' }} />
        </IconButton>
        {/* App title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Your App Name */}
        </Typography>

        {/* Right corner icons */}
        {isLoggedIn && (
          <IconButton color="blue" sx={{display:'block'}} href='/agent'>
            <AccountCircle />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:'12px' }}>
              エージェント
            </Typography>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;