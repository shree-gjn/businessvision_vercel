import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SecretFilterGrid from '../components/SecretFilterGrid';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));
  

export default function SecretEntry() {
  return (
    <>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4} sx={{margin:'10px 0px 10px 0px'}}>
        <SecretFilterGrid />
      </Grid>
      <Grid item xs={8} sx={{textAlign:'end', marginTop:'10px'}}>
      </Grid>
    </Grid>

    <div style={{background:'#FFF', marginBottom:'20px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>応募済み</Item>
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
      </CardContent>
    </Card>
    </div>

    <div style={{background:'#FFF', marginBottom:'20px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>応募済み</Item>
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
      </CardContent>
    </Card>
    </div>

    <div style={{background:'#FFF', marginBottom:'20px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>応募済み</Item>
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
      </CardContent>
    </Card>
    </div>

    <div style={{background:'#FFF', marginBottom:'20px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>応募済み</Item>
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
      </CardContent>
    </Card>
    </div>

    <div style={{background:'#FFF', marginBottom:'20px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>応募済み</Item>
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
      </CardContent>
    </Card>
    </div>
  </>
  );
}