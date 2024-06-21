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
import ResumeTab from './profile/ResumeTab';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import { flexbox, fontSize } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ReactComponent as ApplicationRequirement} from '../assets/ApplicationRequirement.svg';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MenuItem from '@mui/material/MenuItem';
import {ReactComponent as Cancel} from '../assets/Cancel.svg';

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

export default function NormalApplication() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState();
  const [furigana, setFurigana] = useState();
  const [city, setCity] = useState();
  const [emailaddress, setEmailAddress] = useState();
  const [messageTemplate, setMessageTemplate] = useState();
  const [message, setMessage] = useState('');
  const [templates, setTemplates] = useState([]); // State to store message templates
  const [resumeupload, setResumeUpload] = React.useState('resumelist');
  const [workhistoryupload, setWorkHistoryUpload] = React.useState('workhistorylist');
  const [selectedFile, setSelectedFile] = React.useState(null);
    // Add a state to store the uploaded file
  const [uploadedFile, setUploadedFile] = React.useState(null);
  const [resumeList, setResumeList] = useState([]);
  const [workHistoryList, setWorkHistoryList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
    }
  }, [location]);

  const handleResumeUpload = (event, nextresumeupload) => {
    setResumeUpload(nextresumeupload);
  };

  const handleWorkHistoryUpload = (event, nextworkhistoryupload) => {
    setWorkHistoryUpload(nextworkhistoryupload);
  };

  // const handleMessageTemplateChange = (event) => {
  //   setMessageTemplate(event.target.value);
  // };

  const handleOpenDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleFuriganaChange = (event) => {
    setFurigana(event.target.value);
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmailAddress(event.target.value);
  }

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
    { value: '新しく作る', label: '新しく作る', to: '/messagetemplate' },
    { value: 'テンプレート1', label: 'テンプレート1' },
    { value: 'テンプレート2', label: 'テンプレート2' },
    { value: 'テンプレート3', label: 'テンプレート3' },
  ]

  useEffect(() => {
    const authKey = sessionStorage.getItem('authKey');
    // setLoading(true); // Set loading to true when starting data fetching
    const fetchMessageTemplates = async () => {
      try {
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_message_template?auth_key=${authKey}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setTemplates(data.message_template);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching message templates:', error);
      }
    };
  
    fetchMessageTemplates();
  }, []);

  const handleMessageTemplateChange = (event) => {
    const selectedTemplate = event.target.value;
    setMessageTemplate(selectedTemplate);
  
    if (selectedTemplate === '新しく作る') {
      setMessage(''); // Clear the message when selecting '新しく作る'
      navigate('/messagetemplate');
    } else {
      // Find the selected template and set the message
      const selectedTemplateData = templates.find(t => t.message_template_name === selectedTemplate);
      setMessage(selectedTemplateData ? selectedTemplateData.message : '');
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadedFile(file);
  };
  
  const handleOpenFileModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const authKey = sessionStorage.getItem('authKey');

    const fetchData = async () => {
      try {
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_candidate_resume?auth_key=${authKey}`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('Fetched data:', responseData); // Log fetched data to debug
        // Categorize data based on cru_file_type

        // Ensure responseData is structured correctly
        if (!Array.isArray(responseData.candidate_resume)) {
          throw new Error('Unexpected data format: candidate_resume is not an array');
        }

        // Extract the array from the object
        const data = responseData.candidate_resume;

        const categorizedResumeList = [];
        const categorizedWorkHistoryList = [];

        data.forEach(item => {
          if (item.cru_resume_type === 'normal_resume') {
            categorizedResumeList.push(item);
          } else if (item.cru_resume_type === 'experience_resume') {
            categorizedWorkHistoryList.push(item);
          }
        });

        setResumeList(categorizedResumeList);
        setWorkHistoryList(categorizedWorkHistoryList);
      } catch (error) {
        console.error('Error fetching resume list:', error);
      }
    };
    
    fetchData(); 
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="PageHeader">
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p>求人情報</p>
        </div>
        {/* <Box sx={{ width: 'auto', padding: '24px', background: 'rgb(250, 250, 250)', marginBottom: '100px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{width: '100%'}}>
              <Item sx={{textAlign: 'center'}}>
              応募情報の確認
              </Item>
            </Grid>
          </Grid>
          <Grid container style={{}}>
            <Grid item xs={4} style={{marginBottom: '10px', marginLeft: 'auto'}}>
              <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '70px', display: 'flex', gap: '15px', marginLeft: 'auto'}}>
                <span>
                  <PencilEdit />
                </span>
                <Typography variant='paragraph'>編集</Typography>
              </Item>
            </Grid>
            <Grid item xs={12} style={{width: '100%', height: '200px', overflowY: 'auto', border: '1px solid #EEEEEE'}}>
              <Item sx={{height: '200px'}}>
              <ResumeTab style={{paddingBottom: '20px'}} />
              </Item>
            </Grid>
          </Grid>
          <Grid container style={{width: '100%', marginBottom: '20px'}}>
            <Grid item xs={12} style={{width: '100%'}}>
              <Item style={{textAlign: 'left'}}>メッセージを入力</Item>
              <TextField style={{}}
                id="outlined-multiline-static"
                variant="outlined"
                fullWidth
                multiline
                placeholder="その他の相談事項" 
                // name="username"
                rows={4}
              />
            </Grid>
          </Grid>
          <Grid container style={{width: '100%'}}>
            <Grid item xs={12} style={{width: '100%'}}>
            <Button component={Link} to="/normalapplicationconfirm" variant="contained" color="secondary" sx={{ width: '100%', marginBottom: '20px' }}>書類選考応募</Button>
            </Grid>
          </Grid>
        </Box> */}
        
        <Box sx={{ width: 'auto', padding: '24px', background: 'rgb(250, 250, 250)', marginBottom: '100px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12} spacing={1}>
              <Item sx={{textAlign: 'center', marginBottom: '10px'}}>
                応募手続きの準備
              </Item>
            </Grid>
            <Grid item xs={12} spacing={1} sx={{background: '#fff', border: '1px solid #eeeeee', padding: '10px'}}>
              <Typography sx={{textAlign: 'center', fontSize: '12px', padding: '12px'}}>基本情報を入力してください</Typography>
              <Item sx={{alignItems: 'center', display: 'flex'}}>
                <FormLabel className='formfield-label' id="name" sx={{marginBottom: '10px', textAlign: 'left', width: '50%', fontSize: '12px'}}>氏名</FormLabel>
                <FormControl fullWidth sx={{marginBottom: '10px'}}>
                  <TextField
                    variant="outlined"
                    type="text"
                    placeholder="あなたのフィールドを入力してください"
                    value={name}
                    name='name'
                    onChange={handleNameChange}
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
                    placeholder="あなたのフィールドを入力してください"
                    value={furigana}
                    name='furigana'
                    onChange={handleFuriganaChange}
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
                    placeholder="あなたのフィールドを入力してください"
                    value={city}
                    name='city'
                    onChange={handleCityChange}
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
                    placeholder="あなたのフィールドを入力してください"
                    value={emailaddress}
                    name='emailaddress'
                    onChange={handleEmailChange}
                    size="small"
                    // helperText={errors.family_member_count}
                  />
                  {/* {errors.family_member_count && <FormHelperText style={{ color: 'red', margin: '10px 0 0'}}>{errors.family_member_count}</FormHelperText> } */}
                </FormControl>
              </Item>
            </Grid>
            
            <Grid item xs={12}>
              <Typography sx={{padding: '10px', textAlign: 'center', fontSize: '12px'}}>企業へ提出する履歴書と職務経歴書を選んでください</Typography>
              <Item>
                <ToggleButtonGroup
                  orientation="vertical"
                  value={resumeupload}
                  exclusive
                  onChange={handleResumeUpload}
                  style={{gap: '10px'}}
                >
                  {resumeList.map((resume, index) => (
                    <ToggleButton key={index} value={resume.cru_file_name} aria-label={resume.cru_file_name}>
                      <ApplicationRequirement style={{paddingRight: '5px'}} /> {resume.cru_file_name}
                    </ToggleButton>
                  ))}
                  {/* <ToggleButton value="resumelist" aria-label="resumelist">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み履歴書1
                  </ToggleButton>
                  <ToggleButton value="module" aria-label="module">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み履歴書2
                  </ToggleButton>
                  <ToggleButton value="quilt" aria-label="quilt">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み履歴書3
                  </ToggleButton> */}
                </ToggleButtonGroup>

                <Button to="/profile" component={Link} variant='outlined' sx={{marginTop: '20px'}}>
                  <UploadFileIcon style={{paddingRight: '10px'}} /> 新たに履歴書をアップロードする
                </Button>
              </Item>

              <Item sx={{marginBottom: '20px'}}>
                <ToggleButtonGroup
                  orientation="vertical"
                  value={workhistoryupload}
                  exclusive
                  onChange={handleWorkHistoryUpload}
                  style={{gap: '10px'}}
                >
                  {workHistoryList.map((workHistory, index) => (
                    <ToggleButton key={index} value={workHistory.cru_file_name} aria-label={workHistory.cru_file_name}>
                      <ApplicationRequirement style={{paddingRight: '5px'}} /> {workHistory.cru_file_name}
                    </ToggleButton>
                  ))}
                  {/* <ToggleButton value="workhistorylist" aria-label="workhistorylist">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み職務経歴1
                  </ToggleButton>
                  <ToggleButton value="module" aria-label="module">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み職務経歴2
                  </ToggleButton>
                  <ToggleButton value="quilt" aria-label="quilt">
                    <ApplicationRequirement style={{paddingRight: '5px'}} /> 保存済み職務経歴3
                  </ToggleButton> */}
                </ToggleButtonGroup>

                <Button to="/profile" component={Link} variant='outlined' sx={{marginTop: '20px'}}>
                  <UploadFileIcon style={{paddingRight: '10px'}} /> 新たに職務経歴書をアップロードする
                </Button>
              </Item>
            </Grid>

            <Grid item xs={12} style={{width: '100%', marginBottom: '20px'}}>
              <Item style={{textAlign: 'left', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px'}}>
                <Typography gutterBottom>
                  メッセージを入力
                </Typography>
                <FormControl size="small">
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <Select
                    value={messageTemplate || ''}
                    name='message_template'
                    // label="messageTemplate"
                    onChange={handleMessageTemplateChange}
                    displayEmpty
                    >
                    
                    <MenuItem value="" disabled>
                      テンプレートの選択
                    </MenuItem>
                    <MenuItem value="新しく作る">新しく作る</MenuItem>
                      {templates ? (
                        templates.map((template, index) => (
                          <MenuItem key={index} value={template.message_template_name}>
                            {template.message_template_name}
                          </MenuItem>
                        ))
                      ) : null}
                    {/* <MenuItem value={CreateNew}>Create New</MenuItem>
                    <MenuItem value={template1}>Template 1</MenuItem>
                    <MenuItem value={template2}>Template 2</MenuItem>
                    <MenuItem value={template3}>Template 3</MenuItem> */}
                  </Select>
                </FormControl>
              </Item>
              <TextField style={{}}
                id="outlined-multiline-static"
                variant="outlined"
                fullWidth
                multiline
                placeholder="その他の相談事項" 
                // name="username"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container>
           <Grid item xs={12} style={{width: '100%'}}>
              <Button component={Link} to="/normalapplicationconfirm" variant="contained" color="secondary" sx={{ width: '100%', marginBottom: '20px' }}>書類選考応募</Button>
            </Grid>
          </Grid>
        </Box>

        {/* Modal for file selection */}
        <Modal
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
        </Modal>

        <BottomNav />
      </>
    </ThemeProvider>
  );
}