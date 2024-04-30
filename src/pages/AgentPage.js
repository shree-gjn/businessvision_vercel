import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import {FormControlLabel, Checkbox, MenuItem, TextField, Multiline, Button} from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BottomNav from '../components/BottomNav';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { borderBottom, padding } from '@mui/system';
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

  const navigate = useNavigate();  // Get the history object from react-router-dom
  
  const [checkboxes, setCheckboxes] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    // Add more checkboxes as neededd
  });

  const handleChangeOne = (name) => (event) => {
    setCheckboxes({
      ...checkboxes,
      [name]: event.target.checked,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <div className="PageHeader">
          <p>エージェントサービス​</p>
        </div>
        <div className="" style={{padding: "24px"}}>
          <Typography variant="h6" component="div" sx={{borderBottom: '1px solid #000', padding: '10px 0 10px 0', textAlign: 'left', borderColor: '#D3B76A', fontSize: '16px'}}> 転職相談サービス </Typography>
          <Typography variant="paragraph" component="div" sx={{padding: '10px 0 10px 0', textAlign: 'left'}}> 転職活動前のことや求人応募から 面接から入社まで、皆さまの転職 かつ関する疑問にお答えします。 </Typography>
          <Accordion>
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
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="転職の時期"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="転職市場の現況"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="username"
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="履歴書・職務経歴書の作成"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="求人への応募"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="username"
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="面接と面談の違い"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="日程調整の仕方"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="面接のポイント"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="username"
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="労働条件の確認・交渉"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="オファー面談"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="内定の受諾"
              />
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  required
                  name="username"
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="入社までの流れ"
              />
              <FormControlLabel
                control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{margin: '0 20px'}} />}
                label="入社後のキャリア"
              />
            
              <div style={{margin: '20px'}}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="その他の相談事項" 
                  name="username"
                />
              </div>
            </div>
            </AccordionDetails>
          </Accordion>
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
            // name="username"
            rows={4}
          />
          <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%'}}
            control={<Checkbox checked onChange={handleChangeOne('checkbox8')} />}
            label="メールに回答"
          />
          <FormControlLabel fullWidth style={{textAlign: 'left', width: '100%', marginBottom: '20px'}}
            control={<Checkbox checked={checkboxes.checkbox8} onChange={handleChangeOne('checkbox8')} style={{}} />}
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
