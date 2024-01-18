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
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordianBasicInfo from './components/AccordianBasicInfo';
import CustomDatePicker from './components/DatePicker';

const BasicInfo = ({ formData, setFormData, handleNext }) => {
  const [name, setName] = useState('');
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
  const [dropdown9Value, setDropdown9Value] = useState('');
  const [dropdown9Error, setDropdown9Error] = useState('');
  const [new2RadioValue, setNew2RadioValue] = useState('');
  const [new2RadioError, setNew2RadioError] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [selectedValue, setSelectedValue] = useState([]);
  const [open, setOpen] = useState(false);
  const [familyMembers, setFamilyMembers] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');

  const handleFamilyMembersChange = (event) => {
    setFamilyMembers(event.target.value);
  };

  const handleCurrentCompanyChange = (event) => {
    setCurrentCompany(event.target.value);
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
    setFormData({ ...formData, name: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setFormData({ ...formData, isChecked: event.target.checked });
  };

  const handleToggle = () => {
    setOpen(!open);
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

  const handleDropdown9Change = (event) => {
    setDropdown9Value(event.target.value);
    setDropdown9Error('');
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

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const menuItems = [
    'ネイティブレベル',
    'ビジネスレベル',
    '日常会話レベル',
    '基礎会話レベル',
    'なし',
  ];

  const generateValues = (start, end, step) => {
    const values = [];
    for (let i = start; i <= end; i += step) {
      values.push(`${i}万円以上`);
    }
    return values;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (name.trim() === '') {
    //   alert('Name is required.');
    //   return;
    // }

    // if (!isChecked) {
    //   alert('Please agree to the terms and conditions.');
    //   return;
    // }

    // if (gender === '') {
    //   setGenderError('Please select a gender.');
    //   return;
    // }

    // if (selectedOption === '') {
    //   setSelectedOptionError('Please select an option.');
    //   return;
    // }

    // if (secondDropdownValue === '') {
    //   setSecondDropdownError('Please select a value for the second dropdown.');
    //   return;
    // }

    // if (thirdDropdownValue === '') {
    //   setThirdDropdownError('Please select a value for the third dropdown.');
    //   return;
    // }

    // if (newRadioValue === '') {
    //   setNewRadioError('Please select a value for the new radio button group.');
    //   return;
    // }

    // if (new2RadioValue === '') {
    //   setNewRadioError('Please select a value for the new radio button group.');
    //   return;
    // }

    // if (dropdown4Value === '') {
    //   setDropdown4Error('Please select a value for the fourth dropdown.');
    //   return;
    // }

    // if (dropdown5Value === '') {
    //   setDropdown5Error('Please select a value for the fifth dropdown.');
    //   return;
    // }

    // if (dropdown6Value === '') {
    //   setDropdown6Error('Please select a value for the sixth dropdown.');
    //   return;
    // }

    // if (dropdown7Value === '') {
    //   setDropdown7Error('Please select a value for the seventh dropdown.');
    //   return;
    // }

    // if (dropdown8Value === '') {
    //   setDropdown8Error('Please select a value for the eighth dropdown.');
    //   return;
    // }

    handleNext();
  };

  return (
    <div>
      <h1>基本情報</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
          <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!genderError}>
            <FormLabel component="legend">性別を教えてください</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel value="男性" control={<Radio />} label="男性" />
              <FormControlLabel value="女性" control={<Radio />} label="女性" />
            </RadioGroup>
            <FormHelperText style={{ color: 'red' }}>{genderError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{padding:'2px'}}>
          {/* Date Picker */}
          <FormControl fullWidth required error={!!dropdown7Error}>
            <FormLabel id="dropdown7-label">生まれた年を教えてください​</FormLabel>
            <CustomDatePicker required={false} />
            <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText>
          </FormControl>
          
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth required error={!!selectedOptionError}>
            <FormLabel id="demo-radio-buttons-group-label">お住まいの都道府県を教えてください​</FormLabel>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="北海道">北海道</MenuItem>
              <MenuItem value="青森県">青森県</MenuItem>
              <MenuItem value="岩手県​">岩手県​</MenuItem>
              <MenuItem value="宮城県">宮城県</MenuItem>
              <MenuItem value="秋田県">秋田県</MenuItem>
              <MenuItem value="山形県">山形県</MenuItem>
              <MenuItem value="茨城県">茨城県</MenuItem>
              <MenuItem value="栃木県">栃木県</MenuItem>
              <MenuItem value="群馬県">群馬県</MenuItem>
              <MenuItem value="埼玉県">埼玉県</MenuItem>
              <MenuItem value="千葉県">千葉県</MenuItem>
              <MenuItem value="東京都">東京都</MenuItem>
              <MenuItem value="神奈川県">神奈川県</MenuItem>
              <MenuItem value="新潟県">新潟県</MenuItem>
              <MenuItem value="富山県">富山県</MenuItem>
              <MenuItem value="石川県">石川県</MenuItem>
              <MenuItem value="福井県">福井県</MenuItem>
              <MenuItem value="山梨県">山梨県</MenuItem>
              <MenuItem value="長野県">長野県</MenuItem>
              <MenuItem value="岐阜県">岐阜県</MenuItem>
              <MenuItem value="静岡県">静岡県</MenuItem>
              <MenuItem value="愛知県">愛知県</MenuItem>
              <MenuItem value="三重県">三重県</MenuItem>
              <MenuItem value="滋賀県">滋賀県</MenuItem>
              <MenuItem value="京都府">京都府</MenuItem>
              <MenuItem value="大阪府">大阪府</MenuItem>
              <MenuItem value="兵庫県">兵庫県</MenuItem>
              <MenuItem value="奈良県">奈良県</MenuItem>
              <MenuItem value="和歌山県">和歌山県</MenuItem>
              <MenuItem value="鳥取県">鳥取県</MenuItem>
              <MenuItem value="島根県">島根県</MenuItem>
              <MenuItem value="岡山県">岡山県</MenuItem>
              <MenuItem value="広島県">広島県</MenuItem>
              <MenuItem value="山口県">山口県</MenuItem>
              <MenuItem value="徳島県">徳島県</MenuItem>
              <MenuItem value="香川県">香川県</MenuItem>
              <MenuItem value="愛媛県">愛媛県</MenuItem>
              <MenuItem value="高知県">高知県</MenuItem>
              <MenuItem value="福岡県">福岡県</MenuItem>
              <MenuItem value="佐賀県">佐賀県</MenuItem>
              <MenuItem value="長崎県">長崎県</MenuItem>
              <MenuItem value="熊本県">熊本県</MenuItem>
              <MenuItem value="大分県">大分県</MenuItem>
              <MenuItem value="宮崎県">宮崎県</MenuItem>
              <MenuItem value="鹿児島県">鹿児島県</MenuItem>
              <MenuItem value="沖縄県">沖縄県</MenuItem>
              <MenuItem value="海外">海外</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{selectedOptionError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!secondDropdownError}>
            <FormLabel id="second-dropdown-label">最終学歴を教えてください​</FormLabel>
            <Select
              value={secondDropdownValue}
              onChange={handleSecondDropdownChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="大学卒">大学卒</MenuItem>
              <MenuItem value="大学院卒">大学院卒</MenuItem>
              <MenuItem value="短大卒">短大卒</MenuItem>
              <MenuItem value="高専卒">高専卒</MenuItem>
              <MenuItem value="高校卒">高校卒</MenuItem>
              <MenuItem value="専門学校卒">専門学校卒</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{secondDropdownError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!thirdDropdownError}>
            <FormLabel id="third-dropdown-label">転職回数を教えてください</FormLabel>
            <Select
              value={thirdDropdownValue}
              onChange={handleThirdDropdownChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="1回">1回</MenuItem>
              <MenuItem value="2回">2回</MenuItem>
              <MenuItem value="3回">3回</MenuItem>
              <MenuItem value="4回">4回</MenuItem>
              <MenuItem value="5回">5回</MenuItem>
              <MenuItem value="６回以上">６回以上</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{thirdDropdownError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!newRadioError}>
            <FormLabel component="legend">現在の就業状況を教えてください</FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="newRadio"
              value={newRadioValue}
              onChange={handleNewRadioChange}
            >
              <FormControlLabel value="就業している" control={<Radio />} label="就業している" />
              <FormControlLabel value="就業していない" control={<Radio />} label="就業していない" />
            </RadioGroup>
            <FormHelperText style={{ color: 'red' }}>{newRadioError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth required error={!!dropdown4Error}>
            <FormLabel id="dropdown4-label">転職希望時期を教えてください</FormLabel>
            <Select
              value={dropdown4Value}
              onChange={handleDropdown4Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="3カ月以内">3カ月以内</MenuItem>
              <MenuItem value="6ヶ月以内">6ヶ月以内</MenuItem>
              <MenuItem value="1年以内">1年以内</MenuItem>
              <MenuItem value="今は考えていない">今は考えていない</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown4Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
      {/* Fifth Dropdown */}
      <FormControl fullWidth required error={!!dropdown5Error}>
        <FormLabel id="dropdown5-label">現在年収を教えてください</FormLabel>
        <Select
          value={dropdown5Value}
          onChange={handleDropdown5Change}
          displayEmpty
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
        <FormHelperText style={{ color: 'red' }}>{dropdown5Error}</FormHelperText>
      </FormControl>
    </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth required error={!!dropdown6Error}>
            <FormLabel id="dropdown6-label">経験した職種を教えてください（複数選択可）</FormLabel>
            <Select
              value={dropdown6Value}
              onChange={handleDropdown6Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="経営・経営企画・事業企画系">経営・経営企画・事業企画系</MenuItem>
              <MenuItem value="管理部門系">管理部門系</MenuItem>
              <MenuItem value="SCM・ロジスティクス・物流・購買・貿易系">SCM・ロジスティクス・物流・購買・貿易系</MenuItem>
              <MenuItem value="営業系">営業系</MenuItem>
              <MenuItem value="マーケティング・販促企画・商品開発系">マーケティング・販促企画・商品開発系</MenuItem>
              <MenuItem value="コンサルタント系">コンサルタント系</MenuItem>
              <MenuItem value="金融系専門職">金融系専門職</MenuItem>
              <MenuItem value="不動産系専門職">不動産系専門職</MenuItem>
              <MenuItem value="技術系（IT・Web・通信系）">技術系（IT・Web・通信系）</MenuItem>
              <MenuItem value="技術系（電気・電子・半導体）">技術系（電気・電子・半導体）</MenuItem>
              <MenuItem value="技術系（機械・メカトロ・自動車）">技術系（機械・メカトロ・自動車）</MenuItem>
              <MenuItem value="技術系（化学・素材・食品・衣料）">技術系（化学・素材・食品・衣料）</MenuItem>
              <MenuItem value="技術系（建築・設備・土木・プラント）">技術系（建築・設備・土木・プラント）</MenuItem>
              <MenuItem value="技術・専門職系（メディカル）">技術・専門職系（メディカル）</MenuItem>
              <MenuItem value="サービス・流通系">サービス・流通系</MenuItem>
              <MenuItem value="クリエイティブ系">クリエイティブ系</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown6Error}</FormHelperText>
          </FormControl>
        </Grid>
          
        <Grid item xs={12}>
          {/* Seven Dropdown */}
          <FormControl fullWidth required error={!!dropdown7Error}>
            <FormLabel id="dropdown7-label">これまでのキャリアで経験した業種を教えてください <br />（複数選択可）​</FormLabel>
            <AccordianBasicInfo required={false} />
            <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText> 
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Eight Dropdown */}
          <FormControl fullWidth required error={!!dropdown8Error}>
            <FormLabel id="dropdown5-label">経理の経験年数を教えてください​</FormLabel>
            <Select
              value={dropdown8Value}
              onChange={handleDropdown8Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="経験あり">経験あり</MenuItem>
              <MenuItem value="1年以上">1年以上</MenuItem>
              <MenuItem value="2年以上">2年以上</MenuItem>
              <MenuItem value="3年以上">3年以上</MenuItem>
              <MenuItem value="4年以上">4年以上</MenuItem>
              <MenuItem value="5年以上">5年以上</MenuItem>
              <MenuItem value="6年以上">6年以上</MenuItem>
              <MenuItem value="7年以上">7年以上</MenuItem>
              <MenuItem value="8年以上">8年以上</MenuItem>
              <MenuItem value="9年以上">9年以上</MenuItem>
              <MenuItem value="10年以上">10年以上</MenuItem>
              <MenuItem value="11年以上">11年以上</MenuItem>
              <MenuItem value="12年以上">12年以上</MenuItem>
              <MenuItem value="13年以上">13年以上</MenuItem>
              <MenuItem value="14年以上">14年以上</MenuItem>
              <MenuItem value="15年以上">15年以上</MenuItem>
              <MenuItem value="16年以上">16年以上</MenuItem>
              <MenuItem value="17年以上">17年以上</MenuItem>
              <MenuItem value="18年以上">18年以上</MenuItem>
              <MenuItem value="19年以上">19年以上</MenuItem>
              <MenuItem value="20年以上">20年以上</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown8Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
        <FormLabel id="textfield-label">現在（直近）の在籍会社名を入力してください <br /> (複数登録が可能です。）</FormLabel>
        <TextField
          fullWidth
          placeholder="現在（直近）の在籍会社名を入力してください"
          variant="outlined"
          value={currentCompany}
          onChange={handleCurrentCompanyChange}
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
            label="この企業のレジュメ閲覧をブロック"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!new2RadioError}>
            <FormLabel component="legend">配偶者についてを教えてください​​​</FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="newRadio"
              value={new2RadioValue}
              onChange={handleNew2RadioChange}
            >
              <FormControlLabel value="配偶者あり" control={<Radio />} label="配偶者あり" />
              <FormControlLabel value="配偶者なし" control={<Radio />} label="配偶者なし" />
            </RadioGroup>
            <FormHelperText style={{ color: 'red' }}>{new2RadioError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormLabel id="dropdown9-label">扶養される家族数について教えてください​</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
            type="name"
            placeholder="扶養される家族数について教えてください​"
            value={familyMembers}
            onChange={handleFamilyMembersChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
        <FormLabel id="dropdown9-label" style={{marginBottom:'10px'}}>語学スキルについて教えてください​​</FormLabel>
          </Grid>

          <Grid item xs={12}>
      <FormLabel id="dropdown9-label">英語​</FormLabel>
      <FormControl fullWidth>
        <Select
          value={selectedValue}
          onChange={handleChange}
          inputProps={{
            name: 'level',
            id: 'level-select',
          }}
          renderValue={(selected) => (selected ? selected : '選択してください')}
        >
          <MenuItem value="" disabled>
            <em>選択してください</em>
          </MenuItem>
          {menuItems.map((item) => (
            <MenuItem key={item} value={item}>
              <RadioGroup
                value={selectedValue}
                onChange={handleChange}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              </RadioGroup>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>

        <Grid item xs={12}>
        <IconButton onClick={handleExpandToggle}>
          <ExpandMoreIcon /><Typography variant="h6">TOEICの点数</Typography>
        </IconButton>
        <Collapse in={expanded} >
          <div style={{alignItems:'center', display:'flex', gap:'10px'}}>
          <FormLabel id="dropdown5-label">TOEIC </FormLabel>
            <TextField
              label="Your Label"
              variant="outlined"
              // other TextField props can be added here
            />
            <FormLabel id="dropdown5-label">点 </FormLabel>
           </div>
        </Collapse>
        </Grid>

        <Grid item xs={12}>
        <div>
      <IconButton onClick={handleExpandToggle}>
        <ExpandMoreIcon />      <Typography variant="h6">言語を追加する</Typography>

      </IconButton>
      <Collapse in={expanded}>
        <div>
          <Select
            value={dropdown1Value}
            onChange={handleDropdown1Change}
            style={{ marginBottom: '10px', marginRight: '10px', width:'48%' }}
          >
            <MenuItem value="北京語">北京語</MenuItem>
            <MenuItem value="韓国語">韓国語</MenuItem>
            <MenuItem value="アラビア語">アラビア語</MenuItem>
            <MenuItem value="広東語">広東語</MenuItem>
            <MenuItem value="スペイン語">スペイン語</MenuItem>
            <MenuItem value="フィンランド語">フィンランド語</MenuItem>
            <MenuItem value="スウェーデン語">スウェーデン語</MenuItem>
            <MenuItem value="スペイン語">スペイン語</MenuItem>
            <MenuItem value="台湾語">台湾語</MenuItem>
            <MenuItem value="フランス語">フランス語</MenuItem>
            <MenuItem value="ドイツ語">ドイツ語</MenuItem>
            <MenuItem value="ヘブライ語">ヘブライ語</MenuItem>
            <MenuItem value="ヒンディー語">ヒンディー語</MenuItem>
            <MenuItem value="インドネシア語">インドネシア語</MenuItem>
            <MenuItem value="イタリア語">イタリア語</MenuItem>
            <MenuItem value="マレーシア語">マレーシア語</MenuItem>
            <MenuItem value="オランダ語">オランダ語</MenuItem>
            <MenuItem value="ノルウェー語">ノルウェー語</MenuItem>
            <MenuItem value="ポルトガル語">ポルトガル語</MenuItem>
            <MenuItem value="ロシア語">ロシア語</MenuItem>
            <MenuItem value="スワヒリ語">スワヒリ語</MenuItem>
            <MenuItem value="タイ語">タイ語</MenuItem>
            <MenuItem value="カダログ語">カダログ語</MenuItem>
            <MenuItem value="ベトナム語">ベトナム語</MenuItem>
          </Select>
          <Select
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
        <Grid item xs={12} style={{ margin: '10px auto', display: 'grid', paddingTop:'30px' }}>
          <Button type="submit" variant="contained" color="primary">
          現職・直近情報の入力へ
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default BasicInfo;
