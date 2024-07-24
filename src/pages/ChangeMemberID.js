import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Modal, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme';

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


const ChangeMemberID = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [openModal, setOpenModal] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  const handleConfirm = () => {
    const authKey = sessionStorage.getItem('authKey');
    setOpenModal(false);
    // Create a FormData object and append the email address and auth key
    const formData = new FormData();
    formData.append('auth_key', authKey); // Replace with actual auth key
    formData.append('email_address', emailAddress);

    // Send the POST request using fetch
    fetch('https://bvhr-api.azurewebsites.net/candidate/edit_candidate_email', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data); // Log the response for debugging

        // Check the actual structure of the response
        if (data.message && data.message.trim() === 'Candidate Email Updated Successfully') {
          setSuccessModal(true);
        } else {
          console.error('Failed to update email:', data.message || 'Unknown error');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
    navigate('/login');
  };

  const handleEmailChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>設定</p>
      </div>
      <Box sx={{width: 'auto', typography: 'body1', padding: '20px'}}>
        <Typography variant="h6" sx={{ paddingBottom: '8px', textAlign:'left', width:'100%', fontSize: '16px', color: '#16375A'}}>
          会員ID（E-mailアドレス）設定
        </Typography>
        <Divider sx={{padding:'0px', marginBottom:'16px', width:'100%'}} />
        <Typography variant="body1" sx={{ marginBottom: '16px', textAlign:'left', fontSize: '12px'}}>
        会員ID（E-mail）アドレスの変更が行えます。
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '16px', textAlign:'left', fontSize: '12px'}}>
        ご入力後、確認ボタンを押してください。
        </Typography>
        <div style={{marginTop:'20px', width:'100%'}}>
        <Typography variant="body1" sx={{ marginBottom: '16px', textAlign:'left', fontSize: '12px'}}>
        会員ID（メールアドレス）
        </Typography>
        <TextField
          // label="Member ID"
          variant="outlined"
          fullWidth
          required
          value={emailAddress}
          onChange={handleEmailChange}
          placeholder="メールアドレスを入力してください"
          sx={{ marginBottom: '16px' }}
        />
        </div>
        <Button variant="contained" onClick={handleOpenModal}>
        確認する
        </Button>
        <Modal open={openModal} onClose={handleCloseModal} sx={{borderRadius: '15px'}}>
          <Box sx={{ width: 300, bgcolor: 'background.paper', p: 4, margin: '250px auto', position: 'relative', borderRadius: '15px'}}>
            {/* Close button with 'x' icon */}
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 0, right: 0, display: 'contents', border: 'none'}}
            >
              <CloseIcon sx={{display: 'Block', marginLeft: 'auto', position: 'absolute', top: '0', right: '0', margin: '15px'}} />
            </IconButton>
            {/* <Divider /> */}
            {/* Modal content */}
            <Typography variant="h6" sx={{fontSize: '16px', textAlign: 'center', marginTop: '20px'}}>
              会員ID（E-mailアドレス）設定
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '16px', textAlign: 'center'}}>
              ご入力された内容をご確認ください。
            </Typography>
            <div style={{ marginTop: '40px', width: '100%' }}>
              <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'center' }}>
                会員ID（メールアドレス）
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                required
                value={emailAddress}
                InputProps={{
                  readOnly: true,
                }}
                sx={{marginBottom: '20px'}}
              />
            </div>
            <Button variant='contained' onClick={handleConfirm} sx={{ marginTop: '16px', display: 'block', margin: '0 auto'}}>
              確認する
            </Button>
          </Box>
        </Modal>

        {/* Success Modal */}
        <Modal open={successModal} onClose={handleCloseSuccessModal}>
          <Box sx={{ width: 300, bgcolor: 'background.paper', p: 4, margin: '250px auto', position: 'relative', borderRadius: '15px'}}>
            <SuccessMsg style={{marginBottom: '10px', display: 'block', margin: 'auto'}} />
            <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center', fontSize: '14px'}}>
              登録会員ID(E-mailアドレス)を変更しました。もう一度ログインしてください
            </Typography>
            <Button onClick={handleCloseSuccessModal} variant="contained" sx={{ marginTop: '16px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
              閉じる
            </Button> 
          </Box>
        </Modal>

      </Box>
    </ThemeProvider>
  );
};

export default ChangeMemberID;
