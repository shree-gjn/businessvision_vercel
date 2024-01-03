import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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
    <TableContainer component={Paper} sx={{marginBottom:'200px'}}>
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
    <BottomNav />
  </Box>
  );
};

export default RecommendedJobSettings;
