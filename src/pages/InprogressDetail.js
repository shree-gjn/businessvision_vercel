import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BottomNav from '../components/BottomNav';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Link, useNavigate, useParams, useLocation} from 'react-router-dom'; 
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as MoneyIcon} from '../assets/MoneyIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as TrashIcon} from '../assets/TrashIcon.svg';
import {ReactComponent as WarningIcon} from '../assets/WarningIcon.svg';
import {ReactComponent as BasicInformation} from '../assets/BasicInformation.svg';
import {ReactComponent as ApplicationRequirement} from '../assets/ApplicationRequirement.svg';
import {ReactComponent as CompanyProfile} from '../assets/CompanyProfile.svg';
import {ReactComponent as Skill} from '../assets/Skill.svg';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import JobDetails from './JobDetails';
import ChatComponent from '../components/ChatUI';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {Table, TableBody, TableCell, TableRow, TableContainer} from '@mui/material';

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



const InprogressDetail = ({ handleNext }) => {
  const { state } = useLocation();
  const { job_id } = useParams(); // Extract job_id from URL parameters
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const hideChatTab = state?.hideChatTab || false;
  const hideDetailTab = state?.hideDetailTab || false;
  const isFromProgressStepZero = state?.hideDetailTab || false;
  // const isFromProgressStepZero = state?.source === 'ProgressStepZero';
  const showJobDetails = state?.showJobDetails || false;
  const activeStep = state?.activeStep || 0;
  const [jobpost, setjobpost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    // navigate(-1);  // Navigate to the previous page
    navigate(-1, { state: { activeStep } });
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
    handleCloseDeleteModal();
  };




  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>進行中</p>
        </div>
        {/* {!isFromProgressStepZero &&  (
          <div className="inprogress-tab">
            <TabContext value={value} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  {!hideChatTab && (
                    <Tab label="チャット" value="1" sx={{ width: '50%' }} />
                  )}
                  {!hideDetailTab && (
                    <Tab label="求人内容" value="2" sx={{ width: '50%' }} />
                  )}
                </TabList>
              </Box>
              <TabPanel value="1">
                {!hideChatTab && <ChatComponent />}
              </TabPanel>
              <TabPanel value="2" style={{ padding: '0' }}>
                {!hideDetailTab && <JobDetails />}
              </TabPanel>
            </TabContext>
          </div>
        )}
        {showJobDetails && (
        <JobDetails />
      )} */}
        {loading ? (
        // Render loading indicator here
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <CircularProgress />
        </Box>
      ) : (  
        <div>
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
                <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'0px'}}> 
                  <div><BuildingIcon /></div> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {jobpost.cjp_company_name} </Typography>
                ​</Item>
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
                <div><MoneyIcon /> </div><Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> {jobpost.cjp_salary_high_limit} ~ {jobpost.cjp_salary_low_limit}</Typography>
                </Item>
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
              
              {/* <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>求人のキャッチコピー</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>{jobpost.cjp_recruitment_catchphrase}​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>求人の特長</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>{jobpost.cjp_features_of_recruitment}</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>募集背景</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>{jobpost.cjp_recruitment_background} ​</Item>
              </Grid> */}
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
          <Box sx={{ flexGrow: 1, marginBottom:'100px' }}>
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

      </Card>
        </div>    
      )}
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
};

export default InprogressDetail;

