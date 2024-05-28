// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Grid,
//   Checkbox,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   FormControl,
//   FormLabel,
//   FormHelperText,
//   Select,
//   MenuItem,
//   InputLabel,
//   Collapse,
//   Typography,
//   styled
// } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AccordianBasicInfo from './components/AccordianBasicInfo';
// import CustomDatePicker from './components/DatePicker';
// import Paper from '@mui/material/Paper';
// import { boxSizing } from '@mui/system';
// import { setDate } from 'date-fns';

// const prefecture = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '北海道', label: '北海道' },
//   { value: '青森県', label: '青森県' },
//   { value: '岩手県', label: '岩手県' },
//   { value: '宮城県', label: '宮城県' },
//   { value: '秋田県', label: '秋田県' },
//   { value: '山形県', label: '山形県' },
//   { value: '茨城県', label: '茨城県' },
//   { value: '栃木県', label: '栃木県' },
//   { value: '群馬県', label: '群馬県' },
//   { value: '埼玉県', label: '埼玉県' },
//   { value: '千葉県', label: '千葉県' },
//   { value: '東京都', label: '東京都' },
//   { value: '神奈川県', label: '神奈川県' },
//   { value: '新潟県', label: '新潟県' },
//   { value: '富山県', label: '富山県' },
//   { value: '石川県', label: '石川県' },
//   { value: '福井県', label: '福井県' },
//   { value: '山梨県', label: '山梨県' },
//   { value: '長野県', label: '長野県' },
//   { value: '岐阜県', label: '岐阜県' },
//   { value: '静岡県', label: '静岡県' },
//   { value: '愛知県', label: '愛知県' },
//   { value: '三重県', label: '三重県' },
//   { value: '滋賀県', label: '滋賀県' },
//   { value: '京都府', label: '京都府' },
//   { value: '大阪府', label: '大阪府' },
//   { value: '兵庫県', label: '兵庫県' },
//   { value: '奈良県', label: '奈良県' },
//   { value: '和歌山県', label: '和歌山県' },
//   { value: '鳥取県', label: '鳥取県' },
//   { value: '島根県', label: '島根県' },
//   { value: '岡山県', label: '岡山県' },
//   { value: '広島県', label: '広島県' },
//   { value: '山口県', label: '山口県' },
//   { value: '徳島県', label: '徳島県' },
//   { value: '香川県', label: '香川県' },
//   { value: '愛媛県', label: '愛媛県' },
//   { value: '高知県', label: '高知県' },
//   { value: '福岡県', label: '福岡県' },
//   { value: '佐賀県', label: '佐賀県' },
//   { value: '長崎県', label: '長崎県' },
//   { value: '熊本県', label: '熊本県' },
//   { value: '大分県', label: '大分県' },
//   { value: '宮崎県', label: '宮崎県' },
//   { value: '鹿児島県', label: '鹿児島県' },
//   { value: '沖縄県', label: '沖縄県' },
//   { value: '海外', label: '海外' }
// ];

// const FinalEducation = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '大学卒', label: '大学卒' },
//   { value: '大学院卒', label: '大学院卒' },
//   { value: '短大卒', label: '短大卒' },
//   { value: '高専卒', label: '高専卒' },
//   { value: '高校卒', label: '高校卒' },
//   { value: '専門学校卒', label: '専門学校卒' },
// ];

// const JobChange = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '1回', label: '1回' },
//   { value: '2回', label: '2回' },
//   { value: '3回', label: '3回' },
//   { value: '4回', label: '4回' },
//   { value: '5回', label: '5回' },
//   { value: '６回以上', label: '６回以上' },
// ];

// const JobchangePeriod = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '3カ月以内', label: '3カ月以内' },
//   { value: '6ヶ月以内', label: '6ヶ月以内' },
//   { value: '1年以内', label: '1年以内' },
//   { value: '今は考えていない', label: '今は考えていない' },
// ];

// const WorkExperience = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '経営・経営企画・事業企画系', label: '経営・経営企画・事業企画系' },
//   { value: '管理部門系', label: '管理部門系' },
//   { value: 'SCM・ロジスティクス・物流・購買・貿易系', label: 'SCM・ロジスティクス・物流・購買・貿易系' },
//   { value: '営業系', label: '営業系' },
//   { value: 'マーケティング・販促企画・商品開発系', label: 'マーケティング・販促企画・商品開発系' },
//   { value: 'コンサルタント系', label: 'コンサルタント系' },
//   { value: '金融系専門職', label: '金融系専門職' },
//   { value: '不動産系専門職', label: '不動産系専門職' },
//   { value: '技術系（IT・Web・通信系）', label: '技術系（IT・Web・通信系）' },
//   { value: '技術系（電気・電子・半導体）', label: '技術系（電気・電子・半導体）' },
//   { value: '技術系（機械・メカトロ・自動車）', label: '技術系（機械・メカトロ・自動車）' },
//   { value: '技術系（化学・素材・食品・衣料）', label: '技術系（化学・素材・食品・衣料）' },
//   { value: '技術系（建築・設備・土木・プラント）', label: '技術系（建築・設備・土木・プラント）' },
//   { value: '技術・専門職系（メディカル）', label: '技術・専門職系（メディカル）' },
//   { value: 'サービス・流通系', label: 'サービス・流通系' },
//   { value: 'クリエイティブ系', label: 'クリエイティブ系' }
// ];

// const ExperienceinAccounting = [
//   { value: '', label: 'オプションを選んでください', disabled: true },
//   { value: '経験あり', label: '経験あり' },
//   { value: '1年以上', label: '1年以上' },
//   { value: '2年以上', label: '2年以上' },
//   { value: '3年以上', label: '3年以上' },
//   { value: '4年以上', label: '4年以上' },
//   { value: '5年以上', label: '5年以上' },
//   { value: '6年以上', label: '6年以上' },
//   { value: '7年以上', label: '7年以上' },
//   { value: '8年以上', label: '8年以上' },
//   { value: '9年以上', label: '9年以上' },
//   { value: '10年以上', label: '10年以上' },
//   { value: '11年以上', label: '11年以上' },
//   { value: '12年以上', label: '12年以上' },
//   { value: '13年以上', label: '13年以上' },
//   { value: '14年以上', label: '14年以上' },
//   { value: '15年以上', label: '15年以上' },
//   { value: '16年以上', label: '16年以上' },
//   { value: '17年以上', label: '17年以上' },
//   { value: '18年以上', label: '18年以上' },
//   { value: '19年以上', label: '19年以上' },
//   { value: '20年以上', label: '20年以上' },
// ];

// const EnglishLevel = [
//   { value: '', label: '選択してください', disabled: true },
//   { value: 'ネイティブレベル', label: 'ネイティブレベル' },
//   { value: 'ビジネスレベル', label: 'ビジネスレベル' },
//   { value: '日常会話レベル', label: '日常会話レベル' },
//   { value: '基礎会話レベル', label: '基礎会話レベル' },
//   { value: 'なし', label: 'なし' }
// ];

// const AddLanguageLevel = [
//   { value: '', label: '選択してください', disabled: true },
//   { value: 'ネイティブレベル', label: 'ネイティブレベル' },
//   { value: 'ビジネスレベル', label: 'ビジネスレベル' },
//   { value: '日常会話レベル', label: '日常会話レベル' },
//   { value: '基礎会話レベル', label: '基礎会話レベル' },
//   { value: 'なし', label: 'なし' }
// ];

