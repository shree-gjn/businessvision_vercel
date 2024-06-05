import React, { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  InputLabel,
  Collapse,
  Typography,
} from '@mui/material';
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

const CreateMessage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState(''); // Added state for title

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Handle title change
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
            <FormControl fullWidth sx={{marginBottom: '10px'}}>
              <FormLabel className='formfield-label' id="message-title" sx={{marginBottom: '10px', textAlign: 'left'}}>スカウトテンプレート名<span className='required_label'>必須</span>​</FormLabel>
              <TextField
                variant="outlined"
                type="text"
                placeholder="タイトルを入力してください"
                value={title}
                name='message_template_title'
                onChange={handleTitleChange}
                // helperText={errors.family_member_count}
              />
              {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{marginBottom: '20px'}}>
            <FormControl fullWidth sx={{marginBottom: '10px'}}>
              <FormLabel className='formfield-label' id="message" sx={{marginBottom: '10px', textAlign: 'left'}}>メッセージ</FormLabel>
              <TextField
                variant="outlined"
                type="text"
                multiline
                rows={8} 
                placeholder="メッセージを入力してください"
                value={message}
                name='template_message'
                onChange={handleMessageChange}
                // helperText={errors.family_member_count}
              />
              {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={goBack} component={Link} variant="contained">作成する</Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CreateMessage;
