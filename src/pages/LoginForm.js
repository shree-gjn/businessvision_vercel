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
    email_address: '',
    password: '',
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // State variables to track validation status
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'agree' ? checked : value,
    }));

    // Clear validation errors when user starts typing
    if (name === 'email_address') setEmailError('');
    if (name === 'password') setPasswordError('');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

   // Perform validation
  if (!formData.email_address.trim()) {
    setEmailError('This field is required');
  } else if (!isValidEmail(formData.email_address)) {
    setEmailError('Please enter a valid email address');
  } else {
    setEmailError('');
  }

  if (!formData.password.trim()) {
    setPasswordError('This field is required');
  } else {
    setPasswordError('');
  }
  
    // Perform validation
    if (formData.email_address && formData.password && formData.agree && !emailError && !passwordError) {

      // setEmailError('');
      // setPasswordError('');

      // Display loading spinner
      setLoading(true);
  
      // Trim any leading or trailing whitespace from email and password
      const trimmedEmail = formData.email_address.trim();
      const trimmedPassword = formData.password.trim();
  
      // Create FormData object
      const requestBody = new FormData();
      requestBody.append('email_address', trimmedEmail);
      requestBody.append('password', trimmedPassword);
  
      console.log('Request Body:', requestBody); // Debug log
  
      try {
        const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/login', {
          method: 'POST',
          body: requestBody,
        });
  
        console.log('Response Status:', response.status); // Log the response status
        const data = await response.json();
        console.log('Response Data:', data); // Log the response data
  
        if (response.ok) {
          // Handle successful login here
          console.log('Login successful!', data);
  
          // Reset loading state
          setLoading(false);
  
          // Navigate to the registration page
          navigate('/mypage');
        } else {
          // Handle login error
          console.error('Login failed:', data);
          setLoading(false);
          // Display an error message to the user
          alert('Login failed: ' + (data.error.message || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error during login:', error);
        setLoading(false);
        // Display a generic error message to the user
        // alert('An error occurred during login. Please try again.');
      }
    } 
  };
  
  const isValidEmail = (email) => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
            error={!!emailError}
            helperText={emailError}
          />
          <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > パスワード </Typography> 
          <TextField
            placeholder="パスワード"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!passwordError}
            helperText={passwordError}
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