import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {ReactComponent as PencilEdit} from '../../assets/PencilEdit.svg';

export default function ResumeTab() {
  return (
    <div style={{background: 'rgb(250, 250, 250)'}}>
      <Grid container>
        <Grid Item xs={12}>
          <Typography variant="h6" component="h6" sx={{marginBottom:'10px'}}> 履歴書 </Typography>
        </Grid>
        <Grid Item xs={12}>
          <div style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '60px', display: 'flex', gap: '15px', marginLeft: 'auto', marginBottom: '10px'}}>
            <span>
              <PencilEdit />
            </span>
            <Typography variant='paragraph'>編集</Typography>
          </div>
        </Grid>
      </Grid>
      <Accordion sx={{boxShadow: 'none', background: '#fff', border: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>基本情報</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 氏名 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> フリガナ </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 生年月日 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 性別 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 現住所 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 電話番号 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 携帯電話番号 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> メールアドレス </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 連絡先 （現住所以外に連絡を希望する場合のみ記入） </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>学歴</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 学校  1 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 入学年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 卒業年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 学校名 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 学校  2 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 入学年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 卒業年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 学校名 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>職歴</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 職歴  1 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 退社年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 会社名 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 学校  2 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 退社年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 会社名 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>賞罰</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>免許・資格</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>その他情報</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 通勤時間 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 最寄り駅 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 扶養家族（配偶者を除く） </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 配偶者 有・無 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 配偶者の扶養義務 有・無 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>趣味特技</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>志望の動機・自己PRなど</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>本人希望記入欄（給与・職種・勤務時間・その他についての希望などがあれば記入）</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      

      <Grid container style={{marginTop: '50px'}}>
        <Grid Item xs={12}>
          <Typography variant="h6" component="h6" sx={{marginBottom:'10px'}}> 職務経歴書 </Typography>
        </Grid>
        <Grid Item xs={12}>
          <div style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '60px', display: 'flex', gap: '15px', marginLeft: 'auto', marginBottom: '10px'}}>
            <span>
              <PencilEdit />
            </span>
            <Typography variant='paragraph'>編集</Typography>
          </div>
        </Grid>
      </Grid>
      {/* <Typography variant="h6" component="h6" sx={{marginTop:'10px', marginBottom:'10px'}}> 職務経歴書 </Typography> */}

      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>氏名</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 氏名 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>職務要約</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 職務要約 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>職務経歴</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
        <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 所属期間 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 会社名 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 事業内容 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 資本金 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 売上高 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 従業員数 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 企業カテゴリ </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 業務内容 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 所属部門・ポジション </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 部門・業務別での所属期間 </Typography> <Divider />
          <Typography sx={{margin: '10px 15px'}}> 所属部門人数 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>活かせる経験・知識・技術</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
         <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 活かせる経験・知識・技術 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>資格</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
         <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>PCスキル</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
         <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>使用可能会計ツール</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
         <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>自己PR</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
         <div>
          <Divider />
          <Typography sx={{margin: '10px 15px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
