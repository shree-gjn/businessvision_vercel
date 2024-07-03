import React, { useState, useEffect, useCallback} from 'react';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Modal, IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import {ReactComponent as SuccessMsg} from '../assets/SuccessMsg.svg';
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


const CompanyBlock = () => {
  const [companyName, setcompanyName] = useState('');
  const [companyList, setCompanyList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  
  const handleCompanyChange = (event) => {
    setcompanyName(event.target.value);
  };

  // useEffect(() => {
  //   // Fetch the company list from the API
  //   const fetchCompanyList = async () => {
  //     const authKey = sessionStorage.getItem('authKey');
  //     try {
  //       const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_company_block?auth_key=${authKey}`); // Replace with your API endpoint
  //       const data = await response.json();
  //        // Extract the company block list from the response
  //       if (data && data.Candidate_profile_details && Array.isArray(data.Candidate_profile_details.company_block_list)) {
  //         setCompanyList(data.Candidate_profile_details.company_block_list);
  //       } else {
  //         console.error('API response is not in the expected format:', data);
  //         setCompanyList([]);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching company list:', error);
  //       setCompanyList([]);
  //     }
  //   };
      

  //   fetchCompanyList();
  // }, []);


  const fetchCompanyList = useCallback(async () => {
    setLoading(true);
    const authKey = sessionStorage.getItem('authKey');
    try {
      const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_company_block?auth_key=${authKey}`); // Replace with your API endpoint
      const data = await response.json();
      // Extract the company block list from the response
      if (response.ok && data.Candidate_profile_details && Array.isArray(data.Candidate_profile_details.company_block_list)) {
        setCompanyList(data.Candidate_profile_details.company_block_list);
      } else {
        console.error('API response is not in the expected format:', data);
        setCompanyList([]);
      }
    } catch (error) {
      console.error('Error fetching company list:', error);
      setCompanyList([]);
    }
    finally {
      setLoading(false); // Set loading to false when fetching completes
    }
  }, []);

  useEffect(() => {
    fetchCompanyList();
  }, [fetchCompanyList]);

  const handleAddCompany = async () => {
    if (!companyName) return;

    const authKey = sessionStorage.getItem('authKey');
    const formData = new FormData();
    formData.append('auth_key', authKey); 
    formData.append('company_block_list', companyName);

    try {
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/edit_company_block', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Add Company API Response:', result); // Debugging statement
      if (result.ok && result.message === 'Company Block List Updated Successfully') {
        setcompanyName('');
        await fetchCompanyList(); 
      } else {
        console.error('Error adding company:', result.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error adding company:', error);
    }
  };

  const handleDeleteCompany = async (company) => {
    const authKey = sessionStorage.getItem('authKey');
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('company_block_list', company);

    try {
      const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/delete_company_block', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Delete Company API Response:', result);
      if (result.ok && result.message === 'Company Block List Updated Successfully') {
        await fetchCompanyList(); 
      } else {
        console.error('Error deleting company:', result.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddCompany();
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <div className="PageHeader">
        <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
        <p>企業ブロック設定</p>
      </div>
      <Box sx={{width: 'auto', typography: 'body1', padding: '20px'}}>
        <Typography variant="h6" sx={{ paddingBottom: '8px', textAlign:'left', width:'100%', fontSize: '16px', color: '#16375A'}}>
          企業ブロック設定
        </Typography>
        <Divider sx={{padding:'0px', marginBottom:'16px', width:'100%', background: '#D3B76A'}} />
        <TextField
          // label="Member ID"
          variant="outlined"
          fullWidth
          required
          value={companyName}
          onChange={handleCompanyChange}
          onKeyDown={handleKeyDown}
          placeholder="追加する企業名を入力してください。"
          sx={{ margin: '16px 0'}}
        />

        {/* <Grid container>
          {companyList.map((company, index) => (
            <Grid item xs={12} sx={{ borderBottom: '1px solid #EEEEEE' }} key={index}>
              <Item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <Typography>{company}</Typography>
                <IconButton aria-label="close" size="small" onClick={() => handleDeleteCompany(company)}>
                  <CloseIcon style={{ fontSize: '20px' }} />
                </IconButton>
              </Item>
            </Grid>
          ))}
        </Grid> */}
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Grid container>
            {companyList.map((company, index) => (
              <Grid item xs={12} sx={{ borderBottom: '1px solid #EEEEEE' }} key={index}>
                <Item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                  <Typography>{company}</Typography>
                  <IconButton aria-label="close" size="small" onClick={() => handleDeleteCompany(company)}>
                    <CloseIcon style={{ fontSize: '20px' }} />
                  </IconButton>
                </Item>
              </Grid>
            ))}
          </Grid>
        )}

      </Box>
    </ThemeProvider>
  );
};

export default CompanyBlock;
