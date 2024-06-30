import React, { useState, useEffect} from 'react';
import {
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none', 
}));

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

const locationOptions = {
  東京都: ['都心・副都心地エリア', '城東エリア', '城南エリア', '城西エリア', '北多摩エリア', '南多摩エリア', '西多摩エリア'],
  千葉県: ['東葛飾エリア', '京葉エリア', '印旛エリア', '香取エリア', '海匝エリア', '君津エリア', '山武エリア', '長生エリア', '夷隅エリア', '安房エリア'],
  神奈川県: ['横浜市エリア', '川崎市エリア', '横須賀三浦エリア', '県央エリア', '湘南エリア', '県西エリア'],
  埼玉県: ['中央エリア', '東部エリア', '西部エリア', '北部エリア', '秩父エリア'],
};

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
  const [desired_location_city, setdesired_location_city] = useState('');
  const [desired_location_street, setdesired_location_street] = useState('');
  const [locationStreetOptions, setLocationStreetOptions] = useState([]);

  // useEffect(() => {
  //   if (locationCity) {
  //     setLocationStreetOptions(locationOptions[locationCity]);
  //     setLocationStreet('');
  //   }
  // }, [locationCity]);

  useEffect(() => {
    if (formData.desired_location_city) {
      setLocationStreetOptions(locationOptions[formData.desired_location_city]);
      setFormData((prevData) => ({ ...prevData, desired_location_street: '' }));
    }
  }, [formData.desired_location_city]);
  
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

    // if (name === 'location_city') {
    //   setLocationCity(value);
    // } else if (name === 'location_street') {
    //   setLocationStreet(value);
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger;
    
    const newErrors = {};
  
    // Basic validation for required fields
    if (!formData.desired_annual_income) {
      newErrors.desired_annual_income = 'Please select your desired annual income';
    }

    if (!formData.desired_job_type) {
      newErrors.desired_job_type = 'Please select your desired Jobtype';
    }

    if (!formData.desired_industry) {
      newErrors.desired_industry = 'Please select your desired industry';
    }

    if (!formData.desired_position) {
      newErrors.desired_position = 'Please select your desired position';
    }

    // if (!formData.desired_location) {
    //   newErrors.desired_location = 'Please select your desired worklocation';
    // }

    if (!formData.desired_company_category) {
      newErrors.desired_company_category = 'Please select your desired company category';
    }

    if (!formData.desired_no_of_employee) {
      newErrors.desired_no_of_employee = 'Please select your desired number of employees';
    }

    if (!formData.desired_location_city) {
      newErrors.desired_location_city = 'Please select your desired city';
    }

    if (!formData.desired_location_street) {
      newErrors.desired_location_street = 'Please select your desired street';
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
          <FormControl fullWidth error={Boolean(errors.desired_annual_income)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>ご希望の年収を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.desired_annual_income || ''}
              name='desired_annual_income'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desired_annual_income)}
              helperText={errors.desired_annual_income}
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
            {errors.desired_annual_income && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desired_annual_income}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.desired_job_type)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="second-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の職種を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.desired_job_type || ''}
              name='desired_job_type'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desired_job_type)}
              helperText={errors.desired_job_type}
            >
              {DesiredJobType.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desired_job_type &&<FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desired_job_type}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.desired_industry)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="third-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の業種を教えてください​<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.desired_industry || ''}
              name='desired_industry'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desired_industry)}
              helperText={errors.desired_industry}
            >
              {DesiredIndustry.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desired_industry && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desired_industry}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.desired_position)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown4-label" sx={{marginBottom: '10px'}}>ご希望の役職を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.desired_position || ''}
              name='desired_position'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desired_position)}
              helperText={errors.desired_position}
            >
              {DesiredPosition.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desired_position && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desired_position}</FormHelperText>}
          </FormControl>
        </Grid>
        
        <Grid item xs={12} spacing={2} sx={{ gap: 1}}>
          <FormLabel className='formfield-label' id="dropdown6-label" sx={{ marginBottom: '10px', display: 'block'}}>
            勤務地(プルダウン選択)<span className='required_label'>必須</span>​
          </FormLabel>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Grid xs={5.8}>
            <FormControl fullWidth error={Boolean(errors.desired_location_city)} sx={{ marginBottom: '10px' }}>
              <Select
                fullWidth
                id="desired_location_city"
                name="desired_location_city"
                value={formData.desired_location_city || ''}
                displayEmpty
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ textAlign: 'left' }}
                error={Boolean(errors.desired_location_city)}
                helperText={errors.desired_location_city}
              >
                <MenuItem value="" disabled>選択する</MenuItem>
                <MenuItem value="東京都">東京都</MenuItem>
                <MenuItem value="千葉県">千葉県</MenuItem>
                <MenuItem value="神奈川県">神奈川県</MenuItem>
                <MenuItem value="埼玉県">埼玉県</MenuItem>
              </Select>
              {errors.desired_location_city && <FormHelperText style={{ color: 'red', margin: '10px 0 0' }}>{errors.desired_location_city}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid xs={5.8}>
            <FormControl fullWidth error={Boolean(errors.desired_location_street)} sx={{ marginBottom: '10px' }}>
              <Select
                fullWidth
                id="desired_location_street"
                name="desired_location_street"
                value={formData.desired_location_street || ''}
                displayEmpty
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ textAlign: 'left' }}
                // disabled={!formData.location_city}
                error={Boolean(errors.desired_location_street)}
                helperText={errors.desired_location_street}
              >
                <MenuItem value="" disabled>選択する</MenuItem>
                {locationStreetOptions.map(option => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
              {errors.desired_location_street && <FormHelperText style={{ color: 'red', margin: '10px 0 0' }}>{errors.desired_location_street}</FormHelperText>}
            </FormControl>
          </Grid>
          </div>
        </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.desired_company_category)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown6-label" sx={{marginBottom: '10px'}}>ご希望の企業カテゴリを教えてください​<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.desired_company_category || ''}
              name='desired_company_category'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desired_company_category)}
              helperText={errors.desired_company_category}
            >
              {DesiredCompanyCategory.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desired_company_category && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desired_company_category}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* 7 Dropdown */}
          <FormControl fullWidth error={Boolean(errors.desired_no_of_employee)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown7-label" sx={{marginBottom: '10px'}}>ご希望の従業員規模を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.desired_no_of_employee || ''}
              name='desired_no_of_employee'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.desired_no_of_employee)}
              helperText={errors.desired_no_of_employee}
            >
              {DesiredNumberOfEmployees.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.desired_no_of_employee && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.desired_no_of_employee}</FormHelperText>}
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

