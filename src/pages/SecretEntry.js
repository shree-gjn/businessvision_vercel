import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import SecretFilterGrid from '../components/SecretFilterGrid';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as ChatIcon} from '../assets/ChatIcon.svg'; 
import theme from './theme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));

  

export default function SecretEntry() {
  const [jobpost, setjobpost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [favState, setFavState] = useState(false);
  // const [isExpanded, setIsExpanded] = useState(false);
  const [expandedState, setExpandedState] = useState([]); 

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
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_secret_entry?auth_key=${authKey}`);
        console.log('Fetching data...'); // Debugging log
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Data fetched:', data); // Debugging log
      //   if (data.json_data) {
      //     setjobpost(data.json_data);
      //   } else {
      //     setError('Fetched data is not an object');
      //   }
      //   setLoading(false); 
      // } catch (error) {
      //   setError(`Error fetching data: ${error.message}`);
      // }
        if (Array.isArray(data.json_data)) {
          setjobpost(data.json_data);
           // Initialize expandedState with false for each job post
           setExpandedState(new Array(data.json_data.length).fill(false));

           // Load favState from localStorage
           const storedFavState = JSON.parse(localStorage.getItem('favState')) || {};
           setFavState(storedFavState);
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

  const toggleReadMore = (index) => {
    setExpandedState(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const renderMessage = (message, index) => {
    const isExpanded = expandedState[index];
    if (message.length <= 45 || isExpanded) {
      return (
        <>
          {message} <br />
          <Button onClick={() => toggleReadMore(index)} size="small" sx={{ fontSize: '11px', color: '#046EB8', fontWeight: '600', padding: '0', marginTop: '5px' }}>
            {isExpanded ? '読む量を減らす' : '続きを読む'}
          </Button>
        </>
      );
    } else {
      return (
        <>
          {message.substring(0, 45)}... <br />
          <Button onClick={() => toggleReadMore(index)} size="small" sx={{ fontSize: '11px', color: '#046EB8', fontWeight: '600', padding: '0', marginTop: '5px' }}>
            続きを読む
          </Button>
        </>
      );
    }
  };

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
      <Grid container spacing={2} alignItems="center">
      <Grid item xs={4} sx={{margin:'10px 0px 10px 0px'}}>
        <SecretFilterGrid />
      </Grid>
      {/* <Grid item xs={8} sx={{textAlign:'end', marginTop:'10px'}}>
      </Grid> */}
      <Grid item xs={8} sx={{textAlign:'end', marginTop:'10px', fontSize: '14px'}}>
        {jobpost.length} 件中 1 ～ {jobpost.length} 件
      </Grid>
    </Grid>

    {/* {loading ? (
        // Render loading indicator here
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (  
      jobpost.map(job => (
        <div key={job.cjp_id} style={{ background: '#FFF', marginBottom: '20px', border: '1px solid #EEEEEE', borderRadius: '10px' }}>
          <Card sx={{ minWidth: 275, marginBottom: '30px', textDecoration: 'none' }} component={Link} to={`/recruitment/${job.cjp_id}`}>
            <CardContent>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4}>
                    <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'10px'}}>1次面接案内</Item>
                  </Grid>
                </Grid>
              </Box>
              <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: '700', textAlign: 'left' }}>
              {job.cjp_recruitment_catchphrase}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} sx={{ marginTop: '10px' }}>
                  <Grid item xs={6}>
                    <Item sx={{ textAlign: 'left', display: 'flex', gap: '5px', paddingTop: '0px' }}>
                      <span><BuildingIcon /></span> <Typography variant="body1" sx={{ fontSize: '12px', color: '#16375A', fontWeight: '500' }}> {job.cjp_company_name} </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={6} sx={{ paddingTop: '0px' }}>
                    <Item sx={{ textAlign: 'left', display: 'flex', gap: '5px', paddingTop: '0px' }}>
                      <span><BagIcon /> </span><Typography variant="body1" sx={{ fontSize: '12px', color: '#16375A', fontWeight: '500' }}> 部長（部門責任者）​</Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </div>
      ))
    )} */}

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
        jobpost.map((job, index) => (
          <div key={job.cjp_id} style={{ background: '#FFF', marginBottom: '20px', border: '1px solid #EEEEEE', borderRadius: '10px' }}>
            {/* <Card sx={{ minWidth: 275, marginBottom: '30px', textDecoration: 'none' }} component={Link} to={`/recruitment/${job.cjp_id}`}>
              <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                      <Item sx={{ fontSize: '12px', background: 'rgba(212, 184, 107, 0.54)', marginBottom: '10px' }}>1次面接案内</Item>
                    </Grid>
                  </Grid>
                </Box>
                <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: '700', textAlign: 'left' }}>
                  {job.cjp_recruitment_catchphrase}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1} sx={{ marginTop: '10px' }}>
                    <Grid item xs={6}>
                      <Item sx={{ textAlign: 'left', display: 'flex', gap: '5px', paddingTop: '0px' }}>
                        <span><BuildingIcon /></span> <Typography variant="body1" sx={{ fontSize: '12px', color: '#16375A', fontWeight: '500' }}> {job.cjp_company_name} </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={6} sx={{ paddingTop: '0px' }}>
                      <Item sx={{ textAlign: 'left', display: 'flex', gap: '5px', paddingTop: '0px' }}>
                        <span><BagIcon /> </span><Typography variant="body1" sx={{ fontSize: '12px', color: '#16375A', fontWeight: '500' }}> 部長（部門責任者）​</Typography>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card> */}
            <Card sx={{ minWidth: 275, textDecoration:'none', boxShadow: 'none'}} >
              <CardContent>
                <Box sx={{ flexGrow: 1, textDecoration:'none'}} component={Link} to={`/secretentrydetail/${job.cjp_id}`}>
                <Grid container spacing={1} style={{paddingBottom: '10px'}}>
                    <Grid item xs={4}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: {job.cjp_job_code}</Item>
                    </Grid>
                    <Grid item xs={3} style={{paddingLeft: '0'}}>
                    <Item sx={{textAlign:'center', fontSize:'11px', backgroundColor: '#E7D8AF'}}>1次面接案内</Item>
                    </Grid>
                    <Grid item xs={2}>
                    <Item sx={{fontSize:'12px'}}></Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item sx={{fontSize:'11px'}}>{job.cjp_created_at}</Item>
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, textDecoration:'none'}} component={Link} to={`/secretentrydetail/${job.cjp_id}`}>
                  <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left', textDecoration:'none', color: '#000'}}>
                  {job.cjp_recruitment_catchphrase}
                  </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, textDecoration:'none'}}  component={Link} to={`/secretentrydetail/${job.cjp_id}`}>
                <Grid container spacing={1} sx={{marginTop:'10px'}}>
                    <Grid item xs={6}>
                    <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                      <span><BuildingIcon /> </span><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {job.cjp_company_name} </Typography>​</Item>
                    </Grid>
                    <Grid item xs={6} sx={{paddingTop:'0px'}}>
                    <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                      <span><BagIcon /> </span><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>{job.cjp_job_position}</Typography>​​</Item>
                    </Grid>
                </Grid>
                </Box>
                <Box sx={{ flexGrow: 1,textDecoration:'none'}} style={{background:'#DFD0A7', borderRadius:'5px'}}>
                  <Grid container spacing={1} sx={{paddingTop:'0px', background: '#F9F6ED', alignItems: 'center', width: '100%', margin: '0 auto'}}> 
                      <Grid item xs={1}>
                      <Item sx={{textAlign:'left', display:'grid',background: '#F9F6ED', borderRadius:'5px', alignItems: 'center'}}><ChatIcon style={{ marginLeft:'3px', width: '15px', height: '15px'}}/></Item>
                      </Grid>
                      <Grid item xs={11}>
                      <Item sx={{textAlign:'left',background: '#F9F6ED', padding:'13px', fontSize:'11px', fontWeight: '600' }}> {renderMessage(job.cja_message, index)}​</Item>
                      </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <CardActions>
              {/* <Box sx={{ flexGrow: 1 }}> */}
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
                      <Button component={Link} to={`/secretentrydetail/${job.cjp_id}`} variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
                    </Grid>
                </Grid>
              {/* </Box> */}
              </CardActions>
            </Card>
          </div>
        ))
      )}
      

    <Grid sx={{marginBottom: '100px'}}>
    </Grid>  
    {/* <div style={{background:'#FFF', marginBottom:'20px', border: '1px solid #EEEEEE', borderRadius: '10px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(212, 184, 107, 0.54)', marginBottom:'10px'}}>1次面接案内</Item>
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
              <BuildingIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {}</Typography>​</Item>
            </Grid>
            <Grid item xs={6} sx={{paddingTop:'0px'}}>
            <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
              <BagIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
            </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>
    </div> */}

    {/* <div style={{background:'#FFF', marginBottom:'20px', border: '1px solid #EEEEEE', borderRadius: '10px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'rgba(201, 219, 232, 0.54)', marginBottom:'10px',}}>書類選考案内</Item>
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

    <div style={{background:'#FFF', marginBottom:'20px', border: '1px solid #EEEEEE', borderRadius: '10px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'#DADADA', marginBottom:'10px'}}>匿名選考中</Item>
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

    <div style={{background:'#FFF', marginBottom:'20px', border: '1px solid #EEEEEE', borderRadius: '10px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'#DADADA', marginBottom:'10px'}}>選考期日経過</Item>
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

    <div style={{background:'#FFF', marginBottom:'100px', border: '1px solid #EEEEEE', borderRadius: '10px'}}>
    <Card sx={{ minWidth: 275, marginBottom:'30px', textDecoration:'none' }} component={Link} to="/messages/scout">
      <CardContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={4}>
            <Item sx={{fontSize:'12px', background:'#DADADA', marginBottom:'10px'}}>選考不通過</Item>
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
    </div> */}
    </ThemeProvider>
  );
}