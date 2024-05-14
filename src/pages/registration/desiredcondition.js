// import React, { useState } from 'react';
// import {
//   Button,
//   Grid,
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   Select,
//   MenuItem,
// } from '@mui/material';

// const DesiredJobType = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '管理部門系全て', label: '管理部門系全て' },
//   { value: '経理​', label: '経理​' },
//   { value: '財務・コントローラー​', label: '財務・コントローラー​' },
//   { value: '会計・税務', label: '会計・税務' },
//   { value: '内部監査​', label: '内部監査​' },
//   { value: '広報・IR​', label: '広報・IR​' },
//   { value: '管理部長', label: '管理部長' },
//   { value: 'CFO（役員）', label: 'CFO（役員）' },
//   { value: '総務', label: '総務' },
//   { value: '人事（採用・労務・教育など）', label: '人事（採用・労務・教育など）' },
//   { value: '人事制度・企画', label: '人事制度・企画' },
//   { value: '法務・コンプライアンス', label: '法務・コンプライアンス' },
//   { value: '特許・知的財産関連', label: '特許・知的財産関連' },
//   { value: 'その他', label: 'その他' }
// ];

// const DesiredIndustry = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: 'IT・インタネット・ゲーム', label: 'IT・インタネット・ゲーム' },
//   { value: 'メーカー​', label: 'メーカー​' },
//   { value: '商社', label: '商社' },
//   { value: '流通・小売・サービス', label: '流通・小売・サービス' },
//   { value: '広告・出版・マスコミ', label: '広告・出版・マスコミ' },
//   { value: 'コンサルティング', label: 'コンサルティング' },
//   { value: '金融', label: '金融' },
//   { value: '建設・不動産', label: '建設・不動産' },
//   { value: 'メディカル', label: 'メディカル' },
//   { value: '物流・運輸', label: '物流・運輸' },
//   { value: 'その他（インフラ・教育・官公庁など）', label: 'その他（インフラ・教育・官公庁など）' }
// ];

// const DesiredPosition = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '特に希望しない', label: '特に希望しない' },
//   { value: '担当者（スタッフ）', label: '担当者（スタッフ）' },
//   { value: '主任（リーダー）', label: '主任（リーダー）' },
//   { value: '係長（マネージャー候補', label: '係長（マネージャー候補' },
//   { value: '課長（マネージャー）', label: '課長（マネージャー）' },
//   { value: '部長（部門責任者）', label: '部長（部門責任者）' },
//   { value: 'CFO（役員）', label: 'CFO（役員）' },
//   { value: '顧問', label: '顧問' },
//   { value: 'その他', label: 'その他' }
// ];

// const DesiredWorkLocation = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '東京都', label: '東京都' },
//   { value: '神奈川県​', label: '神奈川県​' },
//   { value: '千葉県​', label: '千葉県​' },
//   { value: '埼玉県​', label: '埼玉県​' },
//   { value: '１都３県全て', label: '１都３県全て' },
//   { value: '北海道・東北​', label: '北海道・東北​' },
//   { value: '北関東', label: '北関東' },
//   { value: '中部', label: '中部' },
//   { value: '近畿', label: '近畿' },
//   { value: '中国・四国', label: '中国・四国' },
//   { value: '九州・沖縄', label: '九州・沖縄' },
//   { value: '海外', label: '海外' }
// ];

// const DesiredCompanyCategory = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '上場企業', label: '上場企業' },
//   { value: '上場グループ企業', label: '上場グループ企業' },
//   { value: '非上場企業', label: '非上場企業' },
//   { value: '外資系企業​', label: '外資系企業​' },
//   { value: 'ベンチャー企業​', label: 'ベンチャー企業​' },
//   { value: '官公庁', label: '官公庁' },
//   { value: '団体', label: '団体' }
// ];

