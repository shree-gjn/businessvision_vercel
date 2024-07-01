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
  Modal,
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
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
import {ReactComponent as Cancel} from '../assets/Cancel.svg';
import {ReactComponent as WarningIcon} from '../assets/WarningIcon.svg';

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

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
};

const CreateMessage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState(''); // Added state for title
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [errors, setErrors] = useState({ title: false });
  const [isSuccess, setIsSuccess] = useState(true);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    if (event.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, message: false }));
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Handle title change
    if (event.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, title: false }));
    }
  };

  const handleSend = async () => {
    const authKey = sessionStorage.getItem('authKey');
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('message_template_name', title);
    formData.append('message', message);

    let hasError = false;

    if (!title) {
      setErrors((prevErrors) => ({ ...prevErrors, title: true }));
      hasError = true;
    }

    if (!message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: true }));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/add_candidate_message_template', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setModalMessage('メッセージテンプレートが正常に作成されました');
        setIsSuccess(true); // Set success state
        setOpen(true);
      } else {
        setModalMessage('メッセージテンプレートの作成に失敗しました。メッセージ テンプレート名はすでに存在するため、一意の名前を付けてください');
        setIsSuccess(false); // Set failure state
        setOpen(true);
      }
    } catch (error) {
      setModalMessage('Error: ' + error.message);
      setIsSuccess(false); // Set failure state
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (isSuccess) {
      navigate(-1); // Redirect to the list page if successful
    }
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
              <FormLabel className='formfield-label' id="message-title" sx={{marginBottom: '10px', textAlign: 'left'}}>メッセージテンプレート名<span className='required_label'>必須</span>​</FormLabel>
              <TextField
                variant="outlined"
                type="text"
                placeholder="タイトルを入力してください"
                value={title}
                name='message_template_title'
                onChange={handleTitleChange}
                error={errors.title} // Set error state
                helperText={errors.title ? 'メッセージテンプレート名は必須です' : ''} // Display helper text
              />
              {/* {errors.title && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.title}</FormHelperText> } */}
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{marginBottom: '20px'}}>
            <FormControl fullWidth sx={{marginBottom: '10px'}}>
              <FormLabel className='formfield-label' id="message" sx={{marginBottom: '10px', textAlign: 'left'}}>メッセージ<span className='required_label'>必須</span></FormLabel>
              <TextField
                variant="outlined"
                type="text"
                multiline
                rows={8} 
                placeholder="メッセージを入力してください"
                value={message}
                name='template_message'
                onChange={handleMessageChange}
                error={errors.message} // Set error state
                helperText={errors.message ? 'メッセージ欄は必須です' : ''} // Display helper text
                // helperText={errors.family_member_count}
              />
              {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSend} component={Link} variant="contained">作成する</Button>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Cancel onClick={handleClose} style={{position: 'absolute', right: '0', top: '0', padding: '10px'}} />
          {isSuccess ? <SuccessMsg style={{marginBottom: '10px'}} /> : <WarningIcon style={{marginBottom: '10px'}} />}
          <Typography id="modal-description" >
            {modalMessage}
          </Typography>
        </Box>
      </Modal>


    </ThemeProvider>
  );
};

export default CreateMessage;
