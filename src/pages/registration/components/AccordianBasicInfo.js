import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
  Collapse,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CheckboxAccordion = ({ title, checkboxes }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {checkboxes.map((checkbox, index) => (
            <Grid item key={index}>
              <FormControlLabel control={<Checkbox />} label={checkbox.label} />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const NestedAccordion = ({ title, innerAccordions }) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Handle dynamic height adjustment when inner accordion expands/collapses
    const handleResize = () => {
      if (expanded) {
        window.dispatchEvent(new Event('resize'));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [expanded]);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {innerAccordions.map((innerAccordion, index) => (
            <CheckboxAccordion
              key={index}
              title={innerAccordion.title}
              checkboxes={innerAccordion.checkboxes}
            />
          ))}
        </Collapse>
      </AccordionDetails>
    </Accordion>
  );
};

const AccordianBasicInfo = () => {
  const accordionData = [
    {
      title: 'オプションを選んでください',
      innerAccordions: [
        {
          title: 'IT・インタネット・ゲーム',
          checkboxes: [
            { label: 'Checkbox 2.1.1' },
            { label: 'Checkbox 2.1.2' },
          ],
        },
        {
          title: 'メーカー',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: '商社',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: '流通・小売・サービス',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: '広告・出版・マスコミ',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: 'コンサルティング',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: '金融',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: '建設・不動産',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: 'メディカル',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: '物流・運輸',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
        {
          title: 'その他（インフラ・教育・官公庁など）',
          checkboxes: [
            { label: 'Checkbox 2.2.1' },
            { label: 'Checkbox 2.2.2' },
          ],
        },
      ],
    },
    // Add more accordions or inner accordions as needed
  ];

  return (
    <div>
      {accordionData.map((accordion, index) => (
        'innerAccordions' in accordion ? (
          <NestedAccordion
            key={index}
            title={accordion.title}
            innerAccordions={accordion.innerAccordions}
          />
        ) : (
          <CheckboxAccordion key={index} title={accordion.title} checkboxes={accordion.checkboxes} />
        )
      ))}
    </div>
  );
};

export default AccordianBasicInfo;
