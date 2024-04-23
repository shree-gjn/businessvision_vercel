import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as SuccessIcon } from '../assets/SuccessIcon.svg';
import { ReactComponent as Download } from '../assets/Download.svg';
import { ReactComponent as PencilEdit } from '../assets/PencilEdit.svg';
import { TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

const NormalResume = () => {
  const navigate = useNavigate(); // Get the history object from react-router-dom
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const handleSuccessModalOpen = () => {
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
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

      <Grid style={{padding:'20px 20px 30px 20px'}}>
        <div style={{border:'1px solid #EEEEEE', borderRadius:'5px'}}>
        <Grid container spacing={2} justifyContent="left" sx={{padding:'0px', marginLeft:'0px', width:'100%', marginTop:'10%'}}>
          <div style={{ width:'100%', textAlign:'left', maxHeight:'350px', overflow:'scroll' }}>
            <Typography variant="h5" sx={{ marginBottom: '10px' }}> 基本情報 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 氏名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> フリガナ </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 生年月日 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 性別 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 現住所 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 電話番号 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 携帯電話番号 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> メールアドレス </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 連絡先 （現住所以外に連絡を希望する場合のみ記入） </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 学歴 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  1 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  2 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 職歴 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  1 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  2 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 賞罰 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入社年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 免許・資格 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入社年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> その他情報 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 通勤時間 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 最寄り駅 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 扶養家族（配偶者を除く） </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 配偶者 有・無 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 配偶者の扶養義務 有・無 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 趣味特技 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 志望の動機・自己PRなど </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
          </div>
        </Grid>
        </div>
      </Grid>

      {/* Modals */}
      <Dialog open={openModal1} onClose={handleModal1Close}>
      <DialogTitle sx={{ position: 'relative' }}>
          {/* Custom close button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleModal1Close}
            sx={{ position: 'absolute', top: 5, right: 5 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {/* Content of Modal 1 */}
        <Grid container spacing={2} justifyContent="left" sx={{padding:'0px', marginLeft:'0px', width:'100%', marginTop:'10%'}}>
          <div style={{ width:'100%', textAlign:'left', maxHeight:'350px', overflow:'scroll' }}>
            <Typography variant="h5" sx={{ marginBottom: '10px' }}> 基本情報 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 氏名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> フリガナ </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 生年月日 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 性別 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 現住所 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 電話番号 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 携帯電話番号 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> メールアドレス </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 連絡先 （現住所以外に連絡を希望する場合のみ記入） </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 学歴 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  1 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  2 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 職歴 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  1 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校  2 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入学年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 卒業年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 学校名 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 賞罰 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入社年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 免許・資格 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 入社年・月 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> その他情報 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 通勤時間 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 最寄り駅 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 扶養家族（配偶者を除く） </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 配偶者 有・無 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 配偶者の扶養義務 有・無 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 趣味特技 </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />

            <Typography variant="h5" sx={{ marginBottom: '10px', marginTop:'35px' }}> 志望の動機・自己PRなど </Typography>
            <Typography variant="body1" sx={{ marginBottom: '5px' }}> 項目 </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
          </div>
        </Grid>
      </Dialog>

      <Dialog open={openModal2} onClose={handleModal2Close}>
        {/* Content of Modal 2 */}
        <Typography>This is Modal 2 content</Typography>
      </Dialog>
      <Grid sx={{padding:'20px'}}>
      <Typography variant="body1" sx={{ marginBottom: '5px', textAlign:'left' }}> メッセージを入力 （任意）</Typography>
      <TextField
        placeholder="100文字以内で入力してください"
        variant="outlined"
        fullWidth
        multiline
        rows={4} // Adjust the number of rows as needed
      />
      </Grid>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSuccessModalOpen}
        sx={{ backgroundColor: '#877151', color: 'white', marginTop: '20px', width:'90%' }}
      >
        正式応募する
      </Button>

      
      <Dialog open={showSuccessModal} onClose={handleSuccessModalClose} sx={{ textAlign: 'center' }}>
        <DialogTitle sx={{ position: 'relative' }}>
          {/* Custom close button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleSuccessModalClose}
            sx={{ position: 'absolute', top: 5, right: 5 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* Content of the Success Message Modal */}
        <Typography variant="h6">
          <SuccessIcon />
        </Typography>
        <Typography sx={{padding:'20px'}}>正式な申請が無事に提出されました</Typography>

      </Dialog>

    </Box>
  );
};

export default NormalResume;
