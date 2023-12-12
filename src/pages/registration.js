import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Container } from '@mui/material';
import BasicInfo from './registration/basicinfo';
import CurrentInfo from './registration/currentinfo';
import DesiredCondition from './registration/desiredcondition';
import Completion from './registration/completion';

const RegistrationStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    isChecked: false,
    gender: '',
    selectedOption: '',
    secondDropdownValue: '',
    thirdDropdownValue: '',
    newRadioValue: '',
    dropdown4Value: '',
    dropdown5Value: '',
    dropdown6Value: '',
    dropdown7Value: '',
    dropdown8Value: '',
    new2RadioValue: '',
    expanded: false,
    dropdown1Value: '',
    dropdown2Value: '',
  });

  const steps = ['基本情報', '現職（直近）情報', '希望条件', '完了'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        {activeStep === 3 && (
          <Completion formData={formData} setFormData={setFormData} handleNext={handleNext} />
        )}

        <div>
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{marginBottom:'100px'}}>
            Back
          </Button>
          {/* <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button> */}
        </div>
      </div>
    </Container>
  );
};

export default RegistrationStepper;
