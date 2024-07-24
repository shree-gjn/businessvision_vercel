import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button, Container } from '@mui/material';
import BasicInfo from './registration/basicinfo';
import CurrentInfo from './registration/currentinfo';
import DesiredCondition from './registration/desiredcondition';
import Completion from './registration/completion';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import EditMaskingResume from './EditMaskingResume';
import Grid from '@mui/material/Grid';
import theme from './theme';

const RegistrationStepper = () => {
  const location = useLocation(); 
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = ['基本情報', '現職（直近）情報', '希望条件', '完了'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    const authKey = sessionStorage.getItem('authKey');
    console.log('Retrieved authKey:', authKey);
    console.log('Form Data:', formData);
  
    if (authKey) {
      const formDataToSend = new FormData();
      
      formDataToSend.append('auth_key', authKey);
  
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
  
      console.log('Payload to be sent:', ...formDataToSend.entries());
  
      fetch('https://bvhr-api.azurewebsites.net/candidate/update_profile', {
        method: 'POST',
        body: formDataToSend,
      })
      .then((response) => {
        console.log('Response Status:', response.status); // Log status for debugging
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error.message || `HTTP error! status: ${response.status}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        handleNext();
      })
      .catch((error) => {
        console.error('Error:', error.message);
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
        <Grid Container>
          <Grid item xs={12}>
            <Stepper activeStep={activeStep} alternativeLabel sx={{padding: '20px 0', background: '#16375A'}}>
              {steps.map((label) => (
                <Step key={label} sx={{ color: '#ffffff'}}>
                  <StepLabel sx={{ color: '#ffffff'}}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      <Container>
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
