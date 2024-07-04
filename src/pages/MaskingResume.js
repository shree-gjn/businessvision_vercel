import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNav from '../components/BottomNav';
import {ReactComponent as PencilEdit} from '../assets/PencilEdit.svg';
import Typography from '@mui/material/Typography';
import {ReactComponent as BackButton} from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; 
import Grid from '@mui/material/Grid';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none', 
}));

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

const MaskingResume = () => {
  const [resumeData, setResumeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();  // Get the history object from react-router-dom

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authKey = sessionStorage.getItem('authKey');
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/get_candidate_basic_details?auth_key=${authKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);

        if (data && data.Candidate_profile_details) {
          const profile = data.Candidate_profile_details;

          const formattedData = [
            { id: 1, column1: '性別', column2: profile.gender },
            { id: 2, column1: '生年', column2: profile.dob },
            { id: 3, column1: '住まいの都道府県', column2: profile.prefecture_code },
            { id: 4, column1: '最終学歴', column2: profile.final_educational },
            { id: 5, column1: '転職回数', column2: profile.Job_changed_no },
            { id: 6, column1: '現在の就業状況', column2: profile.Current_employment_status },
            { id: 7, column1: '転職希望時期', column2: profile.job_change_duration },
            { id: 8, column1: '経理の経験年数', column2: profile.overall_accounting_exp },
            { id: 9, column1: 'マスキングブ', column2: profile.masking_block_company ? profile.masking_block_company.split(',').join('、') : '-' },
            { id: 10, column1: 'ロック会社名', column2: '株式会社ビクウィース' },
            { id: 11, column1: '語学スキル', column2: profile.language_skills },
            { id: 12, column1: '役職', column2: profile.Post },
            { id: 13, column1: '経験職種', column2: profile.type_of_industries_exp_current },
            { id: 14, column1: '業種', column2: profile.type_of_industries_exp_overall },
            { id: 15, column1: 'マネジメント経験', column2: profile.management_exp },
            { id: 16, column1: '経理の経験業務', column2: profile.accounting_field_exp },
            { id: 17, column1: '企業カテゴリ', column2: profile.company_categories },
            { id: 18, column1: '希望会社カテゴリ', column2: profile.desired_company_category },
            { id: 19, column1: '保有資格', column2: profile.qualification_held },
            { id: 20, column1: '使用可能会計ソフト', column2: profile.accounting_software },
            { id: 21, column1: '希望年収', column2: profile.desired_annual_income },
            { id: 22, column1: '希望職種', column2: profile.desired_job_type },
            { id: 23, column1: '希望役職', column2: profile.desired_position },
            { id: 24, column1: '希望勤務地', column2: profile.desired_location },
          ];

          setResumeData(formattedData);
        } else {
          throw new Error('Fetched data is empty or not in expected format');
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <div className="PageHeader">
      <BackLink to="#" onClick={goBack} > <BackButton /> 戻る </BackLink>
      <p>マスキング履歴書設定</p>
    </div>
    <TableContainer component={Paper} sx={{marginBottom:'200px', boxShadow: 'none', width: 'auto', padding: '20px'}}>
      <Grid container style={{textDecoration: 'none'}} component={Link} to={'/editmaskingresume'}>
        <Grid item xs={4} style={{marginBottom: '10px', marginLeft: 'auto'}}>
          <Item style={{padding: '10px 20px', border: '1px solid #eeeeee', borderRadius: '5px', background: '#fff', maxWidth: '70px', display: 'flex', alignItems: 'center', gap: '15px', marginLeft: 'auto'}}>
            <span>
              <EditIcon />
            </span>
            <Typography variant='paragraph'>編集</Typography>
          </Item>
        </Grid>
      </Grid>
      <Table>
        <TableBody>
            {resumeData.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ color: '#16375A' }}>{row.column1 ? row.column1.split('\n').map((line, index) => <div key={index}>{line}</div>) : '-'}</TableCell>
                <TableCell sx={{ width: '60%' }}>{row.column2 ? row.column2.split('\n').map((line, index) => <div key={index}>{line}</div>) : '-'}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    <BottomNav />
  </Box>
  );
};

export default MaskingResume;
