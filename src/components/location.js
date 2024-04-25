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
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BackArrowIcon} from '../assets/BackArrowIcon.svg';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { FormGroup, Typography } from '@mui/material';
import Tokyo from './tokyo';
import Chiba from './chibaprefecture';
import Kanagawa from './kanagawaprefecture';
import Saitama from './saitamaprefecture';

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

  const LocationComponent = ({ handleNext }) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const navigate = useNavigate();

    const handleLinkClick = () => {
      navigate(-1); // This will navigate back one step in the history
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <div className="PageHeader">
        <p>求人情報</p>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="検索" value="1" sx={{width:'50%'}}/>
            <Tab label="おすすめ" value="2" sx={{width:'50%'}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
        <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'20px', borderRadius:'0px', boxShadow: 'none'}}>
        <CardContent sx={{padding:'0px', paddingBottom:'0px !important'}}>
        <Link style={{textDecoration:'none'}} onClick={handleLinkClick}>
          <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
          <Grid container spacing={1}>
              <Grid item xs={1}>
              <Item><BackArrowIcon /></Item>
              </Grid>
              <Grid item xs={1}>
              <Item><MapsIcon /></Item>
              </Grid>
              <Grid item xs={10}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
          </Grid>
          </Box>
          </Link>
          
          <Grid container spacing={1} sx={{paddingTop: '40px', paddingBottom: '20px'}}>
            <Grid item xs={12}>
              <Tokyo />
              <Chiba />
              <Kanagawa />
              <Saitama />
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" onClick={handleLinkClick} sx={{width:'70%', marginBottom:'20px'}}>
            この条件で設定
          </Button>
        </CardContent>
      </Card>
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

  export default LocationComponent;
