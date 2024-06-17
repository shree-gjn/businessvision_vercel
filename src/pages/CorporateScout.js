import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MessagesFilterGrid from '../components/MessagesFilterGrid';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as ChatIcon} from '../assets/ChatIcon.svg'; 

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
  

export default function CorporateScout() {
  const [jobpost, setjobpost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Retrieve the auth key from sessionStorage
    const authKey = sessionStorage.getItem('authKey');

    // Check if authKey is available
    if (!authKey) {
      console.error('Auth key not found in sessionStorage');
      setError('Auth key not found');
      setLoading(false);
      return;
    }

    setLoading(true); // Set loading to true when starting data fetching

    const fetchData = async () => {
      try {
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_corporate_scout?auth_key=${authKey}`);
        console.log('Fetching data...'); // Debugging log
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Data fetched:', data); // Debugging log
        if (Array.isArray(data.json_data)) {
          setjobpost(data.json_data);
        } else {
          setError('Fetched data is not an array');
        }
        // setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
        setLoading(false);
      } finally {
        setLoading(false); // Ensure loading is set to false in all cases
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={4} sx={{margin:'10px 0px 10px 0px'}}>
            <MessagesFilterGrid style={{width: '100%'}} />
          </Grid>
          <Grid item xs={8} sx={{textAlign:'end', marginTop:'10px', fontSize: '14px'}}>
            {/* 15 件中 1 ～ 5 件 */}  {jobpost.length} 件中 1 ～ {jobpost.length} 件
          </Grid>
        </Grid>
        

      {loading ? (
        // Render loading indicator here
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : jobpost.length === 0 ? (
        // Render "No posts to show" message when jobpost is empty
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <Typography variant="h6">No posts to show</Typography>
        </Box>
      ) : (
        jobpost.map(job => (
          <div style={{background:'#FFF', marginBottom:'20px', border: '1px solid #EEEEEE', borderRadius: '10px'}}>
          <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none'}} component={Link} to={`/recruitment/${job.cjp_id}`}>
            <CardContent>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1} style={{paddingBottom: '10px'}}>
                  <Grid item xs={4}>
                  <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: {job.cjp_job_code}</Item>
                  </Grid>
                  <Grid item xs={3} style={{paddingLeft: '0'}}>
                  <Item sx={{textAlign:'center', fontSize:'11px', backgroundColor: '#E2EBF2'}}>書類選考案内</Item>
                  </Grid>
                  <Grid item xs={2}>
                  <Item sx={{fontSize:'12px'}}>未読​</Item>
                  </Grid>
                  <Grid item xs={3}>
                  <Item sx={{fontSize:'11px'}}>{job.cjp_created_at}</Item>
                  </Grid>
              </Grid>
              </Box>
              <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left'}}>
               {job.cjp_recruitment_background}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1} sx={{marginTop:'10px'}}>
                  <Grid item xs={6}>
                  <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                    <span><BuildingIcon /> </span><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {job.cjp_company_name} </Typography>​</Item>
                  </Grid>
                  <Grid item xs={6} sx={{paddingTop:'0px'}}>
                  <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                    <span><BagIcon /> </span><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
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
                    <Button component={Link} to="#" variant="contained" color="grey" sx={{width:'90%', marginBottom:'20px', color: '#fff'}}> 気になる済 </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button component={Link} to="/messages/scout" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
                  </Grid>
              </Grid>
              </Box>
            </CardActions>
          </Card>
        </div>
        ))
      )}

      <Grid sx={{marginBottom: '100px'}}>
      </Grid>  

      </>
    </ThemeProvider>
  );
}