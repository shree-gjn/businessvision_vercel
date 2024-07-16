import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { Link, useNavigate } from 'react-router-dom'; 
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, RadioGroup, Radio, 
//   FormControl, FormControlLabel, Typography, Button, Switch, FormLabel} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, RadioGroup, Radio, 
  FormControl, FormControlLabel, Typography, Button, Grid, FormLabel, Select, MenuItem, Checkbox, Switch} from '@mui/material';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import { width } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordianBasicInfo from './registration/components/AccordianBasicInfo';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
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

const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft:'15px', 
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
}));

const RecommendedJobSettings = () => {

  const generateValues = (start, end, step) => {
    const values = [];
    for (let i = start; i <= end; i += step) {
      values.push(`${i}万円以上`);
    }
    return values;
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [secondDropdownValue, setSecondDropdownValue] = useState('');
  const [selectedOptionError, setSelectedOptionError] = useState('');
  const [secondDropdownError, setSecondDropdownError] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionError('');
  };

  const handleSecondDropdownChange = (event) => {
    setSecondDropdownValue(event.target.value);
    setSecondDropdownError('');
  };

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const [toggleState, setToggleState] = useState([false, false, false, false]);
  const [mainToggleChecked, setMainToggleChecked] = useState(false);
  // const [checked, setChecked] = useState(false);

  const handleMainToggleChange = () => {
    setMainToggleChecked(!mainToggleChecked);
    setToggleState([mainToggleChecked, mainToggleChecked, mainToggleChecked, mainToggleChecked]);
  };

  const handleToggleChange = (index) => {
    const updatedToggles = [...toggleState];
    updatedToggles[index] = !updatedToggles[index];
    setToggleState(updatedToggles);
  };

  const data = [
    { id: 1, column1: '生まれ年', column2: '1999年' },
    { id: 2, column1: '最終学歴', column2: '大学卒' },
    { id: 3, column1: '会計の経験年数', column2: '3年' },
    { id: 4, column1: '経験職種', column2: '経理' },
    { id: 5, column1: '経験業種', column2: 'IT' },
    { id: 6, column1: '', column2: '商社（食品）' },
    { id: 7, column1: '希望する会社のカテゴリ', column2: '上場企業' },
    { id: 8, column1: '希望の従業員規模', column2: '101～500名' },
    { id: 9, column1: '希望業種', column2: 'IT' },
    { id: 10, column1: '希望勤務地（都道府県）', column2: '東京都' },
    { id: 11, column1: '希望する年収', column2: '500万円以上' },
    { id: 12, column1: '希望ポジション', column2: ' 課長（マネージャー）' },
    // Add more rows as needed
  ];

  function replaceAndRemoveRows(targetId, replaceId, removeId, data) {
    const targetIndex = data.findIndex((row) => row.id === targetId);
  
    if (targetIndex !== -1) {
      const replaceRow = data.find((row) => row.id === replaceId);
  
      if (replaceRow) {
        data[targetIndex].column1 = `${data[targetIndex].column1}\n${replaceRow.column1}`;
        data[targetIndex].column2 = `${data[targetIndex].column2}\n${replaceRow.column2}`;
        // Remove the row with removeId
        data.splice(data.findIndex((row) => row.id === removeId), 1);
      }
    }
  }
  
  // Replace and remove rows for id: 4, 5, 10
  replaceAndRemoveRows(5, 6, 6, data);

  const [checkboxes, setCheckboxes] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    // Add more checkboxes as neededd
  });

  const handleChangeOne = (name) => (event) => {
    setCheckboxes({
      ...checkboxes,
      [name]: event.target.checked,
    });
  };

  const handleReset = () => {
    // Handle reset logic here
    console.log('Resetting search conditions');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>おすすめ求人設定</p>
        </div>

        <Grid container>
          <Grid item xs={12}>
            {/* <Item>

            </Item> */}
          </Grid>
        </Grid>

        <BottomNav />
      </Box>
    </ThemeProvider>
  );
};

export default RecommendedJobSettings;
