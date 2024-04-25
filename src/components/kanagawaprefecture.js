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

  const Kanagawa = ({ handleNext }) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const navigate = useNavigate();

    const handleLinkClick = () => {
      navigate(-1); // This will navigate back one step in the history
    };

    const [group1Checkboxes, setGroup1Checkboxes] = useState({
      鶴見区: false,
      神奈川区: false,
      西区: false,
      中区: false,
      南区: false,
      港南区: false,
      保土ヶ谷区: false,
      旭区: false,
      磯子区: false,
      金沢区: false,
      港北区: false,
      緑区: false,
      青葉区: false,
      都筑区: false,
      戸塚区: false,
      栄区: false,
      泉区: false,
      瀬谷区: false,
    });
    
    const [group2Checkboxes, setGroup2Checkboxes] = useState({
      麻生区: false,
      多摩区: false,
      高津区: false,
      宮前区: false,
      中原区: false,
      幸区: false,
      川崎区: false,
    });

    const [group3Checkboxes, setGroup3Checkboxes] = useState({
      横須賀市: false,
      鎌倉市: false,
      逗子市: false,
      三浦市: false,
      葉山町: false,
    });

    const [group4Checkboxes, setGroup4Checkboxes] = useState({
      相模原市: false,
      厚木市: false,
      大和市: false,
      海老名市: false,
      座間市: false,
      綾瀬市: false,
      愛川町: false,
      清川村: false,
    });

    const [group5Checkboxes, setGroup5Checkboxes] = useState({
      平塚市: false,
      藤沢市: false,
      茅ヶ崎市: false,
      秦野市: false,
      伊勢原市: false,
      寒川町: false,
      大磯町: false,
      二宮町: false,
    });

    const [group6Checkboxes, setGroup6Checkboxes] = useState({
      小田原市: false,
      南足柄市: false,
      中井町: false,
      大井町: false,
      松田町: false,
      山北町: false,
      開成町: false,
      箱根町: false,
      真鶴町: false,
      湯河原町: false,
    });

    const [group7Checkboxes, setGroup7Checkboxes] = useState({
      八王子市: false,
      日野市: false,
      町田市: false,
      多摩市: false,
      稲城市: false,
    });

    const [group8Checkboxes, setGroup8Checkboxes] = useState({
      青梅市: false,
      日の出町: false,
      羽村市: false,
      あきる野市: false,
      瑞穂町: false,
      福生市: false,
      檜原村: false,
      奥多摩町: false,
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
                <Typography style={{color: '#16375A', fontSize: '14px'}}>神奈川県</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
              <div>
                <Divider />
                <Box sx={{padding: '10px'}}>
                  {/* Add a "Select All" checkbox for Group 1 */}
                    <FormGroup>
                      <FormControlLabel sx={{fontSize: '12px'}}
                        control={<Checkbox checked={Object.values(group1Checkboxes).every((value) => value)} onChange={handleSelectAllGroup1} />}
                       label={<Typography variant="body2" sx={{fontSize: '14px'}}>横浜市エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>川崎市エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>横須賀三浦エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>県央エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>湘南エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>県西エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>南多摩エリア</Typography>}
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
                        label={<Typography variant="body2" sx={{fontSize: '14px'}}>西多摩エリア</Typography>}
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

              </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </ThemeProvider>
    );
  };

  export default Kanagawa;
