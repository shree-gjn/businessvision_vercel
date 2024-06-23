import React, { useState, useEffect} from 'react';
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  InputLabel,
  Collapse,
} from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Link, useNavigate, useLocation} from 'react-router-dom'; 
import BottomNav from '../components/BottomNav';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
import {ReactComponent as Cancel} from '../assets/Cancel.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ReactComponent as ApplicationRequirement} from '../assets/ApplicationRequirement.svg';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

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
    paddingLeft:'15px', 
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  }));

export default function NormalApplicationConfirm() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [resumeList, setResumeList] = useState([]);
  const [workHistoryList, setWorkHistoryList] = useState([]);
  const location = useLocation();
  // const { id, message } = location.state || { id: '', message: '' };
  const { id, message, name, furigana, city, emailaddress, resumeupload, workhistoryupload, selectedResumeId, selectedWorkHistoryId } = location.state || {};

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleDelete = () => {
    // Implement the logic to delete the item
    // You can use an API call or other methods to delete the item
    // After deletion, you may want to navigate to a different page or update the UI
    // For now, let's just close the modal
    handleCloseDeleteModal();
  };
  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const data = [
    { id: 1, column1: '性別', column2: '男' },
    { id: 2, column1: '生年', column2: '38歳' },
    { id: 3, column1: '住まいの都道府県', column2: '東京都' },
    { id: 4, column1: '最終学歴', column2: '大学卒' },
    { id: 5, column1: '転職回数', column2: '3回' },
    { id: 6, column1: '現在の就業状況', column2: '就業している' },
    { id: 7, column1: '転職希望時期', column2: '3ヵ月以内' },
    { id: 8, column1: '経理の経験年数', column2: '6年以上' },
    { id: 9, column1: 'マスキングブ', column2: '株式会社ビジネスビジョン​' },
    { id: 10, column1: 'ロック会社名', column2: '株式会社ビクウィース' },
    { id: 11, column1: '配偶者', column2: 'あり' },
    { id: 12, column1: '扶養人数', column2: '2名' },
    { id: 13, column1: '語学スキル', column2: '英語：初級（日常会話は行えるが、複雑な会話は難しい)' },
    { id: 14, column1: '役職', column2: '課長クラス' },
    { id: 15, column1: '経験職種', column2: '経理' },
    { id: 16, column1: '業種', column2: 'IT​' },
    { id: 17, column1: '', column2: '商社（食品）' },
    { id: 18, column1: 'マネジメント経験', column2: 'あり' },
    { id: 19, column1: '経理の経験業務', column2: '' },
    { id: 20, column1: '企業カテゴリ', column2: '上場グループ' },
    { id: 21, column1: '（過去も含め）', column2: '上場グループ企業' },
    { id: 22, column1: '保有資格', column2: '日商簿記検定2級' },
    { id: 23, column1: '使用可能会計ソフト', column2: '勘定奉行​' },
    { id: 24, column1: '', column2: '弥生会計' },
    { id: 25, column1: '希望年収', column2: '500万円以上' },
    { id: 26, column1: '希望職種', column2: '経理' },
    { id: 27, column1: '希望役職', column2: '係長（マネージャー候補）​' },
    { id: 28, column1: '', column2: '係長（マネージャー候補）' },
    { id: 29, column1: '希望勤務地', column2: '東京都​' },
    { id: 30, column1: '（都道府県）', column2: '千葉県' },
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
  replaceAndRemoveRows(9, 10, 10, data);
  replaceAndRemoveRows(16, 17, 17, data);
  replaceAndRemoveRows(20, 21, 21, data);
  replaceAndRemoveRows(23, 24, 24, data);
  // Repeat for id: 27, 28, 29, 30
  replaceAndRemoveRows(27, 28, 28, data);
  replaceAndRemoveRows(29, 30, 30, data);

  const MessageTemplate = [
    { value: '', label: 'テンプレートの選択', disabled: true },
    { value: 'create New', label: <Link to="/messagetemplate" style={{textDecoration:'none', color: '#000'}}>Create New</Link>},
    { value: 'template1', label: 'Template1' },
    { value: 'template2', label: 'Template2' },
    { value: 'template3', label: 'Template3' },
  ]

  useEffect(() => {
    const authKey = sessionStorage.getItem('authKey');

    const fetchData = async () => {
      try {
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_candidate_resume?auth_key=${authKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        
        if (!Array.isArray(responseData.candidate_resume)) {
          throw new Error('Unexpected data format: candidate_resume is not an array');
        }

        const data = responseData.candidate_resume;

        const categorizedResumeList = data.filter(item => item.cru_resume_type === 'normal_resume');
        const categorizedWorkHistoryList = data.filter(item => item.cru_resume_type === 'experience_resume');

        setResumeList(categorizedResumeList);
        setWorkHistoryList(categorizedWorkHistoryList);

        // Debugging
        console.log('Resume List:', categorizedResumeList);
        console.log('Work History List:', categorizedWorkHistoryList);
      } catch (error) {
        console.error('Error fetching resume list:', error);
      }
    };
    
    fetchData();
  }, []);

  const getResumeNameById = (id) => {
    const resume = resumeList.find(item => item.cru_id === id);
    // console.log('Getting resume name for ID:', id, 'Result:', resume);
    return resume ? resume.cru_file_name : 'Resume not found';
  };

  const getWorkHistoryNameById = (id) => {
    const workHistory = workHistoryList.find(item => item.cru_id === id);
    // console.log('Getting work history name for ID:', id, 'Result:', workHistory);
    return workHistory ? workHistory.cru_file_name : 'Work History not found';
  };

  const getResumeUrlById = (id) => {
    const resume = resumeList.find(item => item.cru_id === id);
    return resume ? resume.cru_resume_url : 'Resume URL not found';
  };

  const getWorkHistoryUrlById = (id) => {
    const workHistory = workHistoryList.find(item => item.cru_id === id);
    return workHistory ? workHistory.cru_resume_url : 'Work History URL not found';
  };


  const handleSubmit = async () => {
    const authKey = sessionStorage.getItem('authKey');
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('job_id', id);
    formData.append('full_name', name);
    formData.append('furigana', furigana);
    formData.append('city_of_residence', city);
    formData.append('email_address', emailaddress);
    formData.append('normal_resume_name', getResumeNameById(selectedResumeId));
    formData.append('normal_resume_url',getResumeUrlById(selectedResumeId)); // Replace with actual URL
    formData.append('exp_resume_name', getWorkHistoryNameById(selectedWorkHistoryId));
    formData.append('exp_resume_url', getWorkHistoryUrlById(selectedWorkHistoryId)); // Replace with actual URL
    formData.append('message', message);

    try {
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/add_official_application', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful submission
      handleOpenDeleteModal();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>求人情報</p>
        </div>

        <Box sx={{ width: 'auto', padding: '24px', background: 'rgb(250, 250, 250)', marginBottom: '100px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} spacing={1}>
              <Item sx={{textAlign: 'center', marginBottom: '10px'}}>
                提出書類の確認をお願いします
              </Item>
            </Grid>
            <Grid item xs={12} spacing={1} sx={{background: '#fff', border: '1px solid #eeeeee', padding: '10px', position: 'relative'}}>
              <Typography sx={{textAlign: 'center', fontSize: '12px', padding: '12px'}}>基本情報を入力してください</Typography>
              <Grid item>
                <IconButton component={Link} to={`/normalapplication/${id}`} state={{id, message, name, furigana, city, emailaddress, resumeupload, workhistoryupload}} aria-label="edit" size="small" sx={{position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Item sx={{alignItems: 'center', display: 'flex'}}>
                <FormLabel className='formfield-label' id="name" sx={{marginBottom: '10px', textAlign: 'left', width: '50%', fontSize: '12px'}}>氏名</FormLabel>
                <FormControl fullWidth sx={{marginBottom: '10px'}}>
                  <TextField
                    variant="outlined"
                    type="text"
                    value={name}
                    InputProps={{
                      readOnly: true,
                    }}
                    size="small"
                    // helperText={errors.family_member_count}
                  />
                  {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
                </FormControl>
              </Item>
              <Item sx={{alignItems: 'center', display: 'flex'}}>
                <FormLabel className='formfield-label' id="name" sx={{marginBottom: '10px', textAlign: 'left', width: '50%', fontSize: '12px'}}>フリガナ</FormLabel>
                <FormControl fullWidth sx={{marginBottom: '10px'}}>
                  <TextField
                    variant="outlined"
                    type="text"
                    value={furigana}
                    InputProps={{
                      readOnly: true,
                    }}
                    size="small"
                    // helperText={errors.family_member_count}
                  />
                  {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
                </FormControl>
              </Item>
              <Item sx={{alignItems: 'center', display: 'flex'}}>
                <FormLabel className='formfield-label' id="name" sx={{marginBottom: '10px', textAlign: 'left', width: '50%', fontSize: '12px'}}>住まいの市区町村</FormLabel>
                <FormControl fullWidth sx={{marginBottom: '10px'}}>
                  <TextField
                    variant="outlined"
                    type="text"
                    value={city}
                    InputProps={{
                      readOnly: true,
                    }}
                    size="small"
                    // helperText={errors.family_member_count}
                  />
                  {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
                </FormControl>
              </Item>
              <Item sx={{alignItems: 'center', display: 'flex'}}>
                <FormLabel className='formfield-label' id="name" sx={{marginBottom: '10px', textAlign: 'left', width: '50%', fontSize: '12px'}}>メールアドレス</FormLabel>
                <FormControl fullWidth sx={{marginBottom: '10px'}}>
                  <TextField
                    variant="outlined"
                    type="text"
                    value={emailaddress}
                    InputProps={{
                      readOnly: true,
                    }}
                    size="small"
                    // helperText={errors.family_member_count}
                  />
                  {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
                </FormControl>
              </Item>
            </Grid>
            
            <Grid item xs={12} style={{position: 'relative'}}>
              <Typography sx={{padding: '10px', textAlign: 'center', fontSize: '12px'}}>企業へ提出する履歴書と職務経歴書を選んでください</Typography>
              <Item style={{paddingBottom: '10px'}}>
                <IconButton component={Link} to={`/normalapplication/${id}`} state={{id, message, name, furigana, city, emailaddress, resumeupload, workhistoryupload}} aria-label="edit" size="small" sx={{position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Item>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <Item>
                <ToggleButtonGroup
                  orientation="vertical"
                  value={resumeupload}
                  exclusive
                  // onChange={handleResumeUpload}
                  style={{gap: '10px'}}
                >
                  <ToggleButton value="resumelist" aria-label="resumelist">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> {getResumeNameById(selectedResumeId)}
                  </ToggleButton>
                </ToggleButtonGroup>

                {/* <Button variant='outlined' sx={{marginTop: '20px'}}>
                  <UploadFileIcon style={{paddingRight: '10px'}} /> 新たに履歴書をアップロードする
                </Button> */}
              </Item>

              <Item sx={{marginBottom: '20px'}}>
                <ToggleButtonGroup
                  orientation="vertical"
                  value={workhistoryupload}
                  exclusive
                  // onChange={handleWorkHistoryUpload}
                  style={{gap: '10px'}}
                >
                  <ToggleButton value="workhistorylist" aria-label="workhistorylist">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> {getWorkHistoryNameById(selectedWorkHistoryId)}
                  </ToggleButton>
                  {/* <ToggleButton value="module" aria-label="module">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み職務経歴2
                  </ToggleButton>
                  <ToggleButton value="quilt" aria-label="quilt">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み職務経歴3
                  </ToggleButton> */}
                </ToggleButtonGroup>
{/* 
                <Button variant='outlined' sx={{marginTop: '20px'}}>
                  <UploadFileIcon style={{paddingRight: '10px'}} /> 新たに職務経歴書をアップロードする
                </Button> */}
              </Item>
              </div>
              
            </Grid>

            {/* <Grid item xs={12} style={{width: '100%', marginBottom: '20px', position: 'relative'}}>
              <Item style={{textAlign: 'left', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px'}}>
                <Typography gutterBottom>
                  メッセージを入力
                </Typography>
                <Grid item style={{marginLeft: 'auto'}}>
                  <IconButton component={Link} to={`/normalapplication/${id}`} state={{ message }} aria-label="edit" size="small" sx={{position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Item>
            </Grid> */}
            <Grid container spacing={1} style={{width: '100%', marginBottom: '20px', background: '#FFFFFF', marginLeft: '0', marginTop: '10px', height: '150px', borderRadius: '10px', border: '1px solid #EEEEEE', overflowY: 'auto'}}>
              <Grid item xs={12} style={{width: '100%', position: 'relative'}}>
                <Item>
                  <Typography style={{textAlign: 'left', marginBottom: '20px'}}>メッセージ</Typography>
                  <Typography style={{textAlign: 'left', margin: '10px 0'}}>{message}</Typography>
                  {/* <Typography style={{textAlign: 'left', margin: '10px 0'}}>ID: {id}</Typography> */}
                  {/* <Button component={Link} to={`/maskingapplication/${id}`} state={{ message }} style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '120px', display: 'flex', gap: '15px', position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
                    <PencilEdit />
                    <Typography variant='paragraph'>編集</Typography>
                  </Button> */}
                  <IconButton component={Link} to={`/normalapplication/${id}`} state={{id, message, name, furigana, city, emailaddress, resumeupload, workhistoryupload}} aria-label="edit" size="small" sx={{position: 'absolute', top: '0', right: '0', margin: '10px 10px 0 0'}}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
           <Grid item xs={12} style={{width: '100%'}}>
              <Button onClick={handleSubmit} component={Link} to="" variant="contained" color="secondary" sx={{ width: '100%', marginBottom: '20px' }}>書類選考応募</Button>
            </Grid>
          </Grid>
        </Box>


        <Modal
              open={isDeleteModalOpen}
              onClose={handleCloseDeleteModal}
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
                  borderRadius: '20px',
                  boxShadow: 24,
                  textAlign: 'center',
                  p: 4,
              }}>
                  <Cancel onClick={handleCloseDeleteModal} style={{position: 'absolute', right: '0', top: '0', padding: '10px'}} />
                  <SuccessMsg style={{marginBottom: '10px'}} />
                  <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize: '14px'}}>
                    書類選考エントリーンが完了しました
                  </Typography>
                  {/* <Button onClick={handleDelete}>Delete</Button>
                  <Button onClick={handleCloseDeleteModal}>Cancel</Button> */}
              </Box>
        </Modal>
        
        <BottomNav />
      </>
    </ThemeProvider>
  );
}