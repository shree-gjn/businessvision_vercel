import * as React from 'react';
import Box from '@mui/material/Box';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import {ReactComponent as EmailVerification} from '../assets/EmailVerification.svg';

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

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader" style={{marginBottom:'25px'}}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
        <BackLink to="#" sx={{width:'70%'}} onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>マスキング履歴書設定</p>
        <p> </p>
      </Box>
    </div>
    <EmailVerification/>
  </Box>
  );
};

export default ForgetPassword;
