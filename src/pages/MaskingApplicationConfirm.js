import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Link, useNavigate, useLocation} from 'react-router-dom'; 
import BottomNav from '../components/BottomNav';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
import {ReactComponent as Cancel} from '../assets/Cancel.svg';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import theme from './theme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));
  
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

export default function MaskingApplicationConfirm() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const location = useLocation();
  // const message = location.state ? location.state.message : '';
  const { id, message } = location.state || { id: '', message: '' };


  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    navigate("/mypage");
  };

  const handleDelete = () => {
    // Implement the logic to delete the item
    // You can use an API call or other methods to delete the item
    // After deletion, you may want to navigate to a different page or update the UI
    // For now, let's just close the modal
    handleCloseDeleteModal();
  };
  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const data = [
    { id: 1, column1: '性別', column2: '男' },
    { id: 2, column1: '生年', column2: '38歳' },
    { id: 3, column1: '住まいの都道府県', column2: '東京都' },
    { id: 4, column1: '最終学歴', column2: '大学卒' },
    { id: 5, column1: '転職回数', column2: '3回' },
    { id: 6, column1: '現在の就業状況', column2: '就業している' },
    { id: 7, column1: '転職希望時期', column2: '3ヵ月以内' },
    { id: 8, column1: '経理の経験年数', column2: '6年以上' },
    { id: 9, column1: 'マスキングブ', column2: '株式会社ビジネスビジョン​' },
    { id: 10, column1: 'ロック会社名', column2: '株式会社ビクウィース' },
    // { id: 11, column1: '配偶者', column2: 'あり' },
    // { id: 12, column1: '扶養人数', column2: '2名' },
    { id: 11, column1: '語学スキル', column2: '英語：初級（日常会話は行えるが、複雑な会話は難しい)' },
    { id: 12, column1: '役職', column2: '課長クラス' },
    { id: 13, column1: '経験職種', column2: '経理' },
    { id: 14, column1: '業種', column2: 'IT​' },
    { id: 15, column1: '', column2: '商社（食品）' },
    { id: 16, column1: 'マネジメント経験', column2: 'あり' },
    { id: 17, column1: '経理の経験業務', column2: '' },
    { id: 18, column1: '企業カテゴリ', column2: '上場グループ' },
    { id: 19, column1: '（過去も含め）', column2: '上場グループ企業' },
    { id: 20, column1: '保有資格', column2: '日商簿記検定2級' },
    { id: 21, column1: '使用可能会計ソフト', column2: '勘定奉行​' },
    { id: 22, column1: '', column2: '弥生会計' },
    { id: 23, column1: '希望年収', column2: '500万円以上' },
    { id: 24, column1: '希望職種', column2: '経理' },
    { id: 25, column1: '希望役職', column2: '係長（マネージャー候補）​' },
    { id: 26, column1: '', column2: '係長（マネージャー候補）' },
    { id: 27, column1: '希望勤務地', column2: '東京都​' },
    { id: 28, column1: '（都道府県）', column2: '千葉県' },
    // Add more rows as needed
  ];

  function replaceAndRemoveRows(targetId, replaceId, removeId, data) {
    const targetIndex = data.findIndex((row) => row.id === targetId);
  
    if (targetIndex !== -1) {
      const replaceRow = data.find((row) => row.id === replaceId);
  
      if (replaceRow) {
        data[targetIndex].column1 = `${data[targetIndex].column1}\n${replaceRow.column1}`;
        data[targetIndex].column2 = `${data[targetIndex].column2}\n${replaceRow.column2}`;
        // Remove the row with removeId
        data.splice(data.findIndex((row) => row.id === removeId), 1);
      }
    }
  }
  
  // Replace and remove rows for id: 4, 5, 10
  replaceAndRemoveRows(9, 10, 10, data);
  replaceAndRemoveRows(16, 17, 17, data);
  replaceAndRemoveRows(20, 21, 21, data);
  replaceAndRemoveRows(23, 24, 24, data);
  // Repeat for id: 27, 28, 29, 30
  replaceAndRemoveRows(27, 28, 28, data);
  replaceAndRemoveRows(29, 30, 30, data);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const authKey = sessionStorage.getItem('authKey');
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('job_id', id);
    formData.append('message', message);

    try {
      const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/add_secret_entry`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful response
        handleOpenDeleteModal();
      } else {
        // Handle error response
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>求人情報</p>
        </div>
        <Box sx={{ width: 'auto', padding: '24px', background: 'rgb(250, 250, 250)', marginBottom: '100px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{width: '100%'}}>
              <Item sx={{textAlign: 'center'}}>
              提出書類の確認をお願いします
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{width: '100%', marginBottom: '20px', background: '#FFFFFF', marginLeft: '0', marginTop: '10px', height: '150px', borderRadius: '10px', border: '1px solid #EEEEEE', overflowY: 'auto'}}>
            <Grid item xs={12} style={{width: '100%', position: 'relative'}}>
              <Item>
                <Typography style={{textAlign: 'left', marginBottom: '20px'}}>メッセージ</Typography>
                <Typography style={{textAlign: 'left', margin: '10px 0'}}>{message}</Typography>
                {/* <Typography style={{textAlign: 'left', margin: '10px 0'}}>ID: {id}</Typography> */}
                {/* <Button component={Link} to={`/maskingapplication/${id}`} state={{ message }} style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '120px', display: 'flex', gap: '15px', position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
                  <PencilEdit />
                  <Typography variant='paragraph'>編集</Typography>
                </Button> */}
                <IconButton component={Link} to={`/maskingapplication/${id}`} state={{ message }} aria-label="edit" size="small" sx={{position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{background: '#FFFFFF', border: '1px solid #EEEEEE', borderRadius: '10px', width: '100%', marginLeft: '0', marginBottom: '20px', position: 'relative'}}>
            {/* <Grid item xs={4} style={{marginLeft: 'auto'}}>
              <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '70px', display: 'flex', gap: '15px'}}>
                  <PencilEdit />
                <Typography variant='paragraph'>編集</Typography>
              </Item>
            </Grid> */}
            <IconButton component={Link} to="/maskingresume" state={{ message }} aria-label="edit" size="small" sx={{position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
              <EditIcon fontSize="small" />
            </IconButton>
            <Grid item xs={12} style={{width: '100%', height: '250px', overflowY: 'auto'}}>
              <Item xs={{border: '1px solid #EEEEEE'}}>
              <TableContainer component={Paper} sx={{boxShadow: 'none', height: '250px'}}>
                <Table>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell sx={{color:'#16375A'}}>{row.column1.split('\n').map((line, index) => <div key={index}>{line}</div>)}</TableCell>
                        <TableCell sx={{width:'60%'}}>{row.column2.split('\n').map((line, index) => <div key={index}>{line}</div>)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </Item>
            </Grid>
          </Grid>
          <Grid container style={{width: '100%'}}>
            <Grid item xs={12} style={{width: '100%'}}>
            <Button onClick={handleFormSubmit} variant="contained" color="primary" sx={{ width: '100%', marginBottom: '20px' }}>匿名エントリー</Button>
            </Grid>
          </Grid>
        </Box>

        <Modal
              open={isDeleteModalOpen}
              onClose={handleCloseDeleteModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
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
                  <Cancel onClick={handleCloseDeleteModal} style={{position: 'absolute', right: '0', top: '0', padding: '10px'}} />
                  <SuccessMsg style={{marginBottom: '10px'}} />
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize: '14px'}}>
                    匿名エントリーが完了しました
                  </Typography>
                  {/* <Button onClick={handleDelete}>Delete</Button>
                  <Button onClick={handleCloseDeleteModal}>Cancel</Button> */}
              </Box>
        </Modal>
        
        <BottomNav />
      </>
    </ThemeProvider>
  );
}