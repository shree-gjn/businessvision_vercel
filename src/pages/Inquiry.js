import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
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

const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft:'15px', 
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
}));

const Inquiry = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    // Handle the send logic here
    console.log(`Selected Category: ${selectedCategory}, Message: ${message}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>お問い合わせ</p>
      </div>
      <Box sx={{ width: 'auto', typography: 'body1', padding: '24px'}}>
        <div>
          {/* Dropdown for category selection */}
          <TextField
            select
            label="問題を選択してください"
            value={selectedCategory}
            onChange={handleCategoryChange}
            sx={{ marginTop: '16px', marginBottom: '16px', width:'100%' }}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Technical">Technical</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
          </TextField>
          {/* Text field for message input */}
          <TextField
            multiline
            rows={4}
            variant="outlined"
            label="メッセージを入力してください"
            value={message}
            onChange={handleMessageChange}
            sx={{ width: '100%', marginBottom: '16px' }}
          />

          {/* Button to send the inquiry */}
          <Button onClick={handleSend} variant="contained" color="primary">
            送信
          </Button>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Inquiry;
