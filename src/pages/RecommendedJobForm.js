// import * as React from 'react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, RadioGroup, Radio, 
  FormControl, FormControlLabel, Typography, Button, Grid, FormLabel, Select, MenuItem, Checkbox} from '@mui/material';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import { grid, width } from '@mui/system';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordianBasicInfo from './registration/components/AccordianBasicInfo';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft:'10px',
  marginTop:'10px',
  marginBottom:'8px',
}));

const RecommendedJobForm = () => {

  const generateValues = (start, end, step) => {
    const values = [];
    for (let i = start; i <= end; i += step) {
      values.push(`${i}万円以上`);
    }
    return values;
  };

  const [selectedOption, setSelectedOption] = useState('');
  const [secondDropdownValue, setSecondDropdownValue] = useState('');
  const [selectedOptionError, setSelectedOptionError] = useState('');
  const [secondDropdownError, setSecondDropdownError] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOptionError('');
  };

  const handleSecondDropdownChange = (event) => {
    setSecondDropdownValue(event.target.value);
    setSecondDropdownError('');
  };

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const data = [
    { id: 1, column1: '生まれ年', column2: '1999年' },
    { id: 2, column1: '最終学歴', column2: '大学卒' },
    { id: 3, column1: '会計の経験年数', column2: '3年' },
    { id: 4, column1: '経験職種', column2: '経理' },
    { id: 5, column1: '経験業種', column2: 'IT' },
    { id: 6, column1: '', column2: '商社（食品）' },
    { id: 7, column1: '希望する会社のカテゴリ', column2: '上場企業' },
    { id: 8, column1: '希望の従業員規模', column2: '101～500名' },
    { id: 9, column1: '希望業種', column2: 'IT' },
    { id: 10, column1: '希望勤務地（都道府県）', column2: '東京都' },
    { id: 11, column1: '希望する年収', column2: '500万円以上' },
    { id: 12, column1: '希望ポジション', column2: ' 課長（マネージャー）' },
    // Add more rows as needed
  ];

  function replaceAndRemoveRows(targetId, replaceId, removeId, data) {
    const targetIndex = data.findIndex((row) => row.id === targetId);
  
    if (targetIndex !== -1) {
      const replaceRow = data.find((row) => row.id === replaceId);
  
      if (replaceRow) {
        data[targetIndex].column1 = `${data[targetIndex].column1}\n${replaceRow.column1}`;
        data[targetIndex].column2 = `${data[targetIndex].column2}\n${replaceRow.column2}`;
        // Remove the row with removeId
        data.splice(data.findIndex((row) => row.id === removeId), 1);
      }
    }
  }
  
  // Replace and remove rows for id: 4, 5, 10
  replaceAndRemoveRows(5, 6, 6, data);

  const [checkboxes, setCheckboxes] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    // Add more checkboxes as neededd
  });

  const handleChangeOne = (name) => (event) => {
    setCheckboxes({
      ...checkboxes,
      [name]: event.target.checked,
    });
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
      <p>おすすめ求人設定</p>
    </div>
    <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
    {/* <TableContainer component={Paper} sx={{marginBottom:'200px'}}>
      <Table>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{color:'#16375A'}}>{row.column1.split('\n').map((line, index) => <div key={index}>{line}</div>)}</TableCell>
              <TableCell sx={{width:'60%'}}>{row.column2.split('\n').map((line, index) => <div key={index}>{line}</div>)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

    <div style={{padding: '24px'}}>
      <Grid item xs={12} style={{marginBottom: '20px', textAlign: 'left'}}>
        <FormControl fullWidth error={!!selectedOptionError}>
          <FormLabel id="dropdown5-label" style={{textAlign: 'left', marginBottom: '10px'}}>年収幅おすすめ設定</FormLabel>
          <Select
            value={selectedOption}
            onChange={handleSelectChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
            オプションを選んでください
            </MenuItem>
            <MenuItem value="299万円以上">299万円以上</MenuItem>
            {generateValues(300, 2000, 50).map((value) => (
              <MenuItem key={value} value={value} style={{textAlign: 'left'}} >
                {value}
              </MenuItem>
            ))}
            {generateValues(2000, 5000, 500).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          {/* <FormHelperText style={{ color: 'red' }}>{dropdown5Error}</FormHelperText> */}
        </FormControl>
      </Grid>

      <Grid item xs={12} style={{textAlign: 'left'}}>
        {/* Seven Dropdown */}
        <FormControl fullWidth style={{marginBottom: '20px'}}>
          <FormLabel id="dropdown7-label" style={{textAlign: 'left', marginBottom: '10px'}}>業種おすすめ設定​</FormLabel>
          <AccordianBasicInfo required={false} style={{marginBottom: '20px'}}/>
          {/* <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText>  */}
        </FormControl>
      </Grid>

      
      <Grid item xs={12} style={{textAlign: 'left'}}>
        {/* Seven Dropdown */}
        <FormControl fullWidth style={{marginBottom: '20px'}}>
          <FormLabel id="dropdown7-label" style={{textAlign: 'left', marginBottom: '10px'}}>業種おすすめ設定​</FormLabel>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox1} onChange={handleChangeOne('checkbox1')} />}
              label="上場企業"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox2} onChange={handleChangeOne('checkbox2')} />}
              label="上場グループ企業"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox3} onChange={handleChangeOne('checkbox3')} />}
              label="非上場企業"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox4} onChange={handleChangeOne('checkbox4')} />}
              label="外資系企業"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox5} onChange={handleChangeOne('checkbox5')} />}
              label="ベンチャー企業"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox6} onChange={handleChangeOne('checkbox6')} />}
              label="官公庁"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox7} onChange={handleChangeOne('checkbox7')} />}
              label="団体"
            />
          </div>
        </FormControl>
      </Grid>

      <Grid item xs={12} style={{textAlign: 'left'}}>
        {/* Seven Dropdown */}
        <FormControl fullWidth style={{marginBottom: '20px'}}>
          <FormLabel id="dropdown7-label" style={{textAlign: 'left', marginBottom: '10px'}}>従業員規模おすすめ設定</FormLabel>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} />}
              label="10名以下"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox9} onChange={handleChangeOne('checkbox9')} />}
              label="11～50名"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox10} onChange={handleChangeOne('checkbox10')} />}
              label="51～100名"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox11} onChange={handleChangeOne('checkbox11')} />}
              label="101～500名"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox12} onChange={handleChangeOne('checkbox12')} />}
              label="501～1000名"
            />
            <FormControlLabel
              control={<Checkbox checked={checkboxes.checkbox13} onChange={handleChangeOne('checkbox13')} />}
              label="1000名以上"
            />  
          </div>
        </FormControl>
      </Grid>

      <Grid item xs={12} style={{textAlign: 'left', marginBottom: '20px'}}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth error={!!secondDropdownError}>
            <FormLabel id="dropdown4-label" style={{marginBottom: '10px'}}>経理スキルおすすめ設定</FormLabel>
            <Select
              value={secondDropdownValue}
              onChange={handleSecondDropdownChange}
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
              <MenuItem value="有価証券報告書作成実務">有価証券報告書作成実務</MenuItem>
              <MenuItem value="取引先の与信管理／残高照会実務">取引先の与信管理／残高照会実務</MenuItem>
              <MenuItem value="伝票処理">伝票処理</MenuItem>
              <MenuItem value="内部監査（会計監査）">内部監査（会計監査）</MenuItem>
              <MenuItem value="国際税務">国際税務</MenuItem>
              <MenuItem value="税効果会計">税効果会計</MenuItem>
              <MenuItem value="投資運用管理（証券会社折衝）">投資運用管理（証券会社折衝）</MenuItem>
              <MenuItem value="資金繰り表作成">資金繰り表作成</MenuItem>
              <MenuItem value="小口現金管理／請求書発行">小口現金管理／請求書発行</MenuItem>
              <MenuItem value="キャッシュ／フロー計算書作成実務">キャッシュ／フロー計算書作成実務</MenuItem>
              <MenuItem value="評価制度企画／改定">評価制度企画／改定</MenuItem>
              <MenuItem value="グローバル人事制度／改定">グローバル人事制度／改定</MenuItem>
              <MenuItem value="中途採用">中途採用</MenuItem>
              <MenuItem value="アルバイト／パート採用">アルバイト／パート採用</MenuItem>
              <MenuItem value="階層別研修">階層別研修</MenuItem>
              <MenuItem value="メンタルヘルス対応／介護休暇制度">メンタルヘルス対応／介護休暇制度</MenuItem>
              <MenuItem value="海外人事（ビザ・保険手続き／海外駐在員給与計算）">海外人事（ビザ・保険手続き／海外駐在員給与計算）</MenuItem>
              <MenuItem value="人事システム導入">人事システム導入</MenuItem>
              <MenuItem value="工事人事">工事人事</MenuItem>
              <MenuItem value="株式事務（ストックオプション／持株会等）">株式事務（ストックオプション／持株会等）</MenuItem>
              <MenuItem value="資産／リース／備品管理">資産／リース／備品管理</MenuItem>
              <MenuItem value="個人情報保護／プライバシーマーク">個人情報保護／プライバシーマーク</MenuItem>
              <MenuItem value="契約書ほか各種文書のチェック／作成／管理">契約書ほか各種文書のチェック／作成／管理</MenuItem>
              <MenuItem value="総会・会社法・株式関連業務">総会・会社法・株式関連業務</MenuItem>
              <MenuItem value="公認会計士監査対応">公認会計士監査対応</MenuItem>
              <MenuItem value="開示書類作成">開示書類作成</MenuItem>
              <MenuItem value="四半期決算">四半期決算</MenuItem>
              <MenuItem value="連結決算">連結決算</MenuItem>
              <MenuItem value="管理会計">管理会計</MenuItem>
              <MenuItem value="会計システム対応">会計システム対応</MenuItem>
              <MenuItem value="連結財務諸表作成実務">連結財務諸表作成実務</MenuItem>
              <MenuItem value="予算の策定／実績の把握及び分析">予算の策定／実績の把握及び分析</MenuItem>
              <MenuItem value="株式公開準備">株式公開準備</MenuItem>
              <MenuItem value="連結納税">連結納税</MenuItem>
              <MenuItem value="移転価格">移転価格</MenuItem>
              <MenuItem value="財務戦略">財務戦略</MenuItem>
              <MenuItem value="資金調達管理（金融機関折衝）">資金調達管理（金融機関折衝）</MenuItem>
              <MenuItem value="出納管理">出納管理</MenuItem>
              <MenuItem value="売掛金／買掛金管理">売掛金／買掛金管理</MenuItem>
              <MenuItem value="外国為替取引関連">外国為替取引関連</MenuItem>
              <MenuItem value="賃金制度企画／改定">賃金制度企画／改定</MenuItem>
              <MenuItem value="人事制度運用">人事制度運用</MenuItem>
              <MenuItem value="新卒採用">新卒採用</MenuItem>
              <MenuItem value="新入社員向け研修">新入社員向け研修</MenuItem>
              <MenuItem value="労働組合対応">労働組合対応</MenuItem>
              <MenuItem value="給与計算／社会保険">給与計算／社会保険</MenuItem>
              <MenuItem value="規定／就業規則">規定／就業規則</MenuItem>
              <MenuItem value="安全衛生">安全衛生</MenuItem>
              <MenuItem value="取締役会・株主総会運営">取締役会・株主総会運営</MenuItem>
              <MenuItem value="契約書／文書管理">契約書／文書管理</MenuItem>
              <MenuItem value="ファシリティマネジメント（移転／レイアウト変更）">ファシリティマネジメント（移転／レイアウト変更）</MenuItem>
              <MenuItem value="全社プロジェクト事務局">全社プロジェクト事務局</MenuItem>
              <MenuItem value="内部監査（業務監査）">内部監査（業務監査）</MenuItem>
              <MenuItem value="契約関連業務（交渉・折衝）">契約関連業務（交渉・折衝）</MenuItem>
              <MenuItem value="契約関連業務（文書作成・チェック）">契約関連業務（文書作成・チェック）</MenuItem>
              <MenuItem value="M＆A・合併・提携 関連業務">M＆A・合併・提携 関連業務</MenuItem>
              <MenuItem value="コンプライアンス・SR推進・内部監査">コンプライアンス・SR推進・内部監査</MenuItem>
              <MenuItem value="係争・訴訟対応">係争・訴訟対応</MenuItem>
              <MenuItem value="許認可、免許等取得実務（ISO、Pマーク等）">許認可、免許等取得実務（ISO、Pマーク等）</MenuItem>
              <MenuItem value="国内特許関連実務">国内特許関連実務</MenuItem>
              <MenuItem value="国外特許関連実務">国外特許関連実務</MenuItem>
              <MenuItem value="商標・著作権関連実務">商標・著作権関連実務</MenuItem>
              <MenuItem value="係争対応">係争対応</MenuItem>
              <MenuItem value="宣伝計画">宣伝計画</MenuItem>
              <MenuItem value="広報実務">広報実務</MenuItem>
              <MenuItem value="宣伝・広報予算管理">宣伝・広報予算管理</MenuItem>
              <MenuItem value="ＩＲ">ＩＲ</MenuItem>
              <MenuItem value="内部監査（システム監査）">内部監査（システム監査）</MenuItem>
              <MenuItem value="内部監査（コンプライアンス）">内部監査（コンプライアンス）</MenuItem>
            </Select>
            {/* <FormHelperText style={{ color: 'red' }}>{dropdown4Error}</FormHelperText> */}
          </FormControl>
        </Grid>

        <Grid item xs={12} style={{textAlign: 'left'}}>
        <FormLabel id="dropdown4-label" style={{marginBottom: '10px', display: 'block'}}>経理スキルおすすめ設定</FormLabel>
        {/* Seven Dropdown */}
        <Accordion style={{marginBottom: '40px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>オプションを選んでください</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <FormControl fullWidth style={{margin: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>日次取引仕訳</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>月次決算</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>本決算</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>予算</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>拾与計算</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>社会保障</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>消费税</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>法人税他</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>監查对象決算子会社</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>監查对象決算親合社</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>連結決算</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth style={{marginBottom: '20px', padding: '0 20px'}}>
            <FormLabel id="dropdown7-label" style={{textAlign: 'left'}}>開示書類</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              // value={gender}
              // onChange={handleGenderChange}
              style={{padding: '10px 0', textAlign: 'left', display: 'block'}}>
              <FormControlLabel value="知識なし" control={<Radio />} label="知識なし" />
              <FormControlLabel value="知識あり" control={<Radio />} label="知識あり" />
              <FormControlLabel value="作業補助" control={<Radio />} label="作業補助" />
              <FormControlLabel value="担当者" control={<Radio />} label="担当者" />
              <FormControlLabel value="チェック・指導できる" control={<Radio />} label="チェック・指導できる" />
            </RadioGroup>
          </FormControl>
        </div>
        </AccordionDetails>
      </Accordion>
      </Grid>



      <Button type="submit" variant="contained" color="primary" fullWidth>変更内容を保存</Button>
    </div>
    <BottomNav />
  </Box>
  );
};

export default RecommendedJobForm;
