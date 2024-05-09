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

const CurrentPosition = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: 'CFO（役員）', label: 'CFO（役員）' },
  { value: '部長', label: '部長' },
  { value: '課長（マネージャー）', label: '課長（マネージャー）' },
  { value: '係長（マネージャー候補）', label: '係長（マネージャー候補）' },
  { value: '主任（リーダー）', label: '主任（リーダー）' },
  { value: '担当（スタッフ）', label: '担当（スタッフ）' },
  { value: '役職なし', label: '役職なし' },
  { value: '顧問', label: '顧問' },
];

const CurrentcompanyExperience = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '管理部門系全て', label: '管理部門系全て' },
  { value: '経理', label: '経理' },
  { value: '財務・コントローラー', label: '財務・コントローラー' },
  { value: '会計・税務', label: '会計・税務' },
  { value: '内部監査', label: '内部監査' },
  { value: '広報・IR', label: '広報・IR' },
  { value: '管理部長', label: '管理部長' },
  { value: 'CFO（役員）', label: 'CFO（役員）' },
  { value: '総務', label: '総務' },
  { value: '人事（採用・労務・教育など）', label: '人事（採用・労務・教育など）' },
  { value: '人事制度・企画', label: '人事制度・企画' },
  { value: '法務・コンプライアンス', label: '法務・コンプライアンス' },
  { value: '特許・知的財産関連', label: '特許・知的財産関連' },
  { value: 'その他', label: 'その他' }
];


const CurrentcompanyIndustry = [
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
  { value: 'その他（インフラ・教育・官公庁など）', label: 'その他（インフラ・教育・官公庁など）' },
];

