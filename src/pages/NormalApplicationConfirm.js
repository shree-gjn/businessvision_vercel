import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Link, useNavigate } from 'react-router-dom'; 
import BottomNav from '../components/BottomNav';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
import {ReactComponent as Cancel} from '../assets/Cancel.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

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

export default function NormalApplicationConfirm() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
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
    { id: 11, column1: '配偶者', column2: 'あり' },
    { id: 12, column1: '扶養人数', column2: '2名' },
    { id: 13, column1: '語学スキル', column2: '英語：初級（日常会話は行えるが、複雑な会話は難しい)' },
    { id: 14, column1: '役職', column2: '課長クラス' },
    { id: 15, column1: '経験職種', column2: '経理' },
    { id: 16, column1: '業種', column2: 'IT​' },
    { id: 17, column1: '', column2: '商社（食品）' },
    { id: 18, column1: 'マネジメント経験', column2: 'あり' },
    { id: 19, column1: '経理の経験業務', column2: '' },
    { id: 20, column1: '企業カテゴリ', column2: '上場グループ' },
    { id: 21, column1: '（過去も含め）', column2: '上場グループ企業' },
    { id: 22, column1: '保有資格', column2: '日商簿記検定2級' },
    { id: 23, column1: '使用可能会計ソフト', column2: '勘定奉行​' },
    { id: 24, column1: '', column2: '弥生会計' },
    { id: 25, column1: '希望年収', column2: '500万円以上' },
    { id: 26, column1: '希望職種', column2: '経理' },
    { id: 27, column1: '希望役職', column2: '係長（マネージャー候補）​' },
    { id: 28, column1: '', column2: '係長（マネージャー候補）' },
    { id: 29, column1: '希望勤務地', column2: '東京都​' },
    { id: 30, column1: '（都道府県）', column2: '千葉県' },
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
              <Item sx={{textAlign: 'center', background: 'transparent'}}>
              提出書類の確認をお願いします
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{width: '100%', marginBottom: '20px', background: '#FFFFFF', marginLeft: '0', marginTop: '10px', height: '120px', borderRadius: '10px', border: '1px solid #EEEEEE'}}>
            <Grid item xs={8} style={{width: '100%'}}>
              <Item style={{textAlign: 'left'}}>メッセージ</Item>
            </Grid>
            <Grid item xs={4}>
              <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '70px', display: 'flex', gap: '15px'}}>
                <span>
                  <PencilEdit />
                </span>
                <Typography variant='paragraph'>編集</Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{background: '#FFFFFF', border: '1px solid #EEEEEE', borderRadius: '10px', width: '100%', marginLeft: '0', marginBottom: '20px'}}>
            <Grid item xs={4} style={{marginLeft: 'auto'}}>
              <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '70px', display: 'flex', gap: '15px'}}>
                <span>
                  <PencilEdit />
                </span>
                <Typography variant='paragraph'>編集</Typography>
              </Item>
            </Grid>
            <Grid item xs={12} style={{width: '100%', height: '120px', overflowY: 'auto', padding: '0'}}>
              <Item xs={{border: '1px solid #EEEEEE', height: '120px'}}>
                <Typography variant="h6" component="h6" sx={{marginBottom:'10px'}}> 履歴書 </Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>基本情報</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 氏名 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> フリガナ </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 生年月日 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 性別 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 現住所 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 電話番号 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 携帯電話番号 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> メールアドレス </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 連絡先 （現住所以外に連絡を希望する場合のみ記入） </Typography> 
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>学歴</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 学校  1 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 入学年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 卒業年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 学校名 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 学校  2 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 入学年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 卒業年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 学校名 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>職歴</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 職歴  1 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 退社年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 会社名 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 学校  2 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 退社年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 会社名 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography>賞罰</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography>免許・資格</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>その他情報</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 通勤時間 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 最寄り駅 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 扶養家族（配偶者を除く） </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 配偶者 有・無 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 配偶者の扶養義務 有・無 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography>趣味特技</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                  >
                    <Typography>志望の動機・自己PRなど</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8a-content"
                    id="panel8a-header"
                  >
                    <Typography>本人希望記入欄（給与・職種・勤務時間・その他についての希望などがあれば記入）</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={1} style={{background: '#FFFFFF', border: '1px solid #EEEEEE', borderRadius: '10px', width: '100%', marginLeft: '0', marginBottom: '20px'}}>
            <Grid item xs={4} style={{marginLeft: 'auto'}}>
              <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '60px', display: 'flex', gap: '15px'}}>
                <span>
                  <PencilEdit />
                </span>
                <Typography variant='paragraph'>編集</Typography>
              </Item>
            </Grid>
            <Grid item xs={12} style={{width: '100%', height: '120px', overflowY: 'auto', padding: '0'}}>
              <Item xs={{border: '1px solid #EEEEEE', height: '120px'}}>
              <Typography variant="h6" component="h6" sx={{marginTop:'10px', marginBottom:'10px'}}> 職務経歴書 </Typography>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>氏名</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 氏名 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>職務要約</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 職務要約 </Typography> <Divider />
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>職務経歴</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 所属期間 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 会社名 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 事業内容 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 資本金 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 売上高 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 従業員数 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 企業カテゴリ </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 業務内容 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 所属部門・ポジション </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 部門・業務別での所属期間 </Typography> <Divider />
                    <Typography sx={{margin:'6px'}}> 所属部門人数 </Typography> 
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                  >
                    <Typography>活かせる経験・知識・技術</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 活かせる経験・知識・技術 </Typography> 
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                  >
                    <Typography>資格</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> 
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>PCスキル</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> 
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6a-content"
                    id="panel6a-header"
                  >
                    <Typography>使用可能会計ツール</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> 
                  </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7a-content"
                    id="panel7a-header"
                  >
                    <Typography>自己PR</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
                  <div>
                    <Divider />
                    <Typography sx={{margin:'6px'}}> 項目 </Typography> 
                  </div>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
          </Grid>
          <Grid container style={{width: '100%'}}>
            <Grid item xs={12} style={{width: '100%'}}>
            <Button onClick={handleOpenDeleteModal} component={Link} to="" variant="contained" color="secondary" sx={{ width: '100%', marginBottom: '20px' }}>書類選考応募</Button>
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
                  width: 300,
                  bgcolor: 'background.paper',
                  borderRadius: '20px',
                  boxShadow: 24,
                  textAlign: 'center',
                  p: 4,
              }}>
                  <Cancel onClick={handleCloseDeleteModal} style={{position: 'absolute', right: '0', top: '0', padding: '10px'}} />
                  <SuccessMsg style={{marginBottom: '10px'}} />
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize: '14px'}}>
                    書類選考エントリーンが完了しました
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