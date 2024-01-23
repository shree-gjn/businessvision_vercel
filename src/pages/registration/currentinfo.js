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
              <MenuItem value="担当（スタッフ）">担当（スタッフ）</MenuItem>
              <MenuItem value="役職なし">役職なし</MenuItem>
              <MenuItem value="顧問">顧問</MenuItem>
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
              <MenuItem value="内部監査">内部監査</MenuItem>
              <MenuItem value="広報・IR">広報・IR</MenuItem>
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
              <MenuItem value="日商簿記検定3級">日商簿記検定3級</MenuItem>
              <MenuItem value="社会保険労務士">社会保険労務士</MenuItem>
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
              <MenuItem value="財務応援">財務応援</MenuItem>
              <MenuItem value="弥生会計">弥生会計</MenuItem>
              <MenuItem value="勘定奉行">勘定奉行</MenuItem>
              <MenuItem value="PCA会計">PCA会計</MenuItem>
              <MenuItem value="SAP">SAP</MenuItem>
              <MenuItem value="ERP">ERP</MenuItem>
              <MenuItem value="Excel">Excel</MenuItem>
              <MenuItem value="Access">Access</MenuItem>
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
