import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom'; 
import BottomNav from '../components/BottomNav';
import {Table, TableBody, TableCell, TableRow, TableContainer} from '@mui/material';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as MoneyIcon} from '../assets/MoneyIcon.svg';
import {ReactComponent as MapsIcon} from '../assets/MapsIcon.svg';
import {ReactComponent as BuildingIcon} from '../assets/BuildingIcon.svg';
import {ReactComponent as BagIcon} from '../assets/BagIcon.svg';
import {ReactComponent as TrashIcon} from '../assets/TrashIcon.svg';
import {ReactComponent as UserFolder} from '../assets/UserFolder.svg';
import {ReactComponent as BigBagIcon}  from '../assets/BigBagIcon.svg';
import {ReactComponent as CalendarIcon} from '../assets/CalendarIcon.svg';
import {ReactComponent as ChatIcon} from '../assets/ChatIcon.svg'; 
import {ReactComponent as Skill} from '../assets/Skill.svg';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));
  
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

export default function JobDetails() {
  const navigate = useNavigate();  // Get the history object from react-router-dom

  const tableData = [
    { id: 1, label: '01', description: '日次取引仕訳', level: 'L4' },
    { id: 2, label: '02', description: '月次決算', level: 'L3' },
    { id: 3, label: '03', description: '本決算', level: 'L2' },
    { id: 1, label: '04', description: '予算', level: 'L1' },
    { id: 2, label: '05', description: '給与計算', level: 'L2' },
    { id: 3, label: '06', description: '社会保険', level: 'L3' },
    { id: 1, label: '07', description: '消費税', level: 'L0' },
    { id: 2, label: '08', description: '法人税他', level: 'L1' },
    { id: 3, label: '09', description: '監査対象決算子会社', level: 'L0' },
    { id: 3, label: '10', description: '監査対象決算親会社', level: 'L0' },
    { id: 3, label: '11', description: '連結決算', level: 'L1' },
    { id: 3, label: '12', description: '開示書類', level: 'L0' },
    // Add more rows as needed
  ];

  const getItemBackgroundColor = (level) => {
    switch (level) {
      case 'L0':
        return '#EEEEEE'; // Red for L0
      case 'L1':
        return '#949494'; // Yellow for L1
      case 'L2':
        return '#9BC1E6'; // Green for L2
      case 'L3':
        return '#085D95'; // Blue for L3
      case 'L4':
        return '#16375A'; // Purple for L4
      default:
        return 'inherit';
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 , padding:'10px', overflow:'scroll', padding: '20px'}}>
        <Typography variant="h6" component="div" sx={{textAlign:'left', fontSize:'12px'}}> 企業からのコメント </Typography>
        <Box sx={{ flexGrow: 1 }} style={{background:'#DFD0A7', borderRadius:'5px', marginTop:'10px'}}>
        <Grid container spacing={1} sx={{paddingTop:'0px'}}> 
            <Grid item xs={1}>
            <Item sx={{textAlign:'left', display:'grid', background:'#DFD0A7', borderRadius:'5px'}}><ChatIcon style={{marginTop:'10px', marginLeft:'3px'}}/></Item>
            </Grid>
            <Grid item xs={11}>
            <Item sx={{fontSize:'12px', textAlign:'left', background: 'rgba(223, 208, 167, 0.20)', padding:'13px', fontSize:'8px' }}>【特別スカウト】渋谷/上場企業での経理マネ‐ジャー を募集しております。
今までのご経験をぜひ、弊社で活かしてみませんか？
ご応募お待ちしております。​</Item>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{borderBottom: '1px solid #EEEEEE', marginTop:'10px'}}> </Box>
          <Grid container spacing={1}>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>求人no: 1691</Item>
              </Grid>
              <Grid item xs={2}>
              <Item sx={{fontSize:'12px'}}>未読​</Item>
              </Grid>
              <Grid item xs={4}>
              <Item sx={{fontSize:'12px'}}>10-08-2023</Item>
              </Grid>
          </Grid>
          </Box>
          <Typography variant="h6" component="div" sx={{fontSize:'14px', fontWeight:'700', textAlign:'left', padding:'0px 15px 0px 15px'}}>
          【渋谷/プライム上場】SaaS/ASPのパイオニア企業での経理マネージャー/リモート有
          </Typography>
          <Box sx={{ flexGrow: 1, padding:'0px 10px 0px 15px' }}>
          <Grid container spacing={1}>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
              <MoneyIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 700万円 ~900万円 </Typography>
              </Item>
              </Grid>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', marginTop:'5px'}}> 
                <MapsIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}>東京都</Typography>​</Item>
              </Grid>
              <Grid item xs={6}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <BuildingIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 株式会社ABC </Typography>​</Item>
              </Grid>
              <Grid item xs={4} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <BagIcon /> <Typography variant="body1" sx={{fontSize:'12px', color:'#16375A', fontWeight:'500'}}> 経理マネジャー  </Typography>​​</Item>
              </Grid>
              <Grid item xs={2} sx={{paddingTop:'0px'}}>
              <Item sx={{textAlign:'left', display:'flex', gap:'5px', paddingTop:'0px'}}> 
                <TrashIcon />​</Item>
              </Grid>
          </Grid>
          </Box>
      <Card sx={{ minWidth: 275, marginBottom:'30px' }}>
        <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><UserFolder style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>基本情報​</Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>雇用形態</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>正社員​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>想定年収</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>700万円〜900万円<br /> 月給：46.6万円～60万​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>役職</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>課長（マネージャー）​</Item>
              </Grid>
                  <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}></Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京都渋谷区にある1991年に設立した企業で、IT環境の大きな変化に柔軟に対応しながら土台を構築し、この10年間で売上規模を約10倍規模の成長を実現されています。過去数年間はSaaS/ASPが主流でしたが、企業や社会が抱える課題に対してIT/IoT/AI/デジタルの面で解決策を提供する事業を展開し、また、M&A等を通じて幅広い事業ポートフォリオを築いております。