const AccountingExperience = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '税務申告書作成実務', label: '税務申告書作成実務' },
  { value: 'アニュアルレポート作成業務', label: 'アニュアルレポート作成業務' },
  { value: '年次決算', label: '年次決算' },
  { value: '月次決算', label: '月次決算' },
  { value: '原価計算実務', label: '原価計算実務' },
  { value: '固定資産管理', label: '固定資産管理' },
  { value: '有価証券報告書作成実務', label: '有価証券報告書作成実務' },
  { value: '取引先の与信管理／残高照会実務', label: '取引先の与信管理／残高照会実務' },
  { value: '伝票処理', label: '伝票処理' },
  { value: '内部監査（会計監査）', label: '内部監査（会計監査）' },
  { value: '国際税務', label: '国際税務' },
  { value: '税効果会計', label: '税効果会計' },
  { value: '投資運用管理（証券会社折衝）', label: '投資運用管理（証券会社折衝）' },
  { value: '資金繰り表作成', label: '資金繰り表作成' },
  { value: '小口現金管理／請求書発行', label: '小口現金管理／請求書発行' },
  { value: 'キャッシュ／フロー計算書作成実務', label: 'キャッシュ／フロー計算書作成実務' },
  { value: '評価制度企画／改定', label: '評価制度企画／改定' },
  { value: 'グローバル人事制度／改定', label: 'グローバル人事制度／改定' },
  { value: '中途採用', label: '中途採用' },
  { value: 'アルバイト／パート採用', label: 'アルバイト／パート採用' },
  { value: '階層別研修', label: '階層別研修' },
  { value: 'メンタルヘルス対応／介護休暇制度', label: 'メンタルヘルス対応／介護休暇制度' },
  { value: '海外人事（ビザ・保険手続き／海外駐在員給与計算）', label: '海外人事（ビザ・保険手続き／海外駐在員給与計算）' },
  { value: '人事システム導入', label: '人事システム導入' },
  { value: '工事人事', label: '工事人事' },
  { value: '株式事務（ストックオプション／持株会等）', label: '株式事務（ストックオプション／持株会等）' },
  { value: '資産／リース／備品管理', label: '資産／リース／備品管理' },
  { value: '個人情報保護／プライバシーマーク', label: '個人情報保護／プライバシーマーク' },
  { value: '契約書ほか各種文書のチェック／作成／管理', label: '契約書ほか各種文書のチェック／作成／管理' },
  { value: '総会・会社法・株式関連業務', label: '総会・会社法・株式関連業務' },
  { value: '公認会計士監査対応', label: '公認会計士監査対応' },
  { value: '開示書類作成', label: '開示書類作成' },
  { value: '四半期決算', label: '四半期決算' },
  { value: '連結決算', label: '連結決算' },
  { value: '管理会計', label: '管理会計' },
  { value: '会計システム対応', label: '会計システム対応' },
  { value: '連結財務諸表作成実務', label: '連結財務諸表作成実務' },
  { value: '予算の策定／実績の把握及び分析', label: '予算の策定／実績の把握及び分析' },
  { value: '株式公開準備', label: '株式公開準備' },
  { value: '連結納税', label: '連結納税' },
  { value: '移転価格', label: '移転価格' },
  { value: '財務戦略', label: '財務戦略' },
  { value: '資金調達管理（金融機関折衝）', label: '資金調達管理（金融機関折衝）' },
  { value: '出納管理', label: '出納管理' },
  { value: '売掛金／買掛金管理', label: '売掛金／買掛金管理' },
  { value: '外国為替取引関連', label: '外国為替取引関連' },
  { value: '賃金制度企画／改定', label: '賃金制度企画／改定' },
  { value: '人事制度運用', label: '人事制度運用' },
  { value: '新卒採用', label: '新卒採用' },
  { value: '新入社員向け研修', label: '新入社員向け研修' },
  { value: '労働組合対応', label: '労働組合対応' },
  { value: '給与計算／社会保険', label: '給与計算／社会保険' },
  { value: '規定／就業規則', label: '規定／就業規則' },
  { value: '安全衛生', label: '安全衛生' },
  { value: '取締役会・株主総会運営', label: '取締役会・株主総会運営' },
  { value: '契約書／文書管理', label: '契約書／文書管理' },
  { value: 'ファシリティマネジメント（移転／レイアウト変更）', label: 'ファシリティマネジメント（移転／レイアウト変更）' },
  { value: '全社プロジェクト事務局', label: '全社プロジェクト事務局' },
  { value: '内部監査（業務監査）', label: '内部監査（業務監査）' },
  { value: '契約関連業務（交渉・折衝）', label: '契約関連業務（交渉・折衝）' },
  { value: '契約関連業務（文書作成・チェック）', label: '契約関連業務（文書作成・チェック）' },
  { value: 'M＆A・合併・提携 関連業務', label: 'M＆A・合併・提携 関連業務' },
  { value: 'コンプライアンス・SR推進・内部監査', label: 'コンプライアンス・SR推進・内部監査' },
  { value: '係争・訴訟対応', label: '係争・訴訟対応' },
  { value: '許認可、免許等取得実務（ISO、Pマーク等）', label: '許認可、免許等取得実務（ISO、Pマーク等）' },
  { value: '国内特許関連実務', label: '国内特許関連実務' },
  { value: '国外特許関連実務', label: '国外特許関連実務' },
  { value: '商標・著作権関連実務', label: '商標・著作権関連実務' },
  { value: '係争対応', label: '係争対応' },
  { value: '宣伝計画', label: '宣伝計画' },
  { value: '広報実務', label: '広報実務' },
  { value: '宣伝・広報予算管理', label: '宣伝・広報予算管理' },
  { value: 'ＩＲ', label: 'ＩＲ' },
  { value: '内部監査（システム監査）', label: '内部監査（システム監査）' },
  { value: '内部監査（コンプライアンス）', label: '内部監査（コンプライアンス）' },
];

const CompanypreviouslyWorked = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '上場企業​', label: '上場企業​' },
  { value: '上場グループ企業​', label: '上場グループ企業​' },
  { value: '非上場企業​', label: '非上場企業​' },
  { value: '外資系企業​', label: '外資系企業​' },
  { value: 'ベンチャー企業​', label: 'ベンチャー企業​' },
  { value: '官公庁​', label: '官公庁​' },
  { value: '団体​​', label: '団体​​' }
];

const CompanypreviouslyHold = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: '公認会計士', label: '公認会計士' },
  { value: 'CPA（米国公認会計士）', label: 'CPA（米国公認会計士）' },
  { value: '税理士​', label: '税理士​' },
  { value: '日商簿記検定1級​', label: '日商簿記検定1級​' },
  { value: '日商簿記検定2級​', label: '日商簿記検定2級​' },
  { value: '日商簿記検定3級', label: '日商簿記検定3級' },
  { value: '社会保険労務士', label: '社会保険労務士' }
];

