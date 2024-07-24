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
import { Link, useNavigate, useLocation, useParams} from 'react-router-dom'; 
import BottomNav from '../components/BottomNav';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import theme from './theme';

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

export default function MaskingApplication() {
  const { id } = useParams();  // Get the ID from the URL
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [messageTemplate, setMessageTemplate] = useState();
  const [message, setMessage] = useState('');
  const [templates, setTemplates] = useState([]); // State to store message templates

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

  const location = useLocation();
  const navigate = useNavigate();  // Get the history object from react-router-dom

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
    }
  }, [location]);

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
    // { id: 11, column1: '配偶者', column2: 'あり' },
    // { id: 12, column1: '扶養人数', column2: '2名' },
    { id: 11, column1: '語学スキル', column2: '英語：初級（日常会話は行えるが、複雑な会話は難しい)' },
    { id: 12, column1: '役職', column2: '課長クラス' },
    { id: 13, column1: '経験職種', column2: '経理' },
    { id: 14, column1: '業種', column2: 'IT​' },
    { id: 15, column1: '', column2: '商社（食品）' },
    { id: 16, column1: 'マネジメント経験', column2: 'あり' },
    { id: 17, column1: '経理の経験業務', column2: '' },
    { id: 18, column1: '企業カテゴリ', column2: '上場グループ' },
    { id: 19, column1: '（過去も含め）', column2: '上場グループ企業' },
    { id: 20, column1: '保有資格', column2: '日商簿記検定2級' },
    { id: 21, column1: '使用可能会計ソフト', column2: '勘定奉行​' },
    { id: 22, column1: '', column2: '弥生会計' },
    { id: 23, column1: '希望年収', column2: '500万円以上' },
    { id: 24, column1: '希望職種', column2: '経理' },
    { id: 25, column1: '希望役職', column2: '係長（マネージャー候補）​' },
    { id: 26, column1: '', column2: '係長（マネージャー候補）' },
    { id: 27, column1: '希望勤務地', column2: '東京都​' },
    { id: 28, column1: '（都道府県）', column2: '千葉県' },
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
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidates/list_message_templates?auth_key=${authKey}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setTemplates(data.message_templates);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching message templates:', error);
      }
    };
  
    fetchMessageTemplates();
  }, []);

  // const handleMessageTemplateChange = (event) => {
  //   setMessageTemplate(event.target.value);
  // };
  
  // const handleMessageTemplateChange = (event) => {
  //   const selectedTemplate = event.target.value;
  //   setMessageTemplate(selectedTemplate);

  //   // Find the selected template and set the message
  //   const template = templates.find(t => t.template_name === selectedTemplate);
  //   if (template) {
  //     setMessage(template.message);
  //   } else {
  //     setMessage(''); // Clear the message if no template is found
  //   }

  //   // Check if selectedTemplate is empty, and clear templates array accordingly
  //   if (!selectedTemplate) {
  //     setTemplates([]); // Set templates to empty array
  //   }
  // };

  // const handleMessageTemplateChange = (event) => {
  //   const selectedTemplate = event.target.value;
  //   setMessageTemplate(selectedTemplate);
  
  //   if (selectedTemplate === '新しく作る') {
  //     setMessage(''); // Clear the message when selecting '新しく作る'
  //   } else {
  //     // Find the selected template and set the message
  //     const selectedTemplateData = templates.find(t => t.template_name === selectedTemplate);
  //     setMessage(selectedTemplateData ? selectedTemplateData.message : '');
  //   }
  // };

  const handleMessageTemplateChange = (event) => {
    const selectedTemplate = event.target.value;
    setMessageTemplate(selectedTemplate);
  
    if (selectedTemplate === '新しく作る') {
      setMessage(''); // Clear the message when selecting '新しく作る'
      navigate('/messagetemplate');
    } else {
      // Find the selected template and set the message
      const selectedTemplateData = templates.find(t => t.template_name === selectedTemplate);
      setMessage(selectedTemplateData ? selectedTemplateData.template_message : '');
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
            <Grid item xs={12} style={{width: '100%'}}>
              <Item sx={{textAlign: 'center', background: 'transparent'}}>
              応募情報の確認
              </Item>
            </Grid>
          </Grid>
          <Grid container style={{marginBottom: '50px'}}>
            {/* <Grid item xs={12} style={{marginBottom: '10px', marginLeft: 'auto'}}>
              <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '70px', display: 'flex', gap: '15px', marginLeft: 'auto'}}>
                <span>
                  <PencilEdit />
                </span>
                <Typography variant='paragraph'>編集</Typography>
              </Item>
            </Grid> */}
            <IconButton component={Link} to="/maskingresume" aria-label="edit" size="small" sx={{marginLeft: 'auto', marginBottom: "10px"}}>
              <EditIcon fontSize="small" />
            </IconButton>
            <Grid item xs={12} style={{width: '100%', height: '200px'}}>
              <Item sx={{border: '1px solid #EEEEEE', height: '200px'}}>
              <TableContainer component={Paper} sx={{boxShadow: 'none', height: '200px'}}>
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
              </TableContainer>
              </Item>
            </Grid>
          </Grid>
          <Grid container style={{width: '100%', marginBottom: '20px'}}>
            <Grid item xs={12} style={{width: '100%'}}>
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
                    {/* <MenuItem value="" disabled>
                      テンプレートの選択
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/messagetemplate"
                      onClick={() => setMessageTemplate('新しく作る')} // Set default template value or handle navigation state
                    >
                      新しく作る
                    </MenuItem>
                    {templates.map((template, index) => (
                      <MenuItem key={index} value={template.template_name}>
                        {template.template_name}
                      </MenuItem>
                    ))} */}

                   {/* <MenuItem value="" disabled>
                      テンプレートの選択
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/messagetemplate"
                      onClick={() => setMessageTemplate('新しく作る')}
                    >
                      新しく作る
                    </MenuItem>
                    {Array.isArray(templates) && templates.length > 0 &&
                      templates.map((template, index) => (
                        <MenuItem key={index} value={template.template_name}>
                          {template.template_name}
                        </MenuItem>
                      ))
                    } */}

                    <MenuItem value="" disabled>
                      テンプレートの選択
                    </MenuItem>
                    <MenuItem value="新しく作る">新しく作る</MenuItem>
                      {templates ? (
                        templates.map((template, index) => (
                          <MenuItem key={index} value={template.template_name}>
                            {template.template_name}
                          </MenuItem>
                        ))
                      ) : null}
                      
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
          <Grid container style={{width: '100%'}}>
            <Grid item xs={12} style={{width: '100%'}}>
            <Button component={Link} to="/maskingapplicationconfirm" state={{ id: id, message: message }} variant="contained" color="primary" sx={{ width: '100%', marginBottom: '20px' }}>匿名エントリー</Button>
            </Grid>
          </Grid>
        </Box>
        <BottomNav />
      </>
    </ThemeProvider>
  );
}