今後の事業拡大に伴い、経理部門強化の採用です。グループ全社の経理機能を担っている経理部において、経理部マネージャー（管理職）として、月次・四半期・年次含むIFRS（国際会計基準）会計関連の業務をご担当いただきます。​</Item>
              </Grid>
       
          </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><BigBagIcon style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}> 仕事について </Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>業務内容</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>・マネジメント・連結決算取りまとめ（月次・四半期）・決算短信・計算書類等関連・有価証券（四半期）報告書の作成＆チェック・各事業部の会計処理課題解決への取り組み・経営陣向けの報告資料作成・監査法人対応​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>必要資格</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>必要経験</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>連結決算（IFRS）の経験マ<br /> ネジメント経験​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>歓迎スキル</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>​</Item>
              </Grid>
          </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><CalendarIcon style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>勤務について</Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務時間</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>9:00～18:00(休憩時間 1時間00分) ※時間外勤務有 有 （平均40H/月）​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>待遇・福利厚生</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>各種社会保険完備（雇用・労災・健康・厚生年金）■通勤手当 会社規定に基づき支給 月100,000円まで■その他制度 従業員持株会制度(25%の奨励金あり)、住宅手当(条件有)​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>休日休暇</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>＜年間休日120日＞(内訳)土曜 日曜 祝日 その他(慶弔休暇、赴任休暇等)■有給休暇 入社半年経過後10日~​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>ワンポイント</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>土日祝完全休暇, 賞与あり, 駅から徒歩5分以内​</Item>
              </Grid>
          </Grid>
          </Box>
        </CardContent>
         <CardContent>       
          <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><MapsIcon style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>会社について​</Item>
              </Grid>
              
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>上場区分</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>上場企業​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>業種</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>機械・電気・自動車​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>勤務地</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>東京<br /> 東京都渋谷区 ※最寄駅：渋谷駅​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>会社概要</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>従業員数</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>10名以下​</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>社歴</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>10年以下</Item>
              </Grid>
              <Grid item xs={3} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{textAlign:'left', fontSize:'12px'}}>選考プロセス</Item>
              </Grid>
              <Grid item xs={9} sx={{borderBottom: '1px solid rgba(8, 93, 149, 0.25)'}}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>書類選考→面接（2-3回）＋適性検査 → 内定 （面接回数・選考内容に変更がある場合もあります）</Item>
              </Grid>
       
          </Grid>
          </Box>
        </CardContent>

        <CardContent>       
          <Box sx={{ flexGrow: 1, marginBottom:'100px' }}>
          <Grid container spacing={1}>
              <Grid item xs={1} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{textAlign:'left'}}><Skill style={{margin:'0 auto'}}/></Item>
              </Grid>
              <Grid item xs={11} sx={{borderBottom: '1px solid #D3B76A'}}>
              <Item sx={{fontSize:'14px', textAlign:'left', color: '#16375A', fontWeight:'500'}}>希望情報</Item>
              </Grid>
              
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#EEEEEE'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>LO:知識なし</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#949494'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L1:知識あり​</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#9BC1E6'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L2:サポートがあれば実施できるレベル（もしくはソフトまかせ）​</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#085D95'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L3:独力で実施できるレベル（もしくは対応・判断・作成・計算できる）​</Item>
              </Grid>
              <Grid item xs={1}>
              <Item className='skill-level-indicator' sx={{textAlign:'left', fontSize:'12px'}}><span style={{background: '#16375A'}}></span></Item>
              </Grid>
              <Grid item xs={11}>
              <Item sx={{fontSize:'12px', textAlign:'left'}}>L4:他者を指導できるレベル（もしくは議論・交渉できる）</Item>
              </Grid>

              <Grid item xs={12}>
                <Item sx={{border: '1px solid #EEEEEE', height: '100%', padding: '0'}}>
                  <TableContainer component={Paper} sx={{boxShadow: 'none', height: '100%'}}>
                    <Table>
                      <TableBody>
                        {tableData.map(row => (
                          <TableRow key={row.id} >
                            <TableCell>{row.label}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell style={{width: '10%', backgroundColor: getItemBackgroundColor(row.level), color: row.level === 'L0' ? '#16375A' : '#fff'}}>{row.level}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Item>
              </Grid>
          </Grid>
          </Box>
        </CardContent>


        <Box sx={{ flexGrow: 1 }}>
        {/* <Grid container spacing={1} sx={{marginBottom:'30px'}}>
            <Grid item xs={6}>
              <Button component={Link} to="#" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px', fontSize:'12px', padding:'7px 0px'}}> 内定を受諾する </Button>
            </Grid>
            <Grid item xs={6}>
              <Button component={Link} to="/recruitment" variant="contained" color="primary" sx={{width:'90%', marginBottom:'20px'}}> 内定辞退 </Button>
            </Grid>
        </Grid> */}
        <Grid container spacing={1} style={{position: 'fixed', bottom: '0', left: '0', marginBottom: '56px', padding: '15px', background: 'rgb(255 255 255 / 87%)'}}>
          <Grid item xs={6}>
            <Button component={Link} to="#" variant="contained" color="secondary" sx={{fontSize:'12px', width: '100%'}}> 内定を受諾する </Button>
          </Grid>
          <Grid item xs={6}>
            <Button component={Link} to="#" variant="outlined" color="primary" sx={{fontSize: '12px', width: '100%'}}>内定辞退 </Button>
          </Grid>
        </Grid>
        </Box>
      </Card>
      <BottomNav />
  </>
  );
}