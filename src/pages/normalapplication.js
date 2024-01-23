import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as AuthenticationCode } from '../assets/AuthenticationCode.svg';
import { ReactComponent as Download } from '../assets/Download.svg';
import { ReactComponent as PencilEdit } from '../assets/PencilEdit.svg';
import { TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

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

const NormalApplication = () => {
  const navigate = useNavigate(); // Get the history object from react-router-dom
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const handleModal1Open = () => {
    setOpenModal1(true);
  };

  const handleModal1Close = () => {
    setOpenModal1(false);
  };

  const handleModal2Open = () => {
    setOpenModal2(true);
  };

  const handleModal2Close = () => {
    setOpenModal2(false);
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <div className="PageHeader" style={{ marginBottom: '25px', textAlign: 'center' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%' }}>
          <BackLink to="#" sx={{ width: '70%' }} onClick={goBack}>
            {' '}
            <BackButton /> 戻る{' '}
          </BackLink>
        </Box>
      </div>
      <p style={{ textAlign: 'center' }}>応募情報の確認</p>

      {/* Buttons */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
        <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleModal1Open}
            sx={{backgroundColor:'#EEEEEE', color:'#16375A'}}
          >
            <Download />
            {' '} 履歴書PDF
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleModal1Open}
            sx={{backgroundColor:'#EEEEEE', color:'#16375A'}}
          >
            <Download />
            {' '} 職務経歴書PDF
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleModal2Open}
            sx={{backgroundColor:'#FFF', color:'#16375A'}}
          >
            <PencilEdit />
            {' '}編集
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} justifyContent="left" sx={{marginTop:'20px', padding:'20px 20px 30px 40px'}}>
        <div style={{border:'1px solid #000', width:'100%', textAlign:'left'}}>
          <Typography variant="h5" sx={{ marginBottom: '10px' }}> 基本情報 </Typography>
          <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Content Line 1
        </Typography>
        <Divider sx={{ marginBottom: '10px' }} />

        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Content Line 2
        </Typography>
        <Divider sx={{ marginBottom: '10px' }} />

        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Content Line 3
        </Typography>
        <Divider sx={{ marginBottom: '10px' }} />

        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Content Line 4
        </Typography>
        <Divider sx={{ marginBottom: '10px' }} />

        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
          Content Line 5
        </Typography>
        <Divider sx={{ marginBottom: '10px' }} />
        </div>
      </Grid>

      {/* Modals */}
      <Dialog open={openModal1} onClose={handleModal1Close}>
        {/* Content of Modal 1 */}
        <Typography>This is Modal 1 content</Typography>
      </Dialog>

      <Dialog open={openModal2} onClose={handleModal2Close}>
        {/* Content of Modal 2 */}
        <Typography>This is Modal 2 content</Typography>
      </Dialog>
    </Box>
  );
};

export default NormalApplication;
