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


// import React, { useState, useEffect, useRef} from 'react';
// import { Box, TextField, List, ListItem, ListItemAvatar, Modal, Grid, Avatar, ListItemText, Divider, Typography, IconButton, InputAdornment, Snackbar} from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import { Link, useParams, useNavigate, useLocation} from 'react-router-dom';
// import {ReactComponent as BackButton} from '../assets/BackButton.svg';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import {ReactComponent as CompanyProfile} from '../assets/CompanyProfile.svg';
// import { Send } from '@mui/icons-material';  // Import Send icon
// import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import { Close as CloseIcon} from '@mui/icons-material';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#16375A',
//     },
//     secondary: {
//       main: '#877151',
//     },
//     grey: {
//       main: '#949494', // Change to your desired color
//     },
//     text: {
//       grey: '#ffffff', // Change to your desired text color
//     },
//   },
// });

// const OnlineIndicator = ({ isOnline }) => (
//   <FiberManualRecordIcon sx={{ color: isOnline ? 'green' : 'gray', fontSize: 12, position: 'absolute', top: 75, zIndex: 1, right: 320 }} />
// );

// const ChatComponent = () => {
//   const { state } = useLocation();
//   const { job_id } = useParams(); // Extract job_id from URL parameters
//   // const [users, setUsers] = useState([
//   //   {
//   //     id: 0,
//   //     name: "山本太郎",
//   //     avatar: <AdminPanelSettingsIcon />,
//   //     messages: [
//   //       { id: 0, text: "Hello there!", author: "Admin", timestamp: new Date().toLocaleString() },
//   //       { id: 1, text: "男性 35歳", author: "Admin", timestamp: new Date().toLocaleString() }
//   //     ],
//   //     isOnline: true,
//   //     expanded: false,
//   //   },
//   //   {
//   //     id: 1,
//   //     name: "山本太郎",
//   //     avatar: <PersonIcon />,
//   //     messages: [{ id: 2, text: "男性 35歳", author: "User", timestamp: new Date().toLocaleString() }],
//   //     isOnline: false,
//   //     expanded: false,
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "山本太郎",
//   //     avatar: <PersonIcon />,
//   //     messages: [{ id: 3, text: "男性 37歳", author: "User", timestamp: new Date().toLocaleString() }],
//   //     isOnline: false,
//   //     expanded: false,
//   //   }
//   // ]);

//   const [users, setUsers] = useState([]);

//   const [selectedUserId, setSelectedUserId] = useState(users[0].id);
//   const [newMessage, setNewMessage] = useState('');
//   const [file, setFile] = useState(null);
//   const [isPdfCollapsed, setIsPdfCollapsed] = useState(true);

//   // const [users, setUsers] = useState([]);
//   // const [selectedUserId, setSelectedUserId] = useState(null);
//   // const [newMessage, setNewMessage] = useState('');
//   // const [file, setFile] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const [error, setError] = useState(null);
//   // eslint-disable-next-line no-unused-vars
//   // const [isPdfCollapsed, setIsPdfCollapsed] = useState(true);
//   const [fileName, setFileName] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const fileInputRef = useRef(null);

//   const BackLink = styled(Link)(({ theme }) => ({
//     textDecoration: 'none',
//     color: '#16375A',
//     fontSize: '12px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '5px',
//     paddingLeft:'15px', 
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)'
//   }));

//   // const handleSendMessage = () => {
//   //   if (newMessage.trim()) {
//   //     const newMessageObj = {
//   //       id: users[selectedUserId].messages.length,
//   //       text: newMessage,
//   //       author: "User",
//   //       timestamp: new Date().toLocaleString(),
//   //     };
//   //     const updatedUsers = [...users];
//   //     updatedUsers[selectedUserId].messages.push(newMessageObj);
//   //     setUsers(updatedUsers);
//   //     setNewMessage('');
//   //     setFile(null);
//   //   }
//   // };

//   const handleMessageChange = (event) => setNewMessage(event.target.value);
//   const handleFileChange = (event) => setFile(event.target.files[0]);
//   const handleFileUpload = () => console.log(file);

//   const navigate = useNavigate();  // Get the history object from react-router-dom

//   const goBack = () => {
//     // navigate(-1);  // Navigate to the previous page
//     navigate(-1);
//   };

//   const handleSectionClick = () => {
//     navigate(`/inprogressdetail/${job_id}`);
//   };

//   const getAvatar = (authorType) => {
//     return authorType === "Admin" ? (
//       <Avatar sx={{ bgcolor: 'red' }}><AdminPanelSettingsIcon /></Avatar>
//     ) : (
//       <Avatar><PersonIcon /></Avatar>
//     );
//   };

//   const fetchUserChat = async (user) => {
//     try {
//       const authKey = localStorage.getItem('auth_key');
//       const formData = new FormData();
//       formData.append('chat_conversation_id', user.chatConUid);
//       formData.append('chat_user_type', 'company');
//       formData.append('job_id', user.jobId);
//       formData.append('auth_key', authKey);
//       formData.append('candidate_id', user.candidateId);
  
