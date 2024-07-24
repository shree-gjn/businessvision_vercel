import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import CorporateScout from './CorporateScout';
import SecretEntry from './SecretEntry';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import theme from './theme';

const MessageComponent = ({ handleNext }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState(searchParams.get('tab') || '1');

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

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader" style={{backgroundColor: '#16375A'}}>
          <p style={{color: '#fff'}}>メッセージ</p>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="匿名エントリー" value="1" sx={{width:'50%'}}/>
              <Tab label="企業スカウト" value="2" sx={{width:'50%'}}/>
            </TabList>
          </Box>
          <TabPanel value="1" style={{background:'#FAFAFA'}}>
            <SecretEntry />
          </TabPanel>
          <TabPanel value="2" style={{background:'#FAFAFA'}}>
            <CorporateScout />
          </TabPanel>
        </TabContext>
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
};

export default MessageComponent;
