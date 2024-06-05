import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#EEEEEE',
    color: theme.palette.common.black,
    padding: '10px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: '10px',
    background: theme.palette.common.white
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



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

const MessageTemplate = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    // Handle the send logic here
    console.log(`Selected Category: ${selectedCategory}, Message: ${message}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>メッセージテンプレート</p>
      </div>
      
      <Box sx={{ width: 'auto', typography: 'body1', padding: '24px'}}>
        <Grid container>
          <Grid item xs={12} sx={{marginBottom: '10px'}}>
            <Item sx={{textAlign: 'right'}}>
              <Button to="/createmessage" component={Link} variant="contained" startIcon={<AddIcon />}>
                新規作成する
              </Button>
            </Item>
          </Grid>
          
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell width="70%">求人名</StyledTableCell>
                  <StyledTableCell width="15%" align="right">編集</StyledTableCell>
                  <StyledTableCell width="15%" align="right">消去</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell width="70%" component="th" scope="row">
                  会計士のポストにメッセージを申請する
                  </StyledTableCell>
                  <StyledTableCell width="15%" align="center"><EditIcon /></StyledTableCell>
                  <StyledTableCell width="15%" align="center"><DeleteIcon /></StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell width="70%" component="th" scope="row">
                  会計士のポストにメッセージを申請する
                  </StyledTableCell>
                  <StyledTableCell width="15%" align="center"><EditIcon /></StyledTableCell>
                  <StyledTableCell width="15%" align="center"><DeleteIcon /></StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell width="70%" component="th" scope="row">
                  会計士のポストにメッセージを申請する
                  </StyledTableCell>
                  <StyledTableCell width="15%" align="center"><EditIcon /></StyledTableCell>
                  <StyledTableCell width="15%" align="center"><DeleteIcon /></StyledTableCell>
                </StyledTableRow>
               
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default MessageTemplate;