// const DesiredNumberOfEmployees = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '10名以下', label: '10名以下' },
//   { value: '11～50名​', label: '11～50名​' },
//   { value: '51～100名​', label: '51～100名​' },
//   { value: '101～500名​', label: '101～500名​' },
//   { value: '501～1000名​', label: '501～1000名​' },
//   { value: '1000名以上​', label: '1000名以上​' }
// ];


// const DesiredCondition = ({ formData, setFormData, handleNext, handleBack}) => {
//   const [desiredAnnualIncome, setdesiredAnnualIncome] = useState('');
//   const [desiredAnnualIncomeError, setdesiredAnnualIncomeError] = useState('');
//   const [desiredJobType, setdesiredJobType] = useState('');
//   const [desiredJobTypeError, setdesiredJobTypeError] = useState('');
//   const [desiredIndustry, setdesiredIndustry] = useState('');
//   const [desiredIndustryError, setdesiredIndustryError] = useState('');
//   const [desiredPosition, setdesiredPosition] = useState('');
//   const [desiredPositionError, setdesiredPositionError] = useState('');
//   const [desiredWorkLocation, setdesiredWorkLocation] = useState('');
//   const [desiredWorkLocationError, setdesiredWorkLocationError] = useState('');
//   const [desiredCompanyCategory, setdesiredCompanyCategory] = useState('');
//   const [desiredCompanyCategoryError, setdesiredCompanyCategoryError] = useState('');
//   const [desiredEmployees, setdesiredEmployees] = useState('');
//   const [desiredEmployeesError, setdesiredEmployeesError] = useState('');
  
//   const handleDesiredAnnualIncomeChange = (event) => {
//     setdesiredAnnualIncome(event.target.value);
//     setdesiredAnnualIncomeError('');
//   };

//   const handleDesiredJobTypeChange = (event) => {
//     setdesiredJobType(event.target.value);
//     setdesiredJobTypeError('');
//   };

//   const handleDesiredIndustryChange = (event) => {
//     setdesiredIndustry(event.target.value);
//     setdesiredIndustryError('');
//   };

//   const handleDesiredPositionChange = (event) => {
//     setdesiredPosition(event.target.value);
//     setdesiredPositionError('');
//   };

//   const handleDesiredWorkLocationChange = (event) => {
//     setdesiredWorkLocation(event.target.value);
//     setdesiredWorkLocationError('');
//   };

//   const handleDesiredCompanyCategoryChange = (event) => {
//     setdesiredCompanyCategory(event.target.value);
//     setdesiredCompanyCategoryError('');
//   };
  
//   const handleDesiredEmployeesChange = (event) => {
//     setdesiredEmployees(event.target.value);
//     setdesiredEmployeesError('');
//   };


//   const generateValues = (start, end, step) => {
//     const values = [];
//     for (let i = start; i <= end; i += step) {
//       values.push(`${i}万円以上`);
//     }
//     return values;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     let errors = {};
  
//     // Basic validation for required fields
//     if (!desiredAnnualIncome || !desiredJobType || !desiredIndustry || !desiredPosition || !desiredWorkLocation || !desiredCompanyCategory || !desiredEmployees) {
//       // If any required field is empty, set corresponding error states and return
//       setdesiredAnnualIncomeError(desiredAnnualIncome ? '' : 'Please select an option');
//       setdesiredJobTypeError(desiredJobType ? '' : 'Please select an option');
//       setdesiredIndustryError(desiredIndustry ? '' : 'Please select an option');
//       setdesiredPositionError(desiredPosition ? '' : 'Please select an option');
//       setdesiredWorkLocationError(desiredWorkLocation ? '' : 'Please select an option');
//       setdesiredCompanyCategoryError(desiredCompanyCategory ? '' : 'Please select an option');
//       setdesiredEmployeesError(desiredEmployees ? '' : 'Please select an option');

//       // Return to stop form submission since required fields are missing
//       return;
//     }
  
//     if (Object.keys(errors).length === 0) {
//       handleNext();
//     }

//   };

//   const handleBackClick = () => {
//     handleBack(); // Call handleBack function passed as prop
//   };