//       const response = await fetch('https://bvhr-api.azurewebsites.net/company/get_user_chat', {
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) throw new Error('Failed to fetch chat');
//       const data = await response.json();
//       const messages = data.chat_message.map((message) => ({
//         id: message.message_id,
//         text: message.message_content,
//         author: message.user_type === 'company' ? 'Company' : 'Candidate',
//         timestamp: new Date(message.message_sent_at).toLocaleString(),
//         userType: message.user_type,
//         file: message.file_name ? {
//           name: message.file_name,
//           path: message.file_path,
//         } : null,
//       }));
  
//       setUsers(prevUsers =>
//         prevUsers.map(u =>
//           u.id === user.id ? { ...u, messages } : u
//         )
//       );
//       if (selectedUserId === null) {
//         setSelectedUserId(user.id);
//       }
//     } catch (error) {
//       setError(error.message || 'Error fetching chat');
//     }
//   };

//   const handleSendMessage = async () => {
//     if (newMessage.trim() || file) {
//       const MAX_FILE_SIZE_MB = 2;
//       const ALLOWED_FILE_TYPES = [
//         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//         'application/pdf',
//         'image/png',
//         'image/jpeg'
//       ];

//       if (file) {
//         const fileSizeMB = file.size / (1024 * 1024);
//         if (fileSizeMB > MAX_FILE_SIZE_MB) {
//           setError('File size exceeds 2MB');
//           setSnackbarOpen(true);
//           return;
//         }

//         if (!ALLOWED_FILE_TYPES.includes(file.type)) {
//           setError('Invalid file type. Only Word, Excel, PDF, PNG, and JPG files are allowed.');
//           setSnackbarOpen(true);
//           return;
//         }
//       }

//       setSendingMessage(true);
//       try {
//         const authKey = localStorage.getItem('auth_key');
//         const formData = new FormData();
//         formData.append('auth_key', authKey);
//         formData.append('chat_conversation_id', users[selectedUserId].chatConUid);
//         formData.append('message_content', newMessage);
//         formData.append('chat_user_type', 'company');

//         if (file) {
//           formData.append('data_file', file);
//         }

//         const response = await fetch('https://bvhr-api.azurewebsites.net/chat_message_entry', {
//           method: 'POST',
//           body: formData,
//         });

//         if (!response.ok) throw new Error('Failed to send message');
//         const responseData = await response.json();

//         const newMessageObj = {
//           id: users[selectedUserId].messages.length,
//           text: newMessage,
//           author: 'Company',
//           timestamp: new Date().toLocaleString(),
//           file: responseData.file_name ? {
//             name: responseData.file_name,
//             path: responseData.file_path,
//           } : null,
//         };

//         const updatedUsers = [...users];
//         updatedUsers[selectedUserId].messages.push(newMessageObj);
//         setUsers(updatedUsers);
//         setNewMessage('');
//         setFile(null);
//         setFileName('');
//         setSnackbarOpen(true);

//         fetchUserChat(users[selectedUserId]);
//       } catch (error) {
//         setError(error.message || 'Error sending message');
//         setSnackbarOpen(true);
//       }
//       setSendingMessage(false);
//     }
//   };

//   const handleCancelFile = () => {
//     setFile(null);
//     setFileName('');
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="PageHeader">
//         <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
//         <p>進行中</p>
//       </div>
//       <Grid container sx={{padding: '10px', background: '#fff'}} onClick={handleSectionClick}>
//         <Grid item xs={12} sx={{textAlign: 'left', display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px'}}>
//           <CompanyProfile />
//           株式会社ABC
//         </Grid>
//       </Grid>
//       <Box sx={{ display: 'flex', maxWidth: 1200, margin: 'auto', mt: 0, background: 'rgb(250, 250, 250)'}}>
//       {/* Chat Area */}
//       <Box sx={{ display: 'flex', maxWidth: 1200, margin: 'auto', mt: 0 }}>
//       <UserList
//         users={users}
//         selectedUserId={selectedUserId}
//         setSelectedUserId={setSelectedUserId}
//         fetchUserChat={fetchUserChat}
//         handleOpenModal={handleOpenModal}
//       />
//       <ChatWindow
//         users={users}
//         selectedUserId={selectedUserId}
//         newMessage={newMessage}
//         handleMessageChange={handleMessageChange}
//         handleSendMessage={handleSendMessage}
//         file={file}
//         fileName={fileName}
//         fileInputRef={fileInputRef}
//         handleFileChange={handleFileChange}
//         handleCancelFile={handleCancelFile}
//         sendingMessage={sendingMessage}
//         handleClick={handleClick}
//         isLargeScreen={isLargeScreen}
//         isVeryLargeScreen={isVeryLargeScreen}
//         loading={loading}
//         isPdfCollapsed={isPdfCollapsed}
//         getAvatar={getAvatar}
//       />
//       <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', backgroundColor: 'white', boxShadow: 24, p: 4 }}>
//           <IconButton onClick={handleCloseModal} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
//             <CloseIcon />
//           </IconButton>
//           {loading ? (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//               <CircularProgress />
//             </Box>
//           ) : (
//             <iframe src={pdfUrl} title="PDF Viewer Modal" style={{ width: '100%', height: '100%' }} />
//           )}
//         </Box>
//       </Modal>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={() => setSnackbarOpen(false)}
//         message={error || "File uploaded successfully"}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         action={
//           <IconButton size="small" color="inherit" onClick={() => setSnackbarOpen(false)}>
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         }
//       />
//     </Box>
//     </Box>
//     </ThemeProvider> 
//   );
// };