// const AddLanguage = [
//   { value: '', label: '選択してください', disabled: true },
//   { value: '北京語', label: '北京語' },
//   { value: '韓国語', label: '韓国語' },
//   { value: 'アラビア語', label: 'アラビア語' },
//   { value: '広東語', label: '広東語' },
//   { value: 'スペイン語', label: 'スペイン語' },
//   { value: 'フィンランド語', label: 'フィンランド語' },
//   { value: 'スウェーデン語', label: 'スウェーデン語' },
//   { value: 'スペイン語', label: 'スペイン語' },
//   { value: '台湾語', label: '台湾語' },
//   { value: 'フランス語', label: 'フランス語' },
//   { value: 'ドイツ語', label: 'ドイツ語' },
//   { value: 'ヘブライ語', label: 'ヘブライ語' },
//   { value: 'ヒンディー語', label: 'ヒンディー語' },
//   { value: 'インドネシア語', label: 'インドネシア語' },
//   { value: 'イタリア語', label: 'イタリア語' },
//   { value: 'マレーシア語', label: 'マレーシア語' },
//   { value: 'オランダ語', label: 'オランダ語' },
//   { value: 'ノルウェー語', label: 'ノルウェー語' },
//   { value: 'ポルトガル語', label: 'ポルトガル語' },
//   { value: 'ロシア語', label: 'ロシア語' },
//   { value: 'スワヒリ語', label: 'スワヒリ語' },
//   { value: 'タイ語', label: 'タイ語' },
//   { value: 'カダログ語', label: 'カダログ語' },
//   { value: 'ベトナム語', label: 'ベトナム語' }
// ];

// const BasicInfo = ({ formData, setFormData, handleNext }) => {
//   const [name, setName] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [gender, setGender] = useState('');
//   const [genderError, setGenderError] = useState('');
//   const [date, setDate] = useState('');
//   const [dateError, setDateError] = useState('');
//   const [finaleducation, setfinaleducation] = useState('');
//   const [finalEducationError, setFinalEducationError] = useState('');
//   const [jobChange, setJobChange] = useState('');
//   const [jobChangeError, setJobChangeError] = useState('');
//   const [currentEmployment, setCurrentEmployment] = useState('');
//   const [currentEmploymentError, setCurrentEmploymentError] = useState('');
//   const [jobChangePeriod, setJobChangePeriod] = useState('');
//   const [jobChangePeriodError, setJobChangePeriodError] = useState('');
//   const [currentAnnualIncome, setCurrentAnnualIncome] = useState('');
//   const [currentAnnualIncomeError, setCurrentAnnualIncomeError] = useState('');
//   const [workExperience, setWorkExperience] = useState('');
//   const [workExperienceError, setWorkExperienceError] = useState('');
//   const [experienceInAccounting, setExperienceInAccounting] = useState('');
//   const [experienceInAccountingError, setExperienceInAccountingError] = useState('');
//   const [experiencedIndustry, setExperiencedIndustry] = useState('');
//   const [experiencedIndustryError, setExperiencedIndustryError] = useState('');
//   const [spouse, setSpouse] = useState('');
//   const [spouseError, setSpouseError] = useState('');
//   const [familyMembers, setFamilyMembers] = useState('');
//   const [familyMembersError, setFamilyMembersError] = useState('');

//   const [selectedOption, setSelectedOption] = useState('');
//   const [selectedOptionError, setSelectedOptionError] = useState('');
//   const [secondDropdownValue, setSecondDropdownValue] = useState('');
//   const [secondDropdownError, setSecondDropdownError] = useState('');
//   const [thirdDropdownValue, setThirdDropdownValue] = useState('');
//   const [thirdDropdownError, setThirdDropdownError] = useState('');
//   const [newRadioValue, setNewRadioValue] = useState('');
//   const [newRadioError, setNewRadioError] = useState('');
//   const [dropdown4Value, setDropdown4Value] = useState('');
//   const [dropdown4Error, setDropdown4Error] = useState('');
//   const [dropdown5Value, setDropdown5Value] = useState('');
//   const [dropdown5Error, setDropdown5Error] = useState('');
//   const [dropdown6Value, setDropdown6Value] = useState('');
//   const [dropdown6Error, setDropdown6Error] = useState('');
//   const [dropdown7Value, setDropdown7Value] = useState('');
//   const [dropdown7Error, setDropdown7Error] = useState('');
//   const [dropdown8Value, setDropdown8Value] = useState('');
//   const [dropdown8Error, setDropdown8Error] = useState('');
//   const [dropdown9Value, setDropdown9Value] = useState('');
//   const [dropdown9Error, setDropdown9Error] = useState('');
//   const [new2RadioValue, setNew2RadioValue] = useState('');
//   const [new2RadioError, setNew2RadioError] = useState('');
//   const [expanded, setExpanded] = useState(false);
//   const [dropdown1Value, setDropdown1Value] = useState('');
//   const [dropdown2Value, setDropdown2Value] = useState('');
//   const [selectedValue, setSelectedValue] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentCompany, setCurrentCompany] = useState('');


//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//     setGenderError('');
//   };

//   const handleDateChange = (selectedDate) => {
//     // const selectedDate = event.target.value;
//     setDate(selectedDate);
//     setDateError('');
//     // setDate(event.target.value);
//     // setDateError('');
//   };

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     setSelectedOptionError('');
//   };

//   const handleFinalEducationChange = (event) => {
//     setfinaleducation(event.target.value);
//     setFinalEducationError('');
//   };

//   const handlejobChange = (event) => {
//     setJobChange(event.target.value);
//     setJobChangeError('');
//   };

//   const handleCurrentEmployment = (event) => {
//     setCurrentEmployment(event.target.value);
//     setCurrentEmploymentError('');
//   };

//   const handleJobChangePeriod = (event) => {
//     setJobChangePeriod(event.target.value);
//     setJobChangePeriodError('');
//   };

//   const handleCurrentAnnualIncome = (event) => {
//     setCurrentAnnualIncome(event.target.value);
//     setCurrentAnnualIncomeError('');
//   };
  
//   const handleWorkExperience = (event) => {
//     setWorkExperience(event.target.value);
//     setWorkExperienceError('');
//   };
  
//   const handleExperienceInAccounting = (event) => {
//     setExperienceInAccounting(event.target.value);
//     setExperienceInAccountingError('');
//   };

//   const handleSpouse = (event) => {
//     setSpouse(event.target.value);
//     setSpouseError('');
//   };
  
//   const handleFamilyMembersChange = (event) => {
//     setFamilyMembers(event.target.value);
//     setFamilyMembersError('');
//   };

//   const handleExperiencedIndustryChange = (event) => {
//     setExperiencedIndustry(event.target.value);
//     setExperiencedIndustryError('');
//   };
 

//   const handleCurrentCompanyChange = (event) => {
//     setCurrentCompany(event.target.value);
//   };


//   const handleNameChange = (event) => {
//     setName(event.target.value);
//     setFormData({ ...formData, name: event.target.value });
//   };

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//     setFormData({ ...formData, isChecked: event.target.checked });
//   };

//   const handleToggle = () => {
//     setOpen(!open);
//   };

 

//   const handleSecondDropdownChange = (event) => {
//     const value = event.target.value;
//     setSecondDropdownValue(value);
//     if (value === '') {
//       setSecondDropdownError('必須項目です');
//     } else {
//       setSecondDropdownError('');
//     }
//   };

