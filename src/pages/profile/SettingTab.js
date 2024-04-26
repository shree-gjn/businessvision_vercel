import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import {ReactComponent as ArrowRight} from './profileAsset/ArrowRight.svg';
import {ReactComponent as Logout} from './profileAsset/LogOut.svg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));

const SettingTab = () => {
  return (
    <>
      
      <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'20px', borderRadius:'0px', boxShadow: 'none'}}>
      <CardContent sx={{padding:'0px', paddingBottom:'0px !important'}}>
      <Link to="/maskingresume" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
            <Item sx={{textAlign:'left', marginLeft:'10px'}}>マスキング履歴書の設定</Item>
            </Grid>
            <Grid item xs={2} sx={{marginTop:'6px'}}>
              <ArrowRight />
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="/recommendedjob" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>おすすめ求人 設定</Item>
            </Grid>
            <Grid item xs={2} sx={{marginTop:'6px'}}>
              <ArrowRight />
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="#" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1, padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>利用停止・退会の手続き</Item>
            </Grid>
            <Grid item xs={2} sx={{marginTop:'6px'}}>
              <ArrowRight />
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="/emaildelivery" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>メール配信設定</Item>
            </Grid>
            <Grid item xs={2} sx={{marginTop:'6px'}}>
              <ArrowRight />
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="/terms" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>利用規約</Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="/privacy" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>プライバシーポリシー​</Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="/inquiry" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>お問い合わせ</Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="/changememberid" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>会員ID（メールアドレス）を変更する</Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="#" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>企業ブロック設定</Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="/changepassword" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>パスワードを変更する</Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Divider />
        <Link to="#" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , padding:'10px'}}>
        <Grid container spacing={1}>
            <Grid item xs={10}>
              <Item sx={{textAlign:'left', marginLeft:'10px'}}>ログアウト</Item>
            </Grid>
            <Grid item xs={2} sx={{marginTop:'6px'}}>
              <Logout />
            </Grid>
        </Grid>
        </Box>
        </Link>
      </CardContent>
    </Card>
    
    
    </>
  );
};

export default SettingTab;
