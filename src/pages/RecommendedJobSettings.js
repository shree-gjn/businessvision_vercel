import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
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
    <Box sx={{ width: '100%', typography: 'body1' }}>
    {/* <div className="PageHeader">
      <p>おすすめ求人設定</p>
    </div> */}
    <div className="PageHeader">
      <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
      <p>おすすめ求人設定</p>
    </div>
    {/* <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink> */}

    <div style={{padding: '24px 24px 100px',}}>
     <Grid container xs={12} style={{marginBottom: '20px', textAlign: 'left', alignItems: 'center'}}>
          <Grid item xs={9}>
          <FormLabel id="dropdown5-label" style={{textAlign: 'left', marginBottom: '10px'}}>おすすめ求人求人設定</FormLabel>
          </Grid>
          <Grid item xs={3}>
          <Switch checked={mainToggleChecked} onChange={handleMainToggleChange} />
              {mainToggleChecked ? 'オン' : 'オフ'}
          </Grid>
      </Grid>
      {mainToggleChecked && (
        <>
          <Grid item xs={12} style={{marginBottom: '20px', textAlign: 'left'}}>
            <FormControl fullWidth error={!!selectedOptionError}>
              <FormLabel id="dropdown5-label" style={{textAlign: 'left', marginBottom: '10px'}}>年収幅おすすめ設定</FormLabel>
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                オプションを選んでください
                </MenuItem>
                <MenuItem value="299万円以上">299万円以上</MenuItem>
                {generateValues(300, 2000, 50).map((value) => (
                  <MenuItem key={value} value={value} style={{textAlign: 'left'}} >
                    {value}
                  </MenuItem>
                ))}
                {generateValues(2000, 5000, 500).map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
              {/* <FormHelperText style={{ color: 'red' }}>{dropdown5Error}</FormHelperText> */}
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{textAlign: 'left'}}>
            {/* Seven Dropdown */}
            <FormControl fullWidth style={{marginBottom: '20px'}}>
              <FormLabel id="dropdown7-label" style={{textAlign: 'left', marginBottom: '10px'}}>業種おすすめ設定​</FormLabel>
              <AccordianBasicInfo required={false} style={{marginBottom: '20px'}}/>
              {/* <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText>  */}
            </FormControl>
          </Grid>

          
          <Grid item xs={12} style={{textAlign: 'left'}}>
            {/* Seven Dropdown */}
            <FormControl fullWidth style={{marginBottom: '20px'}}>
              <FormLabel id="dropdown7-label" style={{textAlign: 'left', marginBottom: '10px'}}>業種おすすめ設定​</FormLabel>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
                  label="上場企業"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
                  label="上場グループ企業"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
                  label="非上場企業"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
                  label="外資系企業"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
                  label="ベンチャー企業"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
                  label="官公庁"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox7} onChange={handleChangeOne('checkbox7')} />}
                  label="団体"
                />
              </div>
            </FormControl>
          </Grid>

          <Grid item xs={12} style={{textAlign: 'left'}}>
            {/* Seven Dropdown */}
            <FormControl fullWidth style={{marginBottom: '20px'}}>
              <FormLabel id="dropdown7-label" style={{textAlign: 'left', marginBottom: '10px'}}>従業員規模おすすめ設定</FormLabel>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} />}
                  label="10名以下"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox9} onChange={handleChangeOne('checkbox9')} />}
                  label="11～50名"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox10} onChange={handleChangeOne('checkbox10')} />}
                  label="51～100名"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox11} onChange={handleChangeOne('checkbox11')} />}
                  label="101～500名"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox12} onChange={handleChangeOne('checkbox12')} />}
                  label="501～1000名"
                />
                <FormControlLabel
                  control={<Checkbox checked={checkboxes.checkbox13} onChange={handleChangeOne('checkbox13')} />}
                  label="1000名以上"
                />  
              </div>
            </FormControl>
          </Grid>


            <Grid item xs={12} style={{textAlign: 'left'}}>
            <FormLabel id="dropdown4-label" style={{marginBottom: '10px', display: 'block'}}>経理スキルおすすめ設定</FormLabel>
            {/* Seven Dropdown */}
            {/* <Accordion style={{marginBottom: '20px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>オプションを選んでください</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
            <div>
              <Divider />
              
            </div>
            </AccordionDetails>
          </Accordion> */}
          <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>日次取引仕訳</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>月次決算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>本決算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>予算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>拾与計算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>社会保障</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>消费税</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>法人税他</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>監查对象決算子会社</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>監查对象決算親合社</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>連結決算</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth style={{marginBottom: '20px'}}>
                <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>開示書類</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  // value={gender}
                  // onChange={handleGenderChange}
                  style={{textAlign: 'left', display: 'block'}}>
                  <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
                  <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
                  <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
                  <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
                  <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
                </RadioGroup>
              </FormControl>
          </Grid>
        </>
      )}
       {/* <Table>
          <TableBody>
          <TableRow>
            <TableCell style={{border: 'none', padding: '10px 0'}}>おすすめ求人求人設定</TableCell>
            <TableCell style={{border: 'none', padding: '10px 0', textAlign: 'end'}}>
              <Switch checked={mainToggleChecked} onChange={handleMainToggleChange} />
              {mainToggleChecked ? 'オン' : 'オフ'}
            </TableCell>
          </TableRow>
          {mainToggleChecked && (
            <>
              <TableRow>
                <TableCell style={{border: 'none', padding: '10px 0'}}>年収幅おすすめ設定</TableCell>
                <TableCell style={{border: 'none', padding: '10px 0', textAlign: 'end'}}>
                  <Switch
                    checked={toggleState[1]}
                    onChange={() => handleToggleChange(1)}
                  />
                  {toggleState[1] ? 'オン' : 'オフ'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{border: 'none', padding: '10px 0'}}>業種おすすめ設定</TableCell>
                <TableCell style={{border: 'none', padding: '10px 0', textAlign: 'end'}}>
                  <Switch
                    checked={toggleState[2]}
                    onChange={() => handleToggleChange(2)}
                  />
                  {toggleState[2] ? 'オン' : 'オフ'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{border: 'none', padding: '10px 0'}}>企業カテゴリおすすめ設定</TableCell>
                <TableCell style={{border: 'none', padding: '10px 0', textAlign: 'end'}}>
                  <Switch
                    checked={toggleState[3]}
                    onChange={() => handleToggleChange(3)}
                  />
                  {toggleState[3] ? 'オン' : 'オフ'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{border: 'none', padding: '10px 0'}}>従業員規模おすすめ設定</TableCell>
                <TableCell style={{border: 'none', padding: '10px 0', textAlign: 'end'}}>
                  <Switch
                    checked={toggleState[4]}
                    onChange={() => handleToggleChange(4)}
                  />
                  {toggleState[4] ? 'オン' : 'オフ'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{border: 'none', padding: '10px 0'}}>経理スキルおすすめ設定</TableCell>
                <TableCell style={{border: 'none', padding: '10px 0', textAlign: 'end'}}>
                  <Switch
                    checked={toggleState[5]}
                    onChange={() => handleToggleChange(5)}
                  />
                  {toggleState[5] ? 'オン' : 'オフ'}
                </TableCell>
              </TableRow>
            </>
          )}
          </TableBody>
        </Table> */}

        <FormControl fullWidth>
          {/* <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>日次取引仕訳</FormLabel> */}
          <RadioGroup
            row
            aria-label="recommendedsetting"
            name="recommendedsetting"
            // value={gender}
            // onChange={handleGenderChange}
            style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
            <FormControlLabel value="希望通り" control={<Radio />} label="希望通り" />
            <FormControlLabel value="少し広め" control={<Radio />} label="少し広め" />
          </RadioGroup>
          </FormControl>

        <div style={{padding: '20px 0', display: 'flex', justifyContent: 'space-between', width: 'auto'}}>
        <Typography variant="paragraph" component="div" sx={{padding: '10px 0 10px 0', textAlign: 'left'}}> 詳細おすすめ設定 (カスタマイズ) </Typography>
        <div style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '80px', display: 'flex', gap: '15px'}}>
          <span>
            <PencilEdit />
          </span>
          <Typography variant='paragraph'>編集</Typography>
        </div>
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth style={{marginBottom: '10px'}}>変更内容を保存</Button>
      <Button onClick={handleReset} variant="text" sx={{ textAlign: 'right' }}>
        <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        リセット条件
        </Link>
      </Button>
    </div>
    <BottomNav />
  </Box>
  );
};

export default RecommendedJobSettings;
