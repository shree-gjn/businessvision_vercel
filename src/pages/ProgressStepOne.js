import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BuildingMap} from '../assets/BuildingMap.svg';
import {ReactComponent as ChatBlue} from '../assets/ChatBlue.svg';
import {ReactComponent as ArrowRight} from '../assets/ArrowRight.svg';
import {ReactComponent as NoteIcon} from '../assets/NoteIcon.svg';
import BottomNav from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));
  

export default function ProgressStepOne() {
  const navigate = useNavigate();

  const handleCardClick = () => {
   // Navigate to "/hello" on card click
   navigate('/fullprogress');
 };

  return (
    <>
    <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'10px' }} onClick={handleCardClick}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            <Item sx={{fontSize:'12px', border:'1px solid #78D9D3', color:'#78D9D3', marginBottom:'5px'}}>未読​</Item>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>​書類選考中</Item>
            </Grid>
        </Grid>
        </Box>
        <Typography variant="h6" component="div" sx={{fontSize:'12px', fontWeight:'700', textAlign:'left'}}>
        【渋谷/プライム上場】SaaS/ASPのパイオニア企業
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{borderBottom: '1px solid #EEEEEE', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={4}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <BagIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 株式会社ABC </Typography>​</Item>
            </Grid>
            <Grid item xs={5} sx={{paddingTop:'0px'}}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <NoteIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={2}>
              <BuildingMap /> 
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> 株式会社ABC </Typography>​
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1" sx={{fontSize:'8px', color:'#949494', fontWeight:'500'}}> 11月12日 </Typography>​
            </Grid>
            <Grid item xs={2}>
              <ChatBlue /> 
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> ご応募ありがとうございます。〇〇様。 </Typography>​
            </Grid>
            <Grid item xs={1}>
              <ArrowRight />​
            </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'10px' }} onClick={handleCardClick}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            <Item sx={{fontSize:'12px', border:'1px solid #78D9D3', color:'#78D9D3', marginBottom:'5px'}}>未読​</Item>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(219, 245, 251, 0.54)', marginBottom:'5px'}}>選考終了</Item>
            </Grid>
        </Grid>
        </Box>
        <Typography variant="h6" component="div" sx={{fontSize:'12px', fontWeight:'700', textAlign:'left'}}>
        【渋谷/プライム上場】SaaS/ASPのパイオニア企業
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{borderBottom: '1px solid #EEEEEE', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={4}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <BagIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 株式会社ABC </Typography>​</Item>
            </Grid>
            <Grid item xs={5} sx={{paddingTop:'0px'}}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <NoteIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={2}>
              <BuildingMap /> 
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> 株式会社ABC </Typography>​
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1" sx={{fontSize:'8px', color:'#949494', fontWeight:'500'}}> 11月12日 </Typography>​
            </Grid>
            <Grid item xs={2}>
              <ChatBlue /> 
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> ご応募ありがとうございます。〇〇様。 </Typography>​
            </Grid>
            <Grid item xs={1}>
              <ArrowRight />​
            </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'10px' }} onClick={handleCardClick}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>​書類選考中</Item>
            </Grid>
        </Grid>
        </Box>
        <Typography variant="h6" component="div" sx={{fontSize:'12px', fontWeight:'700', textAlign:'left'}}>
        【渋谷/プライム上場】SaaS/ASPのパイオニア企業
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{borderBottom: '1px solid #EEEEEE', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={4}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <BagIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 株式会社ABC </Typography>​</Item>
            </Grid>
            <Grid item xs={5} sx={{paddingTop:'0px'}}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <NoteIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={2}>
              <BuildingMap /> 
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> 株式会社ABC </Typography>​
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1" sx={{fontSize:'8px', color:'#949494', fontWeight:'500'}}> 11月12日 </Typography>​
            </Grid>
            <Grid item xs={2}>
              <ChatBlue /> 
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> ご応募ありがとうございます。〇〇様。 </Typography>​
            </Grid>
            <Grid item xs={1}>
              <ArrowRight />​
            </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'10px' }} onClick={handleCardClick}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(219, 245, 251, 0.54)', marginBottom:'5px'}}>選考終了</Item>
            </Grid>
        </Grid>
        </Box>
        <Typography variant="h6" component="div" sx={{fontSize:'12px', fontWeight:'700', textAlign:'left'}}>
        【渋谷/プライム上場】SaaS/ASPのパイオニア企業
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{borderBottom: '1px solid #EEEEEE', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={4}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <BagIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 株式会社ABC </Typography>​</Item>
            </Grid>
            <Grid item xs={5} sx={{paddingTop:'0px'}}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <NoteIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={2}>
              <BuildingMap /> 
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> 株式会社ABC </Typography>​
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1" sx={{fontSize:'8px', color:'#949494', fontWeight:'500'}}> 11月12日 </Typography>​
            </Grid>
            <Grid item xs={2}>
              <ChatBlue /> 
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> ご応募ありがとうございます。〇〇様。 </Typography>​
            </Grid>
            <Grid item xs={1}>
              <ArrowRight />​
            </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'10px' }} onClick={handleCardClick}>
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'5px'}}>書類選考中</Item>
            </Grid>
        </Grid>
        </Box>
        <Typography variant="h6" component="div" sx={{fontSize:'12px', fontWeight:'700', textAlign:'left'}}>
        【渋谷/プライム上場】SaaS/ASPのパイオニア企業
        </Typography>
        <Box sx={{ flexGrow: 1 }} style={{borderBottom: '1px solid #EEEEEE', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={4}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <BagIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 株式会社ABC </Typography>​</Item>
            </Grid>
            <Grid item xs={5} sx={{paddingTop:'0px'}}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <NoteIcon /> <Typography variant="body1" sx={{fontSize:'8px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} sx={{marginTop:'10px'}}>
            <Grid item xs={2}>
              <BuildingMap /> 
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> 株式会社ABC </Typography>​
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1" sx={{fontSize:'8px', color:'#949494', fontWeight:'500'}}> 11月12日 </Typography>​
            </Grid>
            <Grid item xs={2}>
              <ChatBlue /> 
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500', textAlign:'left', paddingLeft:'0px'}}> ご応募ありがとうございます。〇〇様。 </Typography>​
            </Grid>
            <Grid item xs={1}>
              <ArrowRight />​
            </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>

    <>
    <BottomNav />
    </>
  </>
  );
}