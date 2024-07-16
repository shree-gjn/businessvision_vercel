// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import Button from '@mui/material/Button';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import BottomNav from './BottomNav';
// import RecruitmentInfo from '../pages/RecruitmentInfo';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Link, useNavigate } from 'react-router-dom';
// import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
// import {ReactComponent as BackArrowIcon} from '../assets/BackArrowIcon.svg';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Divider from '@mui/material/Divider';
// import { FormGroup, Typography } from '@mui/material';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#16375A',
//       },
//       secondary: {
//         main: '#877151',
//       },
//       grey: {
//         main: '#949494', // Change to your desired color
//       },
//       text: {
//         grey: '#ffffff', // Change to your desired text color
//       },
//     },
//   });

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     boxShadow: 'none', 
//   }));

//   const Tokyo = ({ handleNext }) => {
//     const [value, setValue] = React.useState('1');

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };

//     const navigate = useNavigate();

//     const handleLinkClick = () => {
//       navigate(-1); // This will navigate back one step in the history
//     };

//     const [group1Checkboxes, setGroup1Checkboxes] = useState({
//       千代田区: false,
//       中央区: false,
//       港区: false,
//       新宿区: false,
//       文京区: false,
//       渋谷区: false,
//       豊島区: false,
//     });
    
//     const [group2Checkboxes, setGroup2Checkboxes] = useState({
//       台東区: false,
//       墨田区: false,
//       荒川区: false,
//       足立区: false,
//       葛飾区: false,
//       江東区: false,
//       江戸川区: false,
//     });

//     const [group3Checkboxes, setGroup3Checkboxes] = useState({
//       品川区: false,
//       目黒区: false,
//       大田区: false,
//     });

//     const [group4Checkboxes, setGroup4Checkboxes] = useState({
//       北区: false,
//       板橋区: false,
//     });

//     const [group5Checkboxes, setGroup5Checkboxes] = useState({
//       世田谷区: false,
//       中野区: false,
//       杉並区: false,
//       練馬区: false,
//     });

//     const [group6Checkboxes, setGroup6Checkboxes] = useState({
//       三鷹市: false,
//       調布市: false,
//       小金井市: false,
//       府中市: false,
//       武蔵野市: false,
//       狛江市: false,
//       東村山市: false,
//       小平市: false,
//       国分寺市: false,
//       東大和市: false,
//       清瀬市: false,
//       東久留米市: false,
//       武蔵村山市: false,
//       西東京市: false,
//       立川市: false,
//       昭島市: false,
//     });

//     const [group7Checkboxes, setGroup7Checkboxes] = useState({
//       八王子市: false,
//       日野市: false,
//       町田市: false,
//       多摩市: false,
//       稲城市: false,
//     });

//     const [group8Checkboxes, setGroup8Checkboxes] = useState({
//       青梅市: false,
//       日の出町: false,
//       羽村市: false,
//       あきる野市: false,
//       瑞穂町: false,
//       福生市: false,
//       檜原村: false,
//       奥多摩町: false,
//     });

//     const handleSelectAllGroup1 = (event) => {
//       const updatedCheckboxes = { ...group1Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup1Checkboxes(updatedCheckboxes);
//     };
    
//     const handleSelectAllGroup2 = (event) => {
//       const updatedCheckboxes = { ...group2Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup2Checkboxes(updatedCheckboxes);
//     };
    
//     const handleSelectAllGroup3 = (event) => {
//       const updatedCheckboxes = { ...group3Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup3Checkboxes(updatedCheckboxes);
//     };

//     const handleSelectAllGroup4 = (event) => {
//       const updatedCheckboxes = { ...group4Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup4Checkboxes(updatedCheckboxes);
//     };

//     const handleSelectAllGroup5 = (event) => {
//       const updatedCheckboxes = { ...group5Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup5Checkboxes(updatedCheckboxes);
//     };

//     const handleSelectAllGroup6 = (event) => {
//       const updatedCheckboxes = { ...group6Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup6Checkboxes(updatedCheckboxes);
//     };

//     const handleSelectAllGroup7 = (event) => {
//       const updatedCheckboxes = { ...group7Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup7Checkboxes(updatedCheckboxes);
//     };

