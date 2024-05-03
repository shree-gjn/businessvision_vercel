import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'agree' ? checked : value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation
    if (formData.username && formData.password && formData.agree) {
      // Display loading spinner
      setLoading(true);

      // Simulate an asynchronous login process
      setTimeout(() => {
        // Handle login logic here
        console.log('Login successful!');

        // Reset loading state
        setLoading(false);

        // Navigate to the registration page
        navigate('/mypage');
      }, 2000); // Simulating a 2-second login process
    } else {
      // Handle validation error
      console.log('Please fill in all required fields and agree to terms and conditions.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} style={{width:'90%', margin:'0 auto'}}>
        <div>
            <Typography variant="h6" gutterBottom sx={{marginTop:'5px', padding:'20px'}} > ログイン </Typography> 
        </div>
        <div style={{textAlign:'left'}}>
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} >あなたの会員ID（メールアドレス）とパスワードを入力し、「ログイン」ボタンを押してください。<br />会員登録がまだの方は, <a href="/" style={{textDecoration: 'none', color: '#16375A', marginRight: '5px'}}>会員登録</a>を行ってください </Typography> 
        </div>
        <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > 会員ID（メールアドレス） </Typography> 
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="メールアドレス" 
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > パスワード </Typography> 
          <TextField
            placeholder="パスワード"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

        <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > <a href="/forgetpassword" style={{textDecoration: 'none', color: '#16375A'}}> パスワードをお忘れですか？ </a>    </Typography> 
        <div style={{textAlign:'left'}}>
          <FormControlLabel
            style={{marginBottom: '10px'}}
            control={
              <Checkbox
                checked={formData.agree}
                onChange={handleChange}
                name="agree"
                color="primary"
                required
              />
            }
            label={
              <Typography variant="body2" sx={{display:'contents'}}> 次回から自動でログイン​ </Typography>
            }
          />
        </div>
          {/* Display loading spinner in the middle of the screen */}
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress />
            </div>
          )}

          {/* Display login button when not loading */}
          {!loading && (
            <Button type="submit" variant="contained" color="primary" fullWidth>
              ログインする
            </Button>
          )}
        </form>
    </ThemeProvider>
  );
};

export default LoginForm;