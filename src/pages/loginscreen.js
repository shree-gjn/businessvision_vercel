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
        navigate('/registration');
      }, 2000); // Simulating a 2-second login process
    } else {
      // Handle validation error
      console.log('Please fill in all required fields and agree to terms and conditions.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:'90%', margin:'0 auto'}}>
    <div>
        <Typography variant="h6" gutterBottom sx={{marginTop:'5px', padding:'20px'}} > 会員登録 </Typography> 
    </div>
    <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > メールアドレス </Typography> 
    <Typography variant="body2" gutterBottom sx={{textAlign:'left', color:'#949494'}} > (半角英数字・記号で入力してください） </Typography> 
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
      <Typography variant="body2" gutterBottom sx={{textAlign:'left', color:'#949494'}} > (半角英数字8文字以上）</Typography>  
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

      <FormControlLabel
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
          <Typography variant="body2">
            登録ボタンをクリックすると、経理エージェントの <a href="/terms">利用規約</a> と{' '}
            <a href="/privacy">プライバシーポリシー</a>に同意したことになります。
          </Typography>
        }
      />

      {/* Display loading spinner in the middle of the screen */}
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
      )}

      {/* Display login button when not loading */}
      {!loading && (
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      )}
    </form>
  );
};

export default LoginForm;
