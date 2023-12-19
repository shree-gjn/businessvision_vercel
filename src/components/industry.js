import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from '../components/BottomNav';
import RecruitmentInfo from '../pages/RecruitmentInfo';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as BackArrowIcon} from '../assets/BackArrowIcon.svg';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Collapse from '@mui/material/Collapse';

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
    // Add more checkboxes as needed
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
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
      <p>求人情報</p>
    </div>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="求人検索" value="1" sx={{width:'50%'}}/>
          <Tab label="求人案内" value="2" sx={{width:'50%'}}/>
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
          <Button onClick={handleToggle} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
            {isExpanded ? 'IT・インタネット・ゲーム' : 'IT・インタネット・ゲーム'}
          </Button>
          <Collapse in={isExpanded}>
          <div style={{textAlign:'left', paddingLeft:'20px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('IT')} />}
            label="IT"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('通信キャリア')} />}
            label="通信キャリア"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('インターネット広告・メディア')} />}
            label="インターネット広告・メディア"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('Web制作・Webデザイン')} />}
            label="Web制作・Webデザイン"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('ゲーム')} />}
            label="ゲーム"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('IT・インターネット・ゲーム（その他）')} />}
            label="IT・インターネット・ゲーム（その他）"
          /> <br />
            </div>
          </Collapse>

          <Button onClick={handleToggle2} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded2 ? 'メーカー' : 'メーカー'}
          </Button>
            <Collapse in={isExpanded2}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('メーカー（コンピューター・通信系）')} />}
            label="メーカー（コンピューター・通信系）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('メーカー（電気・電子・半導体）')} />}
            label="メーカー（電気・電子・半導体）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('メーカー（自動車・輸送機器）')} />}
            label="メーカー（自動車・輸送機器）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('メーカー（機械）')} />}
            label="メーカー（機械）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('メーカー（化学・素材）')} />}
            label="メーカー（化学・素材）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('メーカー（食品）')} />}
            label="メーカー（食品）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('メーカー（医療品・医療機器）')} />}
            label="メーカー（医療品・医療機器）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('メーカー（ファッション・アパレル）')} />}
            label="メーカー（ファッション・アパレル）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('メーカー（日用品・化粧品）')} />}
            label="メーカー（日用品・化粧品）"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('メーカー（その他）')} />}
            label="メーカー（その他）"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle3} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded3 ? '商社' : '商社'}
          </Button>
            <Collapse in={isExpanded3}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle4} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded4 ? '流通・小売・サービス' : '流通・小売・サービス'}
          </Button>
            <Collapse in={isExpanded4}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle5} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded5 ? '広告・出版・マスコミ' : '広告・出版・マスコミ'}
          </Button>
            <Collapse in={isExpanded5}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle6} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded6 ? 'コンサルティング' : 'コンサルティング'}
          </Button>
            <Collapse in={isExpanded6}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle7} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded7 ? '金融' : '金融'}
          </Button>
            <Collapse in={isExpanded7}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle8} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded8 ? '建設・不動産' : '建設・不動産'}
          </Button>
            <Collapse in={isExpanded8}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle9} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded3 ? 'メディカル' : 'メディカル'}
          </Button>
            <Collapse in={isExpanded9}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle10} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded10 ? '物流・運輸' : '物流・運輸'}
          </Button>
            <Collapse in={isExpanded10}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
          /> <br />
            </div>
            </Collapse>

            <Button onClick={handleToggle11} variant="contained" color="primary" sx={{ width: '90%', background:'#fff', color:'#000', borderRadius:'0px' }}>
          {isExpanded11 ? 'その他（インフラ・教育・官公庁）' : 'その他（インフラ・教育・官公庁）'}
          </Button>
            <Collapse in={isExpanded11}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
            label="Checkbox 1"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
            label="Checkbox 2"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
            label="Checkbox 3"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
            label="Checkbox 4"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
            label="Checkbox 5"
          /> <br />
          <FormControlLabel
            control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
            label="Checkbox 6"
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
  );
};

export default IndustryComponent;
