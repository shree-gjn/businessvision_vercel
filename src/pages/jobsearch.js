import React, { useState } from 'react';
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
import {ReactComponent as Accounting} from '../assets/Accounting.svg'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

  const [expanded, setExpanded] = React.useState(false);
  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [expanded2, setExpanded2] = React.useState(false);
  const handleChangeAccordion2 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [items, setItems] = useState([
    { id: 1, label: 'ゲーム' },
    { id: 2, label: '通信キャリア' },
    { id: 3, label: '東京都' },
  ]);

  const handleClose = (id) => {
    setItems(items.filter(item => item.id !== id));
  };



  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative'}}>
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
      </div>
      
      <Card sx={{ minWidth: 275, marginBottom:'30px', marginTop:'20px', borderRadius:'0px', boxShadow: 'none' }}>
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
        <Accordion expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')} style={{boxShadow: 'none', borderBottom: '1px solid #ccc'}}>
        <AccordionSummary
          expandIcon={<GoIcon style={{ width: '34px', transform: expanded === 'panel1' ? 'rotate(90deg)' : 'none' }} />}
          // expandIcon={expanded ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{padding: '0 10px'}}
        >
          <BagIcon style={{marginRight: '16px'}} />
          <Typography style={{fontSize: '12px'}}>業種</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Link to="/industry" style={{textDecoration:'none'}}>
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={1} style={{marginTop: '0'}}>
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
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={1} style={{marginTop: '0'}}>
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
          <FormControlLabel className='searchcheckbox' fullWidth style={{textAlign: 'left', width: '100%', margin: '0', fontSize: '12px'}}
            control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{padding: '10px 5px'}} />}
            label="こだわらない"
          />
        </div>
        </AccordionDetails>
        </Accordion>
        <Link to="/income" style={{textDecoration:'none'}}>
        <Box sx={{ flexGrow: 1 , borderBottom: '1px solid #ccc'}}>
        <Grid container spacing={1} style={{marginTop: '0'}}>
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
        <Grid container spacing={1} style={{marginTop: '0'}}>
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
        <Accordion expanded={expanded === 'panel2'} onChange={handleChangeAccordion2('panel2')} style={{boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<GoIcon style={{ width: '34px', transform: expanded === 'panel2' ? 'rotate(90deg)' : 'none' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{padding: '0 10px', alignItems: 'center'}}
        >
          <Accounting style={{marginRight: '16px'}} />
          <Typography style={{fontSize: '12px'}}>経理スキル</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Link to="/accountingskill" style={{textDecoration:'none'}}>
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={1} style={{marginTop: '0'}}>
            <Grid item xs={1}>
                <Item><Accounting /></Item>
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
          <Link to="/accountingskill" style={{textDecoration:'none'}}>
            <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={1} style={{marginTop: '0'}}>
            <Grid item xs={1}>
                <Item><Accounting /></Item>
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
          <FormControlLabel className='searchcheckbox' fullWidth style={{textAlign: 'left', width: '100%', margin: '0', fontSize: '12px'}}
            control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{fontSize: '12px'}} />}
            label="全ての条件を無視"
          />
        </div>
        </AccordionDetails>
        </Accordion>
      </CardContent>
      <Grid container style={{marginTop: '10px'}}>
        <Grid item xs="12" style={{display: 'contents'}}>
          {/* <Item style={{background: '#EEEEEE', marginRight: '5px', marginBottom: '5px', display: 'flex', gap: '5px', alignItems: 'center'}}>
            <Typography sx={{fontSize: '12px'}}>ゲーム</Typography>
            <button style={{border: 'none', background: 'none', display: 'flex', alignItems: 'center'}}><CloseIcon style={{fontSize: '18px'}} /></button>
          </Item>
          <Item style={{background: '#EEEEEE', marginRight: '5px', marginBottom: '5px', display: 'flex', gap: '5px', alignItems: 'center'}}>
            <Typography sx={{fontSize: '12px'}}>通信キャリア</Typography>
            <button style={{border: 'none', background: 'none', display: 'flex', alignItems: 'center'}}><CloseIcon style={{fontSize: '18px'}} /></button>
          </Item>
          <Item style={{background: '#EEEEEE', marginRight: '5px', marginBottom: '5px', display: 'flex', gap: '5px', alignItems: 'center'}}>
            <Typography sx={{fontSize: '12px'}}>東京都</Typography>
            <button style={{border: 'none', background: 'none', display: 'flex', alignItems: 'center'}}><CloseIcon style={{fontSize: '18px'}} /></button>
          </Item> */}
          {items.map(item => (
            <Item key={item.id} style={{ background: '#EEEEEE', marginRight: '5px', marginBottom: '5px', display: 'flex', gap: '5px', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '12px' }}>{item.label}</Typography>
              <Button style={{ border: 'none', background: 'none', display: 'flex', alignItems: 'center', minWidth: 'inherit', padding: '0 5px'}} onClick={() => handleClose(item.id)}>
                <CloseIcon style={{ fontSize: '18px' }} />
              </Button>
            </Item>
          ))}
        </Grid>
      </Grid>
    </Card>

    <Button component={Link} to="/mypage" variant="contained" color="primary" sx={{ width: '90%', marginBottom: '10px' }}>
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
