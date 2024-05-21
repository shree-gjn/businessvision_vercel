import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Container } from '@mui/material';
import BasicInfo from './registration/basicinfo';
import CurrentInfo from './registration/currentinfo';
import DesiredCondition from './registration/desiredcondition';
import Completion from './registration/completion';
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

const RegistrationStepper = () => {
  const location = useLocation(); 
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   isChecked: false,
  //   gender: '',
  //   selectedOption: '',
  //   secondDropdownValue: '',
  //   thirdDropdownValue: '',
  //   newRadioValue: '',
  //   dropdown4Value: '',
  //   dropdown5Value: '',
  //   dropdown6Value: '',
  //   dropdown7Value: '',
  //   dropdown8Value: '',
  //   new2RadioValue: '',
  //   expanded: false,
  //   dropdown1Value: '',
  //   dropdown2Value: '',
  // });

  const steps = ['基本情報', '現職（直近）情報', '希望条件', '完了'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSubmit = () => {
  //   const authKey = sessionStorage.getItem('authKey'); // Retrieve the auth key from localStorage
  //   // const email = location.state.email; // Assuming email is passed via state from the previous page
  //   console.log('Retrieved authKey:', authKey); // Debugging log
  //   console.log('Form Data:', formData); // Debugging log
  
  //   if (authKey) {
  //     fetch('https://bvhr-api.azurewebsites.net/candidate/update_profile', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'Authorization': `Bearer ${authKey}`, // Include the auth key in the request header
  //       },
  //       body: JSON.stringify({
  //         auth_key: authKey,
  //         ...formData,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Handle success
  //         console.log('Success:', data);
  //         handleNext();
  //       })
  //       .catch((error) => {
  //         // Handle error
  //         console.error('Error:', error);
  //       });
  //   } else {
  //     console.error('Authentication key or email is missing');
  //   }
  // };

  // const handleSubmit = () => {
  //   const authKey = sessionStorage.getItem('authKey'); // Retrieve the auth key from sessionStorage
  //   console.log('Retrieved authKey:', authKey); // Debugging log
  //   console.log('Form Data:', formData); // Debugging log

  //   if (authKey) {
  //       const payload = {
  //           auth_key: authKey,
  //           ...formData,
  //       };

  //       console.log('Payload to be sent:', payload); // Debugging log

  //       fetch('https://bvhr-api.azurewebsites.net/candidate/update_profile', {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(payload),
  //       })
  //       .then((response) => {
  //           if (!response.ok) {
  //               throw new Error(`HTTP error! status: ${response.status}`);
  //           }
  //           return response.json();
  //       })
  //       .then((data) => {
  //           // Handle success
  //           console.log('Success:', data);
  //           handleNext();
  //       })
  //       .catch((error) => {
  //           // Handle error
  //           console.error('Error:', error);
  //       });
  //   } else {
  //       console.error('Authentication key is missing');
  //   }
  // };

  const handleSubmit = () => {
    const authKey = sessionStorage.getItem('authKey'); // Retrieve the auth key from sessionStorage
    console.log('Retrieved authKey:', authKey); // Debugging log
    console.log('Form Data:', formData); // Debugging log

    if (authKey) {
        const formDataToSend = new FormData();
        
        // Append auth_key to the FormData object
        formDataToSend.append('auth_key', authKey);

        // Append all formData fields to the FormData object
        Object.keys(formData).forEach(key => {
            if (Array.isArray(formData[key])) {
                formData[key].forEach((value, index) => {
                    formDataToSend.append(`${key}[${index}]`, value);
                });
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        console.log('Payload to be sent (FormData):', ...formDataToSend.entries()); // Debugging log

        fetch('https://bvhr-api.azurewebsites.net/candidate/update_profile', {
            method: 'POST',
            body: formDataToSend,
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Handle success
            console.log('Success:', data);
            handleNext();
        })
        .catch((error) => {
            // Handle error
            console.error('Error:', error);
        });
    } else {
        console.error('Authentication key is missing');
    }
  };

  const backButton = (
    <Button variant='outlined' disabled={activeStep === 0} onClick={handleBack} sx={{marginBottom:'100px'}}>
      戻る
    </Button>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ marginTop: '20px' }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === 0 && (
            <BasicInfo formData={formData} setFormData={setFormData} handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 1 && (
            <CurrentInfo formData={formData} setFormData={setFormData} handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 2 && (
            <DesiredCondition formData={formData} setFormData={setFormData} handleNext={handleSubmit} handleBack={handleBack} />
          )}
          {activeStep === 3 && (
            <Completion formData={formData} handleNext={handleNext} handleBack={handleBack} />
          )}

          {/* <div>
            <Button variant='outlined' disabled={activeStep === 0} onClick={handleBack} sx={{marginBottom:'100px'}}>
              戻る
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div> */}
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default RegistrationStepper;
