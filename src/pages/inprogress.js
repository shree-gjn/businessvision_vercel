import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Container } from '@mui/material';
import ProgressStepZero from './ProgressStepZero';
import ProgressStepOne from './ProgressStepOne';
import ProgressStepTwo from './ProgressStepTwo';
import ProgressStepThree from './ProgressStepThree';
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

const InProgressComponent = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['応募書類準備中', '書類選考', '面接', '内定​'];

  const handleStepClick = (step) => {
    setActiveStep(step - 1);
  };

  const handleNext = () => {
    setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, activeStep]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCompletedSteps((prevCompletedSteps) => prevCompletedSteps.filter(step => step !== activeStep));
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <ProgressStepZero handleNext={handleNext} />;
      case 1:
        return <ProgressStepOne handleNext={handleNext} />;
      case 2:
        return <ProgressStepTwo handleNext={handleNext} />;
      case 3:
        return <ProgressStepThree handleNext={handleNext} />;
      default:
        return <ProgressStepThree />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="PageHeader">
          <p>進行中</p>
        </div>
        <Container style={{background: 'rgb(250, 250, 250)'}}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{margin: '20px 0'}}>
            {steps.map((label, index) => (
              <Step key={label} completed={completedSteps.includes(index)}>
                <StepLabel onClick={() => handleStepClick(index + 1)}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {renderStepContent()}
          </div>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default InProgressComponent;
