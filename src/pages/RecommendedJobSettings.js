import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, RadioGroup, Radio, 
  FormControl, FormControlLabel, Typography, Button} from '@mui/material';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import { width } from '@mui/system';

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

const RecommendedJobSettings = () => {

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const data = [
    { id: 1, column1: '生まれ年', column2: '1999年' },
    { id: 2, column1: '最終学歴', column2: '大学卒' },
    { id: 3, column1: '会計の経験年数', column2: '3年' },
    { id: 4, column1: '経験職種', column2: '経理' },
    { id: 5, column1: '経験業種', column2: 'IT' },
    { id: 6, column1: '', column2: '商社（食品）' },
    { id: 7, column1: '希望する会社のカテゴリ', column2: '上場企業' },
    { id: 8, column1: '希望の従業員規模', column2: '101～500名' },
    { id: 9, column1: '希望業種', column2: 'IT' },
    { id: 10, column1: '希望勤務地（都道府県）', column2: '東京都' },
    { id: 11, column1: '希望する年収', column2: '500万円以上' },
    { id: 12, column1: '希望ポジション', column2: ' 課長（マネージャー）' },
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
  replaceAndRemoveRows(5, 6, 6, data);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
      <p>おすすめ求人設定</p>
    </div>
    <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
    {/* <TableContainer component={Paper} sx={{marginBottom:'200px'}}>
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
    </TableContainer> */}

    <div style={{padding: '24px'}}>
      <div style={{border: '1px solid #e6e6e6', borderRadius: '5px'}}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{background:'#F2F2F2'}}>年収幅おすすめ設定</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{background:'#fff'}}>業種おすすめ設定</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{background:'#F2F2F2'}}>企業カテゴリおすすめ設定</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{background:'#fff'}}>従業員規模おすすめ設定</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{background:'#F2F2F2'}}>経理スキルおすすめ設定</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
          // value={gender}
          // onChange={handleGenderChange}
          style={{padding: '10px', textAlign: 'center', display: 'block'}}
        >
          <FormControlLabel value="希望通り" control={<Radio />} label="希望通り" />
          <FormControlLabel value="少し広め" control={<Radio />} label="少し広め" />
        </RadioGroup>
      </div>
      <div style={{padding: '20px 0', display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="paragraph" component="div" sx={{padding: '10px 0 10px 0', textAlign: 'left'}}> 詳細おすすめ設定 (カスタマイズ) </Typography>
        <div style={{padding: '10px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '80px'}}>
          <span>
            <PencilEdit style={{width: '40px'}} />
          </span>
          <Typography variant='paragraph'>編集</Typography>
        </div>
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>変更内容を保存</Button>
    </div>
    <BottomNav />
  </Box>
  );
};

export default RecommendedJobSettings;