//     const handleSelectAllGroup8 = (event) => {
//       const updatedCheckboxes = { ...group8Checkboxes };
//       Object.keys(updatedCheckboxes).forEach((key) => {
//         updatedCheckboxes[key] = event.target.checked;
//       });
//       setGroup8Checkboxes(updatedCheckboxes);
//     };

//     const handleChangeOne = (name, group) => (event) => {
//       // if (group === 'group1') {
//       //   setGroup1Checkboxes({
//       //     ...group1Checkboxes,
//       //     [name]: event.target.checked,
//       //   });
//       // } else if (group === 'group2') {
//       //   setGroup2Checkboxes({
//       //     ...group2Checkboxes,
//       //     [name]: event.target.checked,
//       //   });
//       // }
//       switch (group) {
//         case 'group1':
//           setGroup1Checkboxes({
//             ...group1Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         case 'group2':
//           setGroup2Checkboxes({
//             ...group2Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         case 'group3':
//           setGroup3Checkboxes({
//             ...group3Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         case 'group4':
//           setGroup4Checkboxes({
//             ...group4Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         case 'group5':
//           setGroup5Checkboxes({
//             ...group5Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         case 'group6':
//           setGroup6Checkboxes({
//             ...group6Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         case 'group7':
//           setGroup7Checkboxes({
//             ...group7Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         case 'group8':
//           setGroup8Checkboxes({
//             ...group8Checkboxes,
//             [name]: event.target.checked,
//           });
//           break;
//         // Add more cases for additional groups if needed
//         default:
//           break;
//       }
//     };

//     const [expanded, setExpanded] = useState(false);

//     const handleAccordionChange = () => {
//       setExpanded((prevExpanded) => !prevExpanded);
//     };

  
//     return (
//       <ThemeProvider theme={theme}>
//         <Box sx={{ width: '100%', typography: 'body1' }}>
//         <div style={{textAlign:'left', paddingBottom: '10px'}}>
//             <Accordion style={{boxShadow: 'none'}} expanded={expanded}
//           onChange={handleAccordionChange}>
//               <AccordionSummary style={{background: 'rgb(22 55 90 / 10%)', borderRadius: '5px'}}
//                expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"
//               >
//                 <Typography style={{color: '#16375A', fontSize: '14px'}}>東京都</Typography>
//               </AccordionSummary>
//               <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
//               <div>
//                 <Divider />
//                 <Box sx={{padding: '10px'}}>
//                   {/* Add a "Select All" checkbox for Group 1 */}
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group1Checkboxes).every((value) => value)} sx={{fontSize: '12px'}} onChange={handleSelectAllGroup1} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>都心・副都心地エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group1Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               control={
//                                 <Checkbox sx={{ fontSize: '12px'}}
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group1')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}}
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid>

//                 </Box>

//                 <Box sx={{padding: '10px'}}>
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group2Checkboxes).every((value) => value)} onChange={handleSelectAllGroup2} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>城東エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group2Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               sx={{ fontSize: '12px' }}
//                               control={
//                                 <Checkbox
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group2')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}}
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid> 
//                 </Box>

//                 <Box sx={{padding: '10px'}}>
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group3Checkboxes).every((value) => value)} onChange={handleSelectAllGroup3} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>城南エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group3Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               sx={{ fontSize: '12px' }}
//                               control={
//                                 <Checkbox
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group3')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}}
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid> 
//                 </Box>

//                 <Box sx={{padding: '10px'}}>
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group4Checkboxes).every((value) => value)} onChange={handleSelectAllGroup4} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>城北エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group4Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               sx={{ fontSize: '12px' }}
//                               control={
//                                 <Checkbox
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group4')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}}
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid> 
//                 </Box>

//                 <Box sx={{padding: '10px'}}>
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group5Checkboxes).every((value) => value)} onChange={handleSelectAllGroup5} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>城西エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group5Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               sx={{ fontSize: '12px' }}
//                               control={
//                                 <Checkbox
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group5')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}}
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid> 
//                 </Box>

//                 <Box sx={{padding: '10px'}}>
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group6Checkboxes).every((value) => value)} onChange={handleSelectAllGroup6} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>北多摩エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group6Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               sx={{ fontSize: '12px' }}
//                               control={
//                                 <Checkbox
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group6')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}}
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid> 
//                 </Box>

