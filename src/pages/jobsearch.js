import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {ReactComponent as GoIcon} from '../assets/GoIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as YenIcon} from '../assets/YenIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';

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

  const handleSearch = (event) => {
    // Handle search logic here
    console.log('Search:', event.target.value);
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
      <Link to="/occupation" style={{textDecoration:'none'}}>
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
        </Link>
        <Link to="/industry" style={{textDecoration:'none'}}>
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
        </Link>
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
        <Box sx={{ flexGrow: 1 }}>
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
      </CardContent>
    </Card>
    </>
  );
};

export default JobSearch;
