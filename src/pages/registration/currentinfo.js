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
      <h1>現職（直近）情報</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
        <Grid item xs={12}>
          <FormControl fullWidth required error={!!selectedOptionError}>
            <FormLabel id="demo-radio-buttons-group-label">現在（直近）の在籍会社での役職を教えてください </FormLabel>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="CFO（役員）">CFO（役員）</MenuItem>
              <MenuItem value="部長">部長（部門責任者）​</MenuItem>
              <MenuItem value="課長（マネージャー）">課長（マネージャー）</MenuItem>
              <MenuItem value="係長（マネージャー候補）">係長（マネージャー候補）</MenuItem>
              <MenuItem value="主任（リーダー）">主任（リーダー）</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{selectedOptionError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!secondDropdownError}>
            <FormLabel id="second-dropdown-label">現在（直近）の在籍会社での経験職種を教えてください </FormLabel>
            <Select
              value={secondDropdownValue}
              onChange={handleSecondDropdownChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="管理部門系全て">管理部門系全て</MenuItem>
              <MenuItem value="経理">経理</MenuItem>
              <MenuItem value="財務・コントローラー">財務・コントローラー</MenuItem>
              <MenuItem value="会計・税務">会計・税務</MenuItem>
              <MenuItem value="広報・IR">広報・IR</MenuItem>
              <MenuItem value="管理部長">管理部長</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{secondDropdownError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!thirdDropdownError}>
            <FormLabel id="third-dropdown-label">現在（直近）の在籍会社の業種を教えてください</FormLabel>
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
            </Select>
            <FormHelperText style={{ color: 'red' }}>{thirdDropdownError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!newRadioError}>
            <FormLabel component="legend">マネジメント経験を教えてください</FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="newRadio"
              value={newRadioValue}
              onChange={handleNewRadioChange}
            >
              <FormControlLabel value="あり" control={<Radio />} label="あり" />
              <FormControlLabel value="なし" control={<Radio />} label="なし" />
            </RadioGroup>
            <FormHelperText style={{ color: 'red' }}>{newRadioError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth required error={!!dropdown4Error}>
            <FormLabel id="dropdown4-label">経理での経験業務を選択してください​</FormLabel>
            <Select
              value={dropdown4Value}
              onChange={handleDropdown4Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="税務申告書作成実務">税務申告書作成実務</MenuItem>
              <MenuItem value="アニュアルレポート作成業務">アニュアルレポート作成業務</MenuItem>
              <MenuItem value="年次決算">年次決算</MenuItem>
              <MenuItem value="月次決算">月次決算</MenuItem>
              <MenuItem value="原価計算実務">原価計算実務</MenuItem>
              <MenuItem value="固定資産管理">固定資産管理</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown4Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fifth Dropdown */}
          <FormControl fullWidth required error={!!dropdown5Error}>
            <FormLabel id="dropdown5-label">今まで在籍したことのある会社の
カテゴリを教えてください</FormLabel>
            <Select
              value={dropdown5Value}
              onChange={handleDropdown5Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="上場企業​">上場企業​</MenuItem>
              <MenuItem value="上場グループ企業​">上場グループ企業​</MenuItem>
              <MenuItem value="非上場企業​">非上場企業​</MenuItem>
              <MenuItem value="外資系企業​">外資系企業​</MenuItem>
              <MenuItem value="ベンチャー企業​">ベンチャー企業​</MenuItem>
              <MenuItem value="官公庁​">官公庁​</MenuItem>
              <MenuItem value="団体​​">団体​​</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown5Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth required error={!!dropdown6Error}>
            <FormLabel id="dropdown6-label">保有資格を教えてください</FormLabel>
            <Select
              value={dropdown6Value}
              onChange={handleDropdown6Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="公認会計士">公認会計士</MenuItem>
              <MenuItem value="CPA（米国公認会計士）">CPA（米国公認会計士）</MenuItem>
              <MenuItem value="税理士​">税理士​</MenuItem>
              <MenuItem value="日商簿記検定1級​">日商簿記検定1級​</MenuItem>
              <MenuItem value="日商簿記検定2級​">日商簿記検定2級​</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown6Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Seven Dropdown */}
          <FormControl fullWidth required error={!!dropdown7Error}>
            <FormLabel id="dropdown7-label">使用可能会計ソフトを教えてください​</FormLabel>
            <Select
              value={dropdown7Value}
              onChange={handleDropdown7Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください              
              </MenuItem>
              <MenuItem value="MFクラウド会計">MFクラウド会計</MenuItem>
              <MenuItem value="freee">freee</MenuItem>
              <MenuItem value="MJS">MJS</MenuItem>
              <MenuItem value="TKC">TKC</MenuItem>
              <MenuItem value="JDL">JDL</MenuItem>
              <MenuItem value="ICS">ICS</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText>
          </FormControl>
        </Grid>
        </Grid>
        <Grid item xs={12} style={{ margin: '10px auto', display: 'grid', paddingTop:'20px' }}>
          <Button type="submit" variant="contained" color="primary">
          希望条件の入力へ
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default CurrentInfo;
