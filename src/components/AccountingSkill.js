import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from './BottomNav';
import RecruitmentInfo from '../pages/RecruitmentInfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {RadioGroup, Radio, 
  FormControl, FormLabel} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as Accounting} from '../assets/Accounting.svg';
import {ReactComponent as BackArrowIcon} from '../assets/BackArrowIcon.svg';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
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

const AccountingSkill = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(-1); // This will navigate back one step in the history
  };

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
    checkbox14: false,
  });

  const handleChangeOne = (name) => (event) => {
    setCheckboxes({
      ...checkboxes,
      [name]: event.target.checked,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
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
      <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'20px', borderRadius:'0px' }}>
      <CardContent sx={{padding:'0px', paddingBottom:'0px !important'}}>
      <Link style={{textDecoration:'none'}} onClick={handleLinkClick}>
        <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
        <Grid container spacing={1}>
            <Grid item xs={1}>
            <Item><BackArrowIcon /></Item>
            </Grid>
            <Grid item xs={1}>
            <Item><Accounting /></Item>
            </Grid>
            <Grid item xs={10}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>経理スキル</Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <div style={{textAlign:'left', padding:'10px'}}>
        <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>日次取引仕訳</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>月次決算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>本決算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>予算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>拾与計算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>社会保障</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>消费税</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>法人税他</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>監查对象決算子会社</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>監查对象決算親合社</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>連結決算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>開示書類</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
        </div>
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

export default AccountingSkill;
