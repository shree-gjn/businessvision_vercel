import React, { useState, useEffect} from 'react';
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
import theme from './theme';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // State variables to track validation status
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
     // Check if "remember me" data exists in localStorage
     const storedEmail = localStorage.getItem('rememberEmail');
     const storedPassword = localStorage.getItem('rememberPassword');
    //  if (storedEmail && storedPassword) {
    //    setFormData({
    //      email: storedEmail,
    //      password: storedPassword,
    //      rememberMe: true,
    //    });
    //  }
     if (storedEmail && storedPassword) {
      // Attempt automatic login
      handleAutoLogin(storedEmail, storedPassword);
    }
  }, [navigate]);

  const handleAutoLogin = async (email, password) => {
    setLoading(true);

    // Create FormData object
    const requestBody = new FormData();
    requestBody.append('email', email.trim());
    requestBody.append('password', password.trim());

    try {
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidates/login', {
        method: 'POST',
        body: requestBody,
      });

      const data = await response.json();

      if (response.ok) {
        // Store auth_key in sessionStorage
        sessionStorage.setItem('authKey', data.auth_key);

        // Dispatch custom event
        const loginEvent = new Event('loginSuccess');
        window.dispatchEvent(loginEvent);

        // Navigate to the registration page
        navigate('/mypage');
      } else {
        setLoading(false);
        console.error('Login failed:', data);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error during login:', error);
    }
  };


  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'rememberMe' ? checked : value,
    }));

    // Clear validation errors when user starts typing
    if (name === 'email') setEmailError('');
    if (name === 'password') setPasswordError('');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation
    if (!formData.email.trim()) {
      setEmailError('This field is required');
    } else if (!isValidEmail(formData.email)) {
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
    if (formData.email && formData.password && !emailError && !passwordError) {
      // Display loading spinner
      setLoading(true);

      // Trim any leading or trailing whitespace from email and password
      const trimmedEmail = formData.email.trim();
      const trimmedPassword = formData.password.trim();

      // Create FormData object
      const requestBody = new FormData();
      requestBody.append('email', trimmedEmail);
      requestBody.append('password', trimmedPassword);

      console.log('Request Body:', requestBody); // Debug log

      try {
        const response = await fetch('https://bvhr-api.azurewebsites.net/candidates/login', {
          method: 'POST',
          body: requestBody,
        });

        console.log('Response Status:', response.status); // Log the response status
        const data = await response.json();
        console.log('Response Data:', data); // Log the response data

        if (response.ok) {
          // Handle successful login here
          console.log('Login successful!', data);

          // Store auth_key in sessionStorage
          sessionStorage.setItem('authKey', data.auth_key);

          // Store email and password in localStorage if rememberMe is checked
          if (formData.rememberMe) {
            localStorage.setItem('rememberEmail', trimmedEmail);
            localStorage.setItem('rememberPassword', trimmedPassword);
          } else {
            localStorage.removeItem('rememberEmail');
            localStorage.removeItem('rememberPassword');
          }

          // Dispatch custom event
          const loginEvent = new Event('loginSuccess');
          window.dispatchEvent(loginEvent);

          // Reset loading state
          setLoading(false);

          // Navigate to the registration page
          navigate('/mypage');
        } else {
          // Handle login error
          console.error('Login failed:', data);
          setLoading(false);
          // Display an error message to the user
          setPasswordError('Please check your password');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setLoading(false);
        // Display a generic error message to the user
        setPasswordError('An error occurred during login. Please try again.');
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
        <div style={{textAlign:'left', marginBottom: '20px'}}>
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} >あなたの会員ID（メールアドレス）とパスワードを入力し、「ログイン」ボタンを押してください。<br />会員登録がまだの方は, <a href="/" style={{textDecoration: 'none', color: '#16375A', marginRight: '5px'}}>会員登録</a>を行ってください </Typography> 
        </div>
        <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > 会員ID（メールアドレス） </Typography> 
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="メールアドレス" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!emailError}
            helperText={emailError}
            style={{marginTop: '5px', marginBottom: '10px'}}
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
            style={{marginTop: '5px'}}
          />

        <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > <a href="/forgetpassword" style={{textDecoration: 'none', color: '#16375A'}}> パスワードをお忘れですか？ </a>    </Typography> 
        <div style={{textAlign:'left'}}>
          <FormControlLabel
            style={{marginBottom: '10px'}}
            control={
              <Checkbox
                checked={formData.rememberMe}
                onChange={handleChange}
                name="rememberMe"
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