// const UserList = ({ users, selectedUserId, setSelectedUserId, fetchUserChat, handleOpenModal }) => (
//   <Box sx={{ width: '35%', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
//     <Box sx={{ textAlign: 'left', background: '#EEEEEE', p: 0.5, border: '1px solid #e5e5e5', borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>
//       <Typography>求職者情報</Typography>
//     </Box>
//     <List>
//       {users.map((user) => (
//         <Grid container spacing={2} key={user.id}>
//           <Grid item xs={12}>
//             <ListItem button onClick={() => { setSelectedUserId(user.id); fetchUserChat(user); }} sx={{ backgroundColor: user.id === selectedUserId ? '#E1EBF2' : 'inherit', borderBottom: '2px solid #EEE' }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={2}>
//                       <Typography sx={{ fontSize: '12px' }}>01-01</Typography>
//                     </Grid>
//                     <Grid item xs={4} sx={{ mt: 0.3, pl: '0px !important' }}>
//                       <Typography sx={{ fontSize: '10px' }}>送信日：{user.createdDate}</Typography>
//                     </Grid>
//                     <Grid item xs={1.5} sx={{ pl: '0px !important' }}>
//                       <Typography sx={{ fontSize: '12px', color: '#fff', background: '#78D9D3', p: 0.5, width: '100%', textAlign: 'center', borderRadius: 2, mt: -0.5 }}>New</Typography>
//                     </Grid>
//                     <Grid item xs={4.5}>
//                       <Typography sx={{ fontSize: '12px', color: '#A3903D', background: '#ECE3BA', p: 0.5, width: '100%', textAlign: 'center', borderRadius: 2, mt: -0.5 }}>{user.scoutStatus}</Typography>
//                     </Grid>
//                   </Grid>
//                   <Grid container spacing={1}>
//                     <Typography sx={{ fontSize: '12px', ml: 1, mt: 0.5 }}>{user.jobTitle}</Typography>
//                   </Grid>
//                 </Grid>
//                 <Grid item xs={12} container alignItems="center">
//                   <Grid item>
//                     <Typography variant="body1" component="div" sx={{ fontSize: '10px', textAlign: 'left', mt: -1, }}>No.{user.jobId}</Typography>
//                     <ListItemAvatar sx={{ ml: 0.5 }}>
//                       <OnlineIndicator isOnline={user.isOnline} />
//                       <Avatar>{user.avatar}</Avatar>
//                     </ListItemAvatar>
//                   </Grid>
//                   <Grid item xs>
//                     <Grid container spacing={2}>
//                       <ListItemText
//                         primary={
//                           <>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                               <Typography sx={{ fontSize: 14, float:'left' }}>{user.name}</Typography>
//                               <Typography 
//                                 sx={{ fontSize: 12, mr: 0.5, float:'right', ml:14 }} 
//                                 onClick={() => handleOpenModal(user.candidateId, user.jobId)}
//                                 style={{ cursor: 'pointer' }}
//                               >
//                                 匿名プロフィール
//                               </Typography>
//                               <Grid item xs={0.5} sx={{ mt: 0.7 }}>
//                                 <img 
//                                   src={ExpandIcon} 
//                                   alt="ExpandIcon" 
//                                   style={{ width: '16px', cursor: 'pointer' }}
//                                   onClick={() => handleOpenModal(user.candidateId, user.jobId)}
//                                 />
//                               </Grid>
//                             </Box>
//                             <Typography sx={{ fontSize: 12, color: 'gray' }}>{user.age}</Typography>
//                           </>
//                         }
//                         secondary={
//                           user.messages.length > 0
//                             ? user.messages[user.messages.length - 1].file
//                               ? `Attachment: ${user.messages[user.messages.length - 1].file.name}`
//                               : user.messages[user.messages.length - 1].text.length > 42
//                                 ? `${user.messages[user.messages.length - 1].text.substring(0, 42)}...`
//                                 : user.messages[user.messages.length - 1].text
//                             : ' '
//                         }
//                         primaryTypographyProps={{ sx: { fontSize: '14px', ml: 1 } }}
//                         secondaryTypographyProps={{ sx: { fontSize: '12px', ml: 1 } }}
//                       />
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </ListItem>
//           </Grid>
//         </Grid>
//       ))}
//     </List>
//   </Box>
// );


