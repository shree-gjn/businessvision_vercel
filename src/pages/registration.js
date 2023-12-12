// Import necessary dependencies
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Container } from '@mui/material';

// Import your form components
import BasicInfo from './registration/basicinfo';
import CurrentInfo from './registration/currentinfo';
import DesiredCondition from './registration/desiredcondition';
import Completion from './registration/completion';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

const RegistrationStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  // State to hold form data for each step
  const [formDataStep1, setFormDataStep1] = useState({});
  const [formDataStep2, setFormDataStep2] = useState({});
  const [formDataStep3, setFormDataStep3] = useState({});
  const [formDataStep4, setFormDataStep4] = useState({});

  // Validation function for each step
  const validateStep = (step) => {
    // Add your validation logic here
    switch (step) {
      case 0:
        // Validate Step 1
        // If validation passes, return true; otherwise, return false
        return true;
      case 1:
        // Validate Step 2
        return true;
      case 2:
        // Validate Step 3
        return true;
      case 3:
        // Validate Step 4
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    const isValid = validateStep(activeStep);

    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      // Handle validation error, show an alert, error message, or any other UI indication
      alert('Please fill in all required fields or correct validation errors.');
    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          <BasicInfo formData={formDataStep1} setFormData={setFormDataStep1} />
        )}
        {activeStep === 1 && (
          <CurrentInfo formData={formDataStep2} setFormData={setFormDataStep2} />
        )}
        {activeStep === 2 && (
          <DesiredCondition formData={formDataStep3} setFormData={setFormDataStep3} />
        )}
        {activeStep === 3 && (
          <Completion formData={formDataStep4} setFormData={setFormDataStep4} />
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
