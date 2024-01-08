import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Modal, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon
import { ReactComponent as BackButton } from '../assets/BackButton.svg';

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

const ChangeMemberID = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [openModal, setOpenModal] = React.useState(false);

  const handleConfirm = () => {
    setOpenModal(true);
    // Add logic to handle confirmation here
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <BackLink to="#" onClick={goBack}>
        <BackButton /> 戻る
      </BackLink>
      <Typography variant="h6" sx={{ marginBottom: '16px', paddingBottom: '8px', textAlign:'left', width:'70%', padding:'10px 40px 0px 20px' }}>
        会員ID（E-mailアドレス）設定
      </Typography>
      <Divider sx={{padding:'0px', marginBottom:'16px', width:'100%'}} />
      <Typography variant="body1" sx={{ marginBottom: '16px', textAlign:'left', width:'90%', margin:'0 auto'  }}>
      会員ID（E-mail）アドレスの変更が行えます。
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '16px', textAlign:'left', width:'90%', padding:'10px 10px 0px 20px'}}>
      ご入力後、確認ボタンを押してください。
      </Typography>
      <div style={{marginTop:'40px', width:'90%', margin:'0 auto'}}>
      <Typography variant="body1" sx={{ marginBottom: '16px', textAlign:'left' }}>
      会員ID（メールアドレス）
      </Typography>
      <TextField
        // label="Member ID"
        variant="outlined"
        fullWidth
        required
        sx={{ marginBottom: '16px' }}
      />
      </div>
      <Button variant="contained" onClick={handleConfirm}>
        Confirm
      </Button>
      <Modal open={openModal} onClose={handleCloseModal} sx={{}}>
      <Box sx={{ width: 300, bgcolor: 'background.paper', p: 2, margin: '250px auto', position: 'relative' }}>
          {/* Close button with 'x' icon */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 0, right: 0, display:'contents' }}
          >
            <CloseIcon />
          </IconButton>
          <Divider />
          {/* Modal content */}
          <Typography variant="h6" sx={{ margin:'0 auto' }}>
          会員ID（E-mailアドレス）設定
          </Typography>
          <Typography variant="body1" sx={{marginTop:'10px'}}>
          ご入力された内容をご確認ください。
          </Typography>
          
          <div style={{marginTop:'40px', width:'90%', margin:'0 auto'}}>
      <Typography variant="body1" sx={{ marginBottom: '16px', textAlign:'left' }}>
      会員ID（メールアドレス）
      </Typography>
      <TextField
        // label="Member ID"
        variant="outlined"
        fullWidth
        required
        sx={{ marginBottom: '16px' }}
      />
      </div>
          <Button onClick={handleCloseModal} sx={{ marginTop: '16px' }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ChangeMemberID;
