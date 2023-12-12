import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Container } from '@mui/material';
import BasicInfo from './registration/basicinfo';
import CurrentInfo from './registration/currentinfo';
import DesiredCondition from './registration/desiredcondition';
import Completion from './registration/completion'; // Add import statement for Completion

const RegistrationStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currentAddress: '',
    phoneNumber: '',
    desiredField1: '',
    desiredField2: '',
  });
  const [isCompleted, setCompleted] = useState(false); // New state for completion step

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Completion']; // Include the new completion step

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setCompleted(true);
    } else {
      const isValid = validateStep(activeStep);
      if (isValid) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        alert('Please fill in all required fields or correct validation errors.');
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateStep = (step) => {
    switch (step) {
      case 0:
        return formData.name !== '' && formData.email !== '';
      case 1:
        return formData.currentAddress !== '' && formData.phoneNumber !== '';
      case 2:
        return formData.desiredField1 !== '' && formData.desiredField2 !== '';
      default:
        return false;
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ marginTop: '10px' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          <BasicInfo formData={formData} setFormData={setFormData} handleNext={handleNext} />
        )}
        {activeStep === 1 && (
          <CurrentInfo formData={formData} setFormData={setFormData} handleNext={handleNext} />
        )}
        {activeStep === 2 && (
          <DesiredCondition formData={formData} setFormData={setFormData} handleNext={handleNext} />
        )}
        {activeStep === 3 && isCompleted && (
          <Completion handleNext={() => setCompleted(false)} />
        )}

        <div>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationStepper;
