import React, { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';
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
import FilterGrid from '../components/FilterGrid';
import usePagination from '@mui/material/usePagination';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {ReactComponent as MoneyIcon} from '../assets/MoneyIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BagBrownIcon} from '../assets/BagBrownIcon.svg';
import {ReactComponent as TickBrown} from '../assets/TickBrown.svg';
import {ReactComponent as BuildingBrownIcon} from '../assets/BuildingBrownIcon.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


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

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
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
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [page, setPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [favState, setFavState] = useState(false);
  const itemsPerPage = 5;

  // const handleFavClick = (jobId) => {
  //   setFavState((prevStates) => ({
  //     ...prevStates,
  //     [jobId]: !prevStates[jobId],
  //   }));
  // };

  // const handleFavClick = (jobId) => {
  //   const authKey = sessionStorage.getItem('authKey');
  //   if (!authKey) {
  //     console.error('Auth key not found in sessionStorage');
  //     return;
  //   }

  //   const newFavState = !favState[jobId];
  //   const formData = new FormData();
  //   formData.append('auth_key', authKey);
  //   formData.append('job_id', jobId);
  //   formData.append('company_job_post_id', jobId); 
  //   formData.append('favorite', newFavState);

  //   fetch(`https://bvhr-api.azurewebsites.net/candidate/add_favourite_job_to_candidate`, {
  //     method: 'POST',
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //     },
  //     body: formData,
  //   })
  //   .then((response) => {
  //     console.log('Response Status:', response.status);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log('Response Data:', data);
  //     if (data.success) {
  //       setFavState((prevStates) => ({
  //         ...prevStates,
  //         [jobId]: newFavState,
  //       }));
  //     } else {
  //       console.error('Failed to update favorite status:', data.message);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error updating favorite status:', error);
  //   });
  // };
   
  // Initialize favState using useEffect
  // useEffect(() => {
  //   const initialFavState = {};
  //   jobs.forEach(job => {
  //     initialFavState[job.cjp_id] = job.fav_job_flag === 0 ? false : true;
  //   });
  //   setFavState(initialFavState);
  // }, [jobs]);

  useEffect(() => {
    const storedFavState = JSON.parse(localStorage.getItem('favState')) || {};
    setFavState(storedFavState);
  }, []);

  // const handleFavClick = async (jobId) => {
  //   try {

  //     // Toggle local state
  //     setFavState(prevFavState => ({
  //       ...prevFavState,
  //       [jobId]: !prevFavState[jobId]
  //     }));

  //     // Perform API call to update favorite status
  //     const authKey = sessionStorage.getItem('authKey');
  //     if (!authKey) {
  //       console.error('Auth key not found in sessionStorage');
  //       return;
  //     }
  
  //     const newFavState = !favState[jobId];
  //     const formData = new FormData();
  //     formData.append('auth_key', authKey);
  //     formData.append('job_id', jobId);
  //     formData.append('company_job_post_id', jobId);
  //     formData.append('favorite', newFavState);
  
  //     const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/add_favourite_job_to_candidate`, {
  //       method: 'POST',
  //       headers: {},
  //       body: formData,
  //     });
  
  //     if (!response.ok) {
  //       // Revert local state on failure
  //       setFavState(prevFavState => ({
  //         ...prevFavState,
  //         [jobId]: !prevFavState[jobId]
  //       }));
  //       throw new Error('Failed to update favorite status');
  //     }
  
  //     // Update favState based on API response
  //     const data = await response.json();
  //     setFavState((prevStates) => ({
  //       ...prevStates,
  //       [jobId]: newFavState,
  //     }));
  
  //     console.log('Response Data:', data);
  
  //     // setFavState((prevStates) => ({
  //     //   ...prevStates,
  //     //   [jobId]: data.success, // Update state based on API response
  //     // }));
  //   } catch (error) {
  //     console.error('Error updating favorite status:', error.message);
  //   }
  // };

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

  
  


  useEffect(() => {
    // Retrieve the auth key from sessionStorage
    const authKey = sessionStorage.getItem('authKey');

    // Check if authKey is available
    if (!authKey) {
      console.error('Auth key not found in sessionStorage');
      setLoading(false); // Set loading to false if authKey is missing
      return;
    }

    setLoading(true); // Set loading to true when starting data fetching

    // Make the API request with the authKey
    // fetch(`https://bvhr-api.azurewebsites.net/candidate/list_recruitment_info?auth_key=${authKey}`)
       fetch(`https://bvhr-api.azurewebsites.net/candidate/list_recruitment_info?auth_key=${authKey}&page=${page}&limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        if (data.json_data && Array.isArray(data.json_data)) {
          setJobs(data.json_data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
        setLoading(false); 
      })
      .catch((error) => console.error('Error fetching data:', error));
      // setLoading(false);
  }, [page]);


   const handlePageChange = (event, value) => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setPage(value);
      setIsAnimating(false); // End animation
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }, 500); // Match this to the CSS transition duration
  };

  const paginatedJobs = jobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // const { items } = usePagination({
  //   count: 10,
  // });


  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8} sx={{margin:'10px 0px 10px 0px', display: 'flex', justifyContent: 'space-between'}}>
            <FilterGrid />
            <Button component={Link} to="/recommendedjob" variant="contained" style={{background: '#d5dbe1', boxShadow: 'none', color: '#16375A'}}>
              おすすめ設定
            </Button>
          </Grid>
          {/* <Grid item xs={4} sx={{textAlign:'end', marginTop:'10px', fontSize: '14px'}}>
            45 件中 1 ～ 5 件
          </Grid> */}
           <Grid item xs={4} sx={{textAlign:'end', fontSize: '12px'}}>
           {jobs.length} 件中 {(page - 1) * itemsPerPage + 1} ～ {Math.min(page * itemsPerPage, jobs.length)} 件
          </Grid>
        </Grid>
      {loading ? (
        // Render loading indicator here
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (  
      paginatedJobs.map((job, index) => (
        <Card key={job.cjp_id} sx={{ minWidth: 275, marginBottom:'20px', boxShadow: 'none', borderRadius: '5px', border: '1px solid #EEEEEE'}}>
          <CardContent>
            <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to={`/recruitment/${job.cjp_id}`}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: {job.cjp_job_code}</Item>
                </Grid>
                <Grid item xs={2}>
                <Item sx={{fontSize:'12px'}}>{job.status}</Item>
                </Grid>
                <Grid item xs={4}>
                <Item sx={{fontSize:'12px', textAlign: 'end'}}>{job.cjp_created_at}</Item>
                </Grid>
            </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, textDecoration:'none', color: '#000'}} component={Link} to={`/recruitment/${job.cjp_id}`}>
              <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left', padding: '0 8px'}}>
              {job.cjp_recruitment_catchphrase} 
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to={`/recruitment/${job.cjp_id}`}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                    <div><BuildingIcon /></div> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {job.cjp_company_name} </Typography>
                  ​</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                    <div><MapsIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>  {job.cjp_location_city}</Typography>
                  ​</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                  <div><MoneyIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {job.cjp_salary_high_limit} ~ {job.cjp_salary_low_limit}</Typography>
                  </Item>
                </Grid>
                <Grid item xs={6} sx={{paddingTop:'0px'}}>
                  <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                    <div><BagIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>  {job.cjp_job_position}  </Typography>​
                  ​</Item>
                </Grid>

                {/* <Grid item xs={6}>
                <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                <div><BuildingIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {job.cjp_company_name} </Typography>
                </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                    <div><MapsIcon /> </div>
                    <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>
                      {job.cjp_work_location.length > 7 ? `${job.cjp_work_location.slice(0, 7)}` : job.cjp_work_location}
                    </Typography>
                  ​</Item>
                </Grid> */}
            </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, textDecoration:'none' }} component={Link} to={`/recruitment/${job.cjp_id}`}>
            <Grid container spacing={1}>
                <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
                <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px', gap: '5px', justifyContent: 'center'}}><BagBrownIcon style={{margin:'0 auto'}}/>仕事内容</Item>
                </Grid>
                <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
                <Item sx={{fontSize:'12px', textAlign:'left'}}>
                    {job.cjp_job_description.length > 55 ? `${job.cjp_job_description.slice(0, 55)}...` : job.cjp_job_description}
                  </Item>
                </Grid>
                <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
                <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px', gap: '5px', justifyContent: 'center'}}><TickBrown style={{margin:'0 auto'}}/>対応資格</Item>
                </Grid>
                <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
                <Item sx={{fontSize:'12px', textAlign:'left'}}>{job.cjp_qualification}​</Item>
                </Grid>
                <Grid item xs={3} sx={{borderBottom: '1px solid #ccc'}}>
                <Item sx={{textAlign:'left', fontSize:'12px', display:'grid', background:'#FAFAFA', borderRadius:'5px', gap: '5px', justifyContent: 'center'}}><BuildingBrownIcon style={{margin:'0 auto'}}/>会社概要</Item>
                </Grid>
                <Grid item xs={9} sx={{borderBottom: '1px solid #ccc'}}>
                <Item sx={{fontSize:'12px', textAlign:'left'}}>{job.cjp_recruitment_background}​</Item>
                </Grid>
            </Grid>
            </Box>
          </CardContent>
          <CardActions>
          <Box sx={{ flexGrow: 1 , textDecoration:'none'}}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
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
                  <Button component={Link} to={`/recruitment/${job.cjp_id}`} variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 詳細を見る </Button>
                </Grid>
            </Grid>
            </Box>
          </CardActions>
        </Card>
      ))
    )}

    {/* <nav className='pagination' style={{ marginBottom: '100px' }}>
      <List style={{alignItems: 'center'}}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <Button
                variant="text"
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined, maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',
                }}
                {...item}
              >
                {page}
              </Button>
            );
          } else if (type === 'previous') {
            children = (
              <Button variant="text" type="button" {...item} style={{display: 'flex', alignItems: 'center', marginRight: '20px'}}>
                <ArrowBackIosIcon style={{width: '20px'}} /> 前の
              </Button>
            );
          } else if (type === 'next') {
            children = (
              <Button variant="text" type="button" {...item} style={{display: 'flex', alignItems: 'center', gap: '5px', marginLeft: '20px'}}>
                次 <ArrowForwardIosIcon style={{width: '20px'}} />
              </Button>
            );
          } else {
            children = (
              <Button variant="text" type="button" {...item}>
                {type}
              </Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav> */}

        <nav className='pagination' style={{ marginBottom: '100px' }}>
          <List style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Pagination
              count={Math.ceil(jobs.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  components={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
                  {...item}
                />
              )}
            />
          </List>
        </nav>


      {/* <Card sx={{ minWidth: 275, marginBottom:'20px', boxShadow: 'none', borderRadius: '5px', border: '1px solid #EEEEEE' }}>
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
      <Card sx={{ minWidth: 275, marginBottom:'100px', boxShadow: 'none', borderRadius: '5px', border: '1px solid #EEEEEE' }}>
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
      </Card> */}
    </>
    </ThemeProvider>
  );
}