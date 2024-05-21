// import React, { useState, useEffect } from 'react';
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Checkbox,
//   FormControlLabel,
//   Typography,
//   Collapse,
//   Grid,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const CheckboxAccordion = ({ title, checkboxes, formData, name, onChange }) => {
//   const [expanded, setExpanded] = useState(false);
//   // const [checkboxState, setCheckboxState] = useState({});

//   useEffect(() => {
//     // Initialize checkbox state based on formData
//     const initialCheckboxState = {};
//     checkboxes.forEach((checkbox) => {
//       initialCheckboxState[checkbox.label] = formData[name]?.includes(checkbox.label) || false;
//     });
//     setCheckboxState(initialCheckboxState);
//   }, [formData, name, checkboxes]);

//   const handleChange = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };

//   const handleCheckboxChange = (checkboxLabel, isChecked) => {
//     onChange(name, checkboxLabel, isChecked);
//   };

//   return (
//     <Accordion expanded={expanded} onChange={handleChange}>
//       <AccordionSummary
//         expandIcon={expanded ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />}
//         aria-controls="panel1bh-content"
//       >
//         <Typography>{title}</Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Grid container sx={{display:'inline'}}>
//           {checkboxes.map((checkbox, index) => (
//             <Grid item key={index}>
//               <FormControlLabel control={
//                   <Checkbox
//                   checked={formData[checkbox.label] || false}
//                     onChange={(e) => handleCheckboxChange(checkbox.label, e.target.checked)}
//                     name={checkbox.label}
//                 />} label={checkbox.label} />
//             </Grid>
//           ))}
//         </Grid>
//       </AccordionDetails>
//     </Accordion>
//   );
// };

// const NestedAccordion = ({ title, innerAccordions, onChange }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [nestedAccordionCheckboxes, setNestedAccordionCheckboxes] = useState({});

//   useEffect(() => {
//     // Handle dynamic height adjustment when inner accordion expands/collapses
//     const handleResize = () => {
//       if (expanded) {
//         window.dispatchEvent(new Event('resize'));
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [expanded]);

//   const handleChange = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };

//   const handleCheckboxChange = (accordionIndex, checkboxLabel, isChecked) => {
//     setNestedAccordionCheckboxes((prevCheckboxes) => {
//       const updatedCheckboxes = { ...prevCheckboxes };
//       if (!updatedCheckboxes[accordionIndex]) {
//         updatedCheckboxes[accordionIndex] = {};
//       }
//       updatedCheckboxes[accordionIndex][checkboxLabel] = isChecked;
//       return updatedCheckboxes;
//     });
//     onChange(accordionIndex, checkboxLabel, isChecked); // Call the onChange function
//   };


//   return (
//     <Accordion expanded={expanded} onChange={handleChange} sx={{boxShadow: 'none', border: '1px solid rgba(0, 0, 0, 0.23)'}}>
//       <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
//         <Typography>{title}</Typography>
//       </AccordionSummary>
//       <AccordionDetails style={{padding: '0'}}>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           {innerAccordions.map((innerAccordion, index) => (
//             <CheckboxAccordion
//               key={index}
//               title={innerAccordion.title}
//               checkboxes={innerAccordion.checkboxes}
//               formData={nestedAccordionCheckboxes[index] || {}}
//               name={innerAccordion.name}
//               onChange={(checkboxLabel, isChecked) => handleCheckboxChange(index, checkboxLabel, isChecked)}
//             />
//           ))}
//         </Collapse>
//       </AccordionDetails>
//     </Accordion>
//   );
// };

// const AccordianBasicInfo = ({selectedCheckboxes, onCheckboxChange}) => {
//   const [errors, setErrors] = useState({});

//   // const handleCheckboxChange = (e) => {
//   //   const { name, checked } = e.target;
//   //   const updatedFormData = {
//   //     ...formData,
//   //     [name]: checked ? [...(formData[name] || []), name] : formData[name].filter((item) => item !== name),
//   //   };
//   //   setFormData(updatedFormData);
//   // };

