import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {Select} from '@mui/material';
import { Typography, TextField, Button, Modal, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
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
  const [successModal, setSuccessModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  // const handleSend = () => {
  //   // Handle the send logic here
  //   console.log(`Selected Category: ${selectedCategory}, Message: ${message}`);
  // };

  const handleSend = () => {
    const authKey = sessionStorage.getItem('authKey');
    setOpenModal(false);
    // Create a FormData object and append the email address and auth key
    const formData = new FormData();
    formData.append('auth_key', authKey); // Replace with actual auth key
    formData.append('enquiry_tittle', selectedCategory);
    formData.append('enquiry_text', message);

    // Send the POST request using fetch
    fetch('https://bvhr-api.azurewebsites.net/candidate/enquiry', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data); // Log the response for debugging
  
        if (data.message === 'Candidate Enquiry Created') {
          setSuccessModal(true);
        } else {
          console.error('Failed to send inquiry:', data.message || 'Unknown error');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
  };
  
  const handleOpenModal = () => {
    setOpenModal(true);
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
          <Select
            
            // label="問題を選択してください"
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            sx={{ marginTop: '16px', marginBottom: '16px', width:'100%', textAlign: 'left'}}
          > 
            <MenuItem value="" disabled>問題を選択してください</MenuItem>
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Technical">Technical</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
          </Select>
          {/* Text field for message input */}
          <TextField
            multiline
            rows={4}
            variant="outlined"
            placeholder="メールアドレスを入力してください"
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

      {/* Success Modal */}
      <Modal open={successModal} onClose={handleCloseSuccessModal}>
        <Box sx={{ width: 300, bgcolor: 'background.paper', p: 4, margin: '250px auto', position: 'relative', borderRadius: '15px'}}>
          <SuccessMsg style={{marginBottom: '10px', display: 'block', margin: 'auto'}} />
          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center', fontSize: '14px'}}>
            あなたのメッセージは送信されました
          </Typography>
          <Button onClick={handleCloseSuccessModal} variant="contained" sx={{ marginTop: '16px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            戻る
          </Button> 
        </Box>
      </Modal>

    </ThemeProvider>
  );
};

export default Inquiry;
