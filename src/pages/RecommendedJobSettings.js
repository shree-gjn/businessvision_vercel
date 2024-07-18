import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom'; 
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, RadioGroup, Radio, 
//   FormControl, FormControlLabel, Typography, Button, Switch, FormLabel} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Grid, FormLabel, Select, MenuItem, Checkbox, Switch} from '@mui/material';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import { width } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordianBasicInfo from './registration/components/AccordianBasicInfo';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import {ReactComponent as GoIcon} from '../assets/GoIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as YenIcon} from '../assets/YenIcon.svg';
import {ReactComponent as GroupIcon} from '../assets/Groupicon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as Accounting} from '../assets/Accounting.svg'
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import WorkLocation from '../components/worklocation';
import CustomTooltip from '../components/customtooltip';
import Chip from '@mui/material/Chip';
import SkillSearch from '../components/skillsearch';
import FormGroup from '@mui/material/FormGroup';
import {FormControlLabel,RadioGroup, Radio, FormControl, TextField, Multiline} from '@mui/material';

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

const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft:'15px', 
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
}));

const toggleItems = [
  { label: '年収', key: 'annualIncome' },
  { label: '勤務地', key: 'Worklocation' },
  { label: '職種', key: 'Industry' },
  { label: '企業カテゴリ', key: 'Companycategory' },
  { label: '従業員数', key: 'NumberOfEmployees' },
  { label: '経理スキル', key: 'AccountingSkills' },
];

const CustomToggleButton = styled(ToggleButton)(({ theme, selected }) => ({
  minWidth: '70px',
  padding: '5px',
  backgroundColor: selected ? '#16375A !important' : '#fff !important' ,
  color: selected ? '#fff !important' : theme.palette.primary.main,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.action.hover,
  },
}));

const CustomChildToggleButton = styled(ToggleButton)(({ theme, selected }) => ({
  minWidth: '70px',
  padding: '5px',
  backgroundColor: selected ? '#999 !important' : '#fff !important' ,
  color: selected ? '#fff !important' : '#999',
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.action.hover,
  },
}));

const RecommendedJobSettings = () => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('recommendedJobSettings');
    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          recommendedSettings: 'オフ',
          recommendedDetail: 'オフ',
          annualIncome: '希望どおり',
          Worklocation: '希望どおり',
          Industry: '希望どおり',
          Companycategory: '希望どおり',
          NumberOfEmployees: '希望どおり',
          AccountingSkills: '希望どおり',
        };
  });


  useEffect(() => {
    localStorage.setItem('recommendedJobSettings', JSON.stringify(settings));
  }, [settings]);

  const handleSettingChange = (event, newAlignment, key) => {
    if (newAlignment !== null) {
      setSettings(prevSettings => ({
        ...prevSettings,
        [key]: newAlignment,
      }));

      if (key === 'recommendedSettings' && newAlignment === 'オフ') {
        setSettings(prevSettings => ({
          ...prevSettings,
          annualIncome: '希望どおり',
          Worklocation: '希望どおり',
          Industry: '希望どおり',
          Companycategory: '希望どおり',
          NumberOfEmployees: '希望どおり',
          AccountingSkills: '希望どおり',
        }));
      }
    }
  };


  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const skilllevel = [
    { level: 'L4', description: '指導・管理できる' },
    { level: 'L3', description: '自身で判断しながら処理することができる' },
    { level: 'L2', description: '指導を受けながら一通り処理することができる' },
    { level: 'L1', description: '指導を受けながら一部処理することができる' },
    { level: 'L0', description: '実務経験がない' }
  ];

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
  
  const handleSearch = (event) => {
    console.log('Search:', event.target.value);
  };

  const handleupperlimitChange = (event) => {
    setupperlimit(event.target.value);
  };

  const handlelowerlimitChange = (event) => {
    setlowerlimit(event.target.value);
  };
  
  


  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>おすすめ求人設定</p>
      </div>
      <Box sx={{padding: '24px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Item>おすすめ求人設定</Item>
            <Item>
              <ToggleButtonGroup
                color="primary"
                value={settings.recommendedSettings}
                exclusive
                onChange={(event, newAlignment) => handleSettingChange(event, newAlignment, 'recommendedSettings')}
                aria-label="Platform"
              >
                <CustomToggleButton sx={{minWidth: '70px', padding: '5px'}} value="オフ">オフ</CustomToggleButton>
                <CustomToggleButton sx={{minWidth: '70px', padding: '5px'}} value="オン">オン</CustomToggleButton>
              </ToggleButtonGroup>
            </Item>
          </Grid>
          {settings.recommendedSettings === 'オン' && toggleItems.map((item, index) => (
            <Grid className='recommended-setting-child' item xs={12} key={item.key} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0'}}>
              <Item>
                <Typography>{item.label}</Typography>
              </Item>
              <Item>
                <ToggleButtonGroup
                  color="primary"
                  value={settings[item.key]}
                  exclusive
                  onChange={(event, newAlignment) => handleSettingChange(event, newAlignment, item.key)}
                  aria-label={item.label}
                >
                  <CustomChildToggleButton sx={{ minWidth: '100px', padding: '5px'}} value="希望どおり">希望どおり</CustomChildToggleButton>
                  <CustomChildToggleButton sx={{ minWidth: '100px', padding: '5px'}} value="こだわらない">
                    {index === 0 || index === toggleItems.length - 1 ? '少し広め' : 'こだわらない'}
                  </CustomChildToggleButton>
                </ToggleButtonGroup>
              </Item>
            </Grid>
          ))}
         
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Item>
              詳細おすすめ求人設定
            </Item>
            <Item>
              <ToggleButtonGroup
                color="primary"
                value={settings.recommendedDetail}
                exclusive
                onChange={(event, newAlignment) => handleSettingChange(event, newAlignment, 'recommendedDetail')}
                aria-label="Platform"
              >
                <CustomToggleButton sx={{minWidth: '70px', padding: '5px'}} value="オフ">オフ</CustomToggleButton>
                <CustomToggleButton sx={{minWidth: '70px', padding: '5px'}} value="オン">オン</CustomToggleButton>
              </ToggleButtonGroup>
            </Item>
          </Grid>
          
          {settings.recommendedDetail === 'オン' && (
            <>
            <Grid item xs={12}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
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
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
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
         
          <Grid item xs={12}>
            <WorkLocation />
          </Grid>

          <Grid item xs={12} sx={{marginTop: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
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
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
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

          <SkillSearch />

          <Grid item xs={12}>
            <Item>
              <Button variant='contained' color='primary'>この条件で検索する</Button>
            </Item>
            <Item sx={{padding: '0'}}>
              <Button variant="text">検索条件をリセット</Button>
            </Item>
          </Grid>
            </>
          )}
        </Grid>
      </Box>

      <Grid container sx={{marginBottom: '50px'}}>

      </Grid>
      <BottomNav />
    </ThemeProvider>
  );
};

export default RecommendedJobSettings;
