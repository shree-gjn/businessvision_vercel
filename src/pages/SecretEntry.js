import React, { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
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
    <>
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
        jobpost.map(job => (
          <div key={job.cjp_id} style={{ background: '#FFF', marginBottom: '20px', border: '1px solid #EEEEEE', borderRadius: '10px' }}>
            <Card sx={{ minWidth: 275, marginBottom: '30px', textDecoration: 'none' }} component={Link} to={`/recruitment/${job.cjp_id}`}>
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

  </>
  );
}