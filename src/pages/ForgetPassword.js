import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import {ReactComponent as EmailVerification} from '../assets/EmailVerification.svg';
import {
  TextField,
  Typography,
  Button
} from '@mui/material';
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

const ForgetPassword = () => {
  const [email, setemail_address] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const handleEmailChange = (event) => {
    setemail_address(event.target.value);
    setError('');
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      setError('この項目は必須です');
      return;
    }

    if (!validateEmail()) {
      setError('有効なメールアドレスを入力してください');
      return;
    }

    try {
      const response = await fetch(`https://bvhr-api.azurewebsites.net/candidates/forgot_password?email=${email}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Server responded with a status of ${response.status}`);
      }

    const data = await response.json();
      console.log(data); // Assuming the API returns some data
      navigate('/fpauthentication');
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again later.');
    }
  };


  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        {/* <div className="PageHeader" style={{marginBottom:'25px'}}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
            <BackLink to="#" sx={{width:'70%'}} onClick={goBack} > <BackButton /> 戻る </BackLink>
            <p>パスワードの再設定</p>
            <p> </p>
          </Box>
        </div> */}
        <div className="PageHeader" style={{marginBottom: '30px'}}>
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>パスワードを忘れた場合</p>
        </div>
        <EmailVerification/>
        <div style={{textAlign:'left', padding:'20px'}}>
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} >会員情報に登録した、会員ID（Eメールアドレス）を入力してください。ご登録のメールアドレス宛に、パスワード再設定に関する情報をお送りします。​ </Typography> 
            <form onSubmit={handleSubmit} style={{marginTop:'50px'}}>
            <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > 会員ID（Eメールアドレス） </Typography> 
              <TextField
                placeholder="登録したメールIDを入力してください"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                error={!isValidEmail || error !== ''}
                helperText={error}
              />
              <div style={{display:'flex', margin:'20px auto'}}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                // disabled={!isValidEmail}
                style={{ margin:'0 auto' }}
              >
                次へ
              </Button>
              </div>
            </form>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default ForgetPassword;
