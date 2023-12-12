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
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BasicInfo = ({ formData, setFormData, handleNext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
  const [expanded1, setExpanded1] = useState(false);
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setFormData({ ...formData, email: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setFormData({ ...formData, isChecked: event.target.checked });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      alert('Name is required.');
      return;
    }

    if (!isChecked) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    if (gender === '') {
      setGenderError('Please select a gender.');
      return;
    }

    if (selectedOption === '') {
      setSelectedOptionError('Please select an option.');
      return;
    }

    if (secondDropdownValue === '') {
      setSecondDropdownError('Please select a value for the second dropdown.');
      return;
    }

    if (thirdDropdownValue === '') {
      setThirdDropdownError('Please select a value for the third dropdown.');
      return;
    }

    if (newRadioValue === '') {
      setNewRadioError('Please select a value for the new radio button group.');
      return;
    }

    if (new2RadioValue === '') {
      setNewRadioError('Please select a value for the new radio button group.');
      return;
    }

    if (dropdown4Value === '') {
      setDropdown4Error('Please select a value for the fourth dropdown.');
      return;
    }

    if (dropdown5Value === '') {
      setDropdown5Error('Please select a value for the fifth dropdown.');
      return;
    }

    if (dropdown6Value === '') {
      setDropdown6Error('Please select a value for the sixth dropdown.');
      return;
    }

    if (dropdown7Value === '') {
      setDropdown7Error('Please select a value for the seventh dropdown.');
      return;
    }

    if (dropdown8Value === '') {
      setDropdown8Error('Please select a value for the eighth dropdown.');
      return;
    }

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
              <MenuItem value="299万円以下">299万円以下</MenuItem>
              <MenuItem value="300万円以上">300万円以上</MenuItem>
              <MenuItem value="350万円以上">350万円以上</MenuItem>
              <MenuItem value="400万円以上">400万円以上</MenuItem>
              <MenuItem value="450万円以上">450万円以上</MenuItem>
              <MenuItem value="500万円以上">500万円以上</MenuItem>
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
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown6Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Seven Dropdown */}
          <FormControl fullWidth required error={!!dropdown7Error}>
            <FormLabel id="dropdown7-label">これまでのキャリアで経験した業種を教えてください <br />（複数選択可）​</FormLabel>
            <Select
              value={dropdown7Value}
              onChange={handleDropdown7Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
              オプションを選んでください
              </MenuItem>
              <MenuItem value="IT・インタネット・ゲーム">IT・インタネット・ゲーム</MenuItem>
              <MenuItem value="メーカー">メーカー</MenuItem>
              <MenuItem value="商社">商社</MenuItem>
              <MenuItem value="流通・小売・サービス">流通・小売・サービス</MenuItem>
              <MenuItem value="広告・出版・マスコミ">広告・出版・マスコミ</MenuItem>
              <MenuItem value="コンサルティング">コンサルティング</MenuItem>

            </Select>
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
            value={name}
            onChange={handleNameChange}
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
            value={name}
            required
          />
        </Grid>

        <Grid item xs={12}>
        <FormLabel id="dropdown9-label" style={{marginBottom:'10px'}}>語学スキルについて教えてください​​</FormLabel>
          </Grid>

        <Grid item xs={12}>

          {/* Eight Dropdown */}
          <FormControl fullWidth required error={!!dropdown9Error}>
            <FormLabel id="dropdown9-label">英語</FormLabel>
            <Select
              value={dropdown9Value}
              onChange={handleDropdown9Change}
              displayEmpty
            >
              <MenuItem value="" disabled>
                レベルを選択
              </MenuItem>
              <MenuItem value="ネイティブレベル">ネイティブレベル</MenuItem>
              <MenuItem value="ビジネスレベル">ビジネスレベル</MenuItem>
              <MenuItem value="日常会話レベル">日常会話レベル</MenuItem>
              <MenuItem value="基礎会話レベル">基礎会話レベル</MenuItem>
              <MenuItem value="なし">なし</MenuItem>
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown9Error}</FormHelperText>
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
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
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
