import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/system';
import { Paper, List, ListItem, ListItemText, TextField, Button, Container } from '@mui/material';


const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user', timestamp: new Date() }]);
      // In a real-world application, you might send the message to a server here.
      setNewMessage('');
    }
  };

  const handleBotResponse = () => {
    // Simulate a bot response after a delay
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: 'I am a bot. Hello!', sender: 'bot', timestamp: new Date() },
      ]);
    }, 500);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemText
                primary={message.text}
                secondary={`${message.sender} - ${message.timestamp.toLocaleTimeString()}`}
              />
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
        <div>
          <TextField
            fullWidth
            label="Type your message"
            value={newMessage}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
      </Paper>
      <Button variant="outlined" onClick={handleBotResponse} style={{ marginTop: '10px' }}>
        Simulate Bot Response
      </Button>
    </Container>
  );
};

export default ChatComponent;
