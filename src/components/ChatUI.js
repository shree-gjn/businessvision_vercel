import React, { useState } from 'react';
import { Avatar, TextField, Paper, Grid, InputAdornment, IconButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const fileInputRef = React.createRef();

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const timestamp = getCurrentTime();
      const message = { text: newMessage, sender: 'user', timestamp };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file as needed
    console.log('Selected File:', file);
  };

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Grid container component={Paper} elevation={3} style={{boxShadow: 'none', background: 'rgb(250, 250, 250)'}}>
        {/* Messages Container */}
        <Grid item xs={12} style={{ height: '400px', overflowY: 'auto', boxShadow: 'none' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src="path_to_user_avatar" alt="User Avatar" />
                <div style={{ marginLeft: 8, background: '#e3f2fd', padding: 8, borderRadius: 8 }}>
                  {message.text}
                </div>
              </div>
              <Typography variant="body2" color="textSecondary" style={{ marginTop: 4, textAlign: 'right' }}>
                {message.timestamp}
              </Typography>
            </div>
          ))}
        </Grid>

        {/* Send Message Text Field */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="メッセージを入力してください"
              variant="outlined"
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleAttachmentClick} edge="end">
                      <AttachFileIcon />
                    </IconButton>
                    <IconButton onClick={handleSendMessage} edge="end">
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*, video/*, audio/*, .pdf, .doc, .docx"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatComponent;
