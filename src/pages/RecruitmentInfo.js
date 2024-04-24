import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import FilterGrid from '../components/FilterGrid';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {ReactComponent as MoneyIcon} from '../assets/MoneyIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BagBrownIcon} from '../assets/BagBrownIcon.svg';
import {ReactComponent as TickBrown} from '../assets/TickBrown.svg';
import {ReactComponent as BuildingBrownIcon} from '../assets/BuildingBrownIcon.svg'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#16375A',
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

  

export default function RecruitmentInfo() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8} sx={{margin:'10px 0px 10px 0px', display: 'flex', justifyContent: 'space-between'}}>
            <FilterGrid />
            <Button component={Link} to="/recommendedjob" variant="contained" color="primary">
              おすすめ設定
            </Button>
          </Grid>
          <Grid item xs={4} sx={{textAlign:'end', marginTop:'10px', fontSize: '14px'}}>
            45 件中 1 ～ 5 件
          </Grid>
        </Grid>
      <Card sx={{ minWidth: 275, marginBottom:'30px' }}>
        <CardContent>
          <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to="/recruitment">
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
          <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left'}}>
          【渋谷/プライム上場】SaaS/ASPのパイオニア企業での経理マネージャー/リモート有
          </Typography>
          <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to="/recruitment">
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
              <Grid item xs={6} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <BagIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
              </Grid>
          </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to="/recruitment">
          <Grid container spacing={1}>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><BagBrownIcon style={{margin:'0 auto'}}/>仕事内容</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>グループ全社の月次・四半期・年次含むIFRS会計関連の業務に取り組むマネージャー。​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><TickBrown style={{margin:'0 auto'}}/>対応資格</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>連結決算（IFRS）の経験 <br /> マネジメント経験​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><BuildingBrownIcon style={{margin:'0 auto'}}/>会社概要</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東証プライム上場の、<br />SaaS/ASPのパイオニア企業​</Item>
              </Grid>
          </Grid>
          </Box>
        </CardContent>
        <CardActions>
        <Box sx={{ flexGrow: 1 , textDecoration:'none'}} component={Link} to="/recruitment">
          <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button className='favorite_button' component={Link} to="#" variant="contained" color="grey" sx={{width:'90%', marginBottom:'20px', color: '#fff'}}> 気になる済 </Button>
              </Grid>
              <Grid item xs={6}>
                <Button component={Link} to="/recruitment" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
              </Grid>
          </Grid>
          </Box>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275, marginBottom:'30px' }}>
        <CardContent>
          <Box sx={{ flexGrow: 1 , textDecoration:'none'}} component={Link} to="/recruitment">
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
          <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left'}}>
          【渋谷/プライム上場】SaaS/ASPのパイオニア企業での経理マネージャー/リモート有
          </Typography>
          <Box sx={{ flexGrow: 1 , textDecoration:'none'}} component={Link} to="/recruitment">
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
              <Grid item xs={6} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <BagIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
              </Grid>
          </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to="/recruitment">
          <Grid container spacing={1}>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><BagBrownIcon style={{margin:'0 auto'}}/>仕事内容</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>グループ全社の月次・四半期・年次含むIFRS会計関連の業務に取り組むマネージャー。​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><TickBrown style={{margin:'0 auto'}}/>対応資格</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>連結決算（IFRS）の経験 <br /> マネジメント経験​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><BuildingBrownIcon style={{margin:'0 auto'}}/>会社概要</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東証プライム上場の、<br />SaaS/ASPのパイオニア企業​</Item>
              </Grid>
          </Grid>
          </Box>
        </CardContent>
        <CardActions>
        <Box sx={{ flexGrow: 1 }} component={Link} to="/recruitment">
          <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button className='favorite_button' component={Link} to="#" variant="contained" color="grey" sx={{width:'90%', marginBottom:'20px', color: '#fff'}}> 気になる済 </Button>
              </Grid>
              <Grid item xs={6}>
                <Button component={Link} to="/recruitment" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
              </Grid>
          </Grid>
          </Box>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275, marginBottom:'100px' }}>
        <CardContent>
          <Box sx={{ flexGrow: 1 , textDecoration:'none'}} component={Link} to="/recruitment">
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
          <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left'}}>
          【渋谷/プライム上場】SaaS/ASPのパイオニア企業での経理マネージャー/リモート有
          </Typography>
          <Box sx={{ flexGrow: 1 , textDecoration:'none'}} component={Link} to="/recruitment">
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
              <Grid item xs={6} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <BagIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
              </Grid>
          </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to="/recruitment">
          <Grid container spacing={1}>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><BagBrownIcon style={{margin:'0 auto'}}/>仕事内容</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>グループ全社の月次・四半期・年次含むIFRS会計関連の業務に取り組むマネージャー。​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><TickBrown style={{margin:'0 auto'}}/>対応資格</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>連結決算（IFRS）の経験 <br /> マネジメント経験​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px'}}><BuildingBrownIcon style={{margin:'0 auto'}}/>会社概要</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東証プライム上場の、<br />SaaS/ASPのパイオニア企業​</Item>
              </Grid>
          </Grid>
          </Box>
        </CardContent>
        <CardActions>
        <Box sx={{ flexGrow: 1 }} component={Link} to="/recruitment">
          <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button className='favorite_button' component={Link} to="#" variant="contained" color="grey" sx={{width:'90%', marginBottom:'20px', color: '#fff'}}> 気になる済 </Button>
              </Grid>
              <Grid item xs={6}>
                <Button component={Link} to="/recruitment" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
              </Grid>
          </Grid>
          </Box>
        </CardActions>
      </Card>
    </>
    </ThemeProvider>
  );
}