//   const handleThirdDropdownChange = (event) => {
//     const value = event.target.value;
//     setThirdDropdownValue(value);
//     if (value === '') {
//       setThirdDropdownError('必須項目です');
//     } else {
//       setThirdDropdownError('');
//     }
//   };

//   const handleNewRadioChange = (event) => {
//     setNewRadioValue(event.target.value);
//     setNewRadioError('');
//   };

//   const handleNew2RadioChange = (event) => {
//     setNew2RadioValue(event.target.value);
//     setNew2RadioError('');
//   };

//   const handleDropdown4Change = (event) => {
//     const value = event.target.value;
//     setDropdown4Value(value);
//     if (value === '') {
//       setDropdown4Error('必須項目です');
//     } else {
//       setDropdown4Error('');
//     }
//   };

//   const handleDropdown5Change = (event) => {
//     const value = event.target.value;
//     setDropdown5Value(value);
//     if (value === '') {
//       setDropdown5Error('必須項目です');
//     } else {
//       setDropdown5Error('');
//     }
//   };

//   const handleDropdown6Change = (event) => {
//     const value = event.target.value;
//     setDropdown6Value(value);
//     if (value === '') {
//       setDropdown6Error('必須項目です');
//     } else {
//       setDropdown6Error('');
//     }
//   };

//   const handleDropdown7Change = (event) => {
//     setDropdown7Value(event.target.value);
//     setDropdown7Error('');
//   };

//   const handleDropdown8Change = (event) => {
//     const value = event.target.value;
//     setDropdown8Value(value);
//     if (value === '') {
//       setDropdown8Error('必須項目です');
//     } else {
//       setDropdown8Error('');
//     }
//   };

//   const handleDropdown9Change = (event) => {
//     setDropdown9Value(event.target.value);
//     setDropdown9Error('');
//   };

//   const handleExpandToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleDropdown1Change = (event) => {
//     setDropdown1Value(event.target.value);
//   };

//   const handleDropdown2Change = (event) => {
//     setDropdown2Value(event.target.value);
//   };

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const generateValues = (start, end, step) => {
//     const values = [];
//     for (let i = start; i <= end; i += step) {
//       values.push(`${i}万円以上`);
//     }
//     return values;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     let errors = {};
  
//     // Basic validation for required fields
//     if (!gender || !date || !selectedOption || !finaleducation || !jobChange || !currentEmployment || !jobChangePeriod || !currentAnnualIncome || !workExperience || !experienceInAccounting || !spouse || !familyMembers) {
//       // If any required field is empty, set corresponding error states and return
//       setGenderError(gender ? '' : 'Please select your gender');
//       setDateError(date ? '' : 'Please select your birth date');
//       setSelectedOptionError(selectedOption ? '' : 'Please select your prefecture');
//       setFinalEducationError(finaleducation ? '' : 'Please select your final education');
//       setJobChangeError(jobChange ? '' : 'Please select your job change count');
//       setCurrentEmploymentError(currentEmployment ? '' : 'Please select your current employment status');
//       setJobChangePeriodError(jobChangePeriod ? '' : 'Please select your job change period');
//       setCurrentAnnualIncomeError(currentAnnualIncome ? '' : 'Please select your current annual income');
//       setWorkExperienceError(workExperience ? '' : 'Please select your work experience');
//       setExperienceInAccountingError(experienceInAccounting ? '' : 'Please select your experience in accounting');
//       // setCurrentEmploymentError(currentCompany ? '' : 'Please enter your current company name');
//       setSpouseError(spouse ? '' : 'Please select your spouse status');
//       setFamilyMembersError(familyMembers ? '' : 'Please enter the number of family members');
  
//       // Return to stop form submission since required fields are missing
//       return;
//     }
  
//     if (Object.keys(errors).length === 0) {
//       handleNext();
//     }
    
//   };


//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     boxShadow: 'none', 
//   }));

//   return (
//     <div>
//       <Grid container>
//         <Grid item xs={12}>
//           {/* <span>1</span> */}
//           <h1>基本情報</h1>
//         </Grid>
//       </Grid>
//       {/* <Grid container spacing={1} style={{marginTop: '30px', display: 'flex', gap: '10px', alignItems: 'center', fontWeight: '600', color: '#16375A'}}>
//         <div style={{width: '25px', height: '25px', background: '#16375A', color: '#fff', border: '2px solid #fff', borderRadius: '50%'}}>1</div>
//         <div style={{textAlign: 'left'}}>基本情報</div>
//       </Grid> */}
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
//           <Grid item xs={12}>
//           <FormControl component="fieldset" error={Boolean(genderError)}>
//             <FormLabel component="legend">性別を教えてください<span className='required_label'>必須</span></FormLabel>
//             <RadioGroup
//               row
//               aria-label="gender"
//               name="gender"
//               value={gender}
//               onChange={handleGenderChange}
//               required
//               sx={{ borderColor: genderError ? 'red' : undefined }}
//             >
//               <FormControlLabel value="男性" control={<Radio />} label="男性" />
//               <FormControlLabel value="女性" control={<Radio />} label="女性" />
//             </RadioGroup>
//             {genderError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{genderError}</FormHelperText>}
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sx={{padding:'2px'}}>
//           {/* Date Picker */}
//           <FormControl fullWidth error={Boolean(dateError)}>
//             <FormLabel id="dropdown7-label" sx={{marginBottom: '10px'}}>生まれた年を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <CustomDatePicker style={{padding: '0 10px'}} value={date}
//               onChange={handleDateChange} error={dateError} />
//            {dateError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{dateError}</FormHelperText>} 
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(selectedOptionError)}>
//             <FormLabel id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>お住まいの都道府県を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <Select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               displayEmpty
//               sx={{ borderColor: selectedOptionError ? 'red' : undefined }}>
//               {prefecture.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {selectedOptionError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{selectedOptionError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(finalEducationError)}>
//             <FormLabel id="second-dropdown-label" sx={{marginBottom: '10px'}}>最終学歴を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <Select
//               value={finaleducation}
//               onChange={handleFinalEducationChange}
//               displayEmpty
//               sx={{ borderColor: finalEducationError ? 'red' : undefined }}>
//               {FinalEducation.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {finalEducationError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{finalEducationError}</FormHelperText> }
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(jobChangeError)}>
//             <FormLabel id="third-dropdown-label" sx={{marginBottom: '10px'}}>転職回数を教えてください<span className='required_label'>必須</span></FormLabel>
//             <Select
//               value={jobChange}
//               onChange={handlejobChange}
//               displayEmpty
//               sx={{ borderColor: jobChangeError ? 'red' : undefined }}>
//              {JobChange.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {jobChangeError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{jobChangeError}</FormHelperText>}
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} >
//           <FormControl component="fieldset" error={Boolean(currentEmploymentError)}>
//             <FormLabel component="legend" sx={{marginBottom: '10px'}}>現在の就業状況を教えてください<span className='required_label'>必須</span></FormLabel>
//             <RadioGroup
//               row
//               aria-label="newRadio"
//               name="newRadio"
//               value={currentEmployment}
//               onChange={handleCurrentEmployment}
//               sx={{ borderColor: currentEmploymentError ? 'red' : undefined }}
//             >
//               <FormControlLabel value="就業している" control={<Radio />} label="就業している" />
//               <FormControlLabel value="就業していない" control={<Radio />} label="就業していない" />
//             </RadioGroup>
//             {currentEmploymentError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{currentEmploymentError}</FormHelperText> }
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           {/* Fourth Dropdown */}
//           <FormControl fullWidth error={Boolean(jobChangePeriodError)}>
//             <FormLabel id="dropdown4-label" sx={{marginBottom: '10px'}}>転職希望時期を教えてください<span className='required_label'>必須</span></FormLabel>
//             <Select
//               value={jobChangePeriod}
//               onChange={handleJobChangePeriod}
//               displayEmpty
//               sx={{ borderColor: currentEmploymentError ? 'red' : undefined }}
//             > 
//               {JobchangePeriod.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {jobChangePeriodError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{jobChangePeriodError}</FormHelperText>}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//       {/* Fifth Dropdown */}
//       <FormControl fullWidth error={Boolean(currentAnnualIncomeError)}>
//         <FormLabel id="dropdown5-label" sx={{marginBottom: '10px'}}>現在年収を教えてください<span className='required_label'>必須</span></FormLabel>
//         <Select
//           value={currentAnnualIncome}
//           onChange={handleCurrentAnnualIncome}
//           displayEmpty
//           sx={{ borderColor: currentEmploymentError ? 'red' : undefined }}
//         >
//           <MenuItem value="" disabled>
//             オプションを選んでください
//           </MenuItem>
//           <MenuItem value="299万円以上">299万円以上</MenuItem>
//           {generateValues(300, 2000, 50).map((value) => (
//             <MenuItem key={value} value={value}>
//               {value}
//             </MenuItem>
//           ))}
//           {generateValues(2000, 5000, 500).map((value) => (
//             <MenuItem key={value} value={value}>
//               {value}
//             </MenuItem>
//           ))}
//         </Select>
//         {currentAnnualIncomeError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{currentAnnualIncomeError}</FormHelperText> }
//       </FormControl>
//     </Grid>

