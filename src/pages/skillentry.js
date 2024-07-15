import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { borderRadius, Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Skillentryone from './skill/skillentryone';
import Skillentrytwo from './skill/skillentrytwo';
import Skillentrythree from './skill/skillentrythree';
import Skillentryfour from './skill/skillentryfour';
import Skillentryfive from './skill/skillentryfive';
import Skillentrysix from './skill/skillentrysix';
import Skillentryseven from './skill/skillentryseven';
import Skillentryeight from './skill/skillentryeight';
import Skillentrynine from './skill/skillentrynine';
import Skillentryten from './skill/skillentryten';
import Skillentryeleven from './skill/skillentryeleven';
import Skillentrytwelve from './skill/skillentrytwelve';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));



const Skillentry = () => {
  const [step, setStep] = useState(1); // State to track current step

  const handleNextStep = () => {
    setStep(step + 1); // Move to Skillentrytwo
  };

  const handlePrevStep = () => {
    setStep(step - 1); // Move back to Skillentryone
  };

  return (
    <ThemeProvider theme={theme}>
    <div>
      {step === 1 && <Skillentryone onNext={handleNextStep} />}
      {step === 2 && <Skillentrytwo onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 3 && <Skillentrythree onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 4 && <Skillentryfour onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 5 && <Skillentryfive onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 6 && <Skillentrysix onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 7 && <Skillentryseven onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 8 && <Skillentryeight onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 9 && <Skillentrynine onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 10 && <Skillentryten onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 11 && <Skillentryeleven onBack={handlePrevStep} onNext={handleNextStep} />}
      {step === 12 && <Skillentrytwelve onBack={handlePrevStep} onNext={handleNextStep} />}
    </div>
    </ThemeProvider>
  );
};

export default Skillentry;

