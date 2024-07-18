import React, { useState, useEffect} from 'react';
// import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
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
import { display, fontSize, lineHeight } from '@mui/system';
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

const WorkLocation = () => {
  const [expanded, setExpanded] = useState({ tokyo: false, chiba: false, kanagawa: false, saitama: false });
  const [selectedPrefectures, setSelectedPrefectures] = useState({
    tokyo: [],
    chiba: [],
    kanagawa: [],
    saitama: []
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded({ ...expanded, [panel]: isExpanded });
  };

  const [checkboxes, setCheckboxes] = useState({
    tokyo: Object.keys(tokyoPrefecture).reduce((acc, area) => {
      acc[area] = false;
      return acc;
    }, {}),
    chiba: Object.keys(chibaPrefecture).reduce((acc, area) => {
      acc[area] = false;
      return acc;
    }, {}),
    kanagawa: Object.keys(kanagawaprefecture).reduce((acc, area) => {
      acc[area] = false;
      return acc;
    }, {}),
    saitama: Object.keys(saitamawaprefecture).reduce((acc, area) => {
      acc[area] = false;
      return acc;
    }, {})
  });

  const handleDeleteChip = (prefecture, area) => () => {
    setCheckboxes({
      ...checkboxes,
      [prefecture]: {
        ...checkboxes[prefecture],
        [area]: false,
      },
    });
  
    setSelectedPrefectures({
      ...selectedPrefectures,
      [prefecture]: selectedPrefectures[prefecture].filter((selectedArea) => selectedArea !== area),
    });
  };

  const handleChangeOne = (prefecture, area) => (event) => {
    setCheckboxes({
      ...checkboxes,
      [prefecture]: {
        ...checkboxes[prefecture],
        [area]: event.target.checked,
      },
    });
  
    if (event.target.checked) {
      setSelectedPrefectures({
        ...selectedPrefectures,
        [prefecture]: [...selectedPrefectures[prefecture], area],
      });
    } else {
      setSelectedPrefectures({
        ...selectedPrefectures,
        [prefecture]: selectedPrefectures[prefecture].filter((selectedArea) => selectedArea !== area),
      });
    }
  };

  const handleSelectAll = (prefecture) => (event) => {
    const newChecked = event.target.checked;
    const updatedCheckboxes = Object.keys(checkboxes[prefecture]).reduce((acc, area) => {
      acc[area] = newChecked;
      return acc;
    }, {});

    setCheckboxes({
      ...checkboxes,
      [prefecture]: updatedCheckboxes,
    });

    setSelectedPrefectures({
      ...selectedPrefectures,
      [prefecture]: newChecked ? Object.keys(checkboxes[prefecture]) : [],
    });
  };

  const isAllSelected = (prefecture) => {
    return Object.values(checkboxes[prefecture]).every((checked) => checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
            
      <Grid item xs={12} sx={{marginTop: '20px'}}>
          <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
            <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600'}}>
              <span><MapsIcon sx={{fontSize: '25px', width: '30px', display: 'block'}} /></span>
              勤務地
            </Typography>
          </Item>
          <Item sx={{padding: '0'}}>
            <Accordion style={{ boxShadow: 'none', marginBottom: '5px'}} expanded={expanded.tokyo} onChange={handleAccordionChange('tokyo')}>
              <AccordionSummary
                style={{border: '1px solid rgba(0, 0, 0, 0.23)',  borderRadius: '5px' }}
                expandIcon={expanded.tokyo ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: '#16375A', fontSize: '14px' }}>東京都</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                <div>
                  {/* <Divider /> */}
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
                style={{border: '1px solid rgba(0, 0, 0, 0.23)',  borderRadius: '5px' }}
                expandIcon={expanded.chiba ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: '#16375A', fontSize: '14px' }}>千葉県</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                <div>
                  {/* <Divider /> */}
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
                style={{border: '1px solid rgba(0, 0, 0, 0.23)',  borderRadius: '5px' }}
                expandIcon={expanded.kanagawa ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: '#16375A', fontSize: '14px' }}>神奈川県</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                <div>
                  {/* <Divider /> */}
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
                style={{border: '1px solid rgba(0, 0, 0, 0.23)',  borderRadius: '5px' }}
                expandIcon={expanded.saitama ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ color: '#16375A', fontSize: '14px' }}>埼玉県</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0px', textAlign: 'left' }}>
                <div>
                  {/* <Divider /> */}
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
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default WorkLocation;