//   const handleCheckboxChange = (accordionIndex, checkboxLabel, isChecked) => {
//     onCheckboxChange(accordionIndex, checkboxLabel, isChecked);
//   };

//   // State for nested accordion checkboxes
//   const [nestedAccordionCheckboxes, setNestedAccordionCheckboxes] = useState({});

//   // Handler function for nested accordion checkbox changes
//   const handleNestedAccordionCheckboxChange = (accordionIndex, checkboxLabel, isChecked) => {
//     setNestedAccordionCheckboxes((prevState) => {
//       const updatedCheckboxes = { ...prevState };
//       if (!updatedCheckboxes[accordionIndex]) {
//         updatedCheckboxes[accordionIndex] = {};
//       }
//       updatedCheckboxes[accordionIndex][checkboxLabel] = isChecked;
//       return updatedCheckboxes;
//     });
//   };


//   const accordionData = [
//     {
//       title: 'オプションを選んでください',
//       innerAccordions: [
//         {
//           title: 'IT・インタネット・ゲーム',
//           checkboxes: [
//             { label: 'IT' },
//             { label: '通信キャリア' },
//             { label: 'インターネット広告・メディア' },
//             { label: 'Web制作・Webデザイン' },
//             { label: 'ゲーム' },
//             { label: 'IT・インターネット・ゲーム（その他）' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: 'メーカー',
//           checkboxes: [
//             { label: 'メーカー（コンピューター・通信系）' },
//             { label: 'メーカー（電気・電子・半導体）' },
//             { label: 'メーカー（自動車・輸送機器）' },
//             { label: 'メーカー（機械）' },
//             { label: 'メーカー（化学・素材）' },
//             { label: 'メーカー（食品）' },
//             { label: 'メーカー（医療品・医療機器）' },
//             { label: 'メーカー（ファッション・アパレル）' },
//             { label: 'メーカー（日用品・化粧品）' },
//             { label: 'メーカー（その他）' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: '商社',
//           checkboxes: [
//             { label: '商社（総合）' },
//             { label: '商社（化学・石油・ガラス・セラミック・セメント）' },
//             { label: '商社（鉄鋼・金属）' },
//             { label: '商社（住宅・建材・エクステリア）' },
//             { label: '商社（医療品・化粧品・バイオ）' },
//             { label: '商社（食品）' },
//             { label: '商社（紙・パルプ）' },
//             { label: '商社（ファッション・アパレル）' },
//             { label: '商社（インテリア）' },
//             { label: '商社（その他）' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: '流通・小売・サービス',
//           checkboxes: [
//             { label: '流通・小売（百貨店・スーパー・コンビニ）' },
//             { label: '流通・小売（ファッション・アパレル）' },
//             { label: '流通・小売（医薬品・化粧品）' },
//             { label: '流通・小売（食品）' },
//             { label: '流通・小売（家電）' },
//             { label: '通信販売' },
//             { label: 'フード・レストラン' },
//             { label: 'レジャー・アミューズメント' },
//             { label: 'ホテル・観光' },
//             { label: '人材ビジネス' },
//             { label: 'コールセンター' },
//             { label: '流通・小売・サービス（その他）' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: '広告・出版・マスコミ',
//           checkboxes: [
//             { label: '放送・広告・印刷・出版' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: 'コンサルティング',
//           checkboxes: [
//             { label: 'コンサルティングファーム・シンクタンク' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: '金融',
//           checkboxes: [
//             { label: '金融（銀行）' },
//             { label: '金融（保険）' },
//             { label: '金融（証券）' },
//             { label: '金融（その他）' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: '建設・不動産',
//           checkboxes: [
//             { label: '不動産' },
//             { label: '建築・土木' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: 'メディカル',
//           checkboxes: [
//             { label: '医療' },
//             { label: '福祉・介護' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: '物流・運輸',
//           checkboxes: [
//             { label: '物流・倉庫' },
//             { label: '陸運・海運・航空・鉄道' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//         {
//           title: 'その他（インフラ・教育・官公庁など）',
//           checkboxes: [
//             { label: '電気・ガス・水道' },
//             { label: '教育・学校' },
//             { label: '団体・連合会・官公庁' },
//             { label: 'その他業種' },
//           ],
//           onChange: handleNestedAccordionCheckboxChange,
//         },
//       ],
//       onChange: onCheckboxChange, 
//     },
//     // Add more accordions or inner accordions as needed
//   ];

