import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import {ReactComponent as FPAuthenticationIcon} from '../assets/FPAuthenticationIcon.svg';
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

const FPAuthentication = () => {
  const navigate = useNavigate();  // Get the history object from react-router-dom
  const email = 'agent-info@b-vision.co.jp';

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };


  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const handleConfirmClick = () => {
    navigate('/resetpassword');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        {/* <div className="PageHeader" style={{marginBottom:'25px'}}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
            <BackLink to="#" sx={{width:'70%'}} onClick={goBack} > <BackButton /> 戻る </BackLink>
            <p>マスキング履歴書設定</p>
            <p> </p>
          </Box>
        </div> */}
        <div className="PageHeader" style={{marginBottom: '30px'}}>
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>パスワードを忘れた場合</p>
        </div>
        <FPAuthenticationIcon/>
        <div style={{textAlign:'left', padding:'20px'}}>
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px',marginBottom: '15px', display: 'block', textAlign: 'center'}} >メールを送信しました。​ </Typography> 
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px',marginBottom: '10px', display: 'block'}} >ご登録のメールアドレス宛に、パスワードを設定する情報を送信しました。​<br />
    お送りしたメールは、１時間以内にご覧いただけますようお願いいたします。詳しくはお送りしたメールをご覧ください。​ </Typography>
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'10px'}} >入力された会員ID（メールアドレス）が登録されていない場合は、メールを送ることができません。弊社よりパスワードのメールが届かない場合は、間違ったメールアドレスで登録された可能性があります。経理エージェント事務局 {' '}
          <Link href={`mailto:${email}`} onClick={handleClick}>
            {email}
          </Link>までお問い合わせください。​​ </Typography> 
        </div>
        {/* <div>
            <Typography variant="paragraph" sx={{color:'#085D95', fontWeight:'500'}}> メールリンクより確認後 </Typography> <br/>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin:'20px auto' }}
                onClick={handleConfirmClick}
              >
                確認
              </Button>
        </div> */}
      </Box>
    </ThemeProvider>
  );
};

export default FPAuthentication;