// const ChatWindow = ({
//   users, selectedUserId, newMessage, handleMessageChange, handleSendMessage, file, fileName, fileInputRef, handleFileChange, handleCancelFile, sendingMessage, handleClick, isLargeScreen, isVeryLargeScreen, loading, isPdfCollapsed, getAvatar
// }) => (
//   <Box sx={{ width: '65%', padding: 1, position: 'relative' }}>
//     <Box>
//       <Grid container spacing={2} sx={{ mt: -2.2, borderBottom: '2px solid #EEE', ml: 0.2 }}>
//         <Grid item xs={1.5}>
//           <Typography sx={{ fontSize: '14px', textAlign: 'left', mt: 0 }} gutterBottom>
//             {selectedUserId !== null && users[selectedUserId].name}
//           </Typography>
//         </Grid>
//         <Grid item xs={0.5} sx={{ mt: -0.5 }}>
//           <img src={ChatGroup} alt="ChatGroup" style={{ width: '20px', mt: 0 }} />
//         </Grid>
//         <Grid item xs={10}>
//           <Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
//             <Typography sx={{ fontSize: 14, textAlign: 'left' }}> エントリー求人:【渋谷/プライム上場】経理マネージャー好条件（リモートあり） </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//     <Box sx={{ mt: -3, width: '99%', mb: 0 }}>
//       {selectedUserId !== null && <PdfViewer selectedUser={users[selectedUserId]} />}
//     </Box>
//     {loading ? (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//         <CircularProgress />
//       </Box>
//     ) : (
//       <List sx={{
//         height: isPdfCollapsed ? 450 : 150,
//         overflow: 'hidden',
//         overflowY: 'auto',
//         width: '100%',
//         mt: 1,
//         mb: 7,
//         '-ms-overflow-style': 'none',
//         'scrollbar-width': 'none',
//         '&::-webkit-scrollbar': { display: 'none' }
//       }}>
//         {selectedUserId !== null && users[selectedUserId].messages.map((message, index) => (
//           <React.Fragment key={message.id}>
//             <ListItem
//               alignItems="flex-start"
//               sx={{
//                 backgroundColor: index === users[selectedUserId].messages.length - 1 ? '#fff' : '#fff',
//                 display: 'flex',
//                 justifyContent: message.author === 'Company' ? 'flex-end' : 'flex-start',
//               }}
//             >
//               {message.author !== 'Company' && <ListItemAvatar>{getAvatar(message.author)}</ListItemAvatar>}
//               <Box
//                 sx={{
//                   maxWidth: '100%',
//                   bgcolor: message.author === 'Company' ? '#E1EBF2' : '#dddedd',
//                   borderRadius: 2,
//                   p: 1,
//                   ml: message.author === 'Company' ? 0 : -1,
//                   mr: message.author === 'Company' ? 1 : 0,
//                 }}
//               >
//                 <ListItemText
//                   primaryTypographyProps={{ fontSize: '13px' }}
//                   secondaryTypographyProps={{ fontSize: '12px' }}
//                   primary={message.text}
//                   secondary={`${message.author} — ${message.timestamp}`}
//                 />
//                 {message.file && (
//                   <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
//                     <IconButton component="a" href={message.file.path} target="_blank">
//                       {message.file.name.endsWith('.pdf') && <DescriptionIcon />}
//                       {message.file.name.endsWith('.xlsx') && <GridOnIcon />}
//                       {message.file.name.endsWith('.docx') && <DescriptionIcon />}
//                       {(message.file.name.endsWith('.png') || message.file.name.endsWith('.jpg') || message.file.name.endsWith('.jpeg')) && <ImageIcon />}
//                     </IconButton>
//                     <Typography sx={{ fontSize: '13px', ml: 1 }}>{message.file.name}</Typography>
//                   </Box>
//                 )}
//               </Box>
//               {message.author === 'Company' && <ListItemAvatar>{getAvatar(message.author)}</ListItemAvatar>}
//             </ListItem>
//           </React.Fragment>
//         ))}
//       </List>
//     )}
//     <Box
//       component="form"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'fixed',
//         bottom: 0,
//         width: isVeryLargeScreen ? '39%' : isLargeScreen ? '43%' : '47%',
//         backgroundColor: 'white',
//         padding: 0.4,
//         zIndex: 1000,
//       }}
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleSendMessage();
//       }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="メッセージを入力してください"
//           value={newMessage + (fileName ? ` (Attached: ${fileName})` : '')}
//           onChange={handleMessageChange}
//           multiline
//           maxRows={10}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton color="primary" component="label">
//                   <AttachFileIcon />
//                   <input
//                     type="file"
//                     hidden
//                     ref={fileInputRef}
//                     onChange={handleFileChange}
//                   />
//                 </IconButton>
//                 {fileName && (
//                   <IconButton color="secondary" onClick={handleCancelFile}>
//                     <CloseIcon />
//                   </IconButton>
//                 )}
//               </InputAdornment>
//             ),
//           }}
//         />
//         <IconButton color="primary" sx={{ ml: 1 }} type="submit">
//           {sendingMessage ? <CircularProgress size={24} /> : <SendIcon />}
//         </IconButton>
//       </Box>

//       <Typography sx={{ mt: 0.5, fontSize: 10, textAlign: 'left', color: '#C0C0C0' }}>
//         * Maximum upload size:2MB
//       </Typography>
//     </Box>
//   </Box>
// );

