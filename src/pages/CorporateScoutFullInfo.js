import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Link, useNavigate, useParams} from 'react-router-dom'; 
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as MoneyIcon} from '../assets/MoneyIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as TrashIcon} from '../assets/TrashIcon.svg';
import {ReactComponent as UserFolder} from '../assets/UserFolder.svg';
import {ReactComponent as BigBagIcon}  from '../assets/BigBagIcon.svg';
import {ReactComponent as CalendarIcon} from '../assets/CalendarIcon.svg';
import {ReactComponent as WarningIcon} from '../assets/WarningIcon.svg';
import {ReactComponent as Skill} from '../assets/Skill.svg';
import {ReactComponent as BasicInformation} from '../assets/BasicInformation.svg';
import {ReactComponent as ApplicationRequirement} from '../assets/ApplicationRequirement.svg';
import {ReactComponent as CompanyProfile} from '../assets/CompanyProfile.svg';
import BottomNav from '../components/BottomNav';
import { display, width } from '@mui/system';
import {Table, TableBody, TableCell, TableRow, TableContainer} from '@mui/material';
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
  
  const BackLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#16375A',
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    paddingLeft:'15px', 
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  }));

export default function CorporateScoutFullInfo() {
  const { job_id } = useParams(); // Extract job_id from URL parameters
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [jobpost, setjobpost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [favState, setFavState] = useState(false);

  useEffect(() => {
    const storedFavState = JSON.parse(localStorage.getItem('favState')) || {};
    setFavState(storedFavState);
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
        console.error('Auth key not found in localStorage');
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
    if (!job_id) {
      setError('Invalid job ID');
      return;
    }

    // Retrieve the auth key from sessionStorage
    const authKey = sessionStorage.getItem('authKey');

    // Check if authKey is available
    if (!authKey) {
      console.error('Auth key not found in sessionStorage');
      return;
    }

    // // Make the API request with the authKey
    // fetch(`https://bvhr-api.azurewebsites.net/candidate/view_recruitment_info?auth_key=${authKey}&job_id=${job_id}`)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch data');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log('Fetched data:', data);
    //     if (data.json_data && Array.isArray(data.json_data)) {
    //       setjobpost(data.json_data);
    //     } else {
    //       console.error('Fetched data is not an array:', data);
    //     }
    //   })
    //   .catch((error) => {
    //     setError(`Error fetching data: ${error.message}`);
    //   });
    // }, [job_id]);

    setLoading(true); // Set loading to true when starting data fetching

    const fetchData = async () => {
      try {
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/view_recruitment_info?auth_key=${authKey}&job_id=${job_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (data.json_data) {
          setjobpost(data.json_data);
        } else {
          setError('Fetched data is not an object');
        }
        setLoading(false); 
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      }
    };

    fetchData();
  }, [job_id]);

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDelete = () => {
    // Implement the logic to delete the item
    // You can use an API call or other methods to delete the item
    // After deletion, you may want to navigate to a different page or update the UI
    // For now, let's just close the modal
    handleCloseDeleteModal();
  };
  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  // const goBack = () => {
  //   const activeTabIndex = 1; // Assuming tab 2 is active
  //   navigate(-1, { state: { activeTabIndex } });
  // };

  const tableData = [
    { id: 1, label: '01', description: '日次取引仕訳', level: 'L4' },
    { id: 2, label: '02', description: '月次決算', level: 'L3' },
    { id: 3, label: '03', description: '本決算', level: 'L2' },
    { id: 1, label: '04', description: '予算', level: 'L1' },
    { id: 2, label: '05', description: '給与計算', level: 'L2' },
    { id: 3, label: '06', description: '社会保険', level: 'L3' },
    { id: 1, label: '07', description: '消費税', level: 'L0' },
    { id: 2, label: '08', description: '法人税他', level: 'L1' },
    { id: 3, label: '09', description: '監査対象決算子会社', level: 'L0' },
    { id: 3, label: '10', description: '監査対象決算親会社', level: 'L0' },
    { id: 3, label: '11', description: '連結決算', level: 'L1' },
    { id: 3, label: '12', description: '開示書類', level: 'L0' },
    // Add more rows as needed
  ];

  const getItemBackgroundColor = (level) => {
    switch (level) {
      case 'L0':
        return '#EEEEEE'; // Red for L0
      case 'L1':
        return '#949494'; // Yellow for L1
      case 'L2':
        return '#9BC1E6'; // Green for L2
      case 'L3':
        return '#085D95'; // Blue for L3
      case 'L4':
        return '#16375A'; // Purple for L4
      default:
        return 'inherit';
    }
  };

  // const handleMaskingapplication = () => {
  //   navigate('/maskingapplication', { state: { job_id } });
  // };


  return (
    <ThemeProvider theme={theme}>
    <>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>求人情報</p>
      </div>
      
      {loading ? (
        // Render loading indicator here
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (  
        <div>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sx={{margin: '15px'}}>
                <Typography sx={{fontSize: '14px', textAlign: 'left', marginBottom: '10px'}}>
                  企業からのコメント
                </Typography>
                <Paper sx={{padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', background: '#F5F2E9', boxShadow: 'none'}}>
                  <span> <ChatIcon sx={{width: '20px', height: '20px'}} /></span>
                  <Typography sx={{fontSize: '12px', textAlign: 'left'}}>
                    {/* {jobpost.cja_message} */}
                    【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。 今までのご経験をぜひ、弊社で活かしてみませんか？ ご応募お待ちしております。​
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 , padding:'10px', overflow:'scroll'}}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: {jobpost.cjp_job_code}</Item>
            </Grid>
            <Grid item xs={2}>
            <Item sx={{fontSize:'12px'}}>未読​</Item>
            </Grid>
            <Grid item xs={4}>  
            <Item sx={{fontSize:'12px'}}>{jobpost.cjp_created_at}</Item>
            </Grid>
          </Grid>
        </Box>
          <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left', padding:'0px 15px 0px 15px'}}>
           {jobpost.cjp_recruitment_catchphrase}
          </Typography>
          <Box sx={{ flexGrow: 1, padding:'0px 10px 0px 15px' }}>
          <Grid container spacing={1}>
              {/* <Grid item xs={5}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
              <div><BuildingIcon /></div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>  {jobpost.cjp_company_name} </Typography>
              </Item>
              </Grid>
              <Grid item xs={5}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
              <div><MapsIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>{jobpost.cjp_work_location}</Typography>​</Item>
              </Grid> */}

              <Grid item xs={5}>
                <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                <div><MoneyIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {jobpost.cjp_salary_high_limit} ~ {jobpost.cjp_salary_high_limit}</Typography>
                </Item>
              </Grid>
              <Grid item xs={5}>
                <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                  <div><MapsIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>  {jobpost.cjp_location_city}</Typography>
                ​</Item>
              </Grid>
              <Grid item xs={2} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'10px', }}> 
                <TrashIcon onClick={handleOpenDeleteModal} />​</Item>
                <Modal
                  open={isDeleteModalOpen}
                  onClose={handleCloseDeleteModal}
                  aria-labelledby="delete-confirmation-modal"
                  aria-describedby="delete-confirmation-description"
                >
                  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: 300, textAlign:'center' }}>
                    <WarningIcon />
                    <Typography id="delete-confirmation-modal" variant="h6" component="div">
                      削除してもよろしいですか?
                    </Typography>
                    <Button onClick={handleCloseDeleteModal} variant="contained" sx={{ mt: 2, ml: 2, backgroundColor: "#949494" }}>
                    キャンセル
                    </Button>
                    <Button onClick={handleDelete} variant="contained" sx={{ mt: 2, ml: 2 , backgroundColor:"#F96264" }}>
                    削除する
                    </Button>
                  </Box>
                </Modal>
              </Grid>
              <Grid item xs={5}>
                <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                  <div><BuildingIcon /></div> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {jobpost.cjp_company_name} </Typography>
                ​</Item>
              </Grid>
              <Grid item xs={5} sx={{paddingTop:'0px'}}>
                <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                  <div><BagIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>  {jobpost.cjp_job_position}  </Typography>​
                ​</Item>
              </Grid>

          </Grid>
          </Box>
      <Card sx={{ minWidth: 275, marginBottom:'30px' }}>
        <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><BasicInformation style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>基本情報</Item>
              </Grid>
              
              {jobpost.cjp_recruitment_catchphrase && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">求人のキャッチコピー</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_recruitment_catchphrase}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_features_of_recruitment && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">求人の特長</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_features_of_recruitment}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_recruitment_background && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">募集背景</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_recruitment_background}</Item>
                  </Grid>
                </>
              )}

            </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><ApplicationRequirement style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}> 募集要項 </Item>
              </Grid>
              
              {jobpost.cjp_job_description && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">仕事内容</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_job_description}</Item>
                  </Grid>
                </>
              )}
      
              {jobpost.cjp_application_conditions && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">応募条件</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_application_conditions}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_employment_status && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">雇用形態</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_employment_status}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_selection_process && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">選考プロセス</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_selection_process}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_annual_income && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">年収・給与</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_annual_income}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_work_location && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">勤務地</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_work_location}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_working_hours && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">勤務時間</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_working_hours}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_treatment_benefits && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">待遇・福利厚生</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_treatment_benefits}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_holidays_vacations && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">休日・休暇</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_holidays_vacations}</Item>
                  </Grid>
                </>
              )}

          </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><CompanyProfile style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>会社概要</Item>
              </Grid>
              
              {jobpost.cjp_company_name && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">会社名</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_company_name}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_company_url && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">会社URL</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                  <Item sx={{fontSize:'12px', textAlign:'left'}}><Link to={`${jobpost.cjp_company_url}`} target='_blank' rel="noopener noreferrer">{jobpost.cjp_company_url}</Link>​</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_listing_classification && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">上場区分</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_listing_classification}</Item>
                  </Grid>
                </>
              )}
              
              {jobpost.cjp_business_content && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">事業内容</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_business_content}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_company_features && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">会社の特長</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_company_features}</Item>
                  </Grid>
                </>
              )}

              {jobpost.cjp_company_establishment && (
                <>
                  <Grid item xs={3} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="subtitle2">会社設立日</Item>
                  </Grid>
                  <Grid item xs={9} sx={{ borderBottom: '1px solid rgba(8, 93, 149, 0.25)' }}>
                    <Item sx={{textAlign:'left', fontSize:'12px'}} variant="body2">{jobpost.cjp_company_establishment}</Item>
                  </Grid>
                </>
              )}
              
          </Grid>
          </Box>
        </CardContent>
        <CardContent>       
          <Box sx={{ flexGrow: 1, marginBottom:'150px' }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><Skill style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>希望情報</Item>
              </Grid>
              
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#EEEEEE'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>LO:知識なし</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#949494'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L1:知識あり​</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#9BC1E6'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L2:サポートがあれば実施できるレベル（もしくはソフトまかせ）​</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#085D95'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L3:独力で実施できるレベル（もしくは対応・判断・作成・計算できる）​</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#16375A'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L4:他者を指導できるレベル（もしくは議論・交渉できる）</Item>
              </Grid>

              <Grid item xs={12}>
                <Item sx={{border: '1px solid #EEEEEE', height: '100%', padding: '0'}}>
                  <TableContainer component={Paper} sx={{boxShadow: 'none', height: '100%'}}>
                    <Table>
                      <TableBody>
                        {tableData.map(row => (
                          <TableRow key={row.id} >
                            <TableCell>{row.label}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell style={{width: '10%', backgroundColor: getItemBackgroundColor(row.level), color: row.level === 'L0' ? '#16375A' : '#fff'}}>{row.level}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Item>
              </Grid>
          </Grid>
          </Box>
        </CardContent>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} style={{position: 'fixed', bottom: '0', marginBottom: '56px', padding: '15px', background: 'rgb(255 255 255 / 87%)'}}>
            <Grid item xs={6}>
              {/* <Button className='favorite-button' component={Link} to="#" variant="contained" color="grey" sx={{fontSize:'12px', width: '100%', color: '#fff'}}> 気になる済 </Button> */}
              {/* <Button
                className='favorite_button'
                onClick={() => handleFavClick(jobpost.cjp_id)}
                style={{
                  backgroundColor: favState ? '' : theme.palette.grey[500],
                  color: favState ? theme.palette.grey.main : '#fff',
                }}
                variant={favState ? 'outlined' : 'contained'}
                sx={{fontSize: '12px', width: '100%', color: '#fff' }}
              >
                {favState ? '気になる済' : '気になる済'}
              </Button> */}

                <Button
                  className='favorite_button'
                  onClick={() => handleFavClick(jobpost.cjp_id)}
                  style={{
                    backgroundColor: favState[jobpost.cjp_id] ? '' : theme.palette.grey[500],
                    color: favState[jobpost.cjp_id] ? theme.palette.grey.main : '#fff',
                  }}
                  variant={favState[jobpost.cjp_id] ? 'outlined' : 'contained'}
                  sx={{fontSize: '12px', width: '100%', color: '#fff' }}
                >
                  {favState[jobpost.cjp_id] ? '気になる済' : '気になる済'}
                </Button>
            </Grid>
            <Grid item xs={6}>
              <Button component={Link} to={`/maskingapplication/${jobpost.cjp_id}`} disabled={jobpost.secret_entry_flag === 1} variant="contained" color="primary"sx={{
                fontSize: '12px',
                width: '100%',
                '&.Mui-disabled': {
                  opacity: 0.3,
                  pointerEvents: 'none', // To ensure it's not clickable
                  backgroundColor: 'primary.main', // To maintain the primary color when disabled
                  color: '#fff',
                },
              }}> 匿名エントリー </Button>
            </Grid>
            <Grid item xs={6}>
              <Button component={Link} to={`/normalapplication/${jobpost.cjp_id}`} disabled={jobpost.official_application_flag === 1} variant="contained" color="secondary" sx={{fontSize: '12px', width: '100%'}}> 書類選考応募 </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='outlined' color="primary" sx={{fontSize: '12px', width: '100%'}}>辞退する</Button>
            </Grid>
        </Grid>
        </Box>
      </Card>
        </div>    
      )}
      <BottomNav />
      
    </>
    </ThemeProvider>
  );
}