import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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

const RegistrationForm = () => {
  const navigate = useNavigate();
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailExistsError, setEmailExistsError] = useState('');

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'agree' ? checked : value,
    }));
    console.log('Username:', formData.username);

    // // Clear errors for the current input field
    // clearErrors(name); // Assuming you have access to clearErrors from useForm
    if (name === 'username') {
      clearErrors('username');
      setEmailExistsError('');
    } else if (name === 'password') {
      clearErrors('password');
    }
    // clearErrors(value); // Assuming you have access to clearErrors from useForm
  };

  // const handleBlur = async (event) => {
  //   const { name, value } = event.target;
  //   if (name === 'username' && value.trim() !== '') {
  //     const checkResponse = await fetch(`https://bvhr-api.azurewebsites.net/candidate/check_email?email_address=${value}`);
  //     const checkResult = await checkResponse.json();
  //     if (checkResponse.status === 409) {
  //       // Email address already exists
  //       setEmailExistsError('This email address is already registered');
  //     } else {
  //       // Clear email existence error if email does not exist
  //       setEmailExistsError('');
  //     }
  //   }
  // };

  // const handleBlur = async (event) => {
  //   const { name, value } = event.target;
  //   if (name === 'username' && value.trim() !== '') {
  //     const checkResponse = await fetch(`https://bvhr-api.azurewebsites.net/candidate/check_email?email_address=${value}`);
  //     const checkResult = await checkResponse.json();
  //     console.log('Email check result:', checkResult); // Log the result to verify
  //     if (checkResponse.status === 409) {
  //       // Email address already exists
  //       setEmailExistsError('This email address is already registered');
  //     } else {
  //       // Clear email existence error if email does not exist
  //       setEmailExistsError('');
  //     }
  //   }
  // };

  const handleBlur = async (event) => {
    const { name, value } = event.target;
    if (name === 'username' && value.trim() !== '') {
      try {
        const checkResponse = await fetch(`https://bvhr-api.azurewebsites.net/candidate/check_email?email_address=${value}`);
        console.log('Email check response:', checkResponse);
        if (!checkResponse.ok) {
          if (checkResponse.status === 409) {
            setEmailExistsError('This email address is already registered');
          } else {
            throw new Error('Failed to check email existence. Please try again.');
          }
        } else {
          const checkResult = await checkResponse.json();
          console.log('Email check result:', checkResult);
          if (checkResult.exists) {
            setEmailExistsError('This email address is already registered');
          } else {
            setEmailExistsError('');
            // clearErrors('username');
          }
        }
      } catch (error) {
        console.error('Error checking email existence:', error);
        setEmailExistsError('Failed to check email existence. Please try again.');
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  
  // const onSubmit = async (event) => {
  //   // event.preventDefault();

  //   // Destructure username from formData
  //   const { username, password, agree } = formData;
  
  //   // Perform validation
  //   if (username && password && agree) {
  //     // Display loading spinner
  //     setLoading(true);

  //     // Check if the email address already exists
  //     const checkResponse = await fetch(`https://bvhr-api.azurewebsites.net/candidate/check_email?email_address=${username}`);
  //     const checkResult = await checkResponse.json();
    
  //   //   // Create a new FormData object
  //   //   const formData = new FormData();

  //   //   // Append the email_address and password to the FormData object
  //   //   formData.append('email_address', username); // Adjusted field name
  //   //   formData.append('password', password);

  //   //   console.log('Email entered:', username); // Log the email entered
  
  //   //   // Send the request to the API endpoint
  //   //   const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/registration', {
  //   //     method: 'POST',
  //   //     body: formData // Pass the FormData object as the body
  //   //   });
  
  //   //   // Parse the response
  //   //   const result = await response.json();
  //   //   console.log(result);
  
  //   //   // Handle login logic here
  //   //   console.log('Login successful!');
  
  //   //   // Reset loading state
  //   //   setLoading(false);
  
  //   //   // Navigate to the registration page
  //   //   navigate('/registrationauth');
  //   // } else {
  //   //   // Handle validation error
  //   //   console.log('Please fill in all required fields and agree to terms and conditions.');
  //   // }

  //     if (checkResult.exists) {
  //       // Email address already exists, display error message
  //       console.log('User already exists');
  //       // Set error state or display error message to the user
  //       // For example:
  //       // setError('username', { message: 'This email address is already registered' });
  //     } else {
  //       // Email address doesn't exist, proceed with registration

  //       // Create a new FormData object
  //       const formData = new FormData();
  //       formData.append('email_address', username);
  //       formData.append('password', password);

  //       // Send the request to the API endpoint for registration
  //       const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/registration', {
  //         method: 'POST',
  //         body: formData
  //       });

  //       const result = await response.json();
  //       console.log(result);

  //       // Handle login logic here
  //       console.log('Registration successful!');

  //       // Reset loading state
  //       setLoading(false);

  //       // Navigate to the registration page
  //       navigate('/registrationauth');
  //     }
  //   } else {
  //     // Handle validation error
  //     console.log('Please fill in all required fields and agree to terms and conditions.');
  //   }
  // };

  const onSubmit = async () => {
    const { username, password, agree } = formData;
    if (!username || !password || !agree || emailExistsError) {
      console.log('Please fill in all required fields and agree to terms and conditions, and fix any email address errors.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('email_address', username);
      formData.append('password', password);
  
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/registration', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const result = await response.json();
      console.log(result);
  
      console.log('Registration successful!');
      setLoading(false);
      // navigate('/registrationauth');
      navigate('/registrationauth', { state: { email: username } });
    } catch (error) {
      console.error('Registration error:', error);
      setLoading(false);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit(onSubmit)} style={{width:'90%', margin:'0 auto'}}>
    <div>
        <Typography variant="h6" gutterBottom sx={{marginTop:'5px', padding:'20px'}} > 会員登録（無料） </Typography> 
    </div>
    <Typography variant="body1" gutterBottom sx={{textAlign:'left', marginTop:'5px'}} > メールアドレス </Typography> 
    <Typography variant="body2" gutterBottom sx={{textAlign:'left', color:'#949494'}} > (半角英数字・記号で入力してください） </Typography> 
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="メールアドレス" 
        required
        {...register('username', {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: '有効なメールアドレスを入力してください'
          }
        })}
        error={(!!errors.username && !emailExistsError) || !!emailExistsError}
        helperText={errors.username && !emailExistsError ? errors.username.message : emailExistsError}
        name="username"
        value={formData.username}
        onBlur={handleBlur}
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
        {...register('password', { 
          required: 'パスワードを入力してください',
          minLength: { value: 6, message: 'パスワードは少なくとも6文字以上である必要があります' },
          maxLength: { value: 12, message: 'パスワードは最大12文字である必要があります' }
        })}
        error={errors.password ? true : false}
        helperText={errors.password ? errors.password.message : ''}
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

      <FormControlLabel style={{display: 'flex', alignItems: 'flex-start', margin: '10px 0'}}
        control={
          <Checkbox
            checked={formData.agree}
            onChange={handleChange}
            name="agree"
            color="primary"
            required
            style={{padding: '0'}}
          />
        }
        label={
          <Typography variant="body2" style={{padding: '0 10px', textAlign: 'left'}}>
            登録ボタンをクリックすると、経理エージェントの <a href="/terms" style={{textDecoration: 'none', color: '#16375A'}}>利用規約</a> と{' '}
            <a href="/privacy" style={{textDecoration: 'none', color: '#16375A', marginRight: '5px'}}>プライバシーポリシー</a>に同意したことになります
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
         無料登録して次へ(簡単60秒)
        </Button>
      )}
      <Typography variant="body2" sx={{marginTop:'10px'}}>
            <a href="/login" style={{textDecoration: 'none', color:'#16375A'}}>会員登録済みの方はこちら</a>
          </Typography>
    </form>
    </ThemeProvider>    
  );
};

export default RegistrationForm;