// export default ChatComponent;


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Box, TextField, List, ListItem, ListItemAvatar, Modal, Grid, Avatar, ListItemText, Typography, IconButton,
//   InputAdornment, CircularProgress, Snackbar, useMediaQuery
// } from '@mui/material';
// import {
//   Person as PersonIcon, AdminPanelSettings as AdminPanelSettingsIcon, AttachFile as AttachFileIcon,
//   FiberManualRecord as FiberManualRecordIcon, Send as SendIcon, Close as CloseIcon,
//   Description as DescriptionIcon, GridOn as GridOnIcon, Image as ImageIcon
// } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import PdfViewer from './PDFViewer';
// import {ReactComponent as ChatGroup} from '../assets/ChatGroup.svg';
// import {ReactComponent as ExpandIcon} from '../assets/ExpandIcon.svg';


// const OnlineIndicator = ({ isOnline }) => (
//   <FiberManualRecordIcon sx={{ color: isOnline ? 'green' : 'gray', fontSize: 14, position: 'absolute', top: 70, zIndex: 1, right: 322 }} />
// );

// const ChatComponent = ({ setSelectedUser }) => {
//   const [users, setUsers] = useState([]);
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [file, setFile] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const [error, setError] = useState(null);
//   // eslint-disable-next-line no-unused-vars
//   const [isPdfCollapsed, setIsPdfCollapsed] = useState(true);
//   const [fileName, setFileName] = useState('');
//   const fileInputRef = useRef(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const isLargeScreen = useMediaQuery('(min-width:1576px)');
//   const isVeryLargeScreen = useMediaQuery('(min-width:1847px)');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setLoading(true);
//       try {
//         const authKey = localStorage.getItem('auth_key');
//         const formData = new FormData();
//         formData.append('auth_key', authKey);
  
//         const response = await fetch('https://bvhr-api.azurewebsites.net/company/company_chat_list', {
//           method: 'POST',
//           body: formData,
//         });
//         if (!response.ok) throw new Error('Failed to fetch users');
//         const data = await response.json();
//         const usersData = data.job_search_condition.map((item, index) => ({
//           id: index,
//           name: item.full_name,
//           avatar: <PersonIcon />,
//           messages: [],
//           isOnline: item.online_flag === 1,
//           expanded: false,
//           jobTitle: item.job_title,
//           createdDate: item.created_date,
//           scoutStatus: item.scout_status,
//           chatConUid: item.chat_con_uid,
//           candidateId: item.candidate_id,
//           companyUserId: item.company_user_id,
//           jobId: item.job_id,
//           age: item.candidate_age
//         }));
//         setUsers(usersData);
//         await fetchAllChats(usersData); // Fetch chat for all users after setting the users data
//       } catch (error) {
//         setError(error.message || 'Error fetching users');
//       }
//       setLoading(false);
//     };
  
//     const fetchAllChats = async (usersData) => {
//       const chatPromises = usersData.map(user => fetchUserChat(user));
//       await Promise.all(chatPromises);
//     };
  
//     fetchUsers();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const fetchUserChat = async (user) => {
//     try {
//       const authKey = localStorage.getItem('auth_key');
//       const formData = new FormData();
//       formData.append('chat_conversation_id', user.chatConUid);
//       formData.append('chat_user_type', 'company');
//       formData.append('job_id', user.jobId);
//       formData.append('auth_key', authKey);
//       formData.append('candidate_id', user.candidateId);
  
//       const response = await fetch('https://bvhr-api.azurewebsites.net/company/get_user_chat', {
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) throw new Error('Failed to fetch chat');
//       const data = await response.json();
//       const messages = data.chat_message.map((message) => ({
//         id: message.message_id,
//         text: message.message_content,
//         author: message.user_type === 'company' ? 'Company' : 'Candidate',
//         timestamp: new Date(message.message_sent_at).toLocaleString(),
//         userType: message.user_type,
//         file: message.file_name ? {
//           name: message.file_name,
//           path: message.file_path,
//         } : null,
//       }));
  
//       setUsers(prevUsers =>
//         prevUsers.map(u =>
//           u.id === user.id ? { ...u, messages } : u
//         )
//       );
//       if (selectedUserId === null) {
//         setSelectedUserId(user.id);
//       }
//     } catch (error) {
//       setError(error.message || 'Error fetching chat');
//     }
//   };

//   const fetchJobPost = async (jobId) => {
//     setLoading(true);
//     try {
//       const authKey = localStorage.getItem('auth_key');
//       const response = await fetch(`https://bvhr-api.azurewebsites.net/company/view_company_job_post?auth_key=${authKey}&job_post_id=${jobId}`, {
//         method: 'GET',
//       });
//       if (!response.ok) throw new Error('Failed to fetch job post');
//       const data = await response.json();
//       console.log(data.json_data); // Show the response in the console
//       navigate('/jobregistration', { state: { jobPostData: data.json_data } }); // Navigate to job registration page with job post data
//     } catch (error) {
//       console.error('Error fetching job post:', error.message || error);
//     }
//     setLoading(false);
//   };

