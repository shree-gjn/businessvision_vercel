import React, { useState } from 'react';
import { Avatar, TextField, Paper, Grid, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <Grid container component={Paper} elevation={3} style={{ padding: 16 }}>
        {/* Messages Container */}
        <Grid item xs={12} style={{ height: '400px', overflowY: 'auto' }}>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: 8, display: 'flex', alignItems: 'center' }}>
              {message.sender === 'user' ? (
                <>
                  <Avatar src="path_to_user_avatar" alt="User Avatar" />
                  <div style={{ marginLeft: 8, background: '#e3f2fd', padding: 8, borderRadius: 8 }}>
                    {message.text}
                  </div>
                </>
              ) : (
                <>
                  <div style={{ marginRight: 8, background: '#f0f0f0', padding: 8, borderRadius: 8 }}>
                    {message.text}
                  </div>
                  <Avatar src="path_to_received_avatar" alt="Received Avatar" />
                </>
              )}
            </div>
          ))}
        </Grid>

        {/* Send Message Text Field */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <TextField
              label="Type your message"
              variant="outlined"
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSendMessage} edge="end">
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatComponent;