//         <Grid item xs={12}>
//           {/* Sixth Dropdown */}
//           <FormControl fullWidth error={Boolean(workExperienceError)}>
//             <FormLabel id="dropdown6-label" sx={{marginBottom: '10px'}}>経験した職種を教えてください <br />（複数選択可）<span className='required_label'>必須</span></FormLabel>
//             <Select
//               value={workExperience}
//               onChange={handleWorkExperience}
//               displayEmpty
//               sx={{ borderColor: currentEmploymentError ? 'red' : undefined }}
//             > 
//               {WorkExperience.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {workExperienceError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{workExperienceError}</FormHelperText>}
//           </FormControl>
//         </Grid>
          
//         {/* <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(experiencedIndustryError)}>
//             <FormLabel id="dropdown7-label" sx={{marginBottom: '10px'}}>これまでのキャリアで経験した業種を教えてください（複数選択可）<span className='required_label'>必須</span>​</FormLabel>
//             <AccordianBasicInfo required={false} value={experiencedIndustry} onChange={handleExperiencedIndustryChange} sx={{ borderColor: experiencedIndustryError ? 'red' : undefined }} />
//             {experiencedIndustryError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{experiencedIndustryError}</FormHelperText> }
//           </FormControl>
//         </Grid> */}

//         <Grid item xs={12}>
//           {/* Seven Dropdown */}
//           <FormControl fullWidth>
//             <FormLabel id="dropdown7-label" sx={{marginBottom: '10px'}}>これまでのキャリアで経験した業種を教えてください（複数選択可）​</FormLabel>
//             <AccordianBasicInfo required={false}/>
//             {/* <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{experiencedIndustryError}</FormHelperText>  */}
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           {/* Eight Dropdown */}
//           <FormControl fullWidth error={Boolean(experienceInAccountingError)}>
//             <FormLabel id="dropdown5-label" sx={{marginBottom: '10px'}}>経理の経験年数を教えてください<span className='required_label'>必須</span>​</FormLabel>
//             <Select
//               value={experienceInAccounting}
//               onChange={handleExperienceInAccounting}
//               displayEmpty
//               sx={{ borderColor: experienceInAccountingError ? 'red' : undefined }}
//             > 
//               {ExperienceinAccounting.map((option, index) => (
//                 <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </Select>
//             {experienceInAccountingError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{experienceInAccountingError}</FormHelperText> }
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//         <FormControl fullWidth>
//           <FormLabel id="textfield-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社名を入力してください <br /> (複数登録が可能です。）</FormLabel>
//           <TextField
//             fullWidth
//             placeholder="現在（直近）の在籍会社名を入力してください"
//             variant="outlined"
//             value={currentCompany}
//             onChange={handleCurrentCompanyChange}
//           />
//         </FormControl>
//       </Grid>
        
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleCheckboxChange}
//                 color="primary"
//               />
//             }
//             label="この企業のレジュメ閲覧をブロック"
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <FormControl component="fieldset" error={Boolean(spouseError)}>
//             <FormLabel component="legend" sx={{marginBottom: '10px'}}>配偶者についてを教えてください​​<span className='required_label'>必須</span>​</FormLabel>
//             <RadioGroup
//               row
//               aria-label="newRadio"
//               name="newRadio"
//               value={spouse}
//               onChange={handleSpouse}
//               sx={{ borderColor: familyMembersError ? 'red' : undefined }}
//             >
//               <FormControlLabel value="配偶者あり" control={<Radio />} label="配偶者あり" />
//               <FormControlLabel value="配偶者なし" control={<Radio />} label="配偶者なし" />
//             </RadioGroup>
//             {spouseError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{spouseError}</FormHelperText> }
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//           <FormControl fullWidth error={Boolean(familyMembersError)}>
//             <FormLabel id="dropdown9-label" sx={{marginBottom: '10px'}}>扶養される家族数について教えてください​<span className='required_label'>必須</span>​</FormLabel>
//             <TextField
//               variant="outlined"
//               type="name"
//               placeholder="扶養される家族数について教えてください​"
//               value={familyMembers}
//               onChange={handleFamilyMembersChange}
//               sx={{ borderColor: familyMembersError ? 'red' : undefined }}
//             />
//             {familyMembersError && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{familyMembersError}</FormHelperText> }
//           </FormControl>
//         </Grid>

//         <Grid item xs={12}>
//         <FormLabel id="dropdown9-label" style={{marginBottom:'10px'}}>語学スキルについて教えてください​​</FormLabel>
//           </Grid>

//           <Grid item xs={12}>
//       <FormLabel id="dropdown9-label" sx={{marginBottom: '10px', display: 'block'}}>英語​</FormLabel>
//       <FormControl fullWidth>
//         <Select
//           value={selectedValue}
//           onChange={handleChange}
//           inputProps={{
//             name: 'level',
//             id: 'level-select',
//           }}
//           displayEmpty
//           // renderValue={(selected) => (selected ? selected : '選択してください')}
//         >
//           {EnglishLevel.map((option, index) => (
//               <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                 {option.label}
//               </MenuItem>
//             ))}
//         </Select>
//       </FormControl>
//     </Grid>

//         <Grid item xs={12}>
//         <IconButton onClick={handleExpandToggle} sx={{gap: '5px', padding: '0'}}>
//           <ExpandMoreIcon /><Typography variant="h6" sx={{fontSize: '16px'}}>TOEICの点数</Typography>
//         </IconButton>
//         <Collapse in={expanded}>
//           <div style={{alignItems:'center', display:'flex', gap:'10px', padding: '10px 0'}}>
//           <FormLabel id="dropdown5-label">TOEIC </FormLabel>
//             <TextField
//               label="Your Label"
//               variant="outlined"
//               // other TextField props can be added here
//             />
//             <FormLabel id="dropdown5-label">点 </FormLabel>
//            </div>
//         </Collapse>
//         </Grid>

