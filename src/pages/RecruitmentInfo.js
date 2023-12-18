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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
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
        <Grid container spacing={1}>
            <Grid item xs={6}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
            </Grid>
            <Grid item xs={6}>
            <Item sx={{fontSize:'12px'}}>未読​</Item>
            </Grid>
            <Grid item xs={6}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
            </Grid>
            <Grid item xs={6}>
            <Item sx={{fontSize:'12px'}}>未読​</Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={3}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{fontSize:'12px'}}>未読​</Item>
            </Grid>
            <Grid item xs={3}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{fontSize:'12px'}}>未読​</Item>
            </Grid>
            <Grid item xs={3}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{fontSize:'12px'}}>未読​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardContent>
      <CardActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
            </Grid>
            <Grid item xs={6}>
            <Item sx={{fontSize:'12px'}}>未読​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardActions>
    </Card>
  );
}