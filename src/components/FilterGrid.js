// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Popover from '@mui/material/Popover';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import CloseIcon from '@mui/icons-material/Close';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import { Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import {styled, createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#16375A',
//     },
//     secondary: {
//       main: '#877151',
//     },
//     grey: {
//       main: '#949494', // Change to your desired color
//     },
//     text: {
//       grey: '#ffffff', // Change to your desired text color
//     },
//   },
// });

// const FilterGrid = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [unreadReadValue, setUnreadReadValue] = useState('未読');
//   const [statusValue, setStatusValue] = useState('逆指名');
//   const [otherValue, setOtherValue] = useState('気になる');
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSubmit = () => {
//     // Use the selected values as needed
//     console.log("未読/閱読:", unreadReadValue);
//     console.log("ステータス:", statusValue);
//     console.log("その他:", otherValue);

//     // Add your logic to handle the submit action

//     // Navigate to '/recruitment'
//     navigate('/recruitment');

//     handleClose();
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <>
//         <Button onClick={handleClick} style={{borderRadius: '5px', border: '1px solid #EEE', background: '#FFF'}}>
//           <FilterListIcon /> 絞り込む
//         </Button>
//         <Popover
//           open={Boolean(anchorEl)}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'center',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//           }}
//         >
//           <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
//             <Button onClick={handleClose}>
//               <CloseIcon />
//             </Button>
//           </div>
//           <div style={{padding:'20px', width: 'auto'}}>
//             <div style={{marginBottom: '10px'}}>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '14px', marginBottom: '5px'}}> 未読/閱読 </Typography>
//               <Select value={unreadReadValue} onChange={(e) => setUnreadReadValue(e.target.value)} sx={{width:'100%'}}>
//                 <MenuItem value={'未読'}>未読</MenuItem>
//                 <MenuItem value={'既読'}>既読</MenuItem>
//                 <MenuItem value={'すべて'}>すべて</MenuItem>
//               </Select>
//             </div>
//             {/* <div>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> ステータス </Typography>
//               <Select value={statusValue} onChange={(e) => setStatusValue(e.target.value)} sx={{width:'100%'}}>
//                 <MenuItem value={'逆指名'}>逆指名</MenuItem>
//                 <MenuItem value={'正式応募ずみ'}>正式応募ずみ</MenuItem>
//                 <MenuItem value={'書類選考'}>書類選考</MenuItem>
//                 <MenuItem value={'期日経過'}>期日経過</MenuItem>
//               </Select>
//             </div> */}
//             <div>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '14px', marginBottom: '5px'}}> その他 </Typography>
//               <Select value={otherValue} onChange={(e) => setOtherValue(e.target.value)} sx={{width:'100%'}}>
//                 <MenuItem value={'気になる'}>気になる</MenuItem>
//                 <MenuItem value={'ゴミ箱'}>ゴミ箱</MenuItem>
//                 <MenuItem value={'辞退する​'}>辞退する​</MenuItem>
//               </Select>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
//               <Button fullWidth variant="outlined" color="primary" onClick={handleSubmit}>
//                 この条件で絞り込む
//               </Button>
//             </div>
//           </div>
//         </Popover>
//       </>
//     </ThemeProvider>
//   );
// };

// export default FilterGrid;

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { width } from '@mui/system';

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

const CustomToggleButton = styled(ToggleButton)(({ theme, selected }) => ({
  minWidth: '70px',
  padding: '5px',
  backgroundColor: selected ? '#16375A !important' : '#fff !important' ,
  color: selected ? '#fff !important' : theme.palette.primary.main,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.action.hover,
  },
  border: '1px solid #d5d5d5 !important',
  borderRadius: '5px !important'
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px', // Add some gap between buttons
  justifyContent: 'space-between',
  '& .MuiToggleButton-root': {
    flex: '0 1 calc(33.333% - 10px)', // Make each button take up about a third of the container's width, minus the gap
    maxWidth: 'calc(33.333% - 10px)', // Ensure the button does not expand beyond a third
    margin: '0px', // Remove default margin
    boxSizing: 'border-box',
  },
  width: '100%'
});

const FilterGrid = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [unreadReadValue, setUnreadReadValue] = useState('すべて');
  const [otherValue, setOtherValue] = useState('辞退する');
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    // Navigate to '/recruitment'
    navigate('/recruitment');

    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Button onClick={handleClick} style={{ borderRadius: '5px', border: '1px solid #EEE', background: '#FFF', gap: '5px'}}>
          <FilterListIcon /> 絞り込む
        </Button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          PaperProps={{
            sx: { width: '100%' } // Set your desired width here
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px', width: '100%'}}>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </div>
            <div style={{ padding: '0px 20px 20px', width: 'auto' }}>
              <div style={{ marginBottom: '10px' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '14px', marginBottom: '10px', color: '#16375A'}}>
                  未読/閲読
                </Typography>
                <StyledToggleButtonGroup
                  value={unreadReadValue}
                  exclusive
                  onChange={(e, newValue) => setUnreadReadValue(newValue)}
                  fullWidth
                  sx={{ marginBottom: '10px', gap: '10px'}}
                >
                  <CustomToggleButton sx={{border: '1px solid #EEEEEE'}} value="未読">未読</CustomToggleButton>
                  <CustomToggleButton sx={{border: '1px solid #EEEEEE'}} value="既読">既読</CustomToggleButton>
                  <CustomToggleButton sx={{border: '1px solid #EEEEEE'}} value="すべて">すべて</CustomToggleButton>
                </StyledToggleButtonGroup>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '14px', marginBottom: '10px', color: '#16375A'}}>
                  その他
                </Typography>
                <StyledToggleButtonGroup
                  value={otherValue}
                  exclusive
                  onChange={(e, newValue) => setOtherValue(newValue)}
                  fullWidth
                >
                  <CustomToggleButton value="気になる">気になる</CustomToggleButton>
                  <CustomToggleButton value="ゴミ箱">ゴミ箱</CustomToggleButton>
                  <CustomToggleButton value="辞退する">辞退する</CustomToggleButton>
                </StyledToggleButtonGroup>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button fullWidth variant="outlined" color="primary">
                  この条件で絞り込む
                </Button>
              </div>
            </div>
          </div>
        </Popover>
      </>
    </ThemeProvider>
  );
};

export default FilterGrid;
