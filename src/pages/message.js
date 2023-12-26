import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import CorporateScout from './CorporateScout';

const MessageComponent = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
      <p>メッセージ</p>
    </div>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="シークレットエントリー" value="1" sx={{width:'50%'}}/>
          <Tab label="企業スカウト" value="2" sx={{width:'50%'}}/>
        </TabList>
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">
        <CorporateScout />
      </TabPanel>
    </TabContext>
    <BottomNav />
  </Box>
  );
};

export default MessageComponent;
