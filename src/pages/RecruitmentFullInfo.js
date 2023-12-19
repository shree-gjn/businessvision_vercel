import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom'; 
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as MoneyIcon} from '../assets/MoneyIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BagBrownIcon} from '../assets/BagBrownIcon.svg';
import {ReactComponent as TickBrown} from '../assets/TickBrown.svg';
import {ReactComponent as BuildingBrownIcon} from '../assets/BuildingBrownIcon.svg'; 
import {ReactComponent as TrashIcon} from '../assets/TrashIcon.svg';
import {ReactComponent as UserFolder} from '../assets/UserFolder.svg';
import BottomNav from '../components/BottomNav';

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
    paddingLeft:'10px',
    marginTop:'10px',
    marginBottom:'8px',
  }));

export default function RecruitmentFullInfo() {
  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <>
      <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
      <Box sx={{ flexGrow: 1 , padding:'10px', overflow:'scroll'}}>
          <Grid container spacing={1}>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
              </Grid>
              <Grid item xs={2}>
              <Item sx={{fontSize:'12px'}}>未読​</Item>
              </Grid>
              <Grid item xs={4}>
              <Item sx={{fontSize:'12px'}}>10-08-2023</Item>
              </Grid>
          </Grid>
          </Box>
          <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left', padding:'0px 15px 0px 15px'}}>
          【渋谷/プライム上場】SaaS/ASPのパイオニア企業での経理マネージャー/リモート有
          </Typography>
          <Box sx={{ flexGrow: 1, padding:'0px 10px 0px 15px' }}>
          <Grid container spacing={1}>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
              <MoneyIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 700万円 ~900万円 </Typography>
              </Item>
              </Grid>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                <MapsIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>東京都</Typography>​</Item>
              </Grid>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <BuildingIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 株式会社ABC </Typography>​</Item>
              </Grid>
              <Grid item xs={4} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <BagIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
              </Grid>
              <Grid item xs={2} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <TrashIcon />​</Item>
              </Grid>
          </Grid>
          </Box>
      <Card sx={{ minWidth: 275, marginBottom:'30px' }}>
        <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><UserFolder style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>基本情報​</Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
                  <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
       
          </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><UserFolder style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>基本情報​</Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
                  <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
       
          </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><UserFolder style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>基本情報​</Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
                  <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
       
          </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1, marginBottom:'20px' }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><UserFolder style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>基本情報​</Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
                  <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
       
          </Grid>
          </Box>
        </CardContent>
      </Card>
      <BottomNav />
  </>
  );
}