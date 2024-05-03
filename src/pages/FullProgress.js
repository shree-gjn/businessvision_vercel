import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import JobDetails from './JobDetails';
import ChatComponent from '../components/ChatUI';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';

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


const FullProgress = ({ handleNext }) => {
  const { state } = useLocation();
  const hideChatTab = state?.hideChatTab || false;
  const hideDetailTab = state?.hideDetailTab || false;
  const isFromProgressStepZero = state?.hideDetailTab || false;
  // const isFromProgressStepZero = state?.source === 'ProgressStepZero';
  const showJobDetails = state?.showJobDetails || false;
  const activeStep = state?.activeStep || 0;

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    // navigate(-1);  // Navigate to the previous page
    navigate(-1, { state: { activeStep } });
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>進行中</p>
        </div>
        {!isFromProgressStepZero &&  (
          <div className="inprogress-tab">
            <TabContext value={value} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  {!hideChatTab && (
                    <Tab label="チャット" value="1" sx={{ width: '50%' }} />
                  )}
                  {/* <Tab label="チャット" value="1" sx={{width:'50%'}}/> */}
                  {/* {!hideDetailTab && <Tab label="求人内容" value="2" sx={{ width: '50%' }} />} */}
                  {!hideDetailTab && (
                    <Tab label="求人内容" value="2" sx={{ width: '50%' }} />
                  )}
                </TabList>
              </Box>
              <TabPanel value="1">
                {/* <ChatComponent /> */}
                {!hideChatTab && <ChatComponent />}
              </TabPanel>
              {/* <TabPanel value="2" style={{padding: '0'}}>
                <JobDetails />
              </TabPanel> */}
              {/* {!hideDetailTab && (
                <TabPanel value="2" style={{ padding: '0' }}>
                  <JobDetails />
                </TabPanel>
              )} */}
              {/* {!hideDetailTab && !isFromProgressStepZero && (
                <TabPanel value="2" style={{ padding: '0' }}>
                  <JobDetails />
                </TabPanel>
              )} */}
              <TabPanel value="2" style={{ padding: '0' }}>
                {!hideDetailTab && <JobDetails />}
                {/* {showJobDetails && !hideDetailTab && <JobDetails />} */}
              </TabPanel>
              {/* {!isFromProgressStepZero && (
                  <JobDetails />
              )} */}
            </TabContext>
          </div>
        )}
        {showJobDetails && (
        <JobDetails />
      )}
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
};

export default FullProgress;

