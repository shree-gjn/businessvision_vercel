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
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
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

const OccupationComponent = ({ handleNext }) => {
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
                <Item><BuildingIcon /></Item>
                </Grid>
                <Grid item xs={10}>
                <Item sx={{textAlign:'left', fontSize:'12px'}}>̇職種</Item>
                </Grid>
            </Grid>
            </Box>
            </Link>
            <div style={{textAlign:'left', padding:'10px'}}>
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
                label="管理部門系全て"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
                label="経理"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
                label="財務・コントローラー"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
                label="会計・税務"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
                label="内部監査"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
                label="広報・IR"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox7} onChange={handleChangeOne('checkbox7')} />}
                label="管理部長"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} />}
                label="CFO（役員）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox9} onChange={handleChangeOne('checkbox9')} />}
                label="総務"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox10} onChange={handleChangeOne('checkbox10')} />}
                label="人事（採用・労務・教育など）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox11} onChange={handleChangeOne('checkbox11')} />}
                label="人事制度・企画"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox12} onChange={handleChangeOne('checkbox12')} />}
                label="法務・コンプライアンス"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox13} onChange={handleChangeOne('checkbox13')} />}
                label="特許・知的財産関連"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox14} onChange={handleChangeOne('checkbox14')} />}
                label="その他"
              /> 
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

export default OccupationComponent;
