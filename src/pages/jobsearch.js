import React, { useState, useEffect} from 'react';
// import TextField from '@mui/material/TextField';
import { Collapse } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {FormControlLabel,RadioGroup, Radio, FormControl, FormLabel,Checkbox, MenuItem, TextField, Multiline, Button} from '@mui/material';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ReactComponent as GoIcon} from '../assets/GoIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as YenIcon} from '../assets/YenIcon.svg';
import {ReactComponent as GroupIcon} from '../assets/Groupicon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as Accounting} from '../assets/Accounting.svg'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import { display, fontSize, lineHeight, textAlign } from '@mui/system';
import Tokyo from '../components/tokyo';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AccordianBasicInfo from './registration/components/AccordianBasicInfo';
import WorkLocation from '../components/worklocation';
import CustomTooltip from '../components/customtooltip';
import SkillSearch from '../components/skillsearch';
import theme from './theme';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none', 
}));

  // const skilllevel = [
  //   { level: 'L4', description: '指導・管理できる' },
  //   { level: 'L3', description: '自身で判断しながら処理することができる' },
  //   { level: 'L2', description: '指導を受けながら一通り処理することができる' },
  //   { level: 'L1', description: '指導を受けながら一部処理することができる' },
  //   { level: 'L0', description: '実務経験がない' }
  // ];

  const Upperlimitincome = [
    { value: '', label: '下限無し', disabled: true },
    { value: '299万円以上', label: '299万円以上' },
    { value: '300万円以上', label: '300万円以上' },
    { value: '350万円以上', label: '350万円以上' },
    { value: '400万円以上', label: '400万円以上' },
    { value: '450万円以上', label: '450万円以上' },
    { value: '500万円以上', label: '500万円以上' },
    { value: '550万円以上', label: '550万円以上' },
    { value: '600万円以上', label: '600万円以上' },
    { value: '650万円以上', label: '650万円以上' },
    { value: '700万円以上', label: '700万円以上' },
    { value: '750万円以上', label: '750万円以上' },
    { value: '800万円以上', label: '800万円以上' },
    { value: '850万円以上', label: '850万円以上' },
    { value: '900万円以上', label: '900万円以上' },
    { value: '950万円以上', label: '950万円以上' },
    { value: '1000万円以上', label: '1000万円以上' },
    { value: '1050万円以上', label: '1050万円以上' },
    { value: '1100万円以上', label: '1100万円以上' },
    { value: '1150万円以上', label: '1150万円以上' },
    { value: '1200万円以上', label: '1200万円以上' },
    { value: '1250万円以上', label: '1250万円以上' },
    { value: '1300万円以上', label: '1300万円以上' },
    { value: '1350万円以上', label: '1350万円以上' },
    { value: '1400万円以上', label: '1400万円以上' },
    { value: '1450万円以上', label: '1450万円以上' },
    { value: '1500万円以上', label: '1500万円以上' },
    { value: '1550万円以上', label: '1550万円以上' },
    { value: '1600万円以上', label: '1600万円以上' },
    { value: '1650万円以上', label: '1650万円以上' },
    { value: '1700万円以上', label: '1700万円以上' },
    { value: '1750万円以上', label: '1750万円以上' },
    { value: '1800万円以上', label: '1800万円以上' },
    { value: '1850万円以上', label: '1850万円以上' },
    { value: '1900万円以上', label: '1900万円以上' },
    { value: '1950万円以上', label: '1950万円以上' },
    { value: '2000万円以上', label: '2000万円以上' },
    { value: '2500万円以上', label: '2500万円以上' },
    { value: '3000万円以上', label: '3000万円以上' },
    { value: '5000万円以上', label: '5000万円以上' }
  ];

  const lowerlimitincome = [
    { value: '', label: '上限無し', disabled: true },
    { value: '300万円以下', label: '300万円以下' },
    { value: '350万円以下', label: '350万円以下' },
    { value: '400万円以下', label: '400万円以下' },
    { value: '450万円以下', label: '450万円以下' },
    { value: '500万円以下', label: '500万円以下' },
    { value: '550万円以下', label: '550万円以下' },
    { value: '600万円以下', label: '600万円以下' },
    { value: '650万円以下', label: '650万円以下' },
    { value: '700万円以下', label: '700万円以下' },
    { value: '750万円以下', label: '750万円以下' },
    { value: '800万円以下', label: '800万円以下' },
    { value: '850万円以下', label: '850万円以下' },
    { value: '900万円以下', label: '900万円以下' },
    { value: '950万円以下', label: '950万円以下' },
    { value: '1000万円以下', label: '1000万円以下' },
    { value: '1050万円以下', label: '1050万円以下' },
    { value: '1100万円以下', label: '1100万円以下' },
    { value: '1150万円以下', label: '1150万円以下' },
    { value: '1200万円以下', label: '1200万円以下' },
    { value: '1250万円以下', label: '1250万円以下' },
    { value: '1300万円以下', label: '1300万円以下' },
    { value: '1350万円以下', label: '1350万円以下' },
    { value: '1400万円以下', label: '1400万円以下' },
    { value: '1450万円以下', label: '1450万円以下' },
    { value: '1500万円以下', label: '1500万円以下' },
    { value: '1550万円以下', label: '1550万円以下' },
    { value: '1600万円以下', label: '1600万円以下' },
    { value: '1650万円以下', label: '1650万円以下' },
    { value: '1700万円以下', label: '1700万円以下' },
    { value: '1750万円以下', label: '1750万円以下' },
    { value: '1800万円以下', label: '1800万円以下' },
    { value: '1850万円以下', label: '1850万円以下' },
    { value: '1900万円以下', label: '1900万円以下' },
    { value: '1950万円以下', label: '1950万円以下' },
    { value: '2000万円以下', label: '2000万円以下' },
    { value: '2500万円以下', label: '2500万円以下' },
    { value: '3000万円以下', label: '3000万円以下' },
    { value: '5000万円以下', label: '5000万円以下' }
  ];

  const tokyoPrefecture = {
    '都心・副都心地エリア': ['千代田区', '中央区', '港区', '新宿区', '文京区', '渋谷区', '豊島区'],
    '城東エリア': ['台東区', '墨田区', '荒川区', '足立区', '葛飾区', '江東区', '江戸川区'],
    '城南エリア': ['品川区', '目黒区', '大田区'],
    '城西エリア': ['世田谷区', '中野区', '杉並区', '練馬区'],
    '北多摩エリア': [
      '三鷹市', '調布市', '小金井市', '府中市', '武蔵野市', '狛江市', '東村山市', '小平市', 
      '国分寺市', '東大和市', '清瀬市', '東久留米市', '武蔵村山市', '西東京市', '立川市', 
      '昭島市'
    ],
    '南多摩エリア': ['八王子市', '日野市', '町田市', '多摩市', '稲城市'],
    '西多摩エリア': ['青梅市', '日の出町', '羽村市', 'あきる野市', '瑞穂町', '福生市', '檜原村', '奥多摩町'],
  };

  const chibaPrefecture = {
    '東葛飾エリア': ['市川市', '浦安市', '柏市', '鎌ヶ谷市', '松戸市', '流山市', '野田市'],
    '京葉エリア': ['千葉市', '市原市', '習志野市', '船橋市', '八千代市', '木更津市'],
    '印旛エリア': ['佐倉市', '成田市', '四街道市', '富里市'],
    '香取エリア': ['香取市', '神崎町', '多古町', '東庄町'],
    '海匝エリア': ['旭市', '匝瑳市', '銚子市'],
    '君津エリア': ['君津市', '富津市', '木更津市', '袖ケ浦市'],
    '山武エリア': ['山武市', '大網白里市', '九十九里町', '芝山町', '横芝光町'],
    '長生エリア': ['茂原市', '一宮町', '睦沢町', '長生村', '白子町', '長南町', '長柄町'],
    '夷隅エリア': ['いすみ市', '大多喜町', '御宿町'],
    '安房エリア': ['館山市', '鴨川市', '南房総市'],
  };

  const kanagawaprefecture = {
    '横浜市エリア': [
      '鶴見区', '神奈川区', '西区', '中区', '南区', '港南区', '保土ヶ谷区', '旭区', '磯子区', '金沢区',
      '港北区', '緑区', '青葉区', '都筑区', '戸塚区', '栄区', '泉区', '瀬谷区'
    ],
    '川崎市エリア': ['麻生区', '多摩区', '高津区', '宮前区', '中原区', '幸区', '川崎区'],
    '横須賀三浦エリア': ['横須賀市', '鎌倉市', '逗子市', '三浦市', '葉山町'],
    '県央エリア': ['相模原市', '厚木市', '大和市', '海老名市', '座間市', '綾瀬市', '愛川町', '清川村'],
    '湘南エリア': ['平塚市', '藤沢市', '茅ヶ崎市', '秦野市', '伊勢原市', '寒川町', '大磯町', '二宮町'],
    '県西エリア': ['小田原市', '南足柄市', '中井町', '大井町', '松田町', '山北町', '開成町', '箱根町', '真鶴町', '湯河原町'],
    '南多摩エリア': ['八王子市', '日野市', '町田市', '多摩市', '稲城市'],
    '西多摩エリア': ['青梅市', '日の出町', '羽村市', 'あきる野市', '瑞穂町', '福生市', '檜原村', '奥多摩町'],
  };

  const saitamawaprefecture = {
    '中央エリア': [
      '上尾市', '伊那町', '桶川市', '川口市', '北本市', '鴻巣市', 'さいたま市', '戸田市', '蕨市'
    ],
    '東部エリア': [
      '春日部市', '加須市', '行田市', '久喜市', '越谷市', '幸手市', '白岡市', '杉戸町', '草加市',
      '蓮田市', '羽生市', '松伏町', '三郷市', '宮代町', '八潮市', '吉川市'
    ],
   '西部エリア': [
      '朝霞市', '入間市', '小川町', '越生町', '川越市', '川島町', '坂戸市', '狭山市', '志木市',
      '鶴ヶ島市', 'ときがわ町', '所沢市', '滑川町', '新座市', '鳩山町', '飯能市', '東秩父市',  
      '日高市', 'ふじみ野市', '富士見市', '三芳町', '毛呂山町', '吉見町', '嵐山町', '和光市', 
    ],
    '北部エリア': [
      '上里町', '神川町', '寄居町', '深谷市', '熊谷市', '本庄市', '美里町'
    ],
    '秩父エリア': [
      '秩父市', '小鹿野町', '長瀞町', '皆野町', '横瀬町', '本庄市', '美里町'
    ],
  };

