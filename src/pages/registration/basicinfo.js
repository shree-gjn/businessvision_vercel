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
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BasicInfo = ({ formData, setFormData, handleNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
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
  const [dropdown8Error, setDropdown8Error] = useState('');
  const [new2RadioValue, setNew2RadioValue] = useState('');
  const [new2RadioError, setNew2RadioError] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, email: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setFormData({ ...formData, isChecked: event.target.checked });
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setGenderError('');
  };

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

  const handleNew2RadioChange = (event) => {
    setNew2RadioValue(event.target.value);
    setNew2RadioError('');
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

  const handleDropdown8Change = (event) => {
    setDropdown8Value(event.target.value);
    setDropdown8Error('');
  };

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  const handleDropdown1Change = (event) => {
    setDropdown1Value(event.target.value);
  };

  const handleDropdown2Change = (event) => {
    setDropdown2Value(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Name is required.');
      return;
    }

    if (email.trim() === '') {
      alert('Email is required.');
      return;
    }

    if (!isChecked) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    if (gender === '') {
      setGenderError('Please select a gender.');
      return;
    }

    if (selectedOption === '') {
      setSelectedOptionError('Please select an option.');
      return;
    }

    if (secondDropdownValue === '') {
      setSecondDropdownError('Please select a value for the second dropdown.');
      return;
    }

    if (thirdDropdownValue === '') {
      setThirdDropdownError('Please select a value for the third dropdown.');
      return;
    }

    if (newRadioValue === '') {
      setNewRadioError('Please select a value for the new radio button group.');
      return;
    }

    if (new2RadioValue === '') {
      setNewRadioError('Please select a value for the new radio button group.');
      return;
    }

    if (dropdown4Value === '') {
      setDropdown4Error('Please select a value for the fourth dropdown.');
      return;
    }

    if (dropdown5Value === '') {
      setDropdown5Error('Please select a value for the fifth dropdown.');
      return;
    }

    if (dropdown6Value === '') {
      setDropdown6Error('Please select a value for the sixth dropdown.');
      return;
    }

    if (dropdown7Value === '') {
      setDropdown7Error('Please select a value for the seventh dropdown.');
      return;
    }

    if (dropdown8Value === '') {
      setDropdown8Error('Please select a value for the eighth dropdown.');
      return;
    }

    handleNext();
  };

  return (
    <div>
      <h1>Basic Info</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
          <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!genderError}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <FormHelperText style={{ color: 'red' }}>{genderError}</FormHelperText>
          </FormControl>
        </Grid>
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

        <Grid item xs={12}>
          {/* Eight Dropdown */}
          <FormControl fullWidth required error={!!dropdown8Error}>
            <FormLabel id="dropdown5-label">Eight Dropdown</FormLabel>
            <Select
              value={dropdown8Value}
              onChange={handleDropdown8Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select an option
              </MenuItem>
              <MenuItem value="optionE1">Option E1</MenuItem>
              <MenuItem value="optionE2">Option E2</MenuItem>
              <MenuItem value="optionE3">Option E3</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown8Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
        <FormLabel id="textfield-label">Eight Dropdown</FormLabel>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label="I agree to the terms and conditions"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!new2RadioError}>
            <FormLabel component="legend">New Radio Group</FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="newRadio"
              value={new2RadioValue}
              onChange={handleNew2RadioChange}
            >
              <FormControlLabel value="optionX" control={<Radio />} label="Option X" />
              <FormControlLabel value="optionY" control={<Radio />} label="Option Y" />
              <FormControlLabel value="optionZ" control={<Radio />} label="Option Z" />
            </RadioGroup>
            <FormHelperText style={{ color: 'red' }}>{new2RadioError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
        <IconButton onClick={handleExpandToggle}>
          <ExpandMoreIcon /><Typography variant="h6">Expandable Text Field</Typography>
        </IconButton>
        <Collapse in={expanded} >
          <div style={{alignItems:'center', display:'flex', gap:'10px'}}>
          <FormLabel id="dropdown5-label">Fifth </FormLabel>
            <TextField
              label="Your Label"
              variant="outlined"
              // other TextField props can be added here
            />
            <FormLabel id="dropdown5-label">Fifth </FormLabel>
           </div>
        </Collapse>
        </Grid>

        <Grid item xs={12}>
        <div>
      <IconButton onClick={handleExpandToggle}>
        <ExpandMoreIcon />      <Typography variant="h6">Expandable Section</Typography>

      </IconButton>
      <Collapse in={expanded}>
        <div>
          <Select
            label="Dropdown 1"
            value={dropdown1Value}
            onChange={handleDropdown1Change}
            style={{ marginBottom: '10px', marginRight: '10px', width:'48%' }}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          <Select
            label="Dropdown 2"
            value={dropdown2Value}
            onChange={handleDropdown2Change}
            style={{ marginBottom: '10px', width:'48%' }}
          >
            <MenuItem value="optionA">Option A</MenuItem>
            <MenuItem value="optionB">Option B</MenuItem>
            <MenuItem value="optionC">Option C</MenuItem>
          </Select>
        </div>
      </Collapse>
    </div>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ margin: '0 auto', display: 'grid', paddingBottom: '100px' }}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default BasicInfo;
