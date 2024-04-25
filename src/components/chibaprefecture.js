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

  const Chiba = ({ handleNext }) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const navigate = useNavigate();

    const handleLinkClick = () => {
      navigate(-1); // This will navigate back one step in the history
    };

    const [group1Checkboxes, setGroup1Checkboxes] = useState({
      我孫子市: false,
      柏市: false,
      鎌ヶ谷市: false,
      流山市: false,
      野田市: false,
      松戸市: false,
    });
    
    const [group2Checkboxes, setGroup2Checkboxes] = useState({
      市川市: false,
      市原市: false,
      浦安市: false,
      千葉市: false,
      習志野市: false,
      船橋市: false,
      八千代市: false,
    });

    const [group3Checkboxes, setGroup3Checkboxes] = useState({
      印西市: false,
      栄町: false,
      佐倉市: false,
      酒々井町: false,
      白井市: false,
      富里市: false,
      成田市: false,
      八街市: false,
      四街道市: false,
    });

    const [group4Checkboxes, setGroup4Checkboxes] = useState({
      香取市: false,
      神崎町: false,
      多古町: false,
      東庄町: false,
    });

    const [group5Checkboxes, setGroup5Checkboxes] = useState({
      旭市: false,
      匝瑳市: false,
      銚子市: false,
    });

    const [group6Checkboxes, setGroup6Checkboxes] = useState({
      木更津市: false,
      君津市: false,
      袖ヶ浦市: false,
      富津市: false,
    });

    const [group7Checkboxes, setGroup7Checkboxes] = useState({
      大網白里市: false,
      九十九里町: false,
      山武市: false,
      芝山町: false,
      東金市: false,
      横芝光町: false,
    });

    const [group8Checkboxes, setGroup8Checkboxes] = useState({
      一宮町: false,
      白子町: false,
      長南町: false,
      長柄町: false,
      陸奥沢町: false,
      茂原市: false,
    });

    const [group9Checkboxes, setGroup9Checkboxes] = useState({
      いすみ市: false,
      大多喜町: false,
      御宿町: false,
      勝浦市: false,
    });

    const [group10Checkboxes, setGroup10Checkboxes] = useState({
      鴨川市: false,
      鋸南町: false,
      館山市: false,
      南房総市: false,
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

    const handleSelectAllGroup6 = (event) => {
      const updatedCheckboxes = { ...group6Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup6Checkboxes(updatedCheckboxes);
    };

    const handleSelectAllGroup7 = (event) => {
      const updatedCheckboxes = { ...group7Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup7Checkboxes(updatedCheckboxes);
    };

    const handleSelectAllGroup8 = (event) => {
      const updatedCheckboxes = { ...group8Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup8Checkboxes(updatedCheckboxes);
    };

    const handleSelectAllGroup9 = (event) => {
      const updatedCheckboxes = { ...group9Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup9Checkboxes(updatedCheckboxes);
    };

    const handleSelectAllGroup10 = (event) => {
      const updatedCheckboxes = { ...group10Checkboxes };
      Object.keys(updatedCheckboxes).forEach((key) => {
        updatedCheckboxes[key] = event.target.checked;
      });
      setGroup10Checkboxes(updatedCheckboxes);
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
        case 'group6':
          setGroup6Checkboxes({
            ...group6Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group7':
          setGroup7Checkboxes({
            ...group7Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group8':
          setGroup8Checkboxes({
            ...group8Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group9':
          setGroup9Checkboxes({
            ...group9Checkboxes,
            [name]: event.target.checked,
          });
          break;
        case 'group10':
          setGroup10Checkboxes({
            ...group10Checkboxes,
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
                <Typography style={{color: '#16375A', fontSize: '14px'}}>千葉県</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
              <div>
                <Divider />
                <Box sx={{padding: '10px'}}>
                  {/* Add a "Select All" checkbox for Group 1 */}
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group1Checkboxes).every((value) => value)} onChange={handleSelectAllGroup1} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>東葛飾エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>京葉エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>印旛エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>香取エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>海匝エリア</Typography>}
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

                <Box sx={{padding: '10px'}}>
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group6Checkboxes).every((value) => value)} onChange={handleSelectAllGroup6} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>君津エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group6Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group6')}
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
                        control={<Checkbox checked={Object.values(group7Checkboxes).every((value) => value)} onChange={handleSelectAllGroup7} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>山武エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group7Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group7')}
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
                        control={<Checkbox checked={Object.values(group8Checkboxes).every((value) => value)} onChange={handleSelectAllGroup8} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>長生エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group8Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group8')}
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
                        control={<Checkbox checked={Object.values(group9Checkboxes).every((value) => value)} onChange={handleSelectAllGroup9} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>夷隅エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group9Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group9')}
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
                        control={<Checkbox checked={Object.values(group10Checkboxes).every((value) => value)} onChange={handleSelectAllGroup10} />}
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>安房エリア</Typography>}
                      />
                    </FormGroup>

                    <Grid container spacing={1}>
                      {Object.entries(group10Checkboxes).map(([key, value]) => (
                        <Grid item xs={4} key={key}>
                          <FormGroup>
                            <FormControlLabel
                              sx={{ fontSize: '12px' }}
                              control={
                                <Checkbox
                                  checked={value}
                                  onChange={handleChangeOne(key, 'group10')}
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

  export default Chiba;