//   return (
//     <div>
//       {accordionData.map((accordion, index) => (
//         'innerAccordions' in accordion ? (
//           <NestedAccordion
//             key={index}
//             title={accordion.title}
//             innerAccordions={accordion.innerAccordions}
//             onChange={accordion.onChange} // Pass onChange from accordion if available
//           />
//         ) : (
//           <CheckboxAccordion
//             key={index}
//             title={accordion.title}
//             checkboxes={accordion.checkboxes}
//             formData={selectedCheckboxes[index] || {}}
//             name={`accordion-${index}`}
//             onChange={(accordionIndex, checkboxLabel, isChecked) => handleCheckboxChange(accordionIndex, checkboxLabel, isChecked)}
//           />
//         )
//       ))}
//     </div>
//   );
// };

// export default AccordianBasicInfo;


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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CheckboxAccordion = ({ title, checkboxes, selectedCheckboxes, onCheckboxChange}) => {

  const [expanded, setExpanded] = useState(false);
  // const [localExpanded, setLocalExpanded] = useState(expanded);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleTitleClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking the title
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange} sx={{boxShadow: 'none', borderBottom: '1px solid #b5b5b5'}}>
      <AccordionSummary
        expandIcon={expanded ? <RemoveIcon sx={{fontSize: '20px'}} /> : <AddIcon sx={{fontSize: '20px'}} />}
        aria-controls="panel1bh-content"
        onClick={handleTitleClick}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container sx={{ display: 'inline' }}>
          {checkboxes.map((checkbox, index) => (
            <Grid item key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedCheckboxes.includes(checkbox.label)}
                    onChange={(e) => onCheckboxChange(checkbox.label, e.target.checked)}
                    name={checkbox.label}
                  />
                }
                label={checkbox.label}
              />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const NestedAccordion = ({ title, innerAccordions, selectedCheckboxes, onCheckboxChange }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionChange = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Accordion sx={{boxShadow: 'none', border: '1px solid rgba(0, 0, 0, 0.23)'}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: '0' }}>
        <Collapse in={true} timeout="auto" unmountOnExit>
          {innerAccordions.map((innerAccordion, index) => (
           <div key={index} onClick={() => handleAccordionChange(index)}>
              <CheckboxAccordion
                key={index}
                title={innerAccordion.title}
                checkboxes={innerAccordion.checkboxes}
                selectedCheckboxes={selectedCheckboxes}
                onCheckboxChange={onCheckboxChange}
                expanded={openAccordionIndex === index} // Pass whether this accordion is expanded or not
              />
            </div>
          ))}
        </Collapse>
      </AccordionDetails>
    </Accordion>
  );
};

