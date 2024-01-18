import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import {ReactComponent as EmailVerification} from '../assets/EmailVerification.svg';
import {
  TextField,
  Typography,
  Button
} from '@mui/material';

const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft:'10px',
  marginTop:'10px',
  marginBottom:'8px',
}));

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any additional logic before submission
    // (e.g., sending the email to the backend for verification)

    if (isValidEmail) {
      navigate('/fpauthentication');
    }
  };

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader" style={{marginBottom:'25px'}}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
        <BackLink to="#" sx={{width:'70%'}} onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>パスワードの再設定</p>
        <p> </p>
      </Box>
    </div>
    <EmailVerification/>
    <div style={{textAlign:'left', marginTop:'30px', padding:'20px'}}>
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
            // error={!isValidEmail}
            // helperText={!isValidEmail ? 'Invalid email format' : ''}
          />
          <div style={{display:'flex', margin:'10px auto'}}>
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
  );
};

export default ForgetPassword;