//   const handleOpenModal = async (candidateId, jobId) => {
//     setLoading(true);
//     try {
//       const authKey = localStorage.getItem('auth_key');
//       const response = await fetch(`https://bvhr-api.azurewebsites.net/company/html_to_pdf_client?candidate_id=${candidateId}&job_id=${jobId}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${authKey}`
//         }
//       });
//       if (!response.ok) throw new Error('Failed to fetch PDF');
//       const data = await response.json();
//       setPdfUrl(data.pdf_url); // Assuming the API returns a URL to the generated PDF
//       setOpenModal(true);
//     } catch (error) {
//       console.error('Error fetching PDF:', error.message || error);
//     }
//     setLoading(false);
//   };

//   const handleCloseModal = () => setOpenModal(false);

//   const handleSendMessage = async () => {
//     if (newMessage.trim() || file) {
//       const MAX_FILE_SIZE_MB = 2;
//       const ALLOWED_FILE_TYPES = [
//         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//         'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//         'application/pdf',
//         'image/png',
//         'image/jpeg'
//       ];

//       if (file) {
//         const fileSizeMB = file.size / (1024 * 1024);
//         if (fileSizeMB > MAX_FILE_SIZE_MB) {
//           setError('File size exceeds 2MB');
//           setSnackbarOpen(true);
//           return;
//         }

//         if (!ALLOWED_FILE_TYPES.includes(file.type)) {
//           setError('Invalid file type. Only Word, Excel, PDF, PNG, and JPG files are allowed.');
//           setSnackbarOpen(true);
//           return;
//         }
//       }

//       setSendingMessage(true);
//       try {
//         const authKey = localStorage.getItem('auth_key');
//         const formData = new FormData();
//         formData.append('auth_key', authKey);
//         formData.append('chat_conversation_id', users[selectedUserId].chatConUid);
//         formData.append('message_content', newMessage);
//         formData.append('chat_user_type', 'company');

//         if (file) {
//           formData.append('data_file', file);
//         }

//         const response = await fetch('https://bvhr-api.azurewebsites.net/chat_message_entry', {
//           method: 'POST',
//           body: formData,
//         });

//         if (!response.ok) throw new Error('Failed to send message');
//         const responseData = await response.json();

//         const newMessageObj = {
//           id: users[selectedUserId].messages.length,
//           text: newMessage,
//           author: 'Company',
//           timestamp: new Date().toLocaleString(),
//           file: responseData.file_name ? {
//             name: responseData.file_name,
//             path: responseData.file_path,
//           } : null,
//         };

//         const updatedUsers = [...users];
//         updatedUsers[selectedUserId].messages.push(newMessageObj);
//         setUsers(updatedUsers);
//         setNewMessage('');
//         setFile(null);
//         setFileName('');
//         setSnackbarOpen(true);

//         fetchUserChat(users[selectedUserId]);
//       } catch (error) {
//         setError(error.message || 'Error sending message');
//         setSnackbarOpen(true);
//       }
//       setSendingMessage(false);
//     }
//   };

//   const handleMessageChange = (event) => setNewMessage(event.target.value);
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileName(selectedFile.name);
//     }
//   };

//   const handleClick = () => {
//     if (selectedUserId !== null) {
//       fetchJobPost(users[selectedUserId].jobId);
//     }
//   };

//   const getAvatar = (userType) => {
//     return userType === 'company' ? (
//       <Avatar sx={{ bgcolor: 'red' }}><AdminPanelSettingsIcon /></Avatar>
//     ) : (
//       <Avatar><PersonIcon /></Avatar>
//     );
//   };

//   const handleCancelFile = () => {
//     setFile(null);
//     setFileName('');
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', maxWidth: 1200, margin: 'auto', mt: 0 }}>
//       <UserList
//         users={users}
//         selectedUserId={selectedUserId}
//         setSelectedUserId={setSelectedUserId}
//         fetchUserChat={fetchUserChat}
//         handleOpenModal={handleOpenModal}
//       />
//       <ChatWindow
//         users={users}
//         selectedUserId={selectedUserId}
//         newMessage={newMessage}
//         handleMessageChange={handleMessageChange}
//         handleSendMessage={handleSendMessage}
//         file={file}
//         fileName={fileName}
//         fileInputRef={fileInputRef}
//         handleFileChange={handleFileChange}
//         handleCancelFile={handleCancelFile}
//         sendingMessage={sendingMessage}
//         handleClick={handleClick}
//         isLargeScreen={isLargeScreen}
//         isVeryLargeScreen={isVeryLargeScreen}
//         loading={loading}
//         isPdfCollapsed={isPdfCollapsed}
//         getAvatar={getAvatar}
//       />
//       <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', backgroundColor: 'white', boxShadow: 24, p: 4 }}>
//           <IconButton onClick={handleCloseModal} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
//             <CloseIcon />
//           </IconButton>
//           {loading ? (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//               <CircularProgress />
//             </Box>
//           ) : (
//             <iframe src={pdfUrl} title="PDF Viewer Modal" style={{ width: '100%', height: '100%' }} />
//           )}
//         </Box>
//       </Modal>
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={() => setSnackbarOpen(false)}
//         message={error || "File uploaded successfully"}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         action={
//           <IconButton size="small" color="inherit" onClick={() => setSnackbarOpen(false)}>
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         }
//       />
//     </Box>
//   );
// };

