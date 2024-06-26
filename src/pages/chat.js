import React, { useState } from 'react';
import { Box, TextField, List, ListItem, ListItemAvatar, Modal, Grid, Avatar, ListItemText, Divider, Typography, IconButton, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useParams, useNavigate, useLocation} from 'react-router-dom';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {ReactComponent as CompanyProfile} from '../assets/CompanyProfile.svg';
import { Send } from '@mui/icons-material';  // Import Send icon
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';

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

const OnlineIndicator = ({ isOnline }) => (
  <FiberManualRecordIcon sx={{ color: isOnline ? 'green' : 'gray', fontSize: 12, position: 'absolute', top: 75, zIndex: 1, right: 320 }} />
);

const ChatComponent = () => {
  const { state } = useLocation();
  const { job_id } = useParams(); // Extract job_id from URL parameters
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "山本太郎",
      avatar: <AdminPanelSettingsIcon />,
      messages: [
        { id: 0, text: "Hello there!", author: "Admin", timestamp: new Date().toLocaleString() },
        { id: 1, text: "男性 35歳", author: "Admin", timestamp: new Date().toLocaleString() }
      ],
      isOnline: true,
      expanded: false,
    },
    {
      id: 1,
      name: "山本太郎",
      avatar: <PersonIcon />,
      messages: [{ id: 2, text: "男性 35歳", author: "User", timestamp: new Date().toLocaleString() }],
      isOnline: false,
      expanded: false,
    },
    {
      id: 2,
      name: "山本太郎",
      avatar: <PersonIcon />,
      messages: [{ id: 3, text: "男性 37歳", author: "User", timestamp: new Date().toLocaleString() }],
      isOnline: false,
      expanded: false,
    }
  ]);

  const [selectedUserId, setSelectedUserId] = useState(users[0].id);
  const [newMessage, setNewMessage] = useState('');
  const [file, setFile] = useState(null);
  const [isPdfCollapsed, setIsPdfCollapsed] = useState(true);

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

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: users[selectedUserId].messages.length,
        text: newMessage,
        author: "User",
        timestamp: new Date().toLocaleString(),
      };
      const updatedUsers = [...users];
      updatedUsers[selectedUserId].messages.push(newMessageObj);
      setUsers(updatedUsers);
      setNewMessage('');
      setFile(null);
    }
  };

  const handleMessageChange = (event) => setNewMessage(event.target.value);
  const handleFileChange = (event) => setFile(event.target.files[0]);
  const handleFileUpload = () => console.log(file);

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    // navigate(-1);  // Navigate to the previous page
    navigate(-1);
  };

  const handleSectionClick = () => {
    navigate(`/inprogressdetail/${job_id}`);
  };

  const getAvatar = (authorType) => {
    return authorType === "Admin" ? (
      <Avatar sx={{ bgcolor: 'red' }}><AdminPanelSettingsIcon /></Avatar>
    ) : (
      <Avatar><PersonIcon /></Avatar>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>進行中</p>
      </div>
      <Grid container sx={{padding: '10px', background: '#fff'}} onClick={handleSectionClick}>
        <Grid item xs={12} sx={{textAlign: 'left', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px'}}>
          <CompanyProfile />
          株式会社ABC
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', maxWidth: 1200, margin: 'auto', mt: 0, background: 'rgb(250, 250, 250)'}}>
      {/* Chat Area */}
      <Box sx={{ width: '100%', padding: 1, position: 'relative' }}>
        {/* <Box sx={{ mt:-3, width:'99%', mb:0 }}>
          <PdfViewer isPdfCollapsed={isPdfCollapsed} setIsPdfCollapsed={setIsPdfCollapsed}/>
        </Box> */}
        {/* <Typography sx={{ fontSize: '12px', textAlign: 'left', mt: isPdfCollapsed ? 1 : 1 }} gutterBottom>
          {users[selectedUserId].name}
        </Typography> */}
        <List sx={{ height: isPdfCollapsed ? 400 : 150, overflow: 'auto', width: '100%', mb:6, height: '100%'}}>
        {users[selectedUserId].messages.map((message, index) => (
          <React.Fragment key={message.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                // backgroundColor: index === users[selectedUserId].messages.length - 1 ? '#fff' : '#fff',
                display: 'flex',
                justifyContent: message.author === 'User' ? 'flex-end' : 'flex-start',
              }}
            >
              {message.author !== 'User' && <ListItemAvatar>{getAvatar(message.author)}</ListItemAvatar>}
              <Box
                sx={{
                  maxWidth: '100%',
                  bgcolor: message.author === 'User' ? '#E1EBF2' : '#dddedd',
                  borderRadius: 2,
                  p: 1,
                  ml: message.author === 'User' ? 0 : -1,
                  mr: message.author === 'User' ? 1 : 0,
                }}
              >
                <ListItemText primary={message.text} secondary={`${message.author} — ${message.timestamp}`} />
              </Box>
              {message.author === 'User' && <ListItemAvatar>{getAvatar(message.author)}</ListItemAvatar>}
            </ListItem>
            {/* <Divider component="li" /> */}
          </React.Fragment>
        ))}
      </List>
        <Box
          component="form"
          sx={{ 
            display: 'flex', 
            mt: 2, 
            position: 'fixed', 
            bottom: 0, 
            width: { xs: '100%', sm: '80%', md: '48%', lg: '50%', xl: '46%' }, // Adjust width based on screen size
            backgroundColor: 'white', 
            padding: 0.4,
            zIndex: 1000,  // Ensure it stays on top
            boxSizing: 'border-box',
            padding: '15px'
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
            if (file) {
              handleFileUpload();
            }
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="メッセージを入力してください"
            value={newMessage}
            onChange={handleMessageChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary" component="label">
                    <AttachFileIcon />
                    <input type="file" hidden onChange={handleFileChange} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton color="primary" sx={{ ml: 1 }} type="submit">
            <Send />
          </IconButton>
        </Box>
      </Box>
    </Box>
    </ThemeProvider> 
  );
};

export default ChatComponent;