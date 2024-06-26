import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BuildingMap} from '../assets/BuildingMap.svg';
import {ReactComponent as ChatBlue} from '../assets/ChatBlue.svg';
import {ReactComponent as ArrowRight} from '../assets/ArrowRight.svg';
import {ReactComponent as NoteIcon} from '../assets/NoteIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import BottomNav from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';
import { borderBottom } from '@mui/system';

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
  

export default function ProgressStepOne() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCardClick = (job) => {
   // Navigate to "/hello" on card click
   navigate(`/chat/${job.job_id}`);
 };

 useEffect(() => {
  const fetchJobData = async () => {
    try {
      // Retrieve the auth key from sessionStorage
      const authKey = sessionStorage.getItem('authKey');
      // Fetch data from the API
      const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/candidate_chat_list?auth_key=${authKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('API response data:', data);
      // Ensure data structure matches your API response
      const jobs = data?.candidate_chat_list || [];
      const filteredJobs = jobs.filter(job => job.chat_con_uid !== null);
      setJobData(filteredJobs);
    } catch (error) {
      console.error('There was an error fetching the job data!', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  fetchJobData();
}, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) :
      jobData.length > 0 ? (
        jobData.map((job, index) => (
          <Card
            key={index}
            sx={{ minWidth: 275, marginBottom: '20px', marginTop: '10px', boxShadow: 'none', border: '1px solid #EEEEEE', borderRadius: '10px' }}
            onClick={() => handleCardClick(job)}
          >
            <CardContent>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} style={{ marginBottom: '5px' }}>
                  <Grid item xs={6}>
                    <Item sx={{ textAlign: 'left', fontSize: '12px' }}>求人no: {job.job_code}</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item sx={{ fontSize: '12px', border: '1px solid #78D9D3', color: '#78D9D3', marginBottom: '5px' }}>未読​​</Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item sx={{ fontSize: '12px', background: 'rgba(216, 221, 227, 0.54)', marginBottom: '5px' }}>書類選考中</Item>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: '700', textAlign: 'left', padding: '0 8px' }}>
                {job.cjp_recruitment_catchphrase}
              </Typography>
              <Box sx={{ flexGrow: 1 }} style={{ marginTop: '10px', borderBottom: '1px solid #EEEEEE'}}>
                <Grid container spacing={1} sx={{ marginTop: '10px' }}>
                  <Grid item xs={6}>
                    <Item sx={{ textAlign: 'left', display: 'flex', gap: '5px', paddingTop: '0' }}>
                      <div><BuildingIcon /></div>
                      <Typography variant="body1" sx={{ fontSize: '12px', color: '#16375A', fontWeight: '500' }}>{job.cjp_company_name}</Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item sx={{ textAlign: 'left', display: 'flex', gap: '5px', paddingTop: '0' }}>
                      <div><MapsIcon /></div>
                      <Typography variant="body1" sx={{ fontSize: '12px', color: '#16375A', fontWeight: '500' }}>{job.cjp_location_city}</Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} sx={{marginTop:'10px'}}>
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
        ))
      ) : (
        <Typography variant="h6" component="div" sx={{ textAlign: 'center', padding: '20px' }}>
          No posts to show
        </Typography>
      )}

    <Grid sx={{marginBottom: '100px'}}>
    </Grid>  
    <BottomNav />
    </ThemeProvider>
  );
}