// const UserList = ({ users, selectedUserId, setSelectedUserId, fetchUserChat, handleOpenModal }) => (
//   <Box sx={{ width: '35%', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
//     <Box sx={{ textAlign: 'left', background: '#EEEEEE', p: 0.5, border: '1px solid #e5e5e5', borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>
//       <Typography>求職者情報</Typography>
//     </Box>
//     <List>
//       {users.map((user) => (
//         <Grid container spacing={2} key={user.id}>
//           <Grid item xs={12}>
//             <ListItem button onClick={() => { setSelectedUserId(user.id); fetchUserChat(user); }} sx={{ backgroundColor: user.id === selectedUserId ? '#E1EBF2' : 'inherit', borderBottom: '2px solid #EEE' }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={2}>
//                       <Typography sx={{ fontSize: '12px' }}>01-01</Typography>
//                     </Grid>
//                     <Grid item xs={4} sx={{ mt: 0.3, pl: '0px !important' }}>
//                       <Typography sx={{ fontSize: '10px' }}>送信日：{user.createdDate}</Typography>
//                     </Grid>
//                     <Grid item xs={1.5} sx={{ pl: '0px !important' }}>
//                       <Typography sx={{ fontSize: '12px', color: '#fff', background: '#78D9D3', p: 0.5, width: '100%', textAlign: 'center', borderRadius: 2, mt: -0.5 }}>New</Typography>
//                     </Grid>
//                     <Grid item xs={4.5}>
//                       <Typography sx={{ fontSize: '12px', color: '#A3903D', background: '#ECE3BA', p: 0.5, width: '100%', textAlign: 'center', borderRadius: 2, mt: -0.5 }}>{user.scoutStatus}</Typography>
//                     </Grid>
//                   </Grid>
//                   <Grid container spacing={1}>
//                     <Typography sx={{ fontSize: '12px', ml: 1, mt: 0.5 }}>{user.jobTitle}</Typography>
//                   </Grid>
//                 </Grid>
//                 <Grid item xs={12} container alignItems="center">
//                   <Grid item>
//                     <Typography variant="body1" component="div" sx={{ fontSize: '10px', textAlign: 'left', mt: -1, }}>No.{user.jobId}</Typography>
//                     <ListItemAvatar sx={{ ml: 0.5 }}>
//                       <OnlineIndicator isOnline={user.isOnline} />
//                       <Avatar>{user.avatar}</Avatar>
//                     </ListItemAvatar>
//                   </Grid>
//                   <Grid item xs>
//                     <Grid container spacing={2}>
//                       <ListItemText
//                         primary={
//                           <>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                               <Typography sx={{ fontSize: 14, float:'left' }}>{user.name}</Typography>
//                               <Typography 
//                                 sx={{ fontSize: 12, mr: 0.5, float:'right', ml:14 }} 
//                                 onClick={() => handleOpenModal(user.candidateId, user.jobId)}
//                                 style={{ cursor: 'pointer' }}
//                               >
//                                 匿名プロフィール
//                               </Typography>
//                               <Grid item xs={0.5} sx={{ mt: 0.7 }}>
//                                 <img 
//                                   src={ExpandIcon} 
//                                   alt="ExpandIcon" 
//                                   style={{ width: '16px', cursor: 'pointer' }}
//                                   onClick={() => handleOpenModal(user.candidateId, user.jobId)}
//                                 />
//                               </Grid>
//                             </Box>
//                             <Typography sx={{ fontSize: 12, color: 'gray' }}>{user.age}</Typography>
//                           </>
//                         }
//                         secondary={
//                           user.messages.length > 0
//                             ? user.messages[user.messages.length - 1].file
//                               ? `Attachment: ${user.messages[user.messages.length - 1].file.name}`
//                               : user.messages[user.messages.length - 1].text.length > 22
//                                 ? `${user.messages[user.messages.length - 1].text.substring(0, 22)}...`
//                                 : user.messages[user.messages.length - 1].text
//                             : ' '
//                         }
//                         primaryTypographyProps={{ sx: { fontSize: '14px', ml: 1 } }}
//                         secondaryTypographyProps={{ sx: { fontSize: '12px', ml: 1 } }}
//                       />
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </ListItem>
//           </Grid>
//         </Grid>
//       ))}
//     </List>
//   </Box>
// );

