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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { fontSize } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#16375A',
      light: '#deeeff'
    },
    secondary: {
      main: '#877151',
    },
    grey: {
      main: '#949494', // Change to your desired color
    },
    primarylight: {
      main: '#deeeff',
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
        
          <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'20px', borderRadius:'0px', boxShadow: 'none'}}>
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
            <div style={{marginTop: '20px'}}>
              <Button onClick={handleToggle} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', textAlign: 'left', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
                {isExpanded ? 'IT・インタネット・ゲーム' : 'IT・インタネット・ゲーム'}
                {isExpanded ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
              <Collapse in={isExpanded} style={{boxShadow: 'none'}}>
              <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
                label={<Typography sx={{fontSize: '12px'}}>IT</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
                 label={<Typography sx={{fontSize: '12px'}}>通信キャリア</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
                label={<Typography sx={{fontSize: '12px'}}>インターネット広告・メディア</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
                label={<Typography sx={{fontSize: '12px'}}>Web制作・Webデザイン</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
                label={<Typography sx={{fontSize: '12px'}}>ゲーム</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
                label={<Typography sx={{fontSize: '12px'}}>IT・インターネット・ゲーム（その他）</Typography>}
              /> <br />
                </div>
              </Collapse>

              <Button onClick={handleToggle2} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded2 ? 'メーカー' : 'メーカー'}
              {isExpanded2 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded2}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox7} onChange={handleChangeOne('checkbox7')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（コンピューター・通信系）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（電気・電子・半導体）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox9} onChange={handleChangeOne('checkbox9')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（自動車・輸送機器）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox10} onChange={handleChangeOne('checkbox10')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（機械）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox11} onChange={handleChangeOne('checkbox11')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（化学・素材）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox12} onChange={handleChangeOne('checkbox12')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（食品）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox13} onChange={handleChangeOne('checkbox13')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（医療品・医療機器）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox14} onChange={handleChangeOne('checkbox14')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（ファッション・アパレル）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox15} onChange={handleChangeOne('checkbox15')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（日用品・化粧品）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox16} onChange={handleChangeOne('checkbox16')} />}
                label={<Typography sx={{fontSize: '12px'}}>メーカー（その他）</Typography>}
              /> <br />
                </div>
                </Collapse>
                <Button onClick={handleToggle3} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded3 ? '商社' : '商社'}
              {isExpanded3 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded3}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox17} onChange={handleChangeOne('checkbox17')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（総合）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox18} onChange={handleChangeOne('checkbox18')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（化学・石油・ガラス・セラミック・セメント）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox19} onChange={handleChangeOne('checkbox19')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（鉄鋼・金属）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox20} onChange={handleChangeOne('checkbox20')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（住宅・建材・エクステリア）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox21} onChange={handleChangeOne('checkbox21')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（医療品・化粧品・バイオ）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox22} onChange={handleChangeOne('checkbox22')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（食品）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox23} onChange={handleChangeOne('checkbox23')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（紙・パルプ）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox24} onChange={handleChangeOne('checkbox24')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（ファッション・アパレル）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox25} onChange={handleChangeOne('checkbox25')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（インテリア）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox26} onChange={handleChangeOne('checkbox26')} />}
                label={<Typography sx={{fontSize: '12px'}}>商社（その他）</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle4} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded4 ? '流通・小売・サービス' : '流通・小売・サービス'}
              {isExpanded4 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded4}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox27} onChange={handleChangeOne('checkbox27')} />}
                label={<Typography sx={{fontSize: '12px'}}>流通・小売（百貨店・スーパー・コンビニ）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox28} onChange={handleChangeOne('checkbox28')} />}
                label={<Typography sx={{fontSize: '12px'}}>流通・小売（ファッション・アパレル）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox29} onChange={handleChangeOne('checkbox29')} />}
                label={<Typography sx={{fontSize: '12px'}}>流通・小売（医薬品・化粧品）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox30} onChange={handleChangeOne('checkbox30')} />}
                label={<Typography sx={{fontSize: '12px'}}>流通・小売（食品）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox31} onChange={handleChangeOne('checkbox31')} />}
                label={<Typography sx={{fontSize: '12px'}}>流通・小売（家電）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox32} onChange={handleChangeOne('checkbox32')} />}
                label={<Typography sx={{fontSize: '12px'}}>通信販売</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox33} onChange={handleChangeOne('checkbox33')} />}
                label={<Typography sx={{fontSize: '12px'}}>フード・レストラン</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox34} onChange={handleChangeOne('checkbox34')} />}
                label={<Typography sx={{fontSize: '12px'}}>レジャー・アミューズメント</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox35} onChange={handleChangeOne('checkbox35')} />}
                label={<Typography sx={{fontSize: '12px'}}>ホテル・観光</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox36} onChange={handleChangeOne('checkbox36')} />}
                label={<Typography sx={{fontSize: '12px'}}>人材ビジネス</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox37} onChange={handleChangeOne('checkbox37')} />}
                label={<Typography sx={{fontSize: '12px'}}>コールセンター</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox38} onChange={handleChangeOne('checkbox38')} />}
                label={<Typography sx={{fontSize: '12px'}}>流通・小売・サービス（その他）</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle5} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded5 ? '広告・出版・マスコミ' : '広告・出版・マスコミ'}
              {isExpanded5 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded5}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox39} onChange={handleChangeOne('checkbox39')} />}
                label={<Typography sx={{fontSize: '12px'}}>放送・広告・印刷・出版</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle6} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded6 ? 'コンサルティング' : 'コンサルティング'}
              {isExpanded6 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded6}>
                <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox40} onChange={handleChangeOne('checkbox40')} />}
                label={<Typography sx={{fontSize: '12px'}}>コンサルティングファーム・シンクタンク</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle7} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded7 ? '金融' : '金融'}
              {isExpanded7 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded7}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox41} onChange={handleChangeOne('checkbox41')} />}
                label={<Typography sx={{fontSize: '12px'}}>金融（銀行）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox42} onChange={handleChangeOne('checkbox42')} />}
                label={<Typography sx={{fontSize: '12px'}}>融（保険）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox43} onChange={handleChangeOne('checkbox43')} />}
                label={<Typography sx={{fontSize: '12px'}}>金融（証券）</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox44} onChange={handleChangeOne('checkbox44')} />}
                label={<Typography sx={{fontSize: '12px'}}>金融（その他）</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle8} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded8 ? '建設・不動産' : '建設・不動産'}
              {isExpanded8 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded8}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox45} onChange={handleChangeOne('checkbox45')} />}
                label={<Typography sx={{fontSize: '12px'}}>不動産</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox46} onChange={handleChangeOne('checkbox46')} />}
                label={<Typography sx={{fontSize: '12px'}}>建築・土木</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle9} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded9 ? 'メディカル' : 'メディカル'}
              {isExpanded9 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded9}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox47} onChange={handleChangeOne('checkbox47')} />}
                label={<Typography sx={{fontSize: '12px'}}>医療</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox48} onChange={handleChangeOne('checkbox48')} />}
                label={<Typography sx={{fontSize: '12px'}}>福祉・介護</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle10} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded10 ? '物流・運輸' : '物流・運輸'}
              {isExpanded10 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded10}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox49} onChange={handleChangeOne('checkbox49')} />}
                label={<Typography sx={{fontSize: '12px'}}>物流・倉庫</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox50} onChange={handleChangeOne('checkbox50')} />}
                label={<Typography sx={{fontSize: '12px'}}>陸運・海運・航空・鉄道</Typography>}
              /> <br />
                </div>
                </Collapse>

                <Button onClick={handleToggle11} variant="contained" color="primarylight" sx={{ width: '100%', background:'#fff', color:'#000', borderRadius:'0px', justifyContent: 'space-between'}} style={{boxShadow: "none", borderBottom: '1px solid #ccc'}}>
              {isExpanded11 ? 'その他（インフラ・教育・官公庁）' : 'その他（インフラ・教育・官公庁）'}
              {isExpanded11 ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />} {/* expand and close icon*/}
              </Button>
                <Collapse in={isExpanded11}>
                <div style={{textAlign:'left', paddingLeft:'15px'}}>
                <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox51} onChange={handleChangeOne('checkbox51')} />}
                label={<Typography sx={{fontSize: '12px'}}>電気・ガス・水道</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox52} onChange={handleChangeOne('checkbox52')} />}
                label={<Typography sx={{fontSize: '12px'}}>教育・学校</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox53} onChange={handleChangeOne('checkbox53')} />}
                label={<Typography sx={{fontSize: '12px'}}>団体・連合会・官公庁</Typography>}
              /> <br />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox54} onChange={handleChangeOne('checkbox54')} />}
                label={<Typography sx={{fontSize: '12px'}}>その他業種</Typography>}
              /> <br />
                </div>
                </Collapse>

            </div>
            <Button variant="contained" color="secondary" onClick={handleLinkClick} sx={{width:'50%', marginBottom:'20px', marginTop:'20px'}}>
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
