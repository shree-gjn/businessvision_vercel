import React, { useState, useEffect} from 'react';
import {
  Box,
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
import AccordianBasicInfo from './registration/components/AccordianBasicInfo';
import CustomDatePicker from './registration/components/DatePicker';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import {createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#16375A',
    },
    secondary: {
      main: '#877151',
    },
    grey: {
      main: '#949494', // Change to your desired color
    },
    text: {
      grey: '#ffffff', // Change to your desired text color
    },
  },
});


const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft:'15px', 
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
}));

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


const EditMaskingResume = () => {
  const [formData, setFormData] = useState({
    candidate_gender: '',
    dob: '',
    prefecture_code: '',
    final_educational: '',
    job_changed_no: '',
    current_employment_status: '',
    job_change_duration: '',
    current_annual_income: '',
    type_of_work_exp_overall: '',
    type_of_industries_exp_overall: [],
    accounting_exp_total_year: '',
  });


  const [expanded, setExpanded] = useState(false);
  const [errors, setErrors] = useState({});
  const [locationStreetOptions, setLocationStreetOptions] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const generateValues = (start, end, step) => {
    const values = [];
    for (let i = start; i <= end; i += step) {
      values.push(`${i}万円以上`);
    }
    return values;
  };

  useEffect(() => {
    if (formData.desired_location_city) {
      setLocationStreetOptions(locationOptions[formData.desired_location_city]);
      setFormData((prevData) => ({ ...prevData, desired_location_street: '' }));
    }
  }, [formData.desired_location_city]);

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

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };


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

    if (!formData.job_position) {
      newErrors.job_position = 'Please select your current position';
    }

    if (!formData.type_of_work_exp_current) {
      newErrors.type_of_work_exp_current = 'Please select your current company';
    }

    if (!formData.type_of_industries_exp_current) {
      newErrors.type_of_industries_exp_current = 'Please select your current industry';
    }

    if (!formData.management_exp) {
      newErrors.management_exp = 'Please select your management experience';
    }

    if (!formData.exp_accounting_field) {
      newErrors.exp_accounting_field = 'Please select your accounting experience';
    }

    if (!formData.company_categories) {
      newErrors.company_categories = 'Please select your company category';
    }

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
    
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>マスキング履歴書設定</p>
      </div>
      <Box sx={{padding: '24px'}}>
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
                  <FormControlLabel value="性別不記載を希望" control={<Radio />} label="性別不記載を希望" />
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
            <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.job_position)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="demo-radio-buttons-group-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社での役職を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.job_position || ''}
              name="job_position"
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.job_position)}
              helperText={errors.job_position}
            > 
              {CurrentPosition.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.job_position && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.job_position}</FormHelperText> }
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.type_of_work_exp_current)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="second-dropdown-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社での経験職種を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.type_of_work_exp_current || ''}
              name='type_of_work_exp_current'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.type_of_work_exp_current)}
              helperText={errors.type_of_work_exp_current}
            > 
              {CurrentcompanyExperience.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.type_of_work_exp_current && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.type_of_work_exp_current}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.type_of_industries_exp_current)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="third-dropdown-label" sx={{marginBottom: '10px'}}>現在（直近）の在籍会社の業種を教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.type_of_industries_exp_current || ''}
              name='type_of_industries_exp_current'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.type_of_industries_exp_current)}
              helperText={errors.type_of_industries_exp_current}
            >
              {CurrentcompanyIndustry.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.type_of_industries_exp_current && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.type_of_industries_exp_current}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" error={Boolean(errors.management_exp)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' component="legend">マネジメント経験を教えてください<span className='required_label'>必須</span></FormLabel>
            <RadioGroup
              row
              aria-label="newRadio"
              name="management_exp"
              value={formData.management_exp}
              onChange={handleChange}
              error={Boolean(errors.management_exp)}
              helperText={errors.management_exp}
            >
              <FormControlLabel value="あり" control={<Radio />} label="あり" />
              <FormControlLabel value="なし" control={<Radio />} label="なし" />
            </RadioGroup>
            {errors.management_exp && <FormHelperText style={{ color: 'red', margin: "10px 0 0"}}>{errors.management_exp}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {/* Fourth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.exp_accounting_field)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown4-label" sx={{marginBottom: '10px'}}>経理での経験業務を選択してください<span className='required_label'>必須</span>​</FormLabel>
            <Select
              value={formData.exp_accounting_field || ''}
              name='exp_accounting_field'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.exp_accounting_field)}
              helperText={errors.exp_accounting_field}
            >
              {AccountingExperience.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.exp_accounting_field && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.exp_accounting_field}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Fifth Dropdown */}
          <FormControl fullWidth error={Boolean(errors.company_categories)} sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown5-label" sx={{marginBottom: '10px'}}>今まで在籍したことのある会社のカテゴリを教えてください<span className='required_label'>必須</span></FormLabel>
            <Select
              value={formData.company_categories || ''}
              name='company_categories'
              onChange={handleChange}
              displayEmpty
              error={Boolean(errors.company_categories)}
              helperText={errors.company_categories}
            >
              {CompanypreviouslyWorked.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors.company_categories && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.company_categories}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Sixth Dropdown */}
          <FormControl fullWidth sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown6-label" sx={{marginBottom: '10px'}}>保有資格を教えてください</FormLabel>
            <Select
              value={formData.qualification_certificate || ''}
              name='qualification_certificate'
              onChange={handleChange}
              displayEmpty
            >
              {CompanypreviouslyHold.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {/* <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{qualificationHoldError}</FormHelperText> */}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* Seven Dropdown */}
          <FormControl fullWidth sx={{marginBottom: '10px'}}>
            <FormLabel className='formfield-label' id="dropdown7-label" sx={{marginBottom: '10px'}}>使用可能会計ソフトを教えてください​</FormLabel>
            <Select
              value={formData.accounting_software || ''}
              name='accounting_software'
              onChange={handleChange}
              displayEmpty
            >
             {AccountingSoftware.map((option, index) => (
                <MenuItem key={index} value={option.value} disabled={option.disabled}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {/* <FormHelperText style={{ color: 'red' }}>{accountingSoftwareError}</FormHelperText> */}
          </FormControl>
        </Grid>

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

          
          
          <Grid container>
            <Grid item xs={6} style={{ margin: '10px auto', display: 'grid', paddingTop:'30px', marginBottom: '100px'}}>
              <Button type="submit" variant="contained" color="primary">
                提出する
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default EditMaskingResume;
