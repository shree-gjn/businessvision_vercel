import React, { useState, useRef, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { ReactComponent as AuthenticationCode } from '../assets/AuthenticationCode.svg';
import { ReactComponent as Key } from '../assets/Key.svg';
import { TextField } from '@mui/material';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme';
 
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
 
const ConfirmationModal = ({ open, onClose, message}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Key sx={{ fontSize: '48px' }} />
        <Typography variant="body1" sx={{ marginY: '20px' }}>
         {message}
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
        閉じる 
        </Button>
      </Box>
    </Dialog>
  );
};
 
const RegistrationAuth = () => {
  const navigate = useNavigate(); // Get the history object from react-router-dom
  const location = useLocation();
  const [email, setEmail] = useState('');
 
  useEffect(() => {
    // Extract email address from URL state
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);
 
  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };
 
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef()]; // Create refs for each TextField
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
 
 
  const handleOtpChange = (index, event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Allow only digits
    const updatedOtpDigits = [...otpDigits];
    updatedOtpDigits[index] = inputValue.slice(0, 1); // Restrict to 1 character
    setOtpDigits(updatedOtpDigits);
 
    // Move focus to the next block automatically
    if (inputValue !== '' && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };
 
  const handleConfirmClick = () => {
    // Open the confirmation modal
    setIsModalOpen(true);
  };
 
  const handleConfirmRegistration = async () => {
    const isCodeEntered = otpDigits.every((digit) => digit !== '');
    if (!email) {
      console.error('Email address not found in URL');
      return;
    }
  
    if (isCodeEntered) {
      try {
        const formData = new FormData();
        formData.append('email_address', email);
        formData.append('login_code', otpDigits.join(''));
  
        const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/verification', {
          method: 'POST',
          body: formData,
        });
  
        if (response.status === 204) {
          setModalMessage('確認コードの認証に失敗しました');
          setIsModalOpen(true);
        } else if (response.ok) {
          const responseData = await response.json(); // Assuming the auth key is in the response body
          const authKey = responseData.auth_key; // Extract the auth key
          sessionStorage.setItem('authKey', authKey); // Store the auth key as a plain string
          navigate('/registration');
          // const authKey = await response.json(); // Assuming the auth key is in the response body
          // sessionStorage.setItem('authKey', authKey);
          // navigate('/registration');
        } else {
          setModalMessage('Error verifying authentication code. Please try again.');
          setIsModalOpen(true);
        }
      } catch (error) {
        console.error('Error verifying authentication code:', error);
        setModalMessage('Error verifying authentication code. Please try again.');
        setIsModalOpen(true);
      }
    } else {
      setModalMessage('Please enter the complete authentication code.');
      setIsModalOpen(true);
    }
  };


  const handleCloseModal = () => {
    // Close the confirmation modal
    setIsModalOpen(false);
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1'}}>
        <div className="PageHeader" style={{marginBottom: '30px'}}>
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>会員情報登録</p>
        </div>
        <AuthenticationCode />
        <div style={{ textAlign: 'left', padding: '20px' }}>
          <Typography gutterBottom sx={{ marginTop: '5px', color: 'red' }}>
          ⚠会員登録はまだ完了していません。​認証コードを入力してください。
          </Typography>
          <Typography variant="paragraph" gutterBottom sx={{ marginTop: '20px', display: 'block'}}>
          入力いただいたメールアドレスに、認証コードを送信しました。​<br />
          メールに記載されている認証コードを入力して次へ進んでください。
          </Typography>{' '}
        </div>
        <div style={{ textAlign: 'center', padding: '20px', display: 'flex', justifyContent: 'center' }}>
          {/* Authentication Code Blocks */}
          {otpDigits.map((digit, index) => (
            <TextField
              key={index}
              variant="outlined"
              value={digit}
              onChange={(event) => handleOtpChange(index, event)}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Allow only numeric input
              inputRef={refs[index]} // Assign the ref
              sx={{ margin: '0 5px', width: '50px' }}
            />
          ))}
        </div>
        <div>
          <Typography variant="paragraph" sx={{ color: '#085D95', fontWeight: '500', textAlign: 'center' }} onClick={handleConfirmClick}>
          送信されたメールより確認コードを入力
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ margin: '20px auto' }}
            onClick={handleConfirmRegistration}
          >
            確認
          </Button>
        </div>
 
        {/* Confirmation Modal */}
        <ConfirmationModal open={isModalOpen} onClose={handleCloseModal} message={modalMessage} />
       
      </Box>
    </ThemeProvider>
  );
};
 
export default RegistrationAuth;

