import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {ReactComponent as PencilEdit} from '../../assets/PencilEdit.svg';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {ReactComponent as Cancel} from '../../assets/Cancel.svg';
import {ReactComponent as BackButton} from '../../assets/BackButton.svg';
import { Link, useNavigate } from 'react-router-dom'; 
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


export default function WorkHistory() {
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1'}}>
        <div className="PageHeader" style={{marginBottom: '30px'}}>
          <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
          <p> 職務経歴書 </p>
        </div>
        <Grid container spacing={1} sx={{ padding: '24px'}}>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 氏名 </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="氏名" 
              required
              name="氏名"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 職務要約 </Typography> 
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="職務要約" 
              required
              name="職務要約"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 所属期間 </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="所属期間" 
              required
              name="所属期間"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >  会社名  </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="会社名" 
              required
              name="会社名"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >   事業内容  </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 事業内容" 
              required
              name=" 事業内容"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >   資本金   </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 資本金 " 
              required
              name=" 資本金 "
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >   売上高  </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 売上高" 
              required
              name=" 売上高"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 従業員数 </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="従業員数 " 
              required
              name="従業員数 "
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 企業カテゴリ</Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 企業カテゴリ" 
              required
              name="企業カテゴリ"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >  業務内容</Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 業務内容" 
              required
              name=" 業務内容"
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >  所属部門・ポジション </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="所属部門・ポジション " 
              required
              name="所属部門・ポジション "
              sx={{padding: '10px 0', margin: '0 0 10px'}}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >   部門・業務別での所属期間  </Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 部門・業務別での所属期間  " 
              required
              name=" 部門・業務別での所属期間  "
              sx={{padding: '10px 0', margin: '0 0 10px'}}    
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} >所属部門人数</Typography> 
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="所属部門人数" 
              required
              name="所属部門人数"
              sx={{padding: '10px 0', margin: '0 0 10px'}}    
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 活かせる経験・知識・技術 </Typography> 
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 活かせる経験・知識・技術 " 
              required
              name=" 活かせる経験・知識・技術 "
              sx={{padding: '10px 0', margin: '0 0 10px'}}    
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 資格 </Typography> 
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder=" 資格 " 
              required
              name=" 資格 "
              sx={{padding: '10px 0', margin: '0 0 10px'}}    
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > PCスキル </Typography> 
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="PCスキル" 
              required
              name="PCスキル"
              sx={{padding: '10px 0', margin: '0 0 10px'}}    
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 使用可能会計ツール </Typography> 
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="使用可能会計ツール" 
              required
              name="使用可能会計ツール"
              sx={{padding: '10px 0', margin: '0 0 10px'}}    
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom sx={{textAlign:'left'}} > 自己PR </Typography> 
            <TextField
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="自己PR" 
              required
              name="自己PR"
              sx={{padding: '10px 0', margin: '0 0 10px'}}    
            />
          </Grid>

          <Button variant="contained" color='primary' sx={{margin: '10px auto',}}>
            提出する
          </Button>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
