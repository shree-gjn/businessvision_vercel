import React, { useState, useEffect} from 'react';
import { Stepper, Step, StepLabel, Container } from '@mui/material';
import ProgressStepZero from './ProgressStepZero';
import ProgressStepOne from './ProgressStepOne';
import ProgressStepTwo from './ProgressStepTwo';
import ProgressStepThree from './ProgressStepThree';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import theme from './theme';
import { borderBottom } from '@mui/system';

const InProgressComponent = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeStepFromParams = parseInt(searchParams.get('tab')) || 0;
  const [activeStep, setActiveStep] = useState(activeStepFromParams);

  const steps = ['応募書類準備中', '書類選考', '面接', '内定​'];

  useEffect(() => {
    setActiveStep(activeStepFromParams);
  }, [activeStepFromParams]);

  const handleStepClick = (step) => {
    setSearchParams({ tab: step });
    setActiveStep(step); // Ensure the state is updated immediately
  };

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, activeStep]);
    setSearchParams({ tab: nextStep });
    setActiveStep(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setCompletedSteps((prevCompletedSteps) => prevCompletedSteps.filter(step => step !== activeStep));
    setSearchParams({ tab: prevStep });
    setActiveStep(prevStep);
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
        return <ProgressStepZero handleNext={handleNext} />;
    }
  };

  const CustomStepIcon = (props) => {
    const { active, completed, icon } = props;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 25,
          height: 25,
          borderRadius: '50%',
          backgroundColor: active ? theme.palette.primary.main : completed ? theme.palette.primary.main : theme.palette.primary.contrastText,
          color: active ?  theme.palette.primary.contrastText : completed ? theme.palette.primary.main : "#000000",
          fontSize: '12px'
        }}
      >
        {icon - 1}
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="PageHeader" sx={{borderBottom: 'none'}}>
          <p>進行中</p>
        </div>
        <Grid container sx={{marginTop: '-2px'}}>
          <Grid item xs={12}>
            <Stepper activeStep={activeStep} alternativeLabel sx={{ padding: '20px 0',  background: '#0F2C4B'}}>
              {steps.map((label, index) => (
                <Step key={label} completed={completedSteps.includes(index)}>
                  <StepLabel sx={{fontSize: '12px'}} StepIconComponent={CustomStepIcon} onClick={() => handleStepClick(index)}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
        <Container style={{background: 'rgb(250, 250, 250)'}}>
          {/* <Stepper activeStep={activeStep} alternativeLabel sx={{margin: '20px 0'}}>
            {steps.map((label, index) => (
              <Step key={label} completed={completedSteps.includes(index)}>
                <StepLabel onClick={() => handleStepClick(index)}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
          <div>
            {renderStepContent()}
          </div>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default InProgressComponent;
