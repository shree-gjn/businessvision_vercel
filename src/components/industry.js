import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  CardContent,
  Checkbox,
  Collapse,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import RecruitmentInfo from '../pages/RecruitmentInfo';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BackArrowIcon} from '../assets/BackArrowIcon.svg';
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

const IndustryComponent = ({ handleNext }) => {
  const [value, setValue] = React.useState('1');
  const [checkboxes, setCheckboxes] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    // Add more checkboxes as neededd
  });
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);
  const [isExpanded3, setExpanded3] = useState(false);
  const [isExpanded4, setExpanded4] = useState(false);
  const [isExpanded5, setExpanded5] = useState(false);
  const [isExpanded6, setExpanded6] = useState(false);
  const [isExpanded7, setExpanded7] = useState(false);
  const [isExpanded8, setExpanded8] = useState(false);
  const [isExpanded9, setExpanded9] = useState(false);
  const [isExpanded10, setExpanded10] = useState(false);
  const [isExpanded11, setExpanded11] = useState(false);


  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  const handleToggle2 = () => {
    setExpanded2(!isExpanded2);
  };

  const handleToggle3 = () => {
    setExpanded3(!isExpanded3);
  };

  const handleToggle4 = () => {
    setExpanded4(!isExpanded4);
  };

  const handleToggle5 = () => {
    setExpanded5(!isExpanded5);
  };

  const handleToggle6 = () => {
    setExpanded6(!isExpanded6);
  };

  const handleToggle7 = () => {
    setExpanded7(!isExpanded7);
  };

  const handleToggle8 = () => {
    setExpanded8(!isExpanded8);
  };

  const handleToggle9 = () => {
    setExpanded9(!isExpanded9);
  };

  const handleToggle10 = () => {
    setExpanded10(!isExpanded10);
  };

  const handleToggle11 = () => {
    setExpanded11(!isExpanded11);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(-1); // This will navigate back one step in the history
  };

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
                <Item><BagIcon /></Item>
                </Grid>
                <Grid item xs={10}>
                <Item sx={{textAlign:'left', fontSize:'12px'}}>業種</Item>
                </Grid>
            </Grid>
            </Box>
            </Link>
            <div>
              <Button onClick={handleToggle} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', textAlign: 'left', justifyContent: 'space-between'}}>
                {isExpanded ? 'IT・インタネット・ゲーム' : 'IT・インタネット・ゲーム'}
                {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
              <Collapse in={isExpanded}>
              <div style={{textAlign:'left', paddingLeft:'20px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
                label="IT"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
                label="通信キャリア"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
                label="インターネット広告・メディア"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
                label="Web制作・Webデザイン"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
                label="ゲーム"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
                label="IT・インターネット・ゲーム（その他）"
              /> <br />
                </div>
              </Collapse>

              <Button onClick={handleToggle2} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded2 ? 'メーカー' : 'メーカー'}
              {isExpanded2 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded2}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox7} onChange={handleChangeOne('checkbox7')} />}
                label="メーカー（コンピューター・通信系）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} />}
                label="メーカー（電気・電子・半導体）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox9} onChange={handleChangeOne('checkbox9')} />}
                label="メーカー（自動車・輸送機器）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox10} onChange={handleChangeOne('checkbox10')} />}
                label="メーカー（機械）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox11} onChange={handleChangeOne('checkbox11')} />}
                label="メーカー（化学・素材）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox12} onChange={handleChangeOne('checkbox12')} />}
                label="メーカー（食品）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox13} onChange={handleChangeOne('checkbox13')} />}
                label="メーカー（医療品・医療機器）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox14} onChange={handleChangeOne('checkbox14')} />}
                label="メーカー（ファッション・アパレル）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox15} onChange={handleChangeOne('checkbox15')} />}
                label="メーカー（日用品・化粧品）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox16} onChange={handleChangeOne('checkbox16')} />}
                label="メーカー（その他）"
              /> <br />
                </div>
                </Collapse>
                <Button onClick={handleToggle3} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded3 ? '商社' : '商社'}
              {isExpanded3 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded3}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox17} onChange={handleChangeOne('checkbox17')} />}
                label="商社（総合）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox18} onChange={handleChangeOne('checkbox18')} />}
                label="商社（化学・石油・ガラス・セラミック・セメント）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox19} onChange={handleChangeOne('checkbox19')} />}
                label="商社（鉄鋼・金属）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox20} onChange={handleChangeOne('checkbox20')} />}
                label="商社（住宅・建材・エクステリア）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox21} onChange={handleChangeOne('checkbox21')} />}
                label="商社（医療品・化粧品・バイオ）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox22} onChange={handleChangeOne('checkbox22')} />}
                label="商社（食品）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox23} onChange={handleChangeOne('checkbox23')} />}
                label="商社（紙・パルプ）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox24} onChange={handleChangeOne('checkbox24')} />}
                label="商社（ファッション・アパレル）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox25} onChange={handleChangeOne('checkbox25')} />}
                label="商社（インテリア）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox26} onChange={handleChangeOne('checkbox26')} />}
                label="商社（その他）"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle4} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded4 ? '流通・小売・サービス' : '流通・小売・サービス'}
              {isExpanded4 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded4}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox27} onChange={handleChangeOne('checkbox27')} />}
                label="流通・小売（百貨店・スーパー・コンビニ）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox28} onChange={handleChangeOne('checkbox28')} />}
                label="流通・小売（ファッション・アパレル）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox29} onChange={handleChangeOne('checkbox29')} />}
                label="流通・小売（医薬品・化粧品）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox30} onChange={handleChangeOne('checkbox30')} />}
                label="流通・小売（食品）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox31} onChange={handleChangeOne('checkbox31')} />}
                label="流通・小売（家電）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox32} onChange={handleChangeOne('checkbox32')} />}
                label="通信販売"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox33} onChange={handleChangeOne('checkbox33')} />}
                label="フード・レストラン"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox34} onChange={handleChangeOne('checkbox34')} />}
                label="レジャー・アミューズメント"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox35} onChange={handleChangeOne('checkbox35')} />}
                label="ホテル・観光"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox36} onChange={handleChangeOne('checkbox36')} />}
                label="人材ビジネス"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox37} onChange={handleChangeOne('checkbox37')} />}
                label="コールセンター"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox38} onChange={handleChangeOne('checkbox38')} />}
                label="流通・小売・サービス（その他）"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle5} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded5 ? '広告・出版・マスコミ' : '広告・出版・マスコミ'}
              {isExpanded5 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded5}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox39} onChange={handleChangeOne('checkbox39')} />}
                label="放送・広告・印刷・出版"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle6} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded6 ? 'コンサルティング' : 'コンサルティング'}
              {isExpanded6 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded6}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox40} onChange={handleChangeOne('checkbox40')} />}
                label="コンサルティングファーム・シンクタンク"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle7} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded7 ? '金融' : '金融'}
              {isExpanded7 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded7}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox41} onChange={handleChangeOne('checkbox41')} />}
                label="金融（銀行）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox42} onChange={handleChangeOne('checkbox42')} />}
                label="金融（保険）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox43} onChange={handleChangeOne('checkbox43')} />}
                label="金融（証券）"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox44} onChange={handleChangeOne('checkbox44')} />}
                label="金融（その他）"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle8} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded8 ? '建設・不動産' : '建設・不動産'}
              {isExpanded8 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded8}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox45} onChange={handleChangeOne('checkbox45')} />}
                label="不動産"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox46} onChange={handleChangeOne('checkbox46')} />}
                label="建築・土木"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle9} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded9 ? 'メディカル' : 'メディカル'}
              {isExpanded9 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded9}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox47} onChange={handleChangeOne('checkbox47')} />}
                label="医療"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox48} onChange={handleChangeOne('checkbox48')} />}
                label="福祉・介護"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle10} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded10 ? '物流・運輸' : '物流・運輸'}
              {isExpanded10 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded10}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox49} onChange={handleChangeOne('checkbox49')} />}
                label="物流・倉庫"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox50} onChange={handleChangeOne('checkbox50')} />}
                label="陸運・海運・航空・鉄道"
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle11} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}}>
              {isExpanded11 ? 'その他（インフラ・教育・官公庁）' : 'その他（インフラ・教育・官公庁）'}
              {isExpanded11 ? <ExpandLessIcon /> : <ExpandMoreIcon />} {/* Add arrow icon */}
              </Button>
                <Collapse in={isExpanded11}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox51} onChange={handleChangeOne('checkbox51')} />}
                label="電気・ガス・水道"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox52} onChange={handleChangeOne('checkbox52')} />}
                label="教育・学校"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox53} onChange={handleChangeOne('checkbox53')} />}
                label="団体・連合会・官公庁"
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox54} onChange={handleChangeOne('checkbox54')} />}
                label="その他業種"
              /> <br />
                </div>
                </Collapse>

            </div>
            <Button variant="contained" color="primary" onClick={handleLinkClick} sx={{width:'70%', marginBottom:'20px', marginTop:'20px'}}>
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

export default IndustryComponent;