//         <Grid item xs={12}>
//         <div>
//       <IconButton onClick={handleExpandToggle} sx={{gap: '5px', padding: '0'}}>
//         <ExpandMoreIcon />      <Typography variant="h6" sx={{fontSize: '16px'}}>言語を追加する</Typography>

//       </IconButton>
//       <Collapse in={expanded}>
//         <div style={{padding: '10px 0'}}>
//           <Select
//             value={dropdown1Value}
//             onChange={handleDropdown1Change}
//             style={{ marginBottom: '10px', marginRight: '10px', width:'48%'}}
//             displayEmpty
//           > 
//             {AddLanguageLevel.map((option, index) => (
//               <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </Select>
//           <Select
//             value={dropdown2Value}
//             onChange={handleDropdown2Change}
//             style={{ marginBottom: '10px', width:'48%' }}
//             displayEmpty
//           >
//             {AddLanguage.map((option, index) => (
//               <MenuItem key={index} value={option.value} disabled={option.disabled}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </Select>
//         </div>
//       </Collapse>
//     </div>
//           </Grid>
//         </Grid>
//         <Grid container>
//           <Grid item xs={6} style={{ margin: '10px auto', display: 'grid', paddingTop:'30px', marginBottom: '100px'}}>
//             <Button type="submit" variant="contained" color="primary">
//             現職・直近情報の入力へ
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default BasicInfo;



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
  InputLabel,
  Collapse,
  Typography,
  styled
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordianBasicInfo from './components/AccordianBasicInfo';
import CustomDatePicker from './components/DatePicker';
import Paper from '@mui/material/Paper';
import { boxSizing } from '@mui/system';
import { setDate } from 'date-fns';

const prefecture = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '北海道', label: '北海道' },
  { value: '青森県', label: '青森県' },
  { value: '岩手県', label: '岩手県' },
  { value: '宮城県', label: '宮城県' },
  { value: '秋田県', label: '秋田県' },
  { value: '山形県', label: '山形県' },
  { value: '茨城県', label: '茨城県' },
  { value: '栃木県', label: '栃木県' },
  { value: '群馬県', label: '群馬県' },
  { value: '埼玉県', label: '埼玉県' },
  { value: '千葉県', label: '千葉県' },
  { value: '東京都', label: '東京都' },
  { value: '神奈川県', label: '神奈川県' },
  { value: '新潟県', label: '新潟県' },
  { value: '富山県', label: '富山県' },
  { value: '石川県', label: '石川県' },
  { value: '福井県', label: '福井県' },
  { value: '山梨県', label: '山梨県' },
  { value: '長野県', label: '長野県' },
  { value: '岐阜県', label: '岐阜県' },
  { value: '静岡県', label: '静岡県' },
  { value: '愛知県', label: '愛知県' },
  { value: '三重県', label: '三重県' },
  { value: '滋賀県', label: '滋賀県' },
  { value: '京都府', label: '京都府' },
  { value: '大阪府', label: '大阪府' },
  { value: '兵庫県', label: '兵庫県' },
  { value: '奈良県', label: '奈良県' },
  { value: '和歌山県', label: '和歌山県' },
  { value: '鳥取県', label: '鳥取県' },
  { value: '島根県', label: '島根県' },
  { value: '岡山県', label: '岡山県' },
  { value: '広島県', label: '広島県' },
  { value: '山口県', label: '山口県' },
  { value: '徳島県', label: '徳島県' },
  { value: '香川県', label: '香川県' },
  { value: '愛媛県', label: '愛媛県' },
  { value: '高知県', label: '高知県' },
  { value: '福岡県', label: '福岡県' },
  { value: '佐賀県', label: '佐賀県' },
  { value: '長崎県', label: '長崎県' },
  { value: '熊本県', label: '熊本県' },
  { value: '大分県', label: '大分県' },
  { value: '宮崎県', label: '宮崎県' },
  { value: '鹿児島県', label: '鹿児島県' },
  { value: '沖縄県', label: '沖縄県' },
  { value: '海外', label: '海外' }
];

const FinalEducation = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '大学卒', label: '大学卒' },
  { value: '大学院卒', label: '大学院卒' },
  { value: '短大卒', label: '短大卒' },
  { value: '高専卒', label: '高専卒' },
  { value: '高校卒', label: '高校卒' },
  { value: '専門学校卒', label: '専門学校卒' },
];

const JobChange = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '1回', label: '1回' },
  { value: '2回', label: '2回' },
  { value: '3回', label: '3回' },
  { value: '4回', label: '4回' },
  { value: '5回', label: '5回' },
  { value: '６回以上', label: '６回以上' },
];

const JobchangePeriod = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '3カ月以内', label: '3カ月以内' },
  { value: '6ヶ月以内', label: '6ヶ月以内' },
  { value: '1年以内', label: '1年以内' },
  { value: '今は考えていない', label: '今は考えていない' },
];

const WorkExperience = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '経営・経営企画・事業企画系', label: '経営・経営企画・事業企画系' },
  { value: '管理部門系', label: '管理部門系' },
  { value: 'SCM・ロジスティクス・物流・購買・貿易系', label: 'SCM・ロジスティクス・物流・購買・貿易系' },
  { value: '営業系', label: '営業系' },
  { value: 'マーケティング・販促企画・商品開発系', label: 'マーケティング・販促企画・商品開発系' },
  { value: 'コンサルタント系', label: 'コンサルタント系' },
  { value: '金融系専門職', label: '金融系専門職' },
  { value: '不動産系専門職', label: '不動産系専門職' },
  { value: '技術系（IT・Web・通信系）', label: '技術系（IT・Web・通信系）' },
  { value: '技術系（電気・電子・半導体）', label: '技術系（電気・電子・半導体）' },
  { value: '技術系（機械・メカトロ・自動車）', label: '技術系（機械・メカトロ・自動車）' },
  { value: '技術系（化学・素材・食品・衣料）', label: '技術系（化学・素材・食品・衣料）' },
  { value: '技術系（建築・設備・土木・プラント）', label: '技術系（建築・設備・土木・プラント）' },
  { value: '技術・専門職系（メディカル）', label: '技術・専門職系（メディカル）' },
  { value: 'サービス・流通系', label: 'サービス・流通系' },
  { value: 'クリエイティブ系', label: 'クリエイティブ系' }
];

const ExperienceinAccounting = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '経験あり', label: '経験あり' },
  { value: '1年以上', label: '1年以上' },
  { value: '2年以上', label: '2年以上' },
  { value: '3年以上', label: '3年以上' },
  { value: '4年以上', label: '4年以上' },
  { value: '5年以上', label: '5年以上' },
  { value: '6年以上', label: '6年以上' },
  { value: '7年以上', label: '7年以上' },
  { value: '8年以上', label: '8年以上' },
  { value: '9年以上', label: '9年以上' },
  { value: '10年以上', label: '10年以上' },
  { value: '11年以上', label: '11年以上' },
  { value: '12年以上', label: '12年以上' },
  { value: '13年以上', label: '13年以上' },
  { value: '14年以上', label: '14年以上' },
  { value: '15年以上', label: '15年以上' },
  { value: '16年以上', label: '16年以上' },
  { value: '17年以上', label: '17年以上' },
  { value: '18年以上', label: '18年以上' },
  { value: '19年以上', label: '19年以上' },
  { value: '20年以上', label: '20年以上' },
];

