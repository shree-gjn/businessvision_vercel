import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import RecruitmentInfo from '../pages/RecruitmentInfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as YenIcon } from '../assets/YenIcon.svg';
import { ReactComponent as BackArrowIcon } from '../assets/BackArrowIcon.svg';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const IncomeComponent = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');
  const [selectedValue, setSelectedValue] = React.useState('');
  const [selectedValue1, setSelectedValue1] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(-1); // This will navigate back one step in the history
  };

  const valueOptions = Array.from({ length: (5000 / 50) + 1 }, (_, index) => index * 50);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <p>求人情報</p>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="検索" value="1" sx={{ width: '50%' }} />
              <Tab label="おすすめ" value="2" sx={{ width: '50%' }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Card sx={{ minWidth: 275, marginBottom: '30px', marginTop: '20px', borderRadius: '0px' }}>
              <CardContent sx={{ padding: '0px', paddingBottom: '0px !important' }}>
                <Link style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
                  <Box sx={{ flexGrow: 1, borderBottom: '1px solid #ccc' }}>
                    <Grid container spacing={1}>
                      <Grid item xs={1}>
                        <Item><BackArrowIcon /></Item>
                      </Grid>
                      <Grid item xs={1}>
                        <Item><YenIcon /></Item>
                      </Grid>
                      <Grid item xs={10}>
                        <Item sx={{ textAlign: 'left', fontSize: '12px' }}>年収</Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Link>
                
                <div style={{ textAlign: 'left', padding: '10px' }}>
                  <Select
                    value={selectedValue === '' ? '' : selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    sx={{ width: '100%', marginBottom: '20px' }}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      オプションを選んでください
                    </MenuItem>
                    {valueOptions.map((value) => (
                      <MenuItem key={value} value={value}>
                        {`${value}万円以下`}
                      </MenuItem>
                    ))}
                  </Select>
                  <Select
                    value={selectedValue1 === '' ? '' : selectedValue1}
                    onChange={(e) => setSelectedValue1(e.target.value)}
                    sx={{ width: '100%', marginBottom: '20px' }}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      オプションを選んでください
                    </MenuItem>
                    {valueOptions.map((value) => (
                      <MenuItem key={value} value={value}>
                        {`${value}万円以下`}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <Button variant="contained" color="primary" onClick={handleLinkClick} sx={{ width: '70%', marginBottom: '20px' }}>
                  この条件で設定
                </Button>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value="2" sx={{ backgroundColor: '#FAFAFA', overflow: 'scroll' }}>
            <Box sx={{ backgroundColor: '#FAFAFA' }}>
              <RecruitmentInfo />
            </Box>
          </TabPanel>
        </TabContext>
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
};

export default IncomeComponent;
