import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ResetPasswordIcon } from '../assets/ResetPasswordIcon.svg';
import {
  TextField,
  Typography,
  Button
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

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
  paddingLeft: '15px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
}));

const ChangePassword = () => {
  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Reset error message
    setError('');

    // Old password validation
    if (oldPassword === '') {
      setError('Old Password is required');
      return;
    }

    // New password validation
    if (password === '') {
      setError('New Password is required');
      return;
    }

    // Confirm password validation
    if (confirmPassword === '') {
      setError('Confirm Password is required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Password reset logic here (send API request, etc.)

    // Clear form fields
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');

    navigate('/login');
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>パスワードを変更する</p>
        </div>
        <div style={{ marginTop: '30px' }}>
          <ResetPasswordIcon />
        </div>
        <div style={{ padding: '20px', textAlign: 'left' }}>
          <Typography variant="paragraph" gutterBottom sx={{ marginTop: '5px', textAlign: 'left' }} >以前のパスワード </Typography>
          <TextField
            sx={{ paddingBottom: '20px' }}
            type="password"
            placeholder="古いパスワードを入力してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            error={error !== '' && oldPassword === ''}
            helperText={error !== '' && oldPassword === '' && error}
          />

          <Typography variant="paragraph" gutterBottom sx={{ marginTop: '5px', textAlign: 'left' }} >新しいパスワード​ </Typography>
          <TextField
            sx={{ paddingBottom: '20px' }}
            type="password"
            placeholder="新しいパスワードを入力してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            error={error !== '' && password === ''}
            helperText={error !== '' && password === '' && error}
          />

          <Typography variant="paragraph" gutterBottom sx={{ marginTop: '30px', textAlign: 'left' }} >パスワードを認証する </Typography>
          <TextField
            type="password"
            placeholder="新しいパスワードを確認してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={error !== '' && confirmPassword === ''}
            helperText={error !== '' && confirmPassword === '' && error}
          />
          <div style={{ margin: '20px auto', textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              パスワードを再設定する
            </Button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default ChangePassword;