// const ChatWindow = ({
//   users, selectedUserId, newMessage, handleMessageChange, handleSendMessage, file, fileName, fileInputRef, handleFileChange, handleCancelFile, sendingMessage, handleClick, isLargeScreen, isVeryLargeScreen, loading, isPdfCollapsed, getAvatar
// }) => (
//   <Box sx={{ width: '65%', padding: 1, position: 'relative' }}>
//     <Box>
//       <Grid container spacing={2} sx={{ mt: -2.2, borderBottom: '2px solid #EEE', ml: 0.2 }}>
//         <Grid item xs={1.5}>
//           <Typography sx={{ fontSize: '14px', textAlign: 'left', mt: 0 }} gutterBottom>
//             {selectedUserId !== null && users[selectedUserId].name}
//           </Typography>
//         </Grid>
//         <Grid item xs={0.5} sx={{ mt: -0.5 }}>
//           <img src={ChatGroup} alt="ChatGroup" style={{ width: '20px', mt: 0 }} />
//         </Grid>
//         <Grid item xs={10}>
//           <Box onClick={handleClick} sx={{ cursor: 'pointer' }}>
//             <Typography sx={{ fontSize: 14, textAlign: 'left' }}> エントリー求人:【渋谷/プライム上場】経理マネージャー好条件（リモートあり） </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//     <Box sx={{ mt: -3, width: '99%', mb: 0 }}>
//       {selectedUserId !== null && <PdfViewer selectedUser={users[selectedUserId]} />}
//     </Box>
//     {loading ? (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//         <CircularProgress />
//       </Box>
//     ) : (
//       <List sx={{
//         height: isPdfCollapsed ? 450 : 150,
//         overflow: 'hidden',
//         overflowY: 'auto',
//         width: '100%',
//         mt: 1,
//         mb: 7,
//         '-ms-overflow-style': 'none',
//         'scrollbar-width': 'none',
//         '&::-webkit-scrollbar': { display: 'none' }
//       }}>
//         {selectedUserId !== null && users[selectedUserId].messages.map((message, index) => (
//           <React.Fragment key={message.id}>
//             <ListItem
//               alignItems="flex-start"
//               sx={{
//                 backgroundColor: index === users[selectedUserId].messages.length - 1 ? '#fff' : '#fff',
//                 display: 'flex',
//                 justifyContent: message.author === 'Company' ? 'flex-end' : 'flex-start',
//               }}
//             >
//               {message.author !== 'Company' && <ListItemAvatar>{getAvatar(message.author)}</ListItemAvatar>}
//               <Box
//                 sx={{
//                   maxWidth: '100%',
//                   bgcolor: message.author === 'Company' ? '#E1EBF2' : '#dddedd',
//                   borderRadius: 2,
//                   p: 1,
//                   ml: message.author === 'Company' ? 0 : -1,
//                   mr: message.author === 'Company' ? 1 : 0,
//                 }}
//               >
//                 <ListItemText
//                   primaryTypographyProps={{ fontSize: '13px' }}
//                   secondaryTypographyProps={{ fontSize: '12px' }}
//                   primary={message.text}
//                   secondary={`${message.author} — ${message.timestamp}`}
//                 />
//                 {message.file && (
//                   <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
//                     <IconButton component="a" href={message.file.path} target="_blank">
//                       {message.file.name.endsWith('.pdf') && <DescriptionIcon />}
//                       {message.file.name.endsWith('.xlsx') && <GridOnIcon />}
//                       {message.file.name.endsWith('.docx') && <DescriptionIcon />}
//                       {(message.file.name.endsWith('.png') || message.file.name.endsWith('.jpg') || message.file.name.endsWith('.jpeg')) && <ImageIcon />}
//                     </IconButton>
//                     <Typography sx={{ fontSize: '13px', ml: 1 }}>{message.file.name}</Typography>
//                   </Box>
//                 )}
//               </Box>
//               {message.author === 'Company' && <ListItemAvatar>{getAvatar(message.author)}</ListItemAvatar>}
//             </ListItem>
//           </React.Fragment>
//         ))}
//       </List>
//     )}
//     <Box
//       component="form"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'fixed',
//         bottom: 0,
//         width: isVeryLargeScreen ? '39%' : isLargeScreen ? '43%' : '47%',
//         backgroundColor: 'white',
//         padding: 0.4,
//         zIndex: 1000,
//       }}
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleSendMessage();
//       }}
//     >
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="メッセージを入力してください"
//           value={newMessage + (fileName ? ` (Attached: ${fileName})` : '')}
//           onChange={handleMessageChange}
//           multiline
//           maxRows={10}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton color="primary" component="label">
//                   <AttachFileIcon />
//                   <input
//                     type="file"
//                     hidden
//                     ref={fileInputRef}
//                     onChange={handleFileChange}
//                   />
//                 </IconButton>
//                 {fileName && (
//                   <IconButton color="secondary" onClick={handleCancelFile}>
//                     <CloseIcon />
//                   </IconButton>
//                 )}
//               </InputAdornment>
//             ),
//           }}
//         />
//         <IconButton color="primary" sx={{ ml: 1 }} type="submit">
//           {sendingMessage ? <CircularProgress size={24} /> : <SendIcon />}
//         </IconButton>
//       </Box>

//       <Typography sx={{ mt: 0.5, fontSize: 10, textAlign: 'left', color: '#C0C0C0' }}>
//         * Maximum upload size:2MB
//       </Typography>
//     </Box>
//   </Box>
// );

// export default ChatComponent;




