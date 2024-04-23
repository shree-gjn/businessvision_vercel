import React from 'react';
// import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
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
import {FormControlLabel, Checkbox, MenuItem, TextField, Multiline, Button} from '@mui/material';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ReactComponent as GoIcon} from '../assets/GoIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as YenIcon} from '../assets/YenIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as AccountingSkill} from '../assets/AccountingSkill.svg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));

const JobSearch = () => {
  // You can handle search functionality and state here

  const [checkboxes, setCheckboxes] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    // Add more checkboxes as neededd
  });

  const handleChangeOne = (name) => (event) => {
    setCheckboxes({
      ...checkboxes,
      [name]: event.target.checked,
    });
  };

  const handleSearch = (event) => {
    // Handle search logic here
    console.log('Search:', event.target.value);
  };

  const handleReset = () => {
    // Handle reset logic here
    console.log('Resetting search conditions');
  };

  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        onChange={handleSearch}
        fullWidth
      />
      <IconButton aria-label="search" color="primary" size="small">
        <SearchIcon />
      </IconButton>
      </div>
      
      <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'20px', borderRadius:'0px' }}>
      <CardContent sx={{padding:'0px', paddingBottom:'0px !important'}}>
      {/* <Link to="/occupation" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
        <Grid container spacing={1}>
            <Grid item xs={1}>
            <Item><BuildingIcon /></Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>̇職種</Item>
            </Grid>
            <Grid item xs={2}>
            <Item><GoIcon /></Item>
            </Grid>
        </Grid>
        </Box>
        </Link> */}
        {/* <Link to="/industry" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
        <Grid container spacing={1}>
        <Grid item xs={1}>
            <Item><BagIcon /></Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>業種</Item>
            </Grid>
            <Grid item xs={2}>
            <Item><GoIcon /></Item>
            </Grid>
        </Grid>
        </Box>
        </Link> */}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{padding: '0 10px'}}
        >
          <BagIcon style={{marginRight: '10px'}} />
          <Typography style={{fontSize: '12px'}}>業種</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Link to="/industry" style={{textDecoration:'none'}}>
            <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
            <Grid container spacing={1}>
            <Grid item xs={1}>
                <Item><BagIcon /></Item>
                </Grid>
                <Grid item xs={9}>
                <Item sx={{textAlign:'left', fontSize:'12px'}}>希望する業種</Item>
                </Grid>
                <Grid item xs={2}>
                <Item><GoIcon /></Item>
                </Grid>
            </Grid>
            </Box>
          </Link>
          <Link to="/industry" style={{textDecoration:'none'}}>
            <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
            <Grid container spacing={1}>
            <Grid item xs={1}>
                <Item><BagIcon /></Item>
                </Grid>
                <Grid item xs={9}>
                <Item sx={{textAlign:'left', fontSize:'12px'}}>希望しない業種</Item>
                </Grid>
                <Grid item xs={2}>
                <Item><GoIcon /></Item>
                </Grid>
            </Grid>
            </Box>
          </Link>
          <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%', margin: '0', fontSize: '12px'}}
            control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{fontSize: '12px'}} />}
            label="こだわらない"
          />
        </div>
        </AccordionDetails>
        </Accordion>
        <Link to="/income" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
        <Grid container spacing={1}>
        <Grid item xs={1}>
            <Item><YenIcon /></Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>年収</Item>
            </Grid>
            <Grid item xs={2}>
            <Item><GoIcon /></Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Link to="/location" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
        <Grid container spacing={1}>
        <Grid item xs={1}>
            <Item><MapsIcon /></Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
            </Grid>
            <Grid item xs={2}>
            <Item><GoIcon /></Item>
            </Grid>
        </Grid>
        </Box>
        </Link>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{padding: '0 10px'}}
        >
          <AccountingSkill style={{marginRight: '10px'}} />
          <Typography style={{fontSize: '12px'}}>経理スキル</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Link to="" style={{textDecoration:'none'}}>
            <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
            <Grid container spacing={1}>
            <Grid item xs={1}>
                <Item><AccountingSkill /></Item>
                </Grid>
                <Grid item xs={9}>
                <Item sx={{textAlign:'left', fontSize:'12px'}}>完全一致</Item>
                </Grid>
                <Grid item xs={2}>
                <Item><GoIcon /></Item>
                </Grid>
            </Grid>
            </Box>
          </Link>
          <Link to="" style={{textDecoration:'none'}}>
            <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
            <Grid container spacing={1}>
            <Grid item xs={1}>
                <Item><AccountingSkill /></Item>
                </Grid>
                <Grid item xs={9}>
                <Item sx={{textAlign:'left', fontSize:'12px'}}>上記の条件を広めに設定</Item>
                </Grid>
                <Grid item xs={2}>
                <Item><GoIcon /></Item>
                </Grid>
            </Grid>
            </Box>
          </Link>
          <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%', margin: '0', fontSize: '12px'}}
            control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{fontSize: '12px'}} />}
            label="全ての条件を無視"
          />
        </div>
        </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>

    <Button component={Link} to="/mypage" variant="contained" color="primary" sx={{ width: '90%', marginBottom: '20px' }}>
    この条件で検索する
      </Button>

      <Button onClick={handleReset} variant="text" sx={{ textAlign: 'right' }}>
        <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          検索条件をリセット
        </Link>
      </Button>
    
    </>
  );
};

export default JobSearch;
