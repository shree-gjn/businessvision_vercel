import React, { useState } from 'react';
import {
  Select,
  MenuItem,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import {ReactComponent as YenIcon} from '../assets/YenIcon.svg';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; // Import the desired icon

const DropdownWithAccordions = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedValues((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((item) => item !== value)
        : [...prevValues, value]
    );
  };

  return (
    <Select
      multiple
      value={selectedValues}
      onChange={handleChange}
      renderValue={(selected) => `Selected: ${selected.join(', ')}`}
    >
      <MenuItem value="item1">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<YenIcon />}>
            Accordion 1
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValues.includes('item1')}
                  onChange={handleChange}
                  value="item1"
                />
              }
              label="Checkbox 1"
            />
            {/* Add more checkboxes or content here */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </MenuItem>

      <MenuItem value="item2">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<YenIcon />}>
            Accordion 2
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedValues.includes('item2')}
                  onChange={handleChange}
                  value="item2"
                />
              }
              label="Checkbox 2"
            />
            {/* Add more checkboxes or content here */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </MenuItem>
      {/* Add more accordions as needed */}
    </Select>
  );
};

export default DropdownWithAccordions;
