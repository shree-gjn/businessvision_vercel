import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import RecruitmentInfo from '../pages/RecruitmentInfo';
import JobSearch from '../pages/jobsearch';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import SearchInfo from './SearchInfo';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { useSearchParams } from 'react-router-dom';

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



const MyPage = ({ handleNext }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState(searchParams.get('tab') || '2');
  const [showJobSearch, setShowJobSearch] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSearchParams({ tab: newValue });
  };

  React.useEffect(() => {
    const currentTab = searchParams.get('tab');
    if (currentTab && currentTab !== value) {
      setValue(currentTab);
    }
  }, [searchParams, value]);

  // const switchToSearchInfo = () => {
  //   setShowJobSearch(false); // Hide the JobSearch component
  // };

  const toggleSearchComponent = () => {
    setShowJobSearch(!showJobSearch);
  };
  
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
    transform: 'translateY(-50%)',
    visibility: showJobSearch ? 'hidden' : 'visible'
  }));

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    setShowJobSearch(true); // Reset to default state
    setValue('2'); 
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>求人情報</p>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="検索" value="1" sx={{width:'50%'}}/>
              <Tab label="おすすめ" value="2" sx={{width:'50%'}}/>
            </TabList>
          </Box>

          <TabPanel value="1">
            {/* <JobSearch /> */}
            {/* Conditionally render either JobSearch or SearchInfo based on showJobSearch state */}
            {showJobSearch ? (
              <JobSearch switchToSearchInfo={toggleSearchComponent} />
            ) : (
              <SearchInfo />
            )}
          </TabPanel>
          <TabPanel value="2" sx={{backgroundColor: '#FAFAFA', overflow: 'scroll'}}>
            <Box sx={{backgroundColor: '#FAFAFA'}}>
                <RecruitmentInfo />
              </Box>
          </TabPanel>
        </TabContext>
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
};

export default MyPage;