//   return (
//     <div>
//       <h1>希望条件</h1>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
       
//         <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(desiredAnnualIncomeError)}>
//             <FormLabel id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>ご希望の年収を教えてください<span className='required_label'>必須</span></FormLabel>
//             <Select
//               value={desiredAnnualIncome}
//               onChange={handleDesiredAnnualIncomeChange}
//               displayEmpty
//               sx={{ borderColor: desiredAnnualIncomeError ? 'red' : undefined }}
//             >
//               <MenuItem value="" disabled>
//               オプションを選んでください
//               </MenuItem>
//               {generateValues(300, 2000, 50).map((value) => (
//               <MenuItem key={value} value={value}>
//                 {value}
//               </MenuItem>
//               ))}
//               {generateValues(2000, 5000, 500).map((value) => (
//                 <MenuItem key={value} value={value}>
//                   {value}
//                 </MenuItem>
//               ))}
//             </Select>
//             {desiredAnnualIncomeError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{desiredAnnualIncomeError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(desiredJobTypeError)}>
//             <FormLabel id="second-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の職種を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <Select
//               value={desiredJobType}
//               onChange={handleDesiredJobTypeChange}
//               displayEmpty
//               sx={{ borderColor: desiredJobTypeError ? 'red' : undefined }}
//             >
//               {DesiredJobType.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {desiredJobTypeError &&<FormHelperText style={{ color: 'red', margin: '10px 0'}}>{desiredJobTypeError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(desiredIndustryError)}>
//             <FormLabel id="third-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の業種を教えてください​<span className='required_label'>必須</span></FormLabel>
//             <Select
//               value={desiredIndustry}
//               onChange={handleDesiredIndustryChange}
//               displayEmpty
//               sx={{ borderColor: desiredIndustryError ? 'red' : undefined }}
//             >
//               {DesiredIndustry.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {desiredIndustryError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{desiredIndustryError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           {/* Fourth Dropdown */}
//           <FormControl fullWidth error={Boolean(desiredPositionError)}>
//             <FormLabel id="dropdown4-label" sx={{marginBottom: '10px'}}>ご希望の役職を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <Select
//               value={desiredPosition}
//               onChange={handleDesiredPositionChange}
//               displayEmpty
//               sx={{ borderColor: desiredPositionError ? 'red' : undefined }}
//             >
//               {DesiredPosition.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {desiredPositionError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{desiredPositionError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           {/* Fifth Dropdown */}
//           <FormControl fullWidth error={Boolean(desiredWorkLocationError)}>
//             <FormLabel id="dropdown5-label" sx={{marginBottom: '10px'}}>ご希望の勤務地（都道府県）を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <Select
//               value={desiredWorkLocation}
//               onChange={handleDesiredWorkLocationChange}
//               displayEmpty
//               sx={{ borderColor: desiredWorkLocationError ? 'red' : undefined }}
//             >
//               {DesiredWorkLocation.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {desiredWorkLocationError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{desiredWorkLocationError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           {/* Sixth Dropdown */}
//           <FormControl fullWidth error={Boolean(desiredCompanyCategoryError)}>
//             <FormLabel id="dropdown6-label" sx={{marginBottom: '10px'}}>ご希望の企業カテゴリを教えてください​<span className='required_label'>必須</span></FormLabel>
//             <Select
//               value={desiredCompanyCategory}
//               onChange={handleDesiredCompanyCategoryChange}
//               displayEmpty
//               sx={{ borderColor: desiredCompanyCategoryError ? 'red' : undefined }}
//             >
//               {DesiredCompanyCategory.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {desiredCompanyCategoryError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{desiredCompanyCategoryError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           {/* 7 Dropdown */}
//           <FormControl fullWidth error={Boolean(desiredEmployeesError)}>
//             <FormLabel id="dropdown7-label" sx={{marginBottom: '10px'}}>ご希望の従業員規模を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <Select
//               value={desiredEmployees}
//               onChange={handleDesiredEmployeesChange}
//               displayEmpty
//               sx={{ borderColor: desiredEmployeesError ? 'red' : undefined }}
//             >
//               {DesiredNumberOfEmployees.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {desiredEmployeesError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{desiredEmployeesError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         </Grid>

