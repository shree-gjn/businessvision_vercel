import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import RecruitmentInfo from '../pages/RecruitmentInfo';

const MyPage = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
      <p>求人情報</p>
    </div>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="求人検索" value="1" sx={{width:'50%'}}/>
          <Tab label="求人案内" value="2" sx={{width:'50%'}}/>
        </TabList>
      </Box>
      <TabPanel value="1">
        Tab One
      </TabPanel>
      <TabPanel value="2" sx={{backgroundColor: '#FAFAFA', overflow: 'scroll'}}>
        <Box sx={{backgroundColor: '#FAFAFA'}}>
            <RecruitmentInfo />
          </Box>
      </TabPanel>
    </TabContext>
    <BottomNav />
  </Box>
  );
};

export default MyPage;
