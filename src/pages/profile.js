import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import ResumeTab from './profile/ResumeTab';
import SettingTab from './profile/SettingTab';

const ProfileComponent = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginBottom:'100px'}}>
    <div className="PageHeader">
      <p>プロフィール</p>
    </div>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="履歴書・職務経歴書" value="1" sx={{width:'50%'}}/>
          <Tab label="設定" value="2" sx={{width:'50%'}}/>
        </TabList>
      </Box>
      <TabPanel value="1">
        <ResumeTab />
      </TabPanel>
      <TabPanel value="2">
        <SettingTab />
      </TabPanel>
    </TabContext>
    <BottomNav />
  </Box>
  );
};

export default ProfileComponent;
