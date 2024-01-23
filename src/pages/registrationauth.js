import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as AuthenticationCode } from '../assets/AuthenticationCode.svg';
import { ReactComponent as Key } from '../assets/Key.svg';
import { TextField } from '@mui/material';

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

const ConfirmationModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Key sx={{ fontSize: '48px' }} />
        <Typography variant="body1" sx={{ marginY: '20px' }}>
        新しいコードがご登録のメールアドレス に再送信されました
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
            近い
        </Button>
      </Box>
    </Dialog>
  );
};

const RegistrationAuth = () => {
  const navigate = useNavigate(); // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef()]; // Create refs for each TextField

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOtpChange = (index, event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Allow only digits
    const updatedOtpDigits = [...otpDigits];
    updatedOtpDigits[index] = inputValue.slice(0, 1); // Restrict to 1 character
    setOtpDigits(updatedOtpDigits);

    // Move focus to the next block automatically
    if (inputValue !== '' && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  const handleConfirmClick = () => {
    // Open the confirmation modal
    setIsModalOpen(true);
  };

  const handleConfirmRegistration = () => {
    const isCodeEntered = otpDigits.every((digit) => digit !== '');
      if (isCodeEntered) {
        // Navigate only if the authentication code block is entered and validated
        navigate('/registration');
      } else {
        // Show an alert or any other feedback indicating that the code is not complete
        alert('Please enter the complete authentication code.');
      }
    }

  const handleCloseModal = () => {
    // Close the confirmation modal
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <div className="PageHeader" style={{ marginBottom: '25px', textAlign: 'center' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%' }}>
          <BackLink to="#" sx={{ width: '70%' }} onClick={goBack}>
            {' '}
            <BackButton /> 戻る{' '}
          </BackLink>
          <p style={{ textAlign: 'center' }}>認証コード</p>
          <p> </p>
        </Box>
      </div>
      <AuthenticationCode />
      <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px' }}>
        <Typography variant="paragraph" gutterBottom sx={{ marginTop: '5px', color: 'red' }}>
        新しいコードがご登録のメールアドレス に再送信されました
        </Typography>{' '}
        <br />
      </div>
      <div style={{ textAlign: 'center', padding: '20px', display: 'flex', justifyContent: 'center' }}>
        {/* Authentication Code Blocks */}
        {otpDigits.map((digit, index) => (
          <TextField
            key={index}
            variant="outlined"
            value={digit}
            onChange={(event) => handleOtpChange(index, event)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Allow only numeric input
            inputRef={refs[index]} // Assign the ref
            sx={{ margin: '0 5px', width: '50px' }}
          />
        ))}
      </div>
      <div>
        <Typography variant="paragraph" sx={{ color: '#085D95', fontWeight: '500', textAlign: 'center' }} onClick={handleConfirmClick}> 
          メールリンクより確認後
        </Typography>
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: '20px auto' }}
          onClick={handleConfirmRegistration}
        >
          確認
        </Button>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default RegistrationAuth;
