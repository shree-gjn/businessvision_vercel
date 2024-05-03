import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import { ReactComponent as ResetPasswordIcon } from '../assets/ResetPasswordIcon.svg';
import {
  TextField,
  Typography,
  Button
} from '@mui/material';

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

const ResetPasswordPage = () => {
  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Reset error message
    setError('');

    // Password validation
    if (password === '') {
      setError('Password is required');
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
    setPassword('');
    setConfirmPassword('');

    navigate('/login');
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        {/* <div className="PageHeader" style={{marginBottom:'25px'}}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
            <BackLink to="#" sx={{width:'70%'}} onClick={goBack} > <BackButton /> 戻る </BackLink>
            <p>パスワードの再設定</p>
          </Box>
        </div> */}
        <div className="PageHeader" style={{marginBottom: '30px'}}>
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>パスワードの再設定</p>
        </div>
        <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} > 新しいパスワードを入力して、再設定してください。​​ </Typography> <br/>
        <div style={{marginTop:'30px'}}>
        <ResetPasswordIcon/>
        </div>
        <div style={{textAlign:'left', padding:'20px'}}>
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} >会員情報に登録した、会員ID（Eメールアドレス）を入力してください。ご登録のメールアドレス宛に、パスワード再設定に関する情報をお送りします。​ </Typography> 
        </div>
        <div style={{padding:'20px', textAlign:'left'}}>
          <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px', textAlign:'left'}} >新しいパスワード​ </Typography> 
          <TextField
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
          <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px', textAlign:'left'}} >新しいパスワード（再入力） </Typography> 
          <TextField
            type="password"
            placeholder="新しいパスワードを再入力してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={error !== '' && confirmPassword === ''}
            helperText={error !== '' && confirmPassword === '' && error}
          />
          <div style={{margin:'20px auto', textAlign:'center'}}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            パスワードを再設定する
          </Button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default ResetPasswordPage;
