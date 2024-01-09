import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import {ReactComponent as FPAuthenticationIcon} from '../assets/FPAuthenticationIcon.svg';
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
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader" style={{marginBottom:'25px'}}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
        <BackLink to="#" sx={{width:'70%'}} onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>マスキング履歴書設定</p>
        <p> </p>
      </Box>
    </div>
    <FPAuthenticationIcon/>
    <div style={{textAlign:'left', marginTop:'30px', padding:'20px'}}>
        <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} >メールを送信しました。​ </Typography> 
        <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px', marginBottom:'10px'}} >ご登録のメールアドレス宛に、パスワードを設定する情報を送信しました。​<br />
お送りしたメールは、１時間以内にご覧いただけますようお願いいたします。詳しくはお送りしたメールをご覧ください。​ </Typography> <br/>
        <Typography variant="paragraph" gutterBottom sx={{marginTop:'10px'}} >入力された会員ID（メールアドレス）が登録されていない場合は、メールを送ることができません。弊社よりパスワードのメールが届かない場合は、間違ったメールアドレスで登録された可能性があります。経理エージェント事務局 {' '}
      <Link href={`mailto:${email}`} onClick={handleClick}>
        {email}
      </Link>までお問い合わせください。​​ </Typography> 
    </div>
    <div>
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
    </div>
  </Box>
  );
};

export default FPAuthentication;
