import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Container } from '@mui/material';
import ProgressStepOne from './ProgressStepOne';
import ProgressStepTwo from './ProgressStepTwo';
import ProgressStepThree from './ProgressStepThree';

const InProgressComponent = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['書類選考', '面接​', '内定​'];

  const handleStepClick = (step) => {
    setActiveStep(step);
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
        return <ProgressStepOne handleNext={handleNext} />;
      case 1:
        return <ProgressStepTwo handleNext={handleNext} />;
      case 2:
        return <ProgressStepThree handleNext={handleNext} />;
      default:
        return <ProgressStepThree />;
    }
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ marginTop: '10px' }}>
        {steps.map((label, index) => (
          <Step key={label} completed={completedSteps.includes(index)}>
            <StepLabel onClick={() => handleStepClick(index)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {renderStepContent()}
      </div>
    </Container>
  );
};

export default InProgressComponent;