//                 <Box sx={{padding: '10px'}}>
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group7Checkboxes).every((value) => value)} onChange={handleSelectAllGroup7} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>南多摩エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group7Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               sx={{ fontSize: '12px' }}
//                               control={
//                                 <Checkbox
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group7')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}}
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid> 
//                 </Box>

//                 <Box sx={{padding: '10px'}}>
//                     <FormGroup>
//                       <FormControlLabel sx={{fontSize: '12px'}}
//                         control={<Checkbox checked={Object.values(group8Checkboxes).every((value) => value)} onChange={handleSelectAllGroup8} />}
//                         label={<Typography variant="body2" sx={{fontSize: '14px'}}>西多摩エリア</Typography>}
//                       />
//                     </FormGroup>

//                     <Grid container spacing={1}>
//                       {Object.entries(group8Checkboxes).map(([key, value]) => (
//                         <Grid item xs={4} key={key}>
//                           <FormGroup>
//                             <FormControlLabel
//                               sx={{ fontSize: '12px' }}
//                               control={
//                                 <Checkbox
//                                   checked={value}
//                                   onChange={handleChangeOne(key, 'group8')}
//                                 />
//                               }
//                               label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}} 
//                             />
//                           </FormGroup>
//                         </Grid>
//                       ))}
//                     </Grid> 
//                 </Box>

//               </div>
//               </AccordionDetails>
//             </Accordion>
//           </div>
//         </Box>
//       </ThemeProvider>
//     );
//   };

//   export default Tokyo;




import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import { FormGroup, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const theme = createTheme({
  palette: {
    primary: {
      main: '#16375A',
    },
    secondary: {
      main: '#877151',
    },
    grey: {
      main: '#949494',
    },
    text: {
      grey: '#ffffff',
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

const Tokyo = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const areaGroups = {
    '都心・副都心地エリア': ['千代田区', '中央区', '港区', '新宿区', '文京区', '渋谷区', '豊島区'],
    '城東エリア': ['台東区', '墨田区', '荒川区', '足立区', '葛飾区', '江東区', '江戸川区'],
    '城南エリア': ['品川区', '目黒区', '大田区'],
    '城西エリア': ['世田谷区', '中野区', '杉並区', '練馬区'],
    '北多摩エリア': [
      '三鷹市', '調布市', '小金井市', '府中市', '武蔵野市', '狛江市', '東村山市', '小平市', 
      '国分寺市', '東大和市', '清瀬市', '東久留米市', '武蔵村山市', '西東京市', '立川市', 
      '昭島市', '八王子市', '日野市', '町田市', '多摩市', '稲城市', '青梅市', '日の出町', 
      '羽村市', 'あきる野市', '瑞穂町', '福生市', '檜原村', '奥多摩町'
    ],
  };

  const [checkboxes, setCheckboxes] = useState(
    Object.keys(areaGroups).reduce((acc, area) => {
      acc[area] = false;
      return acc;
    }, {})
  );

  const handleChangeOne = (name) => (event) => {
    setCheckboxes({
      ...checkboxes,
      [name]: event.target.checked,
    });
  };

  const handleSelectAll = (event) => {
    const allChecked = Object.keys(checkboxes).reduce((acc, area) => {
      acc[area] = event.target.checked;
      return acc;
    }, {});
    setCheckboxes(allChecked);
  };

  const isAllSelected = Object.values(checkboxes).every((checked) => checked);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div style={{ textAlign: 'left', paddingBottom: '10px' }}>
          <Accordion style={{ boxShadow: 'none' }} expanded={expanded} onChange={handleAccordionChange}>
            <AccordionSummary
              style={{ background: 'rgb(22 55 90 / 10%)', borderRadius: '5px' }}
              expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
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
                          checked={isAllSelected}
                          onChange={handleSelectAll}
                        />
                      }
                      label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>すべて選択</Typography>}
                    />
                  </FormGroup>
                  {Object.keys(areaGroups).map((area) => (
                    <div key={area}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ fontSize: '14px' }}
                              checked={checkboxes[area]}
                              onChange={handleChangeOne(area)}
                            />
                          }
                          label={<Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{area}</Typography>}
                        />
                      </FormGroup>
                      <Typography variant="body1" sx={{ fontSize: '12px', marginLeft: '32px' }}>
                        {areaGroups[area].join('、')}
                      </Typography>
                    </div>
                  ))}
                </Box>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Tokyo;
