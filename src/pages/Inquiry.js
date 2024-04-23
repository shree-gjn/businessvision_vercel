import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';

const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft: '10px',
  marginTop: '10px',
  marginBottom: '8px',
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
    <Box sx={{ width: 'auto', typography: 'body1', padding: '24px'}}>
      <BackLink to="#" onClick={goBack}>
        <BackButton /> 戻る
      </BackLink>
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
  );
};

export default Inquiry;