const EnglishLevel = [
  { value: '', label: '選択してください', disabled: true },
  { value: 'ネイティブレベル', label: 'ネイティブレベル' },
  { value: 'ビジネスレベル', label: 'ビジネスレベル' },
  { value: '日常会話レベル', label: '日常会話レベル' },
  { value: '基礎会話レベル', label: '基礎会話レベル' },
  { value: 'なし', label: 'なし' }
];

const AddLanguageLevel = [
  { value: '', label: '選択してください', disabled: true },
  { value: 'ネイティブレベル', label: 'ネイティブレベル' },
  { value: 'ビジネスレベル', label: 'ビジネスレベル' },
  { value: '日常会話レベル', label: '日常会話レベル' },
  { value: '基礎会話レベル', label: '基礎会話レベル' },
  { value: 'なし', label: 'なし' }
];

const AddLanguage = [
  { value: '', label: '選択してください', disabled: true },
  { value: '北京語', label: '北京語' },
  { value: '韓国語', label: '韓国語' },
  { value: 'アラビア語', label: 'アラビア語' },
  { value: '広東語', label: '広東語' },
  { value: 'スペイン語', label: 'スペイン語' },
  { value: 'フィンランド語', label: 'フィンランド語' },
  { value: 'スウェーデン語', label: 'スウェーデン語' },
  { value: 'スペイン語', label: 'スペイン語' },
  { value: '台湾語', label: '台湾語' },
  { value: 'フランス語', label: 'フランス語' },
  { value: 'ドイツ語', label: 'ドイツ語' },
  { value: 'ヘブライ語', label: 'ヘブライ語' },
  { value: 'ヒンディー語', label: 'ヒンディー語' },
  { value: 'インドネシア語', label: 'インドネシア語' },
  { value: 'イタリア語', label: 'イタリア語' },
  { value: 'マレーシア語', label: 'マレーシア語' },
  { value: 'オランダ語', label: 'オランダ語' },
  { value: 'ノルウェー語', label: 'ノルウェー語' },
  { value: 'ポルトガル語', label: 'ポルトガル語' },
  { value: 'ロシア語', label: 'ロシア語' },
  { value: 'スワヒリ語', label: 'スワヒリ語' },
  { value: 'タイ語', label: 'タイ語' },
  { value: 'カダログ語', label: 'カダログ語' },
  { value: 'ベトナム語', label: 'ベトナム語' }
];

