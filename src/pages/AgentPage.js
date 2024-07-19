import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import {FormControlLabel, Checkbox, MenuItem, TextField, Multiline, Button, Modal} from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BottomNav from '../components/BottomNav';
import Chip from '@mui/material/Chip';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { borderBottom, padding, textAlign } from '@mui/system';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
import {ReactComponent as Cancel} from '../assets/Cancel.svg';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';

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

const AgentPage = () => {
  const [selectedChips, setSelectedChips] = React.useState({
    section1: [],
    section2: [],
    section3: [],
    section4: [],
    section5: [],
  });

  const [otherConsultation, setOtherConsultation] = useState({
    section1: '',
    section2: '',
    section3: '',
    section4: '',
    section5: '',

  });

  const [otherConsultationMatters, setOtherConsultationMatters] = React.useState('');

  const [checkboxes, setCheckboxes] = React.useState({
    checkbox11: false,
    checkbox12: false,
  });
  const [successModal, setSuccessModal] = useState(false); 
  const [selectedAnswerMethod, setSelectedAnswerMethod] = useState('email');
  // const [expanded, setExpanded] = useState(false);
  
  const [expanded, setExpanded] = useState({
    panel1: false,
    panel2: false,
    panel3: false,
    panel4: false,
    panel5: false
  }); // State to manage accordion expansion

  const handleOtherConsultationChange = (event) => {
    setOtherConsultationMatters(event.target.value);
  };

  const handleCheckboxChange = (section, chipName) => (event) => {
    const { checked } = event.target;

    if (section.startsWith('checkbox')) {
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [section]: checked,
      }));
    } else {
      if (checked) {
        setSelectedChips((prevSelectedChips) => ({
          ...prevSelectedChips,
          [section]: [...prevSelectedChips[section], chipName],
        }));
      } else {
        setSelectedChips((prevSelectedChips) => ({
          ...prevSelectedChips,
          [section]: prevSelectedChips[section].filter((chip) => chip !== chipName),
        }));
      }
    }
  };

  const handleDeleteChip = (section, chipToDelete) => {
    setSelectedChips((prevSelectedChips) => ({
      ...prevSelectedChips,
      [section]: prevSelectedChips[section].filter((chip) => chip !== chipToDelete),
    }));
  };

  const navigate = useNavigate();  // Get the history object from react-router-dom
  
  // const handleKeyDown = (section) => (event) => {
  //   if (event.key === 'Enter' && event.target.value.trim() !== '') {
  //     setSelectedChips((prevSelectedChips) => ({
  //       ...prevSelectedChips,
  //       [section]: [...prevSelectedChips[section], event.target.value.trim()],
  //     }));
  //     event.target.value = '';
  //   }
  // };

  const handleOtherConsultation = (section) => (event) => {
    const { value } = event.target;
    setOtherConsultation((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const handleKeyDown = (section) => (event) => {
    if (event.key === 'Enter' && !event.shiftKey && event.target.value.trim() !== '') {
      event.preventDefault(); // Prevent default Enter behavior
      setSelectedChips((prevSelectedChips) => ({
        ...prevSelectedChips,
        [section]: [...prevSelectedChips[section], event.target.value.trim()],
      }));
      event.target.value = '';
    }
    // If Shift + Enter, do nothing special and let the default behavior (adding a new line) happen
  };

  const handleAnswerMethodChange = (event) => {
    setSelectedAnswerMethod(event.target.value);
  };

  const handleSubmit = async () => {
    const authKey = sessionStorage.getItem('authKey');
    const before_application = selectedChips.section1.join(',');
    const application_stage = selectedChips.section2.join(',');
    const interview = selectedChips.section3.join(',');
    const unofficial_offer = selectedChips.section4.join(',');
    const join_company = selectedChips.section5.join(',');
    const answer_method = selectedAnswerMethod === 'email' ? 'メールに回答' : 'オンラインにて回答  ※10分～最大15分程度';
    // const answer_email = checkboxes.checkbox11 ? 'メールに回答' : '';
    // const answer_online = checkboxes.checkbox12 ? 'オンラインにて回答  ※10分～最大15分程度' : '';

    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('before_application', before_application);
    formData.append('application_stage', application_stage);
    formData.append('interview', interview);
    formData.append('unofficial_offer', unofficial_offer);
    formData.append('join_company', join_company);
    // formData.append('answer_email', answer_email);
    // formData.append('answer_online', answer_online);
    formData.append('answer_method', answer_method);
    formData.append('other_consultation_before_application', otherConsultation.section1);
    formData.append('other_consultation_application_stage', otherConsultation.section2);
    formData.append('other_consultation_interview', otherConsultation.section3);
    formData.append('other_consultation_unofficial_offer', otherConsultation.section4);
    formData.append('other_consultation_join_company', otherConsultation.section5);
    formData.append('other_consultation_matters', otherConsultationMatters);

    try {
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/job_change_consultancy', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setSuccessModal(true); // Show success modal on success
        setExpanded(false); // Close all accordions
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCloseSuccessModal = () => {
   // Reset form fields here
   setSelectedChips({
    section1: [],
    section2: [],
    section3: [],
    section4: [],
    section5: [],
  });
  setOtherConsultation({
    section1: '',
    section2: '',
    section3: '',
    section4: '',
    section5: '',
  });
  setOtherConsultationMatters('');
  setCheckboxes({
    checkbox11: false,
    checkbox12: false,
  });
    setSuccessModal(false);
  };

  // const handleAccordionChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [panel]: isExpanded
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1', background: 'rgb(250, 250, 250)'}}>
        <div className="PageHeader">
          <p>エージェントサービス​</p>
        </div>
        <div className="" style={{padding: "24px"}}>
          <Typography variant="h6" component="div" sx={{borderBottom: '1px solid #000', padding: '10px 0 10px 0', textAlign: 'left', borderColor: '#D3B76A', fontSize: '16px'}}> 転職相談サービス </Typography>
          <Typography variant="paragraph" component="div" sx={{padding: '10px 0 10px 0', textAlign: 'left'}}> 転職活動前のことや求人応募から 面接から入社まで、皆さまの転職 かつ関する疑問にお答えします。 </Typography>
          <Accordion expanded={expanded.panel1} onChange={handleAccordionChange('panel1')} sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>応募前</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
            <div>
              <Divider />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section1.includes('転職の時期')} onChange={handleCheckboxChange('section1', '転職の時期')} style={{margin: '0 20px'}} />}
                label="転職の時期"
              />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section1.includes('転職市場の現況')} onChange={handleCheckboxChange('section1', '転職市場の現況')} style={{margin: '0 20px'}} />}
                label="転職市場の現況"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="section1"
                  multiline
                  rows={4}
                  value={otherConsultation.section1}
                  onChange={handleOtherConsultation('section1')}
                  // onKeyDown={handleKeyDown('section1')}
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
           {/* Chips for Accordion 1 */}
           <div style={{textAlign: 'left', marginBottom: '10px'}}>
              {selectedChips.section1.map((chip, index) => (
                <Chip
                  key={index}
                  label={chip}
                  onDelete={() => handleDeleteChip('section1', chip)}
                  sx={{ margin: '5px' }}
                  clickable
                />
              ))}
           </div>
          <Accordion expanded={expanded.panel2} onChange={handleAccordionChange('panel2')} sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>応募段階</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
            <div>
              <Divider />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section2.includes('履歴書・職務経歴書の作成')} onChange={handleCheckboxChange('section2', '履歴書・職務経歴書の作成')} style={{margin: '0 20px'}} />}
                label="履歴書・職務経歴書の作成"
              />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section2.includes('求人への応募')} onChange={handleCheckboxChange('section2', '求人への応募')} style={{margin: '0 20px'}} />}
                label="求人への応募"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="section2"
                  multiline
                  rows={4}
                  value={otherConsultation.section2}
                  onChange={handleOtherConsultation('section2')}
                  // onKeyDown={handleKeyDown('section2')}
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
          {/* Chips for Accordion 2 */}
          <div style={{textAlign: 'left', marginBottom: '10px'}}>
            {selectedChips.section2.map((chip, index) => (
              <Chip
                key={index}
                label={chip}
                onDelete={() => handleDeleteChip('section2', chip)}
                sx={{ margin: '5px' }}
                clickable
              />
            ))}
          </div>
          <Accordion expanded={expanded.panel3} onChange={handleAccordionChange('panel3')} sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>面接・面談</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
            <div>
              <Divider />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section3.includes('面接と面談の違い')} onChange={handleCheckboxChange('section3', '面接と面談の違い')} style={{margin: '0 20px'}} />}
                label="面接と面談の違い"
              />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section3.includes('日程調整の仕方')} onChange={handleCheckboxChange('section3', '日程調整の仕方')} style={{margin: '0 20px'}} />}
                label="日程調整の仕方"
              />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section3.includes('面接のポイント')} onChange={handleCheckboxChange('section3', '面接のポイント')} style={{margin: '0 20px'}} />}
                label="面接のポイント"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="section3"
                  multiline
                  rows={4}
                  value={otherConsultation.section3}
                  onChange={handleOtherConsultation('section3')}
                  // onKeyDown={handleKeyDown('section3')}
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
           {/* Chips for Accordion 3 */}
           <div style={{textAlign: 'left', marginBottom: '10px'}}>
              {selectedChips.section3.map((chip, index) => (
                <Chip
                  key={index}
                  label={chip}
                  onDelete={() => handleDeleteChip('section3', chip)}
                  sx={{ margin: '5px' }}
                  clickable
                />
            ))}
           </div>
          <Accordion expanded={expanded.panel4} onChange={handleAccordionChange('panel4')} sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>内定</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
            <div>
              <Divider />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section4.includes('労働条件の確認・交渉')} onChange={handleCheckboxChange('section4', '労働条件の確認・交渉')} style={{margin: '0 20px'}} />}
                label="労働条件の確認・交渉"
              />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section4.includes('オファー面談')} onChange={handleCheckboxChange('section4', 'オファー面談')} style={{margin: '0 20px'}} />}
                label="オファー面談"
              />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section4.includes('内定の受諾')} onChange={handleCheckboxChange('section4', '内定の受諾')} style={{margin: '0 20px'}} />}
                label="内定の受諾"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="section4"
                  multiline
                  rows={4}
                  value={otherConsultation.section4}
                  onChange={handleOtherConsultation('section4')}
                  // onKeyDown={handleKeyDown('section4')}
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
          {/* Chips for Accordion 4 */}
          <div style={{textAlign: 'left', marginBottom: '10px'}}>
            {selectedChips.section4.map((chip, index) => (
              <Chip
                key={index}
                label={chip}
                onDelete={() => handleDeleteChip('section4', chip)}
                sx={{ margin: '5px' }}
                clickable
              />
            ))}
          </div>
          <Accordion expanded={expanded.panel5} onChange={handleAccordionChange('panel5')} sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>入社</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{padding:'0px', textAlign:'left'}}>
            <div>
              <Divider />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section5.includes('入社までの流れ')} onChange={handleCheckboxChange('section5', '入社までの流れ')} style={{margin: '0 20px'}} />}
                label="入社までの流れ"
              />
              <FormControlLabel
                control={<Checkbox checked={selectedChips.section5.includes('入社後のキャリア')} onChange={handleCheckboxChange('section5', '入社後のキャリア')} style={{margin: '0 20px'}} />}
                label="入社後のキャリア"
              />
            
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  name="username"
                  multiline
                  rows={4}
                  value={otherConsultation.section5}
                  onChange={handleOtherConsultation('section5')}
                  // onKeyDown={handleKeyDown('section5')}
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
          {/* Chips for Accordion 5 */}
          <div style={{textAlign: 'left', marginBottom: '10px'}}>
            {selectedChips.section5.map((chip, index) => (
              <Chip
                key={index}
                label={chip}
                onDelete={() => handleDeleteChip('section5', chip)}
                sx={{ margin: '5px'}}
                clickable
              />
            ))}
          </div>
          {/* <TextField
            variant="outlined-multiline-flexible"
            fullWidth
            multiline
            maxRows={4}
            placeholder="その他の相談事項" 
            name="username"
          /> */}
          <TextField style={{margin: '20px 0'}}
            id="outlined-multiline-static"
            variant="outlined"
            fullWidth
            multiline
            placeholder="その他の相談事項" 
            name="message"
            value={otherConsultationMatters}
            onChange={handleOtherConsultationChange}
            rows={4}
          />
          {/* <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%'}}
            control={<Checkbox checked={checkboxes.checkbox11} onChange={handleCheckboxChange('checkbox11')} />}
            label="メールに回答"
          />
          <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%', marginBottom: '20px'}}
            control={<Checkbox checked={checkboxes.checkbox12} onChange={handleCheckboxChange('checkbox12')} style={{}} />}
            label="オンラインにて回答  ※10分～最大15分程度"
          /> */}

            <FormControl component="fieldset" sx={{marginBottom: '20px'}}>
              <RadioGroup
                aria-label="answerMethod"
                name="answerMethod"
                value={selectedAnswerMethod}
                onChange={handleAnswerMethodChange}
              >
                <FormControlLabel value="email" control={<Radio />} label="メールに回答" />
                <FormControlLabel value="online" control={<Radio />} label="オンラインにて回答  ※10分～最大15分程度" />
              </RadioGroup>
            </FormControl>

          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} fullWidth style={{marginBottom: '100px'}}>
          転職相談サービスに申し込む
          </Button>
        </div>

        <BottomNav />
      </Box>

      {/* Success Modal */}
      <Modal open={successModal} onClose={handleCloseSuccessModal}>
        <Box sx={{ width: 300, bgcolor: 'background.paper', p: 4, margin: '250px auto', position: 'relative', borderRadius: '15px'}}>
          <SuccessMsg style={{marginBottom: '10px', display: 'block', margin: 'auto'}} />
          <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center', fontSize: '14px'}}>
            あなたのメッセージは正常に送信されました
          </Typography>
          <Cancel onClick={handleCloseSuccessModal} style={{position: 'absolute', right: '0', top: '0', padding: '10px'}} />
          {/* <Button onClick={handleCloseSuccessModal} variant="contained" sx={{ marginTop: '16px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            閉じる
          </Button>  */}
        </Box>
      </Modal>

    </ThemeProvider>
  );
};

export default AgentPage;
