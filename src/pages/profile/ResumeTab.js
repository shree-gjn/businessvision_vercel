import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

export default function ResumeTab() {
  return (
    <div>

      <Typography variant="h6" component="h6" sx={{marginBottom:'10px'}}> 履歴書 </Typography>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 氏名 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> フリガナ </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 生年月日 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 性別 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 現住所 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 電話番号 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 携帯電話番号 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> メールアドレス </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 連絡先 （現住所以外に連絡を希望する場合のみ記入） </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 学校  1 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 入学年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 卒業年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 学校名 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 学校  2 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 入学年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 卒業年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 学校名 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 職歴  1 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 退社年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 会社名 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 学校  2 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 退社年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 会社名 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 入社年・月 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 通勤時間 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 最寄り駅 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 扶養家族（配偶者を除く） </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 配偶者 有・無 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 配偶者の扶養義務 有・無 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 項目 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>

      <Typography variant="h6" component="h6" sx={{marginTop:'10px', marginBottom:'10px'}}> 職務経歴書 </Typography>

      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 氏名 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 職務要約 </Typography> <Divider />
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 所属期間 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 会社名 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 事業内容 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 資本金 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 売上高 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 従業員数 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 企業カテゴリ </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 業務内容 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 所属部門・ポジション </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 部門・業務別での所属期間 </Typography> <Divider />
          <Typography sx={{margin:'6px'}}> 所属部門人数 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 活かせる経験・知識・技術 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
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
          <Typography sx={{margin:'6px'}}> 項目 </Typography> 
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>本人希望記入欄（給与・職種・勤務時間・その他についての希望などがあれば記入）</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
