import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
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
import {ReactComponent as WarningIcon} from '../assets/WarningIcon.svg';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';

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
  const [messageTemplates, setMessageTemplates] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

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

  useEffect(() => {
    const authKey = sessionStorage.getItem('authKey');
    setLoading(true); // Set loading to true when starting data fetching
    const fetchMessageTemplates = async () => {
      try {
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_message_template?auth_key=${authKey}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setMessageTemplates(data.message_template);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching message templates:', error);
      }
    };
  
    fetchMessageTemplates();
  }, []);


  const deleteMessageTemplate = async (messageTemplateId) => {
    try {
      const authKey = sessionStorage.getItem('authKey');
      const formData = new FormData();
      formData.append('auth_key', authKey);
      formData.append('message_template_id', messageTemplateId);
      const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/delete_message_template`, {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        // Delete successful, update state or perform any necessary actions
        console.log('Message template deleted successfully');
        // Remove the deleted message template from the UI
        setMessageTemplates(prevTemplates => prevTemplates.filter(template => template.message_template_id !== messageTemplateId));
      } else {
        // Handle error response
        console.error('Failed to delete message template:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting message template:', error);
    }
  };

  const handleDelete = (messageTemplateId) => {
    // Open modal and set selected template id
    setSelectedTemplateId(messageTemplateId);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Call deleteMessageTemplate function with the selectedTemplateId
    deleteMessageTemplate(selectedTemplateId);
    // Close the modal
    setModalOpen(false);
  };

  const handleCancelDelete = () => {
    // Close the modal
    setModalOpen(false);
  };

  const handleEdit = (messageTemplateId) => {
     if (typeof messageTemplateId === 'number' || typeof messageTemplateId === 'string') {
      navigate(`/editmessage/${messageTemplateId}`);
    } else {
      console.error('Invalid message template ID:', messageTemplateId);
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
            <Item sx={{textAlign: 'right'}}>
              <Button to="/createmessage" component={Link} variant="contained" startIcon={<AddIcon />}>
                新規作成する
              </Button>
            </Item>
          </Grid>
          
          <TableContainer component={Paper} sx={{boxShadow: 'none'}}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell width="70%">求人名</StyledTableCell>
                  <StyledTableCell width="15%" align="right">編集</StyledTableCell>
                  <StyledTableCell width="15%" align="right">消去</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>

              {loading ? (
                // Render loading indicator here
                <Box sx={{width: '100%', height: '300px', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                  <CircularProgress sx={{textAlign: 'center', display: 'block'}} />
                </Box>
              ) : (  
                messageTemplates.map((template) => (
                  <StyledTableRow key={template.message_template_id}>
                    <StyledTableCell width="70%" component="th" scope="row">
                      {template.message_template_name}
                    </StyledTableCell>
                    <StyledTableCell width="15%" align="center"><EditIcon  onClick={() => handleEdit(template.message_template_id)} style={{ cursor: 'pointer' }}  /></StyledTableCell>
                    <StyledTableCell onClick={() => handleDelete(template.message_template_id)} startIcon={<DeleteIcon />} width="15%" align="center"><DeleteIcon /></StyledTableCell>
                  </StyledTableRow>
                ))
              )}
               
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleCancelDelete}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          borderRadius: '20px',
          boxShadow: 24,
          textAlign: 'center',
          p: 4,
        }}>
          {/* <Typography id="delete-modal-title" variant="h6" component="h2" gutterBottom>
            消去してもよろしいですか
          </Typography> */}
          <WarningIcon sx={{marginBottom: '20px'}} />
          <Typography id="delete-modal-description" sx={{ marginBottom: 2 , marginTop: 1}}>
          消去してもよろしいですか
          </Typography>
          <Button variant="contained" color='grey' onClick={handleCancelDelete} sx={{color: '#fff'}}>キャンセル</Button>
          <Button variant="contained" onClick={handleConfirmDelete} sx={{ ml: 2, background: '#F96264'}}>削除する</Button>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default MessageTemplate;
