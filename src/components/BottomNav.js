import * as React from 'react';
import Box from '@mui/material/Box';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ReactComponent as MessageIcon } from '../assets/MessageIcon.svg';
import { ReactComponent as MessageIconBlue } from '../assets/MessageIconBlue.svg';
import { ReactComponent as JobIcon } from '../assets/JobIcon.svg';
import { ReactComponent as JobIconBlue } from '../assets/JobIconBlue.svg';
import { ReactComponent as InProgress } from '../assets/InProgress.svg';
import { ReactComponent as InProgressBlue } from '../assets/InProgressBlue.svg';
import { ReactComponent as Profile } from '../assets/Profile.svg';
import { ReactComponent as ProfileBlue } from '../assets/ProfileBlue.svg';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import theme from '../pages/theme';

export default function BottomNav() {
  const location = useLocation();

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    // Update the active value based on the current route
    const path = location.pathname;
    switch (path) {
      case '/mypage':
        setValue(0);
        break;
      case '/messages':
        setValue(1);
        break;
      case '/inprogress':
        setValue(2);
        break;
      case '/profile':
        setValue(3);
        break;
      case '/messages/scout':
        setValue(1); 
        break;
      case '/fullprogress':
        setValue(2); 
        break;
      default:
        setValue(0); // Set a default value if the route doesn't match any case
    }
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', position: 'fixed', left: '0', bottom: '0', paddingTop: '5px', borderTop: '1px solid rgba(22, 55, 90, 0.20)', background: '#fff' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label={<Typography variant="body2" sx={{ fontSize: '12px' }}>求人情報</Typography>}
            icon={value === 0 ? <JobIconBlue /> : <JobIcon />}
            component={RouterLink}
            to="/mypage"
            sx={{ '& > span': { marginTop: 1, fontSize: '12px' } }}
          />
          <BottomNavigationAction
            label={<Typography variant="body2" sx={{ fontSize: '12px' }}>メッセージ</Typography>}
            icon={value === 1 ? <MessageIconBlue /> : <MessageIcon />}
            component={RouterLink}
            to="/messages"
            sx={{ '& > span': { marginTop: 1, fontSize: '12px' } }}
          />
          <BottomNavigationAction
            label={<Typography variant="body2" sx={{ fontSize: '12px' }}>進行中</Typography>}
            icon={value === 2 ? <InProgressBlue /> : <InProgress />}
            component={RouterLink}
            to="/inprogress"
            sx={{ '& > span': { marginTop: 1, fontSize: '12px' } }}
          />
          <BottomNavigationAction
            label={<Typography variant="body2" sx={{ fontSize: '12px' }}>プロフィール</Typography>}
            icon={value === 3 ? <ProfileBlue /> : <Profile />}
            component={RouterLink}
            to="/profile"
            sx={{ '& > span': { marginTop: 1, fontSize: '12px' } }}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