//         {/* <Grid item xs={12} style={{ margin: '10px auto', display: 'grid' }}>
//           <Button type="submit" variant="contained" color="primary">
//             完了ページに入る
//           </Button>
//         </Grid> */}

//         <Grid container>
//           <Grid item xs={12} style={{ margin: '10px auto 100px', display: 'flex', paddingTop:'20px', gap: '10px', justifyContent: 'center'}}>
//             <Button onClick={handleBackClick} variant="outlined">
//               戻る
//             </Button>
//             <Button type="submit" variant="contained" color="primary">
//               完了ページに入る
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default DesiredCondition;


import React, { useState } from 'react';
import {
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  MenuItem,
} from '@mui/material';

const DesiredJobType = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '管理部門系全て', label: '管理部門系全て' },
  { value: '経理​', label: '経理​' },
  { value: '財務・コントローラー​', label: '財務・コントローラー​' },
  { value: '会計・税務', label: '会計・税務' },
  { value: '内部監査​', label: '内部監査​' },
  { value: '広報・IR​', label: '広報・IR​' },
  { value: '管理部長', label: '管理部長' },
  { value: 'CFO（役員）', label: 'CFO（役員）' },
  { value: '総務', label: '総務' },
  { value: '人事（採用・労務・教育など）', label: '人事（採用・労務・教育など）' },
  { value: '人事制度・企画', label: '人事制度・企画' },
  { value: '法務・コンプライアンス', label: '法務・コンプライアンス' },
  { value: '特許・知的財産関連', label: '特許・知的財産関連' },
  { value: 'その他', label: 'その他' }
];

const DesiredIndustry = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: 'IT・インタネット・ゲーム', label: 'IT・インタネット・ゲーム' },
  { value: 'メーカー​', label: 'メーカー​' },
  { value: '商社', label: '商社' },
  { value: '流通・小売・サービス', label: '流通・小売・サービス' },
  { value: '広告・出版・マスコミ', label: '広告・出版・マスコミ' },
  { value: 'コンサルティング', label: 'コンサルティング' },
  { value: '金融', label: '金融' },
  { value: '建設・不動産', label: '建設・不動産' },
  { value: 'メディカル', label: 'メディカル' },
  { value: '物流・運輸', label: '物流・運輸' },
  { value: 'その他（インフラ・教育・官公庁など）', label: 'その他（インフラ・教育・官公庁など）' }
];

const DesiredPosition = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '特に希望しない', label: '特に希望しない' },
  { value: '担当者（スタッフ）', label: '担当者（スタッフ）' },
  { value: '主任（リーダー）', label: '主任（リーダー）' },
  { value: '係長（マネージャー候補', label: '係長（マネージャー候補' },
  { value: '課長（マネージャー）', label: '課長（マネージャー）' },
  { value: '部長（部門責任者）', label: '部長（部門責任者）' },
  { value: 'CFO（役員）', label: 'CFO（役員）' },
  { value: '顧問', label: '顧問' },
  { value: 'その他', label: 'その他' }
];

const DesiredWorkLocation = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '東京都', label: '東京都' },
  { value: '神奈川県​', label: '神奈川県​' },
  { value: '千葉県​', label: '千葉県​' },
  { value: '埼玉県​', label: '埼玉県​' },
  { value: '１都３県全て', label: '１都３県全て' },
  { value: '北海道・東北​', label: '北海道・東北​' },
  { value: '北関東', label: '北関東' },
  { value: '中部', label: '中部' },
  { value: '近畿', label: '近畿' },
  { value: '中国・四国', label: '中国・四国' },
  { value: '九州・沖縄', label: '九州・沖縄' },
  { value: '海外', label: '海外' }
];

