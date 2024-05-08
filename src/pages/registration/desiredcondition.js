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
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="管理部門系全て">管理部門系全て</MenuItem>
              <MenuItem value="経理​">経理​</MenuItem>
              <MenuItem value="財務・コントローラー​">財務・コントローラー​</MenuItem>
              <MenuItem value="会計・税務">会計・税務</MenuItem>
              <MenuItem value="内部監査​">内部監査​</MenuItem>
              <MenuItem value="広報・IR​">広報・IR​</MenuItem>
              <MenuItem value="管理部長">管理部長</MenuItem>
              <MenuItem value="CFO（役員）">CFO（役員）</MenuItem>
              <MenuItem value="総務">総務</MenuItem>
              <MenuItem value="人事（採用・労務・教育など）">人事（採用・労務・教育など）</MenuItem>
              <MenuItem value="人事制度・企画">人事制度・企画</MenuItem>
              <MenuItem value="法務・コンプライアンス">法務・コンプライアンス</MenuItem>
              <MenuItem value="特許・知的財産関連">特許・知的財産関連</MenuItem>
              <MenuItem value="その他">その他</MenuItem>
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
              <MenuItem value="" disabled>
                オプションを選んでください
              </MenuItem>
              <MenuItem value="IT・インタネット・ゲーム">IT・インタネット・ゲーム</MenuItem>
              <MenuItem value="メーカー​">メーカー​</MenuItem>
              <MenuItem value="商社">商社</MenuItem>
              <MenuItem value="流通・小売・サービス">流通・小売・サービス</MenuItem>
              <MenuItem value="広告・出版・マスコミ">広告・出版・マスコミ</MenuItem>
              <MenuItem value="コンサルティング">コンサルティング</MenuItem>
              <MenuItem value="金融">金融</MenuItem>
              <MenuItem value="建設・不動産">建設・不動産</MenuItem>
              <MenuItem value="メディカル">メディカル</MenuItem>
              <MenuItem value="物流・運輸">物流・運輸</MenuItem>
              <MenuItem value="その他（インフラ・教育・官公庁など）">その他（インフラ・教育・官公庁など）</MenuItem>
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
              <MenuItem value="" disabled>
                オプションを選んでください
              </MenuItem>
              <MenuItem value="特に希望しない">特に希望しない</MenuItem>
              <MenuItem value="担当者（スタッフ）">担当者（スタッフ）</MenuItem>
              <MenuItem value="主任（リーダー）">主任（リーダー）</MenuItem>
              <MenuItem value="係長（マネージャー候補">係長（マネージャー候補</MenuItem>
              <MenuItem value="課長（マネージャー）">課長（マネージャー）</MenuItem>
              <MenuItem value="部長（部門責任者）">部長（部門責任者）</MenuItem>
              <MenuItem value="CFO（役員）">CFO（役員）</MenuItem>
              <MenuItem value="顧問">顧問</MenuItem>
              <MenuItem value="その他">その他</MenuItem>
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
              <MenuItem value="" disabled>
                オプションを選んでください
              </MenuItem>
              <MenuItem value="東京都">東京都</MenuItem>
              <MenuItem value="神奈川県​">神奈川県​</MenuItem>
              <MenuItem value="千葉県​">千葉県​</MenuItem>
              <MenuItem value="埼玉県​">埼玉県​</MenuItem>
              <MenuItem value="１都３県全て">１都３県全て</MenuItem>
              <MenuItem value="北海道・東北​">北海道・東北​</MenuItem>
              <MenuItem value="北関東">北関東</MenuItem>
              <MenuItem value="中部">中部</MenuItem>
              <MenuItem value="近畿">近畿</MenuItem>
              <MenuItem value="中国・四国">中国・四国</MenuItem>
              <MenuItem value="九州・沖縄">九州・沖縄</MenuItem>
              <MenuItem value="海外">海外</MenuItem>
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
              <MenuItem value="" disabled>
                オプションを選んでください
              </MenuItem>
              <MenuItem value="上場企業">上場企業</MenuItem>
              <MenuItem value="上場グループ企業">上場グループ企業</MenuItem>
              <MenuItem value="非上場企業">非上場企業</MenuItem>
              <MenuItem value="外資系企業​">外資系企業​</MenuItem>
              <MenuItem value="ベンチャー企業​">ベンチャー企業​</MenuItem>
              <MenuItem value="官公庁">官公庁</MenuItem>
              <MenuItem value="団体">団体</MenuItem>
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
              <MenuItem value="" disabled>
                オプションを選んでください  
              </MenuItem>
              <MenuItem value="10名以下">10名以下</MenuItem>
              <MenuItem value="11～50名​">11～50名​</MenuItem>
              <MenuItem value="51～100名​">51～100名​</MenuItem>
              <MenuItem value="101～500名​">101～500名​</MenuItem>
              <MenuItem value="501～1000名​">501～1000名​</MenuItem>
              <MenuItem value="1000名以上​">1000名以上​</MenuItem>
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
