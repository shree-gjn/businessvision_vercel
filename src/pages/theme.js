import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#CCAA65',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#877151',
    },
    customcolor: {
      main: '#7E223D',
    },
    grey: {
      main: '#949494', // Change to your desired color
    },
    text: {
      grey: '#ffffff', // Change to your desired text color
    },
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: '#ffffff !important',
          fontSize: '12px'
        },
        active: {
          color: '#ffffff !important',
        },
        completed: {
          color: '#ffffff !important',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Default color
          '&.Mui-active': {
            color: '#ECE3BA', // Color for active step
          },
          '&.Mui-completed': {
            color: '#ffffff', // Color for completed step
          },
        },
        text: {
          fill: '#000000', // Text color inside the step icon
          '&.Mui-active': {
            fill: '#ffffff', // Text color for active step icon
          },
          '&.Mui-completed': {
            fill: '#ffffff', // Text color for completed step icon
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#183859', // Default text color
        },
      },
    },
    // MuiToggleButton: {
    //   styleOverrides: {
    //     root: {
    //       // General styling for the ToggleButton
    //       '&.Mui-selected': {
    //         color: '#fff', // Text color when active
    //         backgroundColor: '#CCAA65 !important', // Background color when active
    //         '&:hover': {
    //           backgroundColor: '#CCAA65 !important', // Background color on hover when active
    //         },
    //       },
    //       // Optionally add styles for non-selected state
    //       '&:not(.Mui-selected)': {
    //         color: '#000', // Text color when inactive
    //         backgroundColor: '#e0e0e0', // Background color when inactive
    //         '&:hover': {
    //           backgroundColor: '#c0c0c0', // Background color on hover when inactive
    //         },
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
