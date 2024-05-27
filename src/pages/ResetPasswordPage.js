import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import {InputAdornment, IconButton} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate, useLocation} from 'react-router-dom'; 
import { ReactComponent as ResetPasswordIcon } from '../assets/ResetPasswordIcon.svg';
import {
  TextField,
  Typography,
  Button
} from '@mui/material';

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

const ResetPasswordPage = () => {
  const navigate = useNavigate();  // Get the history object from react-router-dom
  const location = useLocation();

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const [password, setPassword] = useState('');
  const [email_address, setemailaddress] = useState('');
  const [pwd_code, setpwdcode] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [newpassword, setnewpassword] = useState(false);
  const [confirmpwd, setconfirmpwd] = useState(false);

  useEffect(() => {
    console.log('location.search:', location.search); // Debug log
    const params = new URLSearchParams(location.search);
    const email = params.get('e_code');
    const code = params.get('pwd_code');
    console.log('Extracted email:', email); // Debug log
    console.log('Extracted pwd_code:', code); // Debug log
    if (email && code) {
      setemailaddress(email);
      setpwdcode(code);
    }
  }, [location.search]);

  useEffect(() => {
    console.log('Email:', email_address);
    console.log('Password Code:', pwd_code);
  }, [email_address, pwd_code]);


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (passwordError) setPasswordError('');
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (confirmPasswordError) setConfirmPasswordError('');
  };

  const handleTogglePasswordVisibility = () => {
    setnewpassword((prevnewpassword => !prevnewpassword));
  };

  const handleTogglePasswordVisibilitytwo = () => {
    setconfirmpwd((prevconfirmpwd) => !prevconfirmpwd);
  };

  // const handleSubmit = () => {
  //   // Reset error message
  //   setError('');

  //   // Password validation
  //   if (password === '') {
  //     setError('Password is required');
  //     return;
  //   }

  //   // Confirm password validation
  //   if (confirmPassword === '') {
  //     setError('Confirm Password is required');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }
    

  //   // Password reset logic here (send API request, etc.)

  //   // Clear form fields
  //   setPassword('');
  //   setConfirmPassword('');

  //   navigate('/login');

  // };

  const handleSubmit = async () => {
    // Reset error message
    setError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let validationFailed = false;
  
    // Password validation
    if (password === '') {
      setPasswordError('Password is required');
      validationFailed = true;
    }
  
    // Confirm password validation
    if (confirmPassword === '') {
      setConfirmPasswordError('Confirm Password is required');
      validationFailed = true;
    }
  
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      validationFailed = true;
    }

    if (validationFailed) return;
  
    try {
      const formData = new FormData();
      formData.append('email_address', email_address); // Replace with the actual email address
      formData.append('pwd_code', pwd_code); // Replace with the password code if required
      formData.append('new_password', password);

      console.log('Form Data to be submitted:', {
        email_address: email_address,
        pwd_code: pwd_code,
        new_password: password
      });
  
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/reset_password', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const responseData = await response.json();
        console.error('Error response:', responseData);
        throw new Error('Network response was not ok');
      }
  
      navigate('/login'); // Redirect to the login page after successful password reset
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again later.');
    }
  };
  


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        {/* <div className="PageHeader" style={{marginBottom:'25px'}}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
            <BackLink to="#" sx={{width:'70%'}} onClick={goBack} > <BackButton /> 戻る </BackLink>
            <p>パスワードの再設定</p>
          </Box>
        </div> */}
        <div className="PageHeader" style={{marginBottom: '30px'}}>
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>パスワードの再設定</p>
        </div>
        <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} > 新しいパスワードを入力して、再設定してください。​​ </Typography> <br/>
        <div style={{marginTop:'30px'}}>
        <ResetPasswordIcon/>
        </div>
        {/* <div style={{textAlign:'left', padding:'20px'}}>
            <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px'}} >会員情報に登録した、会員ID（Eメールアドレス）を入力してください。ご登録のメールアドレス宛に、パスワード再設定に関する情報をお送りします。​ </Typography> 
        </div> */}
        <div style={{padding:'20px', textAlign:'left'}}>
          <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px', textAlign:'left'}} >新しいパスワード​ </Typography> 
          <TextField
            type={newpassword ? 'text' : 'password'}
            placeholder="新しいパスワードを入力してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError !== ''}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {newpassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="paragraph" gutterBottom sx={{marginTop:'5px', textAlign:'left'}} >新しいパスワード（再入力） </Typography> 
          <TextField
            type={confirmpwd ? 'text' : 'password'}
            placeholder="新しいパスワードを再入力してください"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={confirmPasswordError !== ''}
            helperText={confirmPasswordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibilitytwo} edge="end">
                    {confirmpwd ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div style={{margin:'20px auto', textAlign:'center'}}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            パスワードを再設定する
          </Button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default ResetPasswordPage;