const DesiredCompanyCategory = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '上場企業', label: '上場企業' },
  { value: '上場グループ企業', label: '上場グループ企業' },
  { value: '非上場企業', label: '非上場企業' },
  { value: '外資系企業​', label: '外資系企業​' },
  { value: 'ベンチャー企業​', label: 'ベンチャー企業​' },
  { value: '官公庁', label: '官公庁' },
  { value: '団体', label: '団体' }
];

const DesiredNumberOfEmployees = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '10名以下', label: '10名以下' },
  { value: '11～50名​', label: '11～50名​' },
  { value: '51～100名​', label: '51～100名​' },
  { value: '101～500名​', label: '101～500名​' },
  { value: '501～1000名​', label: '501～1000名​' },
  { value: '1000名以上​', label: '1000名以上​' }
];


const DesiredCondition = ({ formData, setFormData, handleNext, handleBack}) => {
  const [desiredAnnualIncome, setdesiredAnnualIncome] = useState('');
  const [desiredAnnualIncomeError, setdesiredAnnualIncomeError] = useState('');
  const [desiredJobType, setdesiredJobType] = useState('');
  const [desiredJobTypeError, setdesiredJobTypeError] = useState('');
  const [desiredIndustry, setdesiredIndustry] = useState('');
  const [desiredIndustryError, setdesiredIndustryError] = useState('');
  const [desiredPosition, setdesiredPosition] = useState('');
  const [desiredPositionError, setdesiredPositionError] = useState('');
  const [desiredWorkLocation, setdesiredWorkLocation] = useState('');
  const [desiredWorkLocationError, setdesiredWorkLocationError] = useState('');
  const [desiredCompanyCategory, setdesiredCompanyCategory] = useState('');
  const [desiredCompanyCategoryError, setdesiredCompanyCategoryError] = useState('');
  const [desiredEmployees, setdesiredEmployees] = useState('');
  const [desiredEmployeesError, setdesiredEmployeesError] = useState('');
  
  const handleDesiredAnnualIncomeChange = (event) => {
    setdesiredAnnualIncome(event.target.value);
    setdesiredAnnualIncomeError('');
  };

  const handleDesiredJobTypeChange = (event) => {
    setdesiredJobType(event.target.value);
    setdesiredJobTypeError('');
  };

  const handleDesiredIndustryChange = (event) => {
    setdesiredIndustry(event.target.value);
    setdesiredIndustryError('');
  };

  const handleDesiredPositionChange = (event) => {
    setdesiredPosition(event.target.value);
    setdesiredPositionError('');
  };

  const handleDesiredWorkLocationChange = (event) => {
    setdesiredWorkLocation(event.target.value);
    setdesiredWorkLocationError('');
  };

  const handleDesiredCompanyCategoryChange = (event) => {
    setdesiredCompanyCategory(event.target.value);
    setdesiredCompanyCategoryError('');
  };
  
  const handleDesiredEmployeesChange = (event) => {
    setdesiredEmployees(event.target.value);
    setdesiredEmployeesError('');
  };


  const generateValues = (start, end, step) => {
    const values = [];
    for (let i = start; i <= end; i += step) {
      values.push(`${i}万円以上`);
    }
    return values;
  };

  // State for errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message for the field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
  
    // Basic validation for required fields
    if (!formData.desiredAnnualIncome) {
      newErrors.desiredAnnualIncome = 'Please select your desired annual income';
    }

    if (!formData.desiredJobType) {
      newErrors.desiredJobType = 'Please select your desired Jobtype';
    }

    if (!formData.desiredIndustry) {
      newErrors.desiredIndustry = 'Please select your desired industry';
    }

    if (!formData.desiredPosition) {
      newErrors.desiredPosition = 'Please select your desired position';
    }

    if (!formData.desiredWorkLocation) {
      newErrors.desiredWorkLocation = 'Please select your desired worklocation';
    }

    if (!formData.desiredCompanyCategory) {
      newErrors.desiredCompanyCategory = 'Please select your desired company category';
    }

    if (!formData.desiredEmployees) {
      newErrors.desiredEmployees = 'Please select your desired number of employees';
    }

    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      handleNext();
    }

  };

  const handleBackClick = () => {
    handleBack(); // Call handleBack function passed as prop
  };

  return (
    <div>
      <h1>希望条件</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
       
        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.desiredAnnualIncome)} sx={{marginBottom: '10px'}}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>ご希望の年収を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.desiredAnnualIncome || ''}
              name='desiredAnnualIncome'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desiredAnnualIncome)}
              helperText={errors.desiredAnnualIncome}
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              {generateValues(300, 2000, 50).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
              ))}
              {generateValues(2000, 5000, 500).map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
            {errors.desiredAnnualIncome && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desiredAnnualIncome}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.desiredJobType)} sx={{marginBottom: '10px'}}>
            <FormLabel id="second-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の職種を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.desiredJobType || ''}
              name='desiredJobType'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desiredJobType)}
              helperText={errors.desiredJobType}
            >
              {DesiredJobType.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desiredJobType &&<FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desiredJobType}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.desiredIndustry)} sx={{marginBottom: '10px'}}>
            <FormLabel id="third-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の業種を教えてください​<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.desiredIndustry || ''}
              name='desiredIndustry'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desiredIndustry)}
              helperText={errors.desiredIndustry}
            >
              {DesiredIndustry.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desiredIndustry && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desiredIndustry}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.desiredPosition)} sx={{marginBottom: '10px'}}>
            <FormLabel id="dropdown4-label" sx={{marginBottom: '10px'}}>ご希望の役職を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.desiredPosition || ''}
              name='desiredPosition'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desiredPosition)}
              helperText={errors.desiredPosition}
            >
              {DesiredPosition.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desiredPosition && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desiredPosition}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fifth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.desiredWorkLocation)} sx={{marginBottom: '10px'}}>
            <FormLabel id="dropdown5-label" sx={{marginBottom: '10px'}}>ご希望の勤務地（都道府県）を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.desiredWorkLocation || ''}
              name='desiredWorkLocation'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desiredWorkLocation)}
              helperText={errors.desiredWorkLocation}
            >
              {DesiredWorkLocation.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desiredWorkLocation && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desiredWorkLocation}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.desiredCompanyCategory)} sx={{marginBottom: '10px'}}>
            <FormLabel id="dropdown6-label" sx={{marginBottom: '10px'}}>ご希望の企業カテゴリを教えてください​<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.desiredCompanyCategory || ''}
              name='desiredCompanyCategory'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desiredCompanyCategory)}
              helperText={errors.desiredCompanyCategory}
            >
              {DesiredCompanyCategory.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desiredCompanyCategory && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desiredCompanyCategory}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* 7 Dropdown */}
          <FormControl fullWidth error={Boolean(errors.desiredEmployees)} sx={{marginBottom: '10px'}}>
            <FormLabel id="dropdown7-label" sx={{marginBottom: '10px'}}>ご希望の従業員規模を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.desiredEmployees || ''}
              name='desiredEmployees'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desiredEmployees)}
              helperText={errors.desiredEmployees}
            >
              {DesiredNumberOfEmployees.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desiredEmployees && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desiredEmployees}</FormHelperText>}
          </FormControl>
        </Grid>

        </Grid>

        {/* <Grid item xs={12} style={{ margin: '10px auto', display: 'grid' }}>
          <Button type="submit" variant="contained" color="primary">
            完了ページに入る
          </Button>
        </Grid> */}

        <Grid container>
          <Grid item xs={12} style={{ margin: '10px auto 100px', display: 'flex', paddingTop:'20px', gap: '10px', justifyContent: 'center'}}>
            <Button onClick={handleBackClick} variant="outlined">
              戻る
            </Button>
            <Button type="submit" variant="contained" color="primary">
              完了ページに入る
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default DesiredCondition;