const BasicInfo = ({ formData, setFormData, handleNext }) => {
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [finaleducation, setfinaleducation] = useState('');
  const [finalEducationError, setFinalEducationError] = useState('');
  const [jobChange, setJobChange] = useState('');
  const [jobChangeError, setJobChangeError] = useState('');
  const [currentEmployment, setCurrentEmployment] = useState('');
  const [currentEmploymentError, setCurrentEmploymentError] = useState('');
  const [jobChangePeriod, setJobChangePeriod] = useState('');
  const [jobChangePeriodError, setJobChangePeriodError] = useState('');
  const [currentAnnualIncome, setCurrentAnnualIncome] = useState('');
  const [currentAnnualIncomeError, setCurrentAnnualIncomeError] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [workExperienceError, setWorkExperienceError] = useState('');
  const [experienceInAccounting, setExperienceInAccounting] = useState('');
  const [experienceInAccountingError, setExperienceInAccountingError] = useState('');
  const [experiencedIndustry, setExperiencedIndustry] = useState('');
  const [experiencedIndustryError, setExperiencedIndustryError] = useState('');
  const [spouse, setSpouse] = useState('');
  const [spouseError, setSpouseError] = useState('');
  const [familyMembers, setFamilyMembers] = useState('');
  const [familyMembersError, setFamilyMembersError] = useState('');

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionError, setSelectedOptionError] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [selectedValue, setSelectedValue] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentCompany, setCurrentCompany] = useState('');
  
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  // Handler function for checkbox changes
  // const handleCheckboxChange = (accordionIndex, checkboxLabel, isChecked) => {
  //   console.log("Accordion Index:", accordionIndex);
  //   console.log("Checkbox Label:", checkboxLabel);
  //   console.log("Is Checked:", isChecked);

  //   setSelectedCheckboxes(prevState => ({
  //     ...prevState,
  //     [accordionIndex]: {
  //       ...prevState[accordionIndex],
  //       [checkboxLabel]: isChecked,
  //     },
  //   }));
  // };


  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setGenderError('');
  };

  const handleDateChange = (selectedDate) => {
    // const selectedDate = event.target.value;
    setDate(selectedDate);
    setDateError('');
    // setDate(event.target.value);
    // setDateError('');
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionError('');
  };

  const handleFinalEducationChange = (event) => {
    setfinaleducation(event.target.value);
    setFinalEducationError('');
  };

  const handlejobChange = (event) => {
    setJobChange(event.target.value);
    setJobChangeError('');
  };

  const handleCurrentEmployment = (event) => {
    setCurrentEmployment(event.target.value);
    setCurrentEmploymentError('');
  };

  const handleJobChangePeriod = (event) => {
    setJobChangePeriod(event.target.value);
    setJobChangePeriodError('');
  };

  const handleCurrentAnnualIncome = (event) => {
    setCurrentAnnualIncome(event.target.value);
    setCurrentAnnualIncomeError('');
  };
  
  const handleWorkExperience = (event) => {
    setWorkExperience(event.target.value);
    setWorkExperienceError('');
  };
  
  const handleExperienceInAccounting = (event) => {
    setExperienceInAccounting(event.target.value);
    setExperienceInAccountingError('');
  };

  const handleSpouse = (event) => {
    setSpouse(event.target.value);
    setSpouseError('');
  };
  
  const handleFamilyMembersChange = (event) => {
    setFamilyMembers(event.target.value);
    setFamilyMembersError('');
  };

  const handleExperiencedIndustryChange = (event) => {
    setExperiencedIndustry(event.target.value);
    setExperiencedIndustryError('');
  };
 

  const handleCurrentCompanyChange = (event) => {
    setCurrentCompany(event.target.value);
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
    setFormData({ ...formData, name: event.target.value });
  };

  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  //   setFormData({ ...formData, isChecked: event.target.checked });
  // };

  const handleToggle = () => {
    setOpen(!open);
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

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  const generateValues = (start, end, step) => {
    const values = [];
    for (let i = start; i <= end; i += step) {
      values.push(`${i}万円以上`);
    }
    return values;
  };


  // State for errors
  const [errors, setErrors] = useState({});

  // const handleCheckboxChange = (checkboxLabel, isChecked) => {
  //   const updatedtype_of_industries_exp_overall = isChecked
  //     ? [...(formData.type_of_industries_exp_overall || []), checkboxLabel]
  //     : (formData.type_of_industries_exp_overall || []).filter((label) => label !== checkboxLabel);

  //   setFormData({ ...formData, type_of_industries_exp_overall: updatedtype_of_industries_exp_overall });
  //   setErrors({ ...errors, type_of_industries_exp_overall: '' });
  // };

  const handleCheckboxChange = (checkboxLabel, isChecked) => {
    let updatedTypeOfIndustries = formData.type_of_industries_exp_overall || [];
    
    if (isChecked) {
      updatedTypeOfIndustries = [...updatedTypeOfIndustries, checkboxLabel];
    } else {
      updatedTypeOfIndustries = updatedTypeOfIndustries.filter(label => label !== checkboxLabel);
    }
  
    setFormData({ ...formData, type_of_industries_exp_overall: updatedTypeOfIndustries });
    setErrors({ ...errors, type_of_industries_exp_overall: '' });
  };

 
  // const handleChange = (e) => {
  //   const { name, value,  type, checked } = e.target;
  //   // setFormData({ ...formData, [name]: value });
  //   // setErrors({ ...errors, [name]: '' }); // Clear error message for the field
  //   // Check the type of the input field
  //   if (type === 'checkbox') {
  //     // For checkboxes, update the formData with the checked value
  //     setFormData({ ...formData, [name]: checked });
  //   } else {
  //     // For other input types, update the formData with the value
  //     setFormData({ ...formData, [name]: value });
  //     setErrors({ ...errors, [name]: '' }); // Clear error message for the field
  //   }
  // };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkboxes
    if (type === 'checkbox') {
      const updatedFormData = { ...formData };
      updatedFormData[name] = checked; // Update the value directly
      setFormData(updatedFormData);
    } else {
      // For other input types (text, select, etc.)
      // Update the form data with the value
      setFormData({ ...formData, [name]: value });
    }
    // Clear error message for the field
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const newErrors = {};
  
    // Basic validation for required fields
    if (!formData.candidate_gender) {
      newErrors.candidate_gender = 'Please select your gender';
    }

    if (!formData.dob) {
      newErrors.dob = 'Please select your date of birth';
    }

    if (!formData.prefecture_code) {
      newErrors.prefecture_code = 'Please select an option';
    }

    if (!formData.final_educational) {
      newErrors.final_educational = 'Please select your final education';
    }

    if (!formData.job_changed_no) {
      newErrors.job_changed_no = 'Please select an option';
    }

    if (!formData.current_employment_status) {
      newErrors.current_employment_status = 'Please select your current employment';
    }

    if (!formData.job_change_duration) {
      newErrors.job_change_duration = 'Please select your jobchange period';
    }

    if (!formData.current_annual_income) {
      newErrors.current_annual_income = 'Please select your current annualincome';
    }

    if (!formData.type_of_work_exp_overall) {
      newErrors.type_of_work_exp_overall = 'Please select your workexperience';
    }
    
    if (!formData.type_of_industries_exp_overall) {
      newErrors.type_of_industries_exp_overall = 'Please select your experienced industry';
    }

    if (!formData.accounting_exp_total_year) {
      newErrors.accounting_exp_total_year = 'Please select your experience in accounting';
    }

    if (!formData.marriage_status) {
      newErrors.marriage_status = 'Please select an option';
    }

    if (!formData.family_member_count) {
      newErrors.family_member_count = 'Please select an option';
    }

    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      handleNext();
    }
    
  };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {/* <span>1</span> */}
          <h1>基本情報</h1>
        </Grid>
      </Grid>
      {/* <Grid container spacing={1} style={{marginTop: '30px', display: 'flex', gap: '10px', alignItems: 'center', fontWeight: '600', color: '#16375A'}}>
        <div style={{width: '25px', height: '25px', background: '#16375A', color: '#fff', border: '2px solid #fff', borderRadius: '50%'}}>1</div>
        <div style={{textAlign: 'left'}}>基本情報</div>
      </Grid> */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
          <Grid item xs={12}>
          <FormControl component="fieldset" error={Boolean(errors.candidate_gender)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' component="legend">性別を教えてください<span className='required_label'>必須</span></FormLabel>
            <RadioGroup
              row
              aria-label="candidate_gender"
              name="candidate_gender"
              value={formData.candidate_gender || ''}
              onChange={handleChange}
              error={Boolean(errors.candidate_gender)}
              helperText={errors.candidate_gender}
            >
              <FormControlLabel value="男性" control={<Radio />} label="男性" />
              <FormControlLabel value="女性" control={<Radio />} label="女性" />
            </RadioGroup>
            {errors.candidate_gender && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.candidate_gender}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{padding:'2px'}}>
          {/* Date Picker */}
          <FormControl fullWidth error={Boolean(errors.dob)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown7-label" sx={{marginBottom: '10px'}}>生まれた年を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <CustomDatePicker style={{padding: '0 10px'}} value={formData.dob || ''} name='dob'
               onChange={handleChange} error={Boolean(errors.dob)}
              helperText={errors.dob} />
           {errors.dob && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{errors.dob}</FormHelperText>} 
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.prefecture_code)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>お住まいの都道府県を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.prefecture_code || ''}
              name='prefecture_code'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.prefecture_code)}
              helperText={errors.prefecture_code}>
              {prefecture.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.prefecture_code && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.prefecture_code}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.final_educational)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="second-dropdown-label" sx={{marginBottom: '10px'}}>最終学歴を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.final_educational || ''}
              name='final_educational'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.final_educational)}
              helperText={errors.final_educational}>
              {FinalEducation.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.final_educational && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.final_educational}</FormHelperText> }
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.job_changed_no)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="third-dropdown-label" sx={{marginBottom: '10px'}}>転職回数を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.job_changed_no || ''}
              name='job_changed_no'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.job_changed_no)}
              helperText={errors.job_changed_no}>
             {JobChange.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.job_changed_no && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.job_changed_no }</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} >
          <FormControl component="fieldset" error={Boolean(errors.current_employment_status)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' component="legend" sx={{marginBottom: '10px'}}>現在の就業状況を教えてください<span className='required_label'>必須</span></FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="current_employment_status"
              value={formData.current_employment_status || ''}
              onChange={handleChange}
              error={Boolean(errors.current_employment_status)}
              helperText={errors.current_employment_status}
            >
              <FormControlLabel value="就業している" control={<Radio />} label="就業している" />
              <FormControlLabel value="就業していない" control={<Radio />} label="就業していない" />
            </RadioGroup>
            {errors.current_employment_status && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.current_employment_status}</FormHelperText> }
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.job_change_duration)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown4-label" sx={{marginBottom: '10px'}}>転職希望時期を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.job_change_duration || ''}
              name='job_change_duration'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.job_change_duration)}
              helperText={errors.job_change_duration}
            > 
              {JobchangePeriod.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.job_change_duration && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.job_change_duration}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
      {/* Fifth Dropdown */}
      <FormControl fullWidth error={Boolean(errors.current_annual_income)} sx={{marginBottom: '10px'}}>
        <FormLabel className='formfield-label' id="dropdown5-label" sx={{marginBottom: '10px'}}>現在年収を教えてください<span className='required_label'>必須</span></FormLabel>
        <Select
          value={formData.current_annual_income || ''}
          name='current_annual_income'
          onChange={handleChange}
          displayEmpty
          error={Boolean(errors.current_annual_income)}
          helperText={errors.current_annual_income}
        >
          <MenuItem value="" disabled>
            オプションを選んでください
          </MenuItem>
          <MenuItem value="299万円以上">299万円以上</MenuItem>
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
        {errors.current_annual_income && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.current_annual_income}</FormHelperText> }
      </FormControl>
    </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.type_of_work_exp_overall)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown6-label" sx={{marginBottom: '10px'}}>経験した職種を教えてください <br />（複数選択可）<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.type_of_work_exp_overall || ''}
              name='type_of_work_exp_overall'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.type_of_work_exp_overall)}
              helperText={errors.type_of_work_exp_overall}
            > 
              {WorkExperience.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.type_of_work_exp_overall && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.type_of_work_exp_overall}</FormHelperText>}
          </FormControl>
        </Grid>
          
        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.type_of_industries_exp_overall)}>
            <FormLabel className='formfield-label' id="dropdown7-label" sx={{marginBottom: '10px'}}>これまでのキャリアで経験した業種を教えてください（複数選択可）<span className='required_label'>必須</span>​</FormLabel>
            <AccordianBasicInfo 
              // value={formData.type_of_industries_exp_overall || ''}
              // name='type_of_industries_exp_overall'
              // onChange={handleChange}
              error={Boolean(errors.type_of_industries_exp_overall)}
              helperText={errors.type_of_industries_exp_overall}
              selectedCheckboxes={formData.type_of_industries_exp_overall || []}
            onCheckboxChange={handleCheckboxChange}
            />
            {errors.type_of_industries_exp_overall && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{errors.type_of_industries_exp_overall}</FormHelperText> }
          </FormControl>
        </Grid>

        {/* <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.type_of_industries_exp_overall)}>
            <FormLabel className='formfield-label' id="dropdown7-label" sx={{marginBottom: '10px'}}>これまでのキャリアで経験した業種を教えてください（複数選択可）<span className='required_label'>必須</span>​</FormLabel>
            <AccordianBasicInfo 
              // value={formData.type_of_industries_exp_overall || ''}
              // name='type_of_industries_exp_overall'
              // onChange={handleChange}
              // error={Boolean(errors.type_of_industries_exp_overall)}
              // helperText={errors.type_of_industries_exp_overall}
              selectedCheckboxes={formData.type_of_industries_exp_overall || []}
            onCheckboxChange={handleCheckboxChange}
            />
            {errors.type_of_industries_exp_overall && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{errors.type_of_industries_exp_overall}</FormHelperText> }
          </FormControl>
        </Grid> */}

        {/* <Grid item xs={12}>
          <FormControl fullWidth sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown7-label" sx={{marginBottom: '10px'}}>これまでのキャリアで経験した業種を教えてください（複数選択可）​</FormLabel>
            <AccordianBasicInfo required={false} value={formData.currentCompany} name='currentCompany'/>
          </FormControl>
        </Grid> */}

        <Grid item xs={12}>
          {/* Eight Dropdown */}
          <FormControl fullWidth error={Boolean(errors.accounting_exp_total_year)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown5-label" sx={{marginBottom: '10px'}}>経理の経験年数を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.accounting_exp_total_year || ''}
              name='accounting_exp_total_year'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.accounting_exp_total_year)}
              helperText={errors.accounting_exp_total_year}
            > 
              {ExperienceinAccounting.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.accounting_exp_total_year && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.accounting_exp_total_year}</FormHelperText> }
          </FormControl>
        </Grid>

        <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel className='formfield-label' id="textfield-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社名を入力してください <br /> (複数登録が可能です。）</FormLabel>
          <TextField
            fullWidth
            placeholder="現在（直近）の在籍会社名を入力してください"
            variant="outlined"
            value={formData.current_company_name || ''}
            name='current_company_name'
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
        
        <Grid item xs={12}>
          <FormControlLabel sx={{marginBottom: '10px'}}
            control={
              <Checkbox
                checked={formData.blockcompany}
                onChange={handleChange}
                color="primary"
                name='blockcompany'
              />
            }
            label="この企業のレジュメ閲覧をブロック"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset" error={Boolean(errors.marriage_status)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' component="legend" sx={{marginBottom: '10px'}}>配偶者についてを教えてください​​<span className='required_label'>必須</span>​</FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="marriage_status"
              value={formData.marriage_status || ''}
              onChange={handleChange}
              error={Boolean(errors.marriage_status)}
              helperText={errors.marriage_status}
            >
              <FormControlLabel value="配偶者あり" control={<Radio />} label="配偶者あり" />
              <FormControlLabel value="配偶者なし" control={<Radio />} label="配偶者なし" />
            </RadioGroup>
            {errors.marriage_status && <FormHelperText style={{ color: 'red', margin: '10px 0'}}>{errors.marriage_status}</FormHelperText> }
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.family_member_count)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown9-label" sx={{marginBottom: '10px'}}>扶養される家族数について教えてください​<span className='required_label'>必須</span>​</FormLabel>
            <TextField
              variant="outlined"
              type="name"
              placeholder="扶養される家族数について教えてください​"
              value={formData.family_member_count || ''}
              name='family_member_count'
              onChange={handleChange}
              error={Boolean(errors.family_member_count)}
              // helperText={errors.family_member_count}
            />
            {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> }
          </FormControl>
        </Grid>

        <Grid item xs={12}>
        <FormLabel className='formfield-label' id="dropdown9-label" style={{marginBottom:'10px', fontWeight: '600', color: '#000'}}>語学スキルについて教えてください​​</FormLabel>
          </Grid>

          <Grid item xs={12}>
      <FormLabel id="dropdown9-label" sx={{marginBottom: '10px', display: 'block'}}>英語​</FormLabel>
      <FormControl fullWidth>
        <Select
          value={formData.selectedValue || ''}
          name='selectedValue'
          onChange={handleChange}
          inputProps={{
            name: 'selectedValue',
            id: 'level-select',
          }}
          displayEmpty
          // renderValue={(selected) => (selected ? selected : '選択してください')}
        >
          {EnglishLevel.map((option, index) => (
              <MenuItem key={index} value={option.value} disabled={option.disabled}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>

        <Grid item xs={12}>
        <IconButton onClick={handleExpandToggle} sx={{gap: '5px', padding: '0'}}>
          <ExpandMoreIcon /><Typography variant="h6" sx={{fontSize: '16px'}}>TOEICの点数</Typography>
        </IconButton>
        <Collapse in={expanded}>
          <div style={{alignItems:'center', display:'flex', gap:'10px', padding: '10px 0'}}>
          <FormLabel id="dropdown5-label">TOEIC </FormLabel>
            <TextField
              // label="Your Label"
              placeholder="あなたのスコア"
              variant="outlined"
              value={formData.score || ''}
              onChange={handleChange}
              name='score'
              // other TextField props can be added here
            />
            <FormLabel id="dropdown5-label">点 </FormLabel>
           </div>
        </Collapse>
        </Grid>

        <Grid item xs={12}>
        <div>
      <IconButton onClick={handleExpandToggle} sx={{gap: '5px', padding: '0'}}>
        <ExpandMoreIcon />      <Typography variant="h6" sx={{fontSize: '16px'}}>言語を追加する</Typography>

      </IconButton>
      <Collapse in={expanded}>
        <div style={{padding: '10px 0'}}>
        <Select
            value={formData.dropdown2Value || ''}
            name='dropdown2Value'
            onChange={handleChange}
            style={{ marginBottom: '10px', marginRight: '10px', width:'48%' }}
            displayEmpty
          >
            {AddLanguage.map((option, index) => (
              <MenuItem key={index} value={option.value} disabled={option.disabled}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={formData.dropdown1Value || ''}
            name='dropdown1Value'
            onChange={handleChange}
            style={{ marginBottom: '10px', width:'48%'}}
            displayEmpty
          > 
            {AddLanguageLevel.map((option, index) => (
              <MenuItem key={index} value={option.value} disabled={option.disabled}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </Collapse>
    </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} style={{ margin: '10px auto', display: 'grid', paddingTop:'30px', marginBottom: '100px'}}>
            <Button type="submit" variant="contained" color="primary">
            現職・直近情報の入力へ
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default BasicInfo;

