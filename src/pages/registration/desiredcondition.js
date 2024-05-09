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
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionError, setSelectedOptionError] = useState('');
  const [secondDropdownValue, setSecondDropdownValue] = useState('');
  const [secondDropdownError, setSecondDropdownError] = useState('');
  const [thirdDropdownValue, setThirdDropdownValue] = useState('');
  const [thirdDropdownError, setThirdDropdownError] = useState('');
  const [dropdown4Value, setDropdown4Value] = useState('');
  const [dropdown4Error, setDropdown4Error] = useState('');
  const [dropdown5Value, setDropdown5Value] = useState('');
  const [dropdown5Error, setDropdown5Error] = useState('');
  const [dropdown6Value, setDropdown6Value] = useState('');
  const [dropdown6Error, setDropdown6Error] = useState('');
  const [dropdown7Value, setDropdown7Value] = useState('');
  const [dropdown7Error, setDropdown7Error] = useState('');

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

  const generateValues = (start, end, step) => {
    const values = [];
    for (let i = start; i <= end; i += step) {
      values.push(`${i}万円以上`);
    }
    return values;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
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
          <FormControl fullWidth required error={!!selectedOptionError}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>ご希望の年収を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              displayEmpty
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
            <FormHelperText style={{ color: 'red' }}>{selectedOptionError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!secondDropdownError}>
            <FormLabel id="second-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の職種を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={secondDropdownValue}
              onChange={handleSecondDropdownChange}
              displayEmpty
            >
              {DesiredJobType.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{secondDropdownError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!thirdDropdownError}>
            <FormLabel id="third-dropdown-label" sx={{marginBottom: '10px'}}>ご希望の業種を教えてください​<span className='required_label'>必須</span></FormLabel>
            <Select
              value={thirdDropdownValue}
              onChange={handleThirdDropdownChange}
              displayEmpty
            >
              {DesiredIndustry.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{thirdDropdownError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth required error={!!dropdown4Error}>
            <FormLabel id="dropdown4-label" sx={{marginBottom: '10px'}}>ご希望の役職を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={dropdown4Value}
              onChange={handleDropdown4Change}
              displayEmpty
            >
              {DesiredPosition.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown4Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fifth Dropdown */}
          <FormControl fullWidth required error={!!dropdown5Error}>
            <FormLabel id="dropdown5-label" sx={{marginBottom: '10px'}}>ご希望の勤務地（都道府県）を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={dropdown5Value}
              onChange={handleDropdown5Change}
              displayEmpty
            >
              {DesiredWorkLocation.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown5Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth required error={!!dropdown6Error}>
            <FormLabel id="dropdown6-label" sx={{marginBottom: '10px'}}>ご希望の企業カテゴリを教えてください​<span className='required_label'>必須</span></FormLabel>
            <Select
              value={dropdown6Value}
              onChange={handleDropdown6Change}
              displayEmpty
            >
              {DesiredCompanyCategory.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown6Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* 7 Dropdown */}
          <FormControl fullWidth required error={!!dropdown7Error}>
            <FormLabel id="dropdown7-label" sx={{marginBottom: '10px'}}>ご希望の従業員規模を教えてください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={dropdown7Value}
              onChange={handleDropdown7Change}
              displayEmpty
            >
              {DesiredNumberOfEmployees.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText>
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
