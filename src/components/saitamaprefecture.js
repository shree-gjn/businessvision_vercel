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

  const Saitama = ({ handleNext }) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const navigate = useNavigate();

    const handleLinkClick = () => {
      navigate(-1); // This will navigate back one step in the history
    };

    const [group1Checkboxes, setGroup1Checkboxes] = useState({
      上尾市: false,
      伊那町: false,
      桶川市: false,
      川口市: false,
      北本市: false,
      鴻巣市: false,
      さいたま市: false,
      戸田市: false,
      蕨市: false,
    });
    
    const [group2Checkboxes, setGroup2Checkboxes] = useState({
      春日部市: false,
      加須市: false,
      行田市: false,
      久喜市: false,
      越谷市: false,
      幸手市: false,
      白岡市: false,
      杉戸町: false,
      草加市: false,
      蓮田市: false,
      羽生市: false,
      松伏町: false,
      三郷市: false,
      宮代町: false,
      八潮市: false,
      吉川市: false,
    });

    const [group3Checkboxes, setGroup3Checkboxes] = useState({
      朝霞市: false,
      入間市: false,
      小川町: false,
      越生町: false,
      川越市: false,
      川島町: false,
      坂戸市: false,
      狭山市: false,
      志木市: false,
      鶴ヶ島市: false,
      ときがわ町: false,
      所沢市: false,
      滑川町: false,
      新座市: false,
      鳩山町: false,
      飯能市: false,
      東秩父市: false,
      日高市: false,
      ふじみ野市: false,
      富士見市: false,
      三芳町: false,
      毛呂山町: false,
      吉見町: false,
      嵐山町: false,
      和光市: false,
    });

    const [group4Checkboxes, setGroup4Checkboxes] = useState({
      上里町: false,
      神川町: false,
      寄居町: false,
      深谷市: false,
      熊谷市: false,
      本庄市: false,
      美里町: false,
    });

    const [group5Checkboxes, setGroup5Checkboxes] = useState({
      秩父市: false,
      小鹿野町: false,
      長瀞町: false,
      皆野町: false,
      横瀬町: false,
      本庄市: false,
      美里町: false,
    });


    const handleSelectAllGroup1 = (event) => {
      const updatedCheckboxes = { ...group1Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup1Checkboxes(updatedCheckboxes);
    };
    
    const handleSelectAllGroup2 = (event) => {
      const updatedCheckboxes = { ...group2Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup2Checkboxes(updatedCheckboxes);
    };
    
    const handleSelectAllGroup3 = (event) => {
      const updatedCheckboxes = { ...group3Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup3Checkboxes(updatedCheckboxes);
    };

    const handleSelectAllGroup4 = (event) => {
      const updatedCheckboxes = { ...group4Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup4Checkboxes(updatedCheckboxes);
    };

    const handleSelectAllGroup5 = (event) => {
      const updatedCheckboxes = { ...group5Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup5Checkboxes(updatedCheckboxes);
    };

    

    const handleChangeOne = (name, group) => (event) => {
      // if (group === 'group1') {
      //   setGroup1Checkboxes({
      //     ...group1Checkboxes,
      //     [name]: event.target.checked,
      //   });
      // } else if (group === 'group2') {
      //   setGroup2Checkboxes({
      //     ...group2Checkboxes,
      //     [name]: event.target.checked,
      //   });
      // }
      switch (group) {
        case 'group1':
          setGroup1Checkboxes({
            ...group1Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group2':
          setGroup2Checkboxes({
            ...group2Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group3':
          setGroup3Checkboxes({
            ...group3Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group4':
          setGroup4Checkboxes({
            ...group4Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group5':
          setGroup5Checkboxes({
            ...group5Checkboxes,
            [name]: event.target.checked,
          });
          break;
        // Add more cases for additional groups if needed
        default:
          break;
      }
    };

    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };

  
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <div style={{textAlign:'left', paddingBottom: '10px'}}>
            <Accordion style={{boxShadow: 'none'}} expanded={expanded}
          onChange={handleAccordionChange}>
              <AccordionSummary style={{background: 'rgb(22 55 90 / 10%)', borderRadius: '5px'}}
                 expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{color: '#16375A', fontSize: '14px'}}>埼玉県</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
              <div>
                <Divider />
                <Box sx={{padding: '10px'}}>
                  {/* Add a "Select All" checkbox for Group 1 */}
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group1Checkboxes).every((value) => value)} onChange={handleSelectAllGroup1} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>中央エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group1Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox sx={{ fontSize: '12px'}}
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group1')}
                                />
                              }
                              label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}} 
                            />
                          </FormGroup>
                        </Grid>
                      ))}
                    </Grid>

                </Box>

                <Box sx={{padding: '10px'}}>
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group2Checkboxes).every((value) => value)} onChange={handleSelectAllGroup2} />}
                       label={<Typography variant="body2" sx={{fontSize: '14px'}}>東部エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group2Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group2')}
                                />
                              }
                              label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}} 
                            />
                          </FormGroup>
                        </Grid>
                      ))}
                    </Grid> 
                </Box>

                <Box sx={{padding: '10px'}}>
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group3Checkboxes).every((value) => value)} onChange={handleSelectAllGroup3} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>西部エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group3Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group3')}
                                />
                              }
                              label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}} 
                            />
                          </FormGroup>
                        </Grid>
                      ))}
                    </Grid> 
                </Box>

                <Box sx={{padding: '10px'}}>
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group4Checkboxes).every((value) => value)} onChange={handleSelectAllGroup4} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>北部エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group4Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group4')}
                                />
                              }
                              label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}} 
                            />
                          </FormGroup>
                        </Grid>
                      ))}
                    </Grid> 
                </Box>

                <Box sx={{padding: '10px'}}>
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group5Checkboxes).every((value) => value)} onChange={handleSelectAllGroup5} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>秩父エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group5Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group5')}
                                />
                              }
                              label={<Typography variant="body1" sx={{fontSize: '12px'}}>{key}</Typography>} style={{fontSize: '12px'}} 
                            />
                          </FormGroup>
                        </Grid>
                      ))}
                    </Grid> 
                </Box>

              </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </ThemeProvider>
    );
  };

  export default Saitama;