const AccountingSoftware = [
  { value: '', label: 'オプションを選んでください', disabled: true },
  { value: 'MFクラウド会計', label: 'MFクラウド会計' },
  { value: 'freee', label: 'freee' },
  { value: 'MJS', label: 'MJS' },
  { value: 'TKC', label: 'TKC' },
  { value: 'JDL', label: 'JDL' },
  { value: 'ICS', label: 'ICS' },
  { value: '財務応援', label: '財務応援' },
  { value: '弥生会計', label: '弥生会計' },
  { value: '勘定奉行', label: '勘定奉行' },
  { value: 'PCA会計', label: 'PCA会計' },
  { value: 'SAP', label: 'SAP' },
  { value: 'ERP', label: 'ERP' },
  { value: 'Excel', label: 'Excel' },
  { value: 'Access', label: 'Access' }
];


const CurrentInfo = ({ formData, setFormData, handleNext, handleBack}) => {
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

  const handleBackClick = () => {
    handleBack(); // Call handleBack function passed as prop
  };

  return (
    <div>
      <h1>現職（直近）情報</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ textAlign: 'left', marginTop: '10px' }}>
        <Grid item xs={12}>
          <FormControl fullWidth required error={!!selectedOptionError}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社での役職を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={selectedOption}
              onChange={handleSelectChange}
              displayEmpty
            > 
              {CurrentPosition.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{selectedOptionError}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth required error={!!secondDropdownError}>
            <FormLabel id="second-dropdown-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社での経験職種を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={secondDropdownValue}
              onChange={handleSecondDropdownChange}
              displayEmpty
            > 
              {CurrentcompanyExperience.map((option, index) => (
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
            <FormLabel id="third-dropdown-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社の業種を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={thirdDropdownValue}
              onChange={handleThirdDropdownChange}
              displayEmpty
            >
              {CurrentcompanyIndustry.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{thirdDropdownError}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" required error={!!newRadioError}>
            <FormLabel component="legend">マネジメント経験を教えてください<span className='required_label'>必須</span></FormLabel>
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
            <FormLabel id="dropdown4-label" sx={{marginBottom: '10px'}}>経理での経験業務を選択してください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={dropdown4Value}
              onChange={handleDropdown4Change}
              displayEmpty
            >
              {AccountingExperience.map((option, index) => (
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
            <FormLabel id="dropdown5-label" sx={{marginBottom: '10px'}}>今まで在籍したことのある会社の
カテゴリを教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={dropdown5Value}
              onChange={handleDropdown5Change}
              displayEmpty
            >
              {CompanypreviouslyWorked.map((option, index) => (
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
            <FormLabel id="dropdown6-label" sx={{marginBottom: '10px'}}>保有資格を教えてください</FormLabel>
            <Select
              value={dropdown6Value}
              onChange={handleDropdown6Change}
              displayEmpty
            >
              {CompanypreviouslyHold.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown6Error}</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Seven Dropdown */}
          <FormControl fullWidth required error={!!dropdown7Error}>
            <FormLabel id="dropdown7-label" sx={{marginBottom: '10px'}}>使用可能会計ソフトを教えてください​</FormLabel>
            <Select
              value={dropdown7Value}
              onChange={handleDropdown7Change}
              displayEmpty
            >
             {AccountingSoftware.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>{dropdown7Error}</FormHelperText>
          </FormControl>
        </Grid>
        </Grid>
        {/* <Grid container>
          <Grid item xs={6} style={{ margin: '10px auto', display: 'grid', paddingTop:'20px' }}>

            <Button onClick={handleBackClick} variant="outlined">
              戻る
            </Button>
          </Grid>
          <Grid item xs={6} style={{ margin: '10px auto', display: 'grid', paddingTop:'20px' }}>
            <Button type="submit" variant="contained" color="primary">
            希望条件の入力へ
            </Button>
          </Grid>
        </Grid> */}
        <Grid container>
          <Grid item xs={12} style={{ margin: '10px auto 100px', display: 'flex', paddingTop:'20px', gap: '10px', justifyContent: 'center'}}>
            <Button onClick={handleBackClick} variant="outlined">
              戻る
            </Button>
            <Button type="submit" variant="contained" color="primary">
            希望条件の入力へ
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CurrentInfo;
