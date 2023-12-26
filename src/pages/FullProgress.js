import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import { Link, useNavigate } from 'react-router-dom'; 
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import JobDetails from './JobDetails';
import ChatComponent from '../components/ChatUI';

const BackLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: '#16375A',
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    paddingLeft:'10px',
    marginTop:'10px',
    marginBottom:'8px',
  }));

const FullProgress = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
    <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
    </div>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="チャット" value="1" sx={{width:'50%'}}/>
          <Tab label="求人内容" value="2" sx={{width:'50%'}}/>
        </TabList>
      </Box>
      <TabPanel value="1">
        <ChatComponent />
      </TabPanel>
      <TabPanel value="2">
        <JobDetails />
      </TabPanel>
    </TabContext>
    <BottomNav />
  </Box>
  );
};

export default FullProgress;
