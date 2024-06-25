import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import {FormControlLabel, Checkbox, MenuItem, TextField, Multiline, Button} from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BottomNav from '../components/BottomNav';
import Chip from '@mui/material/Chip';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { borderBottom, padding, textAlign } from '@mui/system';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

  const [checkboxes, setCheckboxes] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
  });

  const handleCheckboxChange = (section, chipName) => (event) => {
    const { checked } = event.target;

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
  };

  // // Function to add chip to selectedChips
  // const handleChipAdd = (section, chip) => {
  //   setSelectedChips((prevSelectedChips) => ({
  //     ...prevSelectedChips,
  //     [section]: [...(prevSelectedChips[section] || []), chip], // Ensure array exists before adding chip
  //   }));
  // };

  const handleDeleteChip = (section, chipToDelete) => {
    setSelectedChips((prevSelectedChips) => ({
      ...prevSelectedChips,
      [section]: prevSelectedChips[section].filter((chip) => chip !== chipToDelete),
    }));
  };

  const navigate = useNavigate();  // Get the history object from react-router-dom
  
  const handleKeyDown = (section) => (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      setSelectedChips((prevSelectedChips) => ({
        ...prevSelectedChips,
        [section]: [...prevSelectedChips[section], event.target.value.trim()],
      }));
      event.target.value = '';
    }
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
          <Accordion sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
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
                  onKeyDown={handleKeyDown('section1')}
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
          <Accordion sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
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
                  onKeyDown={handleKeyDown('section2')}
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
          <Accordion sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
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
                  onKeyDown={handleKeyDown('section3')}
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
          <Accordion sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
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
                  onKeyDown={handleKeyDown('section4')}
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
          <Accordion sx={{marginBottom: '10px', boxShadow: 'none', background: '#fff'}}>
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
                  onKeyDown={handleKeyDown('section5')}
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
            name="section5"
            rows={4}
            onKeyDown={(e) => handleKeyDown('section5', e)}
          />
          <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%'}}
            control={<Checkbox checked={checkboxes.checkbox11} onChange={handleCheckboxChange('checkbox11')} />}
            label="メールに回答"
          />
          <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%', marginBottom: '20px'}}
            control={<Checkbox checked={checkboxes.checkbox12} onChange={handleCheckboxChange('checkbox12')} style={{}} />}
            label="オンラインにて回答  ※10分～最大15分程度"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{marginBottom: '100px'}}>
          転職相談サービスに申し込む
          </Button>
        </div>

        <BottomNav />
      </Box>
    </ThemeProvider>
  );
};

export default AgentPage;
