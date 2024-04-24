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

const MessageComponent = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <p>メッセージ</p>
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
