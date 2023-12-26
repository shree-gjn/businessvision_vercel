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
import { Link } from 'react-router-dom';
import {ReactComponent as MoneyIcon} from '../assets/MoneyIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BagBrownIcon} from '../assets/BagBrownIcon.svg';
import {ReactComponent as TickBrown} from '../assets/TickBrown.svg';
import {ReactComponent as BuildingBrownIcon} from '../assets/BuildingBrownIcon.svg';
import {ReactComponent as ChatIcon} from '../assets/ChatIcon.svg'; 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));
  

export default function CorporateScout() {
  return (
    <>
    <Card sx={{ minWidth: 275, marginBottom:'30px' }}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
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
        <Box sx={{ flexGrow: 1 }} style={{background:'#DFD0A7', borderRadius:'5px', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{paddingTop:'0px'}}> 
            <Grid item xs={1}>
            <Item sx={{textAlign:'left', display:'grid', background:'#DFD0A7', borderRadius:'5px'}}><ChatIcon style={{marginTop:'10px', marginLeft:'3px'}}/></Item>
            </Grid>
            <Grid item xs={11}>
            <Item sx={{fontSize:'12px', textAlign:'left', background: 'rgba(223, 208, 167, 0.20)', padding:'13px', fontSize:'8px' }}>【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。
今までのご経験をぜひ、弊社で活かしてみませんか？
ご応募お待ちしております。​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button component={Link} to="#" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 気になる </Button>
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
        <Box sx={{ flexGrow: 1 }}>
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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
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
        <Box sx={{ flexGrow: 1 }} style={{background:'#DFD0A7', borderRadius:'5px', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{paddingTop:'0px'}}> 
            <Grid item xs={1}>
            <Item sx={{textAlign:'left', display:'grid', background:'#DFD0A7', borderRadius:'5px'}}><ChatIcon style={{marginTop:'10px', marginLeft:'3px'}}/></Item>
            </Grid>
            <Grid item xs={11}>
            <Item sx={{fontSize:'12px', textAlign:'left', background: 'rgba(223, 208, 167, 0.20)', padding:'13px', fontSize:'8px' }}>【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。
今までのご経験をぜひ、弊社で活かしてみませんか？
ご応募お待ちしております。​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button component={Link} to="#" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 気になる </Button>
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
        <Box sx={{ flexGrow: 1 }}>
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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
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
        <Box sx={{ flexGrow: 1 }} style={{background:'#DFD0A7', borderRadius:'5px', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{paddingTop:'0px'}}> 
            <Grid item xs={1}>
            <Item sx={{textAlign:'left', display:'grid', background:'#DFD0A7', borderRadius:'5px'}}><ChatIcon style={{marginTop:'10px', marginLeft:'3px'}}/></Item>
            </Grid>
            <Grid item xs={11}>
            <Item sx={{fontSize:'12px', textAlign:'left', background: 'rgba(223, 208, 167, 0.20)', padding:'13px', fontSize:'8px' }}>【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。
今までのご経験をぜひ、弊社で活かしてみませんか？
ご応募お待ちしております。​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button component={Link} to="#" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 気になる </Button>
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
        <Box sx={{ flexGrow: 1 }}>
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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
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
        <Box sx={{ flexGrow: 1 }} style={{background:'#DFD0A7', borderRadius:'5px', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{paddingTop:'0px'}}> 
            <Grid item xs={1}>
            <Item sx={{textAlign:'left', display:'grid', background:'#DFD0A7', borderRadius:'5px'}}><ChatIcon style={{marginTop:'10px', marginLeft:'3px'}}/></Item>
            </Grid>
            <Grid item xs={11}>
            <Item sx={{fontSize:'12px', textAlign:'left', background: 'rgba(223, 208, 167, 0.20)', padding:'13px', fontSize:'8px' }}>【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。
今までのご経験をぜひ、弊社で活かしてみませんか？
ご応募お待ちしております。​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button component={Link} to="#" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 気になる </Button>
            </Grid>
            <Grid item xs={6}>
              <Button component={Link} to="/scout" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
            </Grid>
        </Grid>
        </Box>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 275, marginBottom:'30px' }}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
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
        <Box sx={{ flexGrow: 1 }} style={{background:'#DFD0A7', borderRadius:'5px', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{paddingTop:'0px'}}> 
            <Grid item xs={1}>
            <Item sx={{textAlign:'left', display:'grid', background:'#DFD0A7', borderRadius:'5px'}}><ChatIcon style={{marginTop:'10px', marginLeft:'3px'}}/></Item>
            </Grid>
            <Grid item xs={11}>
            <Item sx={{fontSize:'12px', textAlign:'left', background: 'rgba(223, 208, 167, 0.20)', padding:'13px', fontSize:'8px' }}>【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。
今までのご経験をぜひ、弊社で活かしてみませんか？
ご応募お待ちしております。​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button component={Link} to="#" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 気になる </Button>
            </Grid>
            <Grid item xs={6}>
              <Button component={Link} to="/scout" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
            </Grid>
        </Grid>
        </Box>
      </CardActions>
    </Card>
  </>
  );
}