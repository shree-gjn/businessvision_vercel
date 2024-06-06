import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {ReactComponent as PencilEdit} from '../../assets/PencilEdit.svg';
import {styled} from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Box, display } from '@mui/system';
import {ReactComponent as Cancel} from '../../assets/Cancel.svg';
import { TextField} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {ReactComponent as ApplicationReqOutline} from '../../assets/ApplicationReqOutline.svg';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ResumeTab() {
  const [open, setOpen] = React.useState(false);
  // const [selectedFile, setSelectedFile] = React.useState(null);
  const [resume, setResume] = useState([]);
  const [cvs, setCvs] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const [selectedCv, setSelectedCv] = useState(null);

  // const handleResumeChange = (event, setSelectedFile) => {
  //   setResume(event.target.files[0]);
  // };

  // const handleCvChange = (event) => {
  //   setCurriculumvitae(event.target.files[0]);
  // };

  // const handleResumeSubmit = () => {
  //   if (resume) {
  //     console.log('Selected file:', resume);
  //     // Add your file upload logic here
  //   }
  // };

  // const handleCvSubmit = () => {
  //   if (curriculumvitae) {
  //     console.log('Selected file:', curriculumvitae);
  //     // Add your file upload logic here
  //   }
  // };

  const handleFileChange = (event, setSelectedFile) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = (selectedFile, setType, setSelectedFile) => {
    if (selectedFile) {
      setType(prev => [...prev, selectedFile]);
      setSelectedFile(null); // Clear the selected file
    }
  };

  const handleDeleteFile = (index, setType) => {
    setType(prev => prev.filter((_, i) => i !== index));
  };

    // Add a state to store the uploaded file
  const [uploadedFile, setUploadedFile] = React.useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleFileSelect = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  //   setUploadedFile(file);
  // };
  
  const handleOpenFileModal = () => {
    setOpen(true);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none', 
  }));

  return (
    <div style={{background: 'rgb(250, 250, 250)'}}>
      {/* <Grid container>
        <Grid Item xs={12}>
          <Typography variant="h6" component="h6" sx={{marginBottom:'10px'}}> 履歴書 </Typography>
        </Grid>
        <Grid Item xs={12}>
          <div style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '80px', display: 'flex', gap: '15px', marginLeft: 'auto', marginBottom: '10px'}}>
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
      </Accordion> */}
      

      {/* <Grid container style={{marginTop: '50px'}}>
        <Grid Item xs={12}>
          <Typography variant="h6" component="h6" sx={{marginBottom:'10px'}}> 職務経歴書 </Typography>
        </Grid>
        <Grid Item xs={6} style={{paddingRight: '10px'}}>
          <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '80px', display: 'flex', gap: '15px', marginLeft: 'auto', marginBottom: '10px'}} component={Link} to="/workhistory">
            <span>
              <PencilEdit />
            </span>
            <Typography variant='paragraph'>編集</Typography>
          </Item>
        </Grid>
        <Grid Item xs={6} onClick={handleOpen}>
          <div style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', display: 'flex', gap: '15px', marginLeft: 'auto', marginBottom: '10px', height: '25px'}}>
            <span>
              <UploadFileIcon />
            </span>
            <Typography variant='paragraph'>アップロード</Typography>
          </div>
        </Grid>
      </Grid> */}

      {/* <Accordion sx={{boxShadow: 'none', background: '#fff'}}>
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
      </Accordion> */}

      {/* Modal for file selection */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: '15px',
          border: 'none',
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{marginBottom: '10px'}}>
            Select File
          </Typography>
          <input type="file" onChange={handleFileSelect} />
          <div style={{position: 'absolute', top: '0', right: '0', padding: '10px'}}>
            <Cancel onClick={handleClose}  />
          </div>
        </Box>
      </Modal> */}

      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <Typography>
                履歴書
              </Typography>
            </Item>
            <Item sx={{
              height: 170,
              border: '2px dashed #ccc',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              gap: '10px',
              marginBottom: '10px'
            }}
            component="label">
              <CloudUploadIcon sx={{ fontSize: 48, color: '#D6D6D6'}} />
              <Typography variant="body1" sx={{color: '#16375A'}}>
                {selectedResume ? selectedResume.name : 'クリックしてファイルを選択します'}
              </Typography>
              <input type="file" hidden onChange={(e) => handleFileChange(e, setSelectedResume)} />
              {selectedResume ? (
             <Button
             variant="contained"
             onClick={() => handleUpload(selectedResume, setResume, setSelectedResume)}
             sx={{ marginBottom: '10px' }}
           >
             ファイルをアップロードする
           </Button>
         ) : (
           <Button
             variant="contained"
             disabled // Button is disabled if no file is selected
             sx={{ marginBottom: '10px' }}
           >
             ファイルをアップロードする
           </Button>
            )}
            </Item>
          </Grid>
          <Grid xs={12} sx={{marginBottom: '30px'}}>
            <Item>
              <Typography sx={{textAlign: 'left'}}>アップロードされた履歴書</Typography>
            </Item>
            {resume.map((resume, index) => (
              <Item
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #EEEEEE',
                  padding: '15px 0px',
                  borderRadius: 'none',
                  boxShadow: 'none'
                }}
              >
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A' }}>
                  <ApplicationReqOutline />{resume.name}
                </Typography>
                <DeleteIcon onClick={() => handleDeleteFile(index, setResume)} />
              </Item>
            ))}
            {/* <Item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', padding: '15px 0px', borderRadius: 'none', boxShadow: 'none'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A'}}><ApplicationReqOutline />保存済み履歴書1</Typography>
              <DeleteIcon />
            </Item>
            <Item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', padding: '15px 0px', borderRadius: 'none', boxShadow: 'none'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A'}}><ApplicationReqOutline />保存済み履歴書2</Typography>
              <DeleteIcon />
            </Item>
            <Item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', padding: '15px 0px', borderRadius: 'none', boxShadow: 'none'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A'}}><ApplicationReqOutline />保存済み履歴書3</Typography>
              <DeleteIcon />
            </Item> */}
          </Grid>

          <Grid item xs={12}>
            <Item>
              <Typography>
                職務経歴書
              </Typography>
            </Item>
            <Item sx={{
              height: 170,
              border: '2px dashed #ccc',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              gap: '10px',
              marginBottom: '10px'
            }}
            component="label">
              <CloudUploadIcon sx={{ fontSize: 48, color: '#D6D6D6'}} />
              <Typography variant="body1" sx={{color: '#16375A'}}>
                {selectedCv ? selectedCv.name : 'クリックしてファイルを選択します'}
              </Typography>
              <input type="file" hidden onChange={(e) => handleFileChange(e, setSelectedCv)} />
              {selectedCv ? (
               <Button
               variant="contained"
               onClick={() => handleUpload(selectedCv, setCvs, setSelectedCv)}
               sx={{ marginBottom: '10px' }}
             >
               ファイルをアップロードする
             </Button>
           ) : (
             <Button
               variant="contained"
               disabled // Button is disabled if no file is selected
               sx={{ marginBottom: '10px' }}
             >
               ファイルをアップロードする
             </Button>
            )}
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item>
              <Typography sx={{textAlign: 'left'}}>アップロードされた職歴プロフィール</Typography>
            </Item>
            {cvs.map((cv, index) => (
              <Item
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #EEEEEE',
                  padding: '15px 0px',
                  borderRadius: 'none',
                  boxShadow: 'none',
                  textAlign: 'left',
                }}
              >
                <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A' }}>
                  <ApplicationReqOutline />{cv.name}
                </Typography>
                <DeleteIcon onClick={() => handleDeleteFile(index, setCvs)} />
              </Item>
            ))}
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}
