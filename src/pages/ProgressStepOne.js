import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
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
import { CardActions } from '@mui/material';

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
  const [favState, setFavState] = useState(false);
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
      
      // // Load favState from localStorage
      // const storedFavState = JSON.parse(localStorage.getItem('favState')) || {};
      // setFavState(storedFavState);
    } catch (error) {
      console.error('There was an error fetching the job data!', error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  fetchJobData();
}, []);

const handleFavClick = async (jobId) => {
  try {
    // Toggle local state
    setFavState(prevFavState => {
      const newFavState = {
        ...prevFavState,
        [jobId]: !prevFavState[jobId]
      };

      // Save new state to sessionStorage
      localStorage.setItem('favState', JSON.stringify(newFavState));

      return newFavState;
    });

    // Perform API call to update favorite status
    const authKey = localStorage.getItem('authKey');
    if (!authKey) {
      console.error('Auth key not found in sessionStorage');
      return;
    }

    const newFavState = !favState[jobId];
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('job_id', jobId);
    formData.append('company_job_post_id', jobId);
    formData.append('favorite', newFavState);

    const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/add_favourite_job_to_candidate`, {
      method: 'POST',
      headers: {},
      body: formData,
    });

    if (!response.ok) {
      // Revert local state on failure
      setFavState(prevFavState => {
        const revertedFavState = {
          ...prevFavState,
          [jobId]: !prevFavState[jobId]
        };
        sessionStorage.setItem('favState', JSON.stringify(revertedFavState));
        return revertedFavState;
      });
      throw new Error('Failed to update favorite status');
    }

    // Update favState based on API response
    const data = await response.json();
    setFavState((prevStates) => {
      const updatedFavState = {
        ...prevStates,
        [jobId]: newFavState,
      };
      sessionStorage.setItem('favState', JSON.stringify(updatedFavState));
      return updatedFavState;
    });

    console.log('Response Data:', data);
  } catch (error) {
    console.error('Error updating favorite status:', error.message);
  }
};

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
          >
            <CardContent onClick={() => handleCardClick(job)}>
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
              <Box sx={{ flexGrow: 1 }} style={{background:'#DFD0A7', borderRadius:'5px', marginTop:'10px'}}>
                <Grid container spacing={1} sx={{paddingTop:'0px', background: '#F9F6ED', borderRadius: '5px', alignItems: 'center', width: '100%', margin: '0 auto'}}> 
                    <Grid item xs={1}>
                    <Item sx={{textAlign:'left', display:'grid', background: '#F9F6ED'}}><ChatBlue/></Item>
                    </Grid>
                    <Grid item xs={11}>
                    <Item sx={{textAlign:'left', background: '#F9F6ED', padding:'13px', fontSize:'11px' }}>【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。
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
                        {/* <Button component={Link} to="#" variant="contained" color="grey" sx={{width:'90%', marginBottom:'20px', color: '#fff'}}> 気になる済 </Button> */}
                        <Button
                          className='favorite_button'
                          onClick={() => handleFavClick(job.cjp_id)}
                          style={{
                            backgroundColor: favState[job.cjp_id] ? '' : theme.palette.grey[500],
                            color: favState[job.cjp_id] ? theme.palette.grey.main : '#fff',
                          }}
                          variant={favState[job.cjp_id] ? 'outlined' : 'contained'}
                          sx={{ width: '90%', marginBottom: '20px', color: '#fff' }}
                        >
                          {favState[job.cjp_id] ? '気になる済' : '気になる済'}
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button onClick={() => handleCardClick(job)} variant="contained" color="primary" sx={{width:'90%', marginBottom: '20px'}}> 詳細を見る </Button>
                      </Grid>
                  </Grid>
                </Box>
            </CardActions>
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