const AccordianBasicInfo = ({ selectedCheckboxes, onCheckboxChange }) => {
  // const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  // const handleCheckboxChange = (checkboxLabel, isChecked) => {
  //   if (isChecked) {
  //     setSelectedCheckboxes((prevSelectedCheckboxes) => [...prevSelectedCheckboxes, checkboxLabel]);
  //   } else {
  //     setSelectedCheckboxes((prevSelectedCheckboxes) =>
  //       prevSelectedCheckboxes.filter((label) => label !== checkboxLabel)
  //     );
  //   }
  // };


  const accordionData = [
    {
      title: 'オプションを選んでください',
      innerAccordions: [
        {
          title: 'IT・インタネット・ゲーム',
          checkboxes: [
            { label: 'IT' },
            { label: '通信キャリア' },
            { label: 'インターネット広告・メディア' },
            { label: 'Web制作・Webデザイン' },
            { label: 'ゲーム' },
            { label: 'IT・インターネット・ゲーム（その他）' },
          ],
        },
        {
          title: 'メーカー',
          checkboxes: [
            { label: 'メーカー（コンピューター・通信系）' },
            { label: 'メーカー（電気・電子・半導体）' },
            { label: 'メーカー（自動車・輸送機器）' },
            { label: 'メーカー（機械）' },
            { label: 'メーカー（化学・素材）' },
            { label: 'メーカー（食品）' },
            { label: 'メーカー（医療品・医療機器）' },
            { label: 'メーカー（ファッション・アパレル）' },
            { label: 'メーカー（日用品・化粧品）' },
            { label: 'メーカー（その他）' },
          ],
        },
        {
          title: '商社',
          checkboxes: [
            { label: '商社（総合）' },
            { label: '商社（化学・石油・ガラス・セラミック・セメント）' },
            { label: '商社（鉄鋼・金属）' },
            { label: '商社（住宅・建材・エクステリア）' },
            { label: '商社（医療品・化粧品・バイオ）' },
            { label: '商社（食品）' },
            { label: '商社（紙・パルプ）' },
            { label: '商社（ファッション・アパレル）' },
            { label: '商社（インテリア）' },
            { label: '商社（その他）' },
          ],
        },
        {
          title: '流通・小売・サービス',
          checkboxes: [
            { label: '流通・小売（百貨店・スーパー・コンビニ）' },
            { label: '流通・小売（ファッション・アパレル）' },
            { label: '流通・小売（医薬品・化粧品）' },
            { label: '流通・小売（食品）' },
            { label: '流通・小売（家電）' },
            { label: '通信販売' },
            { label: 'フード・レストラン' },
            { label: 'レジャー・アミューズメント' },
            { label: 'ホテル・観光' },
            { label: '人材ビジネス' },
            { label: 'コールセンター' },
            { label: '流通・小売・サービス（その他）' },
          ],
        },
        {
          title: '広告・出版・マスコミ',
          checkboxes: [
            { label: '放送・広告・印刷・出版' },
          ],
        },
        {
          title: 'コンサルティング',
          checkboxes: [
            { label: 'コンサルティングファーム・シンクタンク' },
          ],
        },
        {
          title: '金融',
          checkboxes: [
            { label: '金融（銀行）' },
            { label: '金融（保険）' },
            { label: '金融（証券）' },
            { label: '金融（その他）' },
          ],
        },
        {
          title: '建設・不動産',
          checkboxes: [
            { label: '不動産' },
            { label: '建築・土木' },
          ],
        },
        {
          title: 'メディカル',
          checkboxes: [
            { label: '医療' },
            { label: '福祉・介護' },
          ],
        },
        {
          title: '物流・運輸',
          checkboxes: [
            { label: '物流・倉庫' },
            { label: '陸運・海運・航空・鉄道' },
          ],
        },
        {
          title: 'その他（インフラ・教育・官公庁など）',
          checkboxes: [
            { label: '電気・ガス・水道' },
            { label: '教育・学校' },
            { label: '団体・連合会・官公庁' },
            { label: 'その他業種' },
          ],
        },
      ],
    },
    // Add more accordions or inner accordions as needed
  ];

  return (
    <div>
      {accordionData.map((accordion, index) => (
        <NestedAccordion
          key={index}
          title={accordion.title}
          innerAccordions={accordion.innerAccordions}
          selectedCheckboxes={selectedCheckboxes}
          onCheckboxChange={onCheckboxChange}
        />
      ))}
    </div>
  );
};

export default AccordianBasicInfo;