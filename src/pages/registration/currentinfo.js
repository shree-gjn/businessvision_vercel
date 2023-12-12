import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  MenuItem,
} from '@mui/material';

const CurrentInfo = ({ formData, setFormData, handleNext }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionError, setSelectedOptionError] = useState('');
  const [secondDropdownValue, setSecondDropdownValue] = useState('');
  const [secondDropdownError, setSecondDropdownError] = useState('');
  const [thirdDropdownValue, setThirdDropdownValue] = useState('');
  const [thirdDropdownError, setThirdDropdownError] = useState('');
  const [newRadioValue, setNewRadioValue] = useState('');
  const [newRadioError, setNewRadioError] = useState('');
  const [dropdown4Value, setDropdown4Value] = useState('');
  const [dropdown4Error, setDropdown4Error] = useState('');
  const [dropdown5Value, setDropdown5Value] = useState('');
  const [dropdown5Error, setDropdown5Error] = useState('');
  const [dropdown6Value, setDropdown6Value] = useState('');
  const [dropdown6Error, setDropdown6Error] = useState('');
  const [dropdown7Value, setDropdown7Value] = useState('');
  const [dropdown7Error, setDropdown7Error] = useState('');
  const [dropdown8Value, setDropdown8Value] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionError('');
  };

  const handleSecondDropdownChange = (event) => {
    setSecondDropdownValue(event.target.value);
    setSecondDropdownError('');
  };

  const handleThirdDropdownChange = (event) => {
    setThirdDropdownValue(event.target.value);
    setThirdDropdownError('');
  };

  const handleNewRadioChange = (event) => {
    setNewRadioValue(event.target.value);
    setNewRadioError('');
  };

  const handleDropdown4Change = (event) => {
    setDropdown4Value(event.target.value);
    setDropdown4Error('');
  };

  const handleDropdown5Change = (event) => {
    setDropdown5Value(event.target.value);
    setDropdown5Error('');
  };

  const handleDropdown6Change = (event) => {
    setDropdown6Value(event.target.value);
    setDropdown6Error('');
  };

  const handleDropdown7Change = (event) => {
    setDropdown7Value(event.target.value);
    setDropdown7Error('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();

  };

  return (
    <div>
      <h1>Current Info</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
        <Grid item xs={12}>
          <FormControl fullWidth required error={!!selectedOptionError}>
            <FormLabel id="demo-radio-buttons-group-label">Option 2</FormLabel>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Placeholder
              </MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{selectedOptionError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!secondDropdownError}>
            <FormLabel id="second-dropdown-label">Second Dropdown</FormLabel>
            <Select
              value={secondDropdownValue}
              onChange={handleSecondDropdownChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="optionA">Option A</MenuItem>
              <MenuItem value="optionB">Option B</MenuItem>
              <MenuItem value="optionC">Option C</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{secondDropdownError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!thirdDropdownError}>
            <FormLabel id="third-dropdown-label">Third Dropdown</FormLabel>
            <Select
              value={thirdDropdownValue}
              onChange={handleThirdDropdownChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="optionA">Option A</MenuItem>
              <MenuItem value="optionB">Option B</MenuItem>
              <MenuItem value="optionC">Option C</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{thirdDropdownError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!newRadioError}>
            <FormLabel component="legend">New Radio Group</FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="newRadio"
              value={newRadioValue}
              onChange={handleNewRadioChange}
            >
              <FormControlLabel value="optionX" control={<Radio />} label="Option X" />
              <FormControlLabel value="optionY" control={<Radio />} label="Option Y" />
              <FormControlLabel value="optionZ" control={<Radio />} label="Option Z" />
            </RadioGroup>
            <FormHelperText style={{ color: 'red' }}>{newRadioError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth required error={!!dropdown4Error}>
            <FormLabel id="dropdown4-label">Fourth Dropdown</FormLabel>
            <Select
              value={dropdown4Value}
              onChange={handleDropdown4Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="optionD1">Option D1</MenuItem>
              <MenuItem value="optionD2">Option D2</MenuItem>
              <MenuItem value="optionD3">Option D3</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown4Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fifth Dropdown */}
          <FormControl fullWidth required error={!!dropdown5Error}>
            <FormLabel id="dropdown5-label">Fifth Dropdown</FormLabel>
            <Select
              value={dropdown5Value}
              onChange={handleDropdown5Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="optionE1">Option E1</MenuItem>
              <MenuItem value="optionE2">Option E2</MenuItem>
              <MenuItem value="optionE3">Option E3</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown5Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth required error={!!dropdown6Error}>
            <FormLabel id="dropdown6-label">Sixth Dropdown</FormLabel>
            <Select
              value={dropdown6Value}
              onChange={handleDropdown6Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="optionE1">Option E1</MenuItem>
              <MenuItem value="optionE2">Option E2</MenuItem>
              <MenuItem value="optionE3">Option E3</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown6Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Seven Dropdown */}
          <FormControl fullWidth required error={!!dropdown7Error}>
            <FormLabel id="dropdown7-label">Seven Dropdown</FormLabel>
            <Select
              value={dropdown7Value}
              onChange={handleDropdown7Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="optionE1">Option E1</MenuItem>
              <MenuItem value="optionE2">Option E2</MenuItem>
              <MenuItem value="optionE3">Option E3</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText>
          </FormControl>
        </Grid>
        </Grid>
        <Grid item xs={12} style={{ margin: '0 auto', display: 'grid', paddingBottom: '100px', paddingTop:'20px' }}>
          <Button type="submit" variant="contained" color="primary">
            Next Page
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default CurrentInfo;