const JobSearch = () => {
  const [upperlimit, setupperlimit] = useState('');
  const [lowerlimit, setlowerlimit] = useState('');
  const [expanded, setExpanded] = useState({ tokyo: false, chiba: false, kanagawa: false, saitama: false });
  const [selectedValues, setSelectedValues] = React.useState({
    group1: '',
    group2: '',
    group3: '',
    group4: '',
    group5: '',
    group6: '',
    group7: '',
    group8: '',
    group9: '',
    group10: '',
    group11: '',
    group12: '',
  });

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (checkboxLabel, isChecked) => {
    if (isChecked) {
      setSelectedCheckboxes((prevSelectedCheckboxes) => [...prevSelectedCheckboxes, checkboxLabel]);
    } else {
      setSelectedCheckboxes((prevSelectedCheckboxes) =>
        prevSelectedCheckboxes.filter((label) => label !== checkboxLabel)
      );
    }
  };

  const handleIndustryDeleteChip = (chipToDelete) => {
    setSelectedCheckboxes((prevSelectedCheckboxes) =>
      prevSelectedCheckboxes.filter((label) => label !== chipToDelete)
    );
  };

  // const handleChange = (event, group) => {
  //   setSelectedValues(prevState => ({
  //     ...prevState,
  //     [group]: event.target.value
  //   }));
  // };
  
  const handleSearch = (event) => {
    console.log('Search:', event.target.value);
  };

  const handleupperlimitChange = (event) => {
    setupperlimit(event.target.value);
  };

  const handlelowerlimitChange = (event) => {
    setlowerlimit(event.target.value);
  };
  
  // const controlProps = (item, selectedValue, handleChange) => ({
  //   checked: selectedValue === item,
  //   onChange: handleChange,
  //   value: item,
  //   name: 'size-radio-button-demo',
  //   inputProps: { 'aria-label': item },
  // });

  // const [tooltipOpen, setTooltipOpen] = useState({
  //   tooltip1: false,
  //   tooltip2: false,
  //   tooltip3: false,
  //   tooltip4: false,
  //   tooltip5: false,
  //   tooltip6: false,
  //   tooltip7: false,
  //   tooltip8: false,
  //   tooltip9: false,
  //   tooltip10: false,
  //   tooltip11: false,
  //   tooltip12: false,
  // });

  // const handleTooltipOpen = (tooltip) => {
  //   setTooltipOpen({ ...tooltipOpen, [tooltip]: true });
  // };

  // const handleTooltipClose = (tooltip) => {
  //   setTooltipOpen({ ...tooltipOpen, [tooltip]: false });
  // };

  // const [tooltipOpen, setTooltipOpen] = useState({});

  // const handleTooltipOpen = (tooltip) => {
  //   setTooltipOpen((prev) => ({ ...prev, [tooltip]: true }));
  // };

  // const handleTooltipClose = (tooltip) => {
  //   setTooltipOpen((prev) => ({ ...prev, [tooltip]: false }));
  // };

  // const tooltips = [
  //   { key: 'tooltip1', title: '現金入出金、預金入出金、一般経理、源泉所得税、給与、社会保険、預金利息、配当金、消費税区分、インボイス' },
  //   { key: 'tooltip2', title: '売上計上、仕入計上、在庫計上、売掛金・買掛金・未払金残高照会、消費税チェック、納税関連仕訳' },
  //   // Add other tooltips here
  // ];
  

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={2} sx={{padding: '0'}}>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', position: 'relative', padding: '0'}}>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              onChange={handleSearch}
              fullWidth
            />
            <IconButton aria-label="search" color="primary" size="small" sx={{width: '30px', height: '30px', background: '#d5dbe1', borderRadius: '5px', position: 'absolute', right: '0', marginRight: '5px'}}>
              <SearchIcon sx={{fontSize: '20px'}} />
            </IconButton>
          </Grid>
          <Grid item xs={12} sx={{marginTop: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600'}}>
                <span><YenIcon sx={{fontSize: '25px', display: 'block'}} /></span>
                年収
              </Typography>
            </Item>
            <Item sx={{padding: '0'}}>
              <FormControl sx={{display: 'flex', justifyContent: 'space-between', gap: '20px', flexDirection: 'row', textAlign: 'left'}} >
                <Select
                  id="upperlimit"
                  value={upperlimit}
                  onChange={handleupperlimitChange}
                  fullWidth
                  displayEmpty
                  sx={{fontSize: '14px'}}
                > 
                  {Upperlimitincome.map((option, index) => (
                    <MenuItem key={index} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  id="lowerlimit"
                  value={lowerlimit}
                  onChange={handlelowerlimitChange}
                  fullWidth
                  displayEmpty
                  sx={{fontSize: '14px'}}
                > 
                  {lowerlimitincome.map((option, index) => (
                    <MenuItem key={index} value={option.value} disabled={option.disabled}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{marginTop: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600'}}>
                <span><BagIcon sx={{fontSize: '25px', display: 'block'}} /></span>
                業種
              </Typography>
            </Item>
            <Item sx={{marginBottom: '5px'}}>
              <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="希望しない業種"
                  name="radio-buttons-group"
                  sx={{justifyContent: 'space-between'}}
                >
                <FormControlLabel sx={{marginRight: '7px'}} value="希望する業種" control={<Radio size="small"  sx={{padding: '0', marginRight: '5px'}} />} label={<Typography style={{fontSize: '12px'}}>希望する業種</Typography>} />
                <FormControlLabel sx={{marginRight: '7px'}} value="希望しない業種" control={<Radio size="small" sx={{padding: '0', marginRight: '5px'}} />} label={<Typography style={{fontSize: '12px'}}>希望しない業種</Typography>} />
                <FormControlLabel sx={{marginRight: '7px'}} value="こだわらない" control={<Radio size="small" sx={{padding: '0', marginRight: '5px'}} />} label={<Typography style={{fontSize: '12px'}}>こだわらない</Typography>} />
              </RadioGroup>
            </Item>
            <Item sx={{padding: '0', textAlign: 'left'}}>
              <AccordianBasicInfo
                selectedCheckboxes={selectedCheckboxes}
                onCheckboxChange={handleCheckboxChange}
                sx={{textAlign: 'left'}}
              />
            </Item>
            <Box sx={{textAlign: 'left', marginTop: '10px'}}>
              {selectedCheckboxes.map((checkboxLabel, index) => (
                <Chip
                  key={index}
                  label={checkboxLabel}
                  onDelete={() => handleIndustryDeleteChip(checkboxLabel)}
                  sx={{ marginRight: 1, marginBottom: 1 }}
                />
              ))}
            </Box>
          </Grid>
          
          {/* <Grid item xs={12} sx={{marginTop: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span><MapsIcon sx={{fontSize: '25px', width: '30px', display: 'block'}} /></span>
                勤務地
              </Typography>
            </Item>
            <Item sx={{padding: '0'}}>
              <Accordion style={{ boxShadow: 'none', marginBottom: '5px'}} expanded={expanded.tokyo} onChange={handleAccordionChange('tokyo')}>
                <AccordionSummary
                  style={{ background: 'rgb(22 55 90 / 10%)', borderRadius: '5px' }}
                  expandIcon={expanded.tokyo ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ color: '#16375A', fontSize: '14px' }}>東京都</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                  <div>
                    <Divider />
                    <Box sx={{ padding: '10px' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ fontSize: '14px' }}
                              checked={isAllSelected('tokyo')}
                              onChange={handleSelectAll('tokyo')}
                            />
                          }
                          label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>すべて選択</Typography>}
                        />
                      </FormGroup>
                      {Object.keys(tokyoPrefecture).map((area) => (
                        <div key={area}>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{ fontSize: '14px' }}
                                  checked={checkboxes.tokyo[area]}
                                  onChange={handleChangeOne('tokyo', area)}
                                />
                              }
                              label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{area}</Typography>}
                            />
                          </FormGroup>
                          <Typography variant="body1" sx={{ fontSize: '12px', marginLeft: '32px' }}>
                            {tokyoPrefecture[area].join('、')}
                          </Typography>
                        </div>
                      ))}
                    </Box>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Box sx={{marginBottom: '5px', textAlign: 'left'}}>
                {selectedPrefectures.tokyo.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={handleDeleteChip('tokyo', value)}
                    sx={{ marginRight: '5px', marginBottom: '5px' }}
                  />
                ))}
              </Box>
              <Accordion style={{ boxShadow: 'none', marginBottom: '5px' }} expanded={expanded.chiba} onChange={handleAccordionChange('chiba')}>
                <AccordionSummary
                  style={{ background: 'rgb(22 55 90 / 10%)', borderRadius: '5px' }}
                  expandIcon={expanded.chiba ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ color: '#16375A', fontSize: '14px' }}>千葉県</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                  <div>
                    <Divider />
                    <Box sx={{ padding: '10px' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ fontSize: '14px' }}
                              checked={isAllSelected('chiba')}
                              onChange={handleSelectAll('chiba')}
                            />
                          }
                          label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>すべて選択</Typography>}
                        />
                      </FormGroup>
                      {Object.keys(chibaPrefecture).map((area) => (
                        <div key={area}>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{ fontSize: '14px' }}
                                  checked={checkboxes.chiba[area]}
                                  onChange={handleChangeOne('chiba', area)}
                                />
                              }
                              label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{area}</Typography>}
                            />
                          </FormGroup>
                          <Typography variant="body1" sx={{ fontSize: '12px', marginLeft: '32px' }}>
                            {chibaPrefecture[area].join('、')}
                          </Typography>
                        </div>
                      ))}
                    </Box>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Box sx={{marginBottom: '5px', textAlign: 'left'}}>
                {selectedPrefectures.chiba.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={handleDeleteChip('chiba', value)}
                    sx={{ marginRight: '5px', marginBottom: '5px' }}
                  />
                ))}
              </Box>
              <Accordion style={{ boxShadow: 'none', marginBottom: '5px'}} expanded={expanded.kanagawa} onChange={handleAccordionChange('kanagawa')}>
                <AccordionSummary
                  style={{ background: 'rgb(22 55 90 / 10%)', borderRadius: '5px' }}
                  expandIcon={expanded.kanagawa ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ color: '#16375A', fontSize: '14px' }}>神奈川県</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                  <div>
                    <Divider />
                    <Box sx={{ padding: '10px' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ fontSize: '14px' }}
                              checked={isAllSelected('kanagawa')}
                              onChange={handleSelectAll('kanagawa')}
                            />
                          }
                          label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>すべて選択</Typography>}
                        />
                      </FormGroup>
                      {Object.keys(kanagawaprefecture).map((area) => (
                        <div key={area}>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{ fontSize: '14px' }}
                                  checked={checkboxes.kanagawa[area]}
                                  onChange={handleChangeOne('kanagawa', area)}
                                />
                              }
                              label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{area}</Typography>}
                            />
                          </FormGroup>
                          <Typography variant="body1" sx={{ fontSize: '12px', marginLeft: '32px' }}>
                            {kanagawaprefecture[area].join('、')}
                          </Typography>
                        </div>
                      ))}
                    </Box>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Box sx={{marginBottom: '5px', textAlign: 'left'}}>
                {selectedPrefectures.kanagawa.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={handleDeleteChip('kanagawa', value)}
                    sx={{ marginRight: '5px', marginBottom: '5px' }}
                  />
                ))}
              </Box>
              <Accordion style={{ boxShadow: 'none', marginBottom: '5px'}} expanded={expanded.saitama} onChange={handleAccordionChange('saitama')}>
                <AccordionSummary
                  style={{ background: 'rgb(22 55 90 / 10%)', borderRadius: '5px' }}
                  expandIcon={expanded.saitama ? <RemoveIcon /> : <AddIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ color: '#16375A', fontSize: '14px' }}>埼玉県</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                  <div>
                    <Divider />
                    <Box sx={{ padding: '10px' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ fontSize: '14px' }}
                              checked={isAllSelected('saitama')}
                              onChange={handleSelectAll('saitama')}
                            />
                          }
                          label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>すべて選択</Typography>}
                        />
                      </FormGroup>
                      {Object.keys(saitamawaprefecture).map((area) => (
                        <div key={area}>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{ fontSize: '14px' }}
                                  checked={checkboxes.saitama[area]}
                                  onChange={handleChangeOne('saitama', area)}
                                />
                              }
                              label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{area}</Typography>}
                            />
                          </FormGroup>
                          <Typography variant="body1" sx={{ fontSize: '12px', marginLeft: '32px' }}>
                            {saitamawaprefecture[area].join('、')}
                          </Typography>
                        </div>
                      ))}
                    </Box>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Box sx={{marginBottom: '5px', textAlign: 'left'}}>
                {selectedPrefectures.saitama.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={handleDeleteChip('saitama', value)}
                    sx={{ marginRight: '5px', marginBottom: '5px' }}
                  />
                ))}
              </Box>
            </Item>
          </Grid> */}
         
          <Grid item xs={12}>
            <WorkLocation />
          </Grid>

          <Grid item xs={12} sx={{marginTop: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600'}}>
                <span><BuildingIcon sx={{fontSize: '25px', display: 'block'}} /></span>
                企業カテゴリ
              </Typography>
            </Item>
            <Item>
            <FormGroup sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <FormControlLabel control={<Checkbox />} label="上場企業" />
              <FormControlLabel control={<Checkbox />} label="上場グループ企業" />
              <FormControlLabel control={<Checkbox />} label="非上場企業" />
              <FormControlLabel control={<Checkbox />} label="外資系企業" />
              <FormControlLabel control={<Checkbox />} label="ベンチャー企業" />
              <FormControlLabel control={<Checkbox />} label="官公庁" />
              <FormControlLabel control={<Checkbox />} label="団体" />
              <FormControlLabel control={<Checkbox />} label="こだわらない" />
            </FormGroup>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{marginTop: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600'}}>
                <span><GroupIcon sx={{fontSize: '25px', display: 'block'}} /></span>
                従業員数
              </Typography>
            </Item>
            <Item>
            <FormGroup sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <FormControlLabel control={<Checkbox />} label="10名以下" />
              <FormControlLabel control={<Checkbox />} label="11～50名" />
              <FormControlLabel control={<Checkbox />} label="51～100名" />
              <FormControlLabel control={<Checkbox />} label="101～500名" />
              <FormControlLabel control={<Checkbox />} label="501～1000名" />
              <FormControlLabel control={<Checkbox />} label="1000名以上" />
              <FormControlLabel control={<Checkbox />} label="こだわらない" />
            </FormGroup>
            </Item>
          </Grid>

          {/* <Grid item xs={12} sx={{marginTop: '20px', marginBottom: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span><Accounting sx={{fontSize: '25px', display: 'block'}} /></span>
                経理スキル
              </Typography>
            </Item>
            <TableContainer sx={{marginBottom: '20px', border: '1px solid rgba(224, 224, 224, 1)'}}>
              <Table>
                <TableBody>
                  {skilllevel.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" sx={{background: '#2F75B5'}}>
                        <Typography variant="h6" sx={{fontSize: '12px', fontWeight: '600', color: '#fff'}}>{item.level}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{fontSize: '12px'}}>{item.description}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
           
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{width: '48%'}}>
                  </TableCell>
                  <TableCell sx={{width: '52%', display: 'flex', gap: '25px'}}>
                    <Typography sx={{fontSize: '12px'}}>L0</Typography>
                    <Typography sx={{fontSize: '12px'}}>L1</Typography>
                    <Typography sx={{fontSize: '12px'}}>L2</Typography>
                    <Typography sx={{fontSize: '12px'}}>L3</Typography>
                    <Typography sx={{fontSize: '12px'}}>L4</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
           </TableContainer>

            <TableContainer sx={{border: '1px solid rgba(224, 224, 224, 1)'}}>
              <Table>
                <TableBody>
                  <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>日次取引仕訳 
                     <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip1')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip1')}
                            open={tooltipOpen.tooltip1}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="現金入出金、預金入出金、一般経理、源泉所得税、給与、社会保険、預金利息、配当金、消費税区分、インボイス"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip1')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group1} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group1')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>月次決算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip2')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip2')}
                            open={tooltipOpen.tooltip2}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="売上計上、仕入計上、在庫計上、売掛金・買掛金・未払金残高照会、消費税チェック、納税関連仕訳"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip2')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group2} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group2')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>本決算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip3')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip3')}
                            open={tooltipOpen.tooltip3}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="減価償却費、前払費用、未払費用、引当金、貸倒損失、未払給与、未払社会保険、棚卸資産、仕掛品、仮受仮払消費税チェック、未払消費税、未払法人税等"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip3')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group3} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group3')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>予算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip4')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip4')}
                            open={tooltipOpen.tooltip4}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="予算作成、実績分析"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip4')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group4} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group4')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>給与計算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip5')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip5')}
                            open={tooltipOpen.tooltip5}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="給与計算、控除計算（所得税、住民税、社会保険料）、所得税・住民税納付、社会保険料納付"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip5')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group5} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group5')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>社会保険 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip6')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip6')}
                            open={tooltipOpen.tooltip6}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="入退社事務、算定基礎届、賞与支払届、離職票、労働保険申告、産前産後休暇、育児休暇"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip6')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group6} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group6')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>消費税 
                      <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip7')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip7')}
                            open={tooltipOpen.tooltip7}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="インボイス、消費税区分、仮受仮払消費税チェック、簡易課税、免税判定、仕入税額控除（個別対応・一括比例）、課税売上手割合、消費税計算、税務申告書作成"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip7')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group7} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group7')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>法人税ほか 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip8')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip8')}
                          open={tooltipOpen.tooltip8}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="申告基礎資料、外形標準課税、税務申告書作成"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip8')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group8} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group8')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>監査対象決算 子会社 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip9')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip9')}
                          open={tooltipOpen.tooltip9}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="資産除去債務、減損会計、収益認識会計、税効果会計"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip9')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group9} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group9')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>監査対象決算 親会社
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip10')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip10')}
                          open={tooltipOpen.tooltip10}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="資産除去債務、減損会計、研究開発費、金融商品会計、収益認識会計、退職給付会計、企業融合会計、リース会計、ストックオプション会計、税効果会計"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip10')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group10} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group10')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>連結決算
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip11')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip11')}
                          open={tooltipOpen.tooltip11}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="連結会計、持分法、連結財務諸表、注記情報、セグメント情報"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip11')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group11} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group11')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>開示書類
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip12')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip12')}
                          open={tooltipOpen.tooltip12}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="キャッシュフロー計算書、決算短信、四半期報告書、有価証券報告書、関連当事者情報、時価情報、注記情報"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip12')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group12} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group12')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
               
                </TableBody>

                
              </Table>
            </TableContainer>
          </Grid> */}

          <SkillSearch />

          <Grid item xs={12}>
            <Item>
              <Button variant='contained' color='primary'>この条件で検索する</Button>
            </Item>
            <Item sx={{padding: '0'}}>
              <Button variant="text">検索条件をリセット</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>

     <Grid container sx={{marginBottom: '100px'}}>     
     </Grid>
    </ThemeProvider>
  );
};

export default JobSearch;




