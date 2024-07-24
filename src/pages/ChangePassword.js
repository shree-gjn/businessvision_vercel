import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ResetPasswordIcon } from '../assets/ResetPasswordIcon.svg';
import {
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
import {ReactComponent as Cancel} from '../assets/Cancel.svg';
import Modal from '@mui/material/Modal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import theme from './theme';

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

  const [authKey] = useState(sessionStorage.getItem('authKey') || '');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
    setError(prev => ({ ...prev, oldPassword: '' }));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(prev => ({ ...prev, password: '' }));
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setError(prev => ({ ...prev, confirmPassword: '' }));
  };

  const handleClickShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleModalClose = () => {
    setSuccessModalOpen(false);
    navigate('/login');
  };

  const handleSubmit = async () => {
    // Reset error messages
    let valid = true;
    if (oldPassword === '') {
      setError(prev => ({ ...prev, oldPassword: 'Old Password is required' }));
      valid = false;
    }
    if (password === '') {
      setError(prev => ({ ...prev, password: 'New Password is required' }));
      valid = false;
    }
    if (confirmPassword === '') {
      setError(prev => ({ ...prev, confirmPassword: 'Confirm Password is required' }));
      valid = false;
    }
    if (password !== confirmPassword) {
      setError(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      valid = false;
    }

    if (!valid) return;

    // Create FormData object
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('old_password', oldPassword);
    formData.append('new_password', password);
    formData.append('confirm_password', confirmPassword);

    // API call to reset password
    try {
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/edit_candidate_password', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${response.statusText}. ${errorText}`);
      }

      setTimeout(() => {
        // Simulated success
        setSuccessModalOpen(true);

        // Clear form fields
        setOldPassword('');
        setPassword('');
        setConfirmPassword('');
      }, 1000);
    } catch (error) {
      console.error('Error resetting password:', error);
      setError((prev) => ({
        ...prev,
        oldPassword: 'Failed to reset password',
      }));
    }
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
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
            type={showOldPassword ? 'text' : 'password'}
            placeholder="古いパスワードを入力してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            error={error.oldPassword !== ''}
            helperText={error.oldPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowOldPassword}
                    edge="end"
                  >
                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Typography variant="paragraph" gutterBottom sx={{ marginTop: '5px', textAlign: 'left' }} >新しいパスワード​ </Typography>
          <TextField
            sx={{ paddingBottom: '20px' }}
            type={showPassword ? 'text' : 'password'}
            placeholder="新しいパスワードを入力してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            error={error.password !== ''}
            helperText={error.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Typography variant="paragraph" gutterBottom sx={{ marginTop: '30px', textAlign: 'left' }} >パスワードを認証する </Typography>
          <TextField
           type={showConfirmPassword ? 'text' : 'password'}
            placeholder="新しいパスワードを確認してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={error.confirmPassword !== ''}
            helperText={error.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <div style={{ margin: '20px auto', textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              パスワードを再設定する
            </Button>
          </div>
        </div>
      </Box>

      {/* Success Modal */}
      <Modal
        open={successModalOpen}
        onClose={handleCloseSuccessModal}
        aria-labelledby="password-change-success-modal"
        aria-describedby="password-change-success-message"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 250 ,
          bgcolor: 'background.paper',
          borderRadius: '20px',
          boxShadow: 24,
          textAlign: 'center',
          p: 4,
        }}>
          <Cancel onClick={handleCloseSuccessModal} style={{position: 'absolute', right: '0', top: '0', padding: '10px'}} />
          <SuccessMsg style={{marginBottom: '10px'}} />
          <Typography variant="h6" id="password-change-success-modal" component="h2"style={{fontSize: '14px'}}>
            パスワードが正常に変更されました
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default ChangePassword;
