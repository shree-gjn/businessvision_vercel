import React, { useState, useEffect} from 'react';
import { Grid, Paper, Typography, Button, CircularProgress, LinearProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import {ReactComponent as PencilEdit} from '../../assets/PencilEdit.svg';
import {styled} from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Modal from '@mui/material/Modal';
import { Box, display } from '@mui/system';
import {ReactComponent as Cancel} from '../../assets/Cancel.svg';
import { TextField} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {ReactComponent as ApplicationReqOutline} from '../../assets/ApplicationReqOutline.svg';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ResumeTab() {
  const [open, setOpen] = React.useState(false);
  const [resume, setResume] = useState([]);
  const [resumeType, setResumeType] = useState();
  const [cvs, setCvs] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const [selectedCv, setSelectedCv] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

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
    // setResumeType("normal_resume");
  };

  const handleResumeChange = (event, setSelectedFile) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // setResumeType("normal_resume");
  };

  const handleCvChange = (event, setSelectedFile) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // setResumeType("normal_resume");
  };

  const handleResumeUpload = async () => {

    const authKey = sessionStorage.getItem('authKey');

    if (selectedResume) {
      try {
        const formData = new FormData();
        formData.append('auth_key', authKey); // Replace with actual auth_key
        formData.append('resume_type', 'normal_resume');
        formData.append('resume_file', selectedResume);

        setUploading(true);
        
        // Replace with your actual API endpoint
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/candidate_resume_upload`, {
          method: 'POST',
          body: formData,
        });

      //   if (response.ok) {
      //     const result = await response.json();
      //     setResume(prev => [...prev, { name: selectedResume.name, ...result }]);
      //     setSelectedResume(null);
      //   } else {
      //     console.error('Failed to upload resume', await response.text());
      //   }
      // } catch (error) {
      //   console.error('Error:', error);
      // }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Process successful upload
        const result = await response.json();
        setResume(prev => [...prev, { name: selectedResume.name, ...result }]);
        setSelectedResume(null);
      } catch (error) {
        console.error('Error uploading resume:', error);
      } finally {
        setUploading(false);
        setUploadProgress(0); // Reset progress after upload
      }
    }
  };

  const handleCvUpload = async () => {
    const authKey = sessionStorage.getItem('authKey');
    if (selectedCv) {
      try {
        const formData = new FormData();
        formData.append('auth_key', authKey); // Replace with actual auth_key
        formData.append('resume_type', 'experience_resume');
        formData.append('resume_file', selectedCv);

        // Replace with your actual API endpoint
        const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/candidate_resume_upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setCvs(prev => [...prev, { name: selectedCv.name, ...result }]);
          setSelectedCv(null);
        } else {
          console.error('Failed to upload CV', await response.text());
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
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

  useEffect(() => {
    const authKey = sessionStorage.getItem('authKey');

    const fetchData = async () => {
      try {
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_candidate_resume?auth_key=${authKey}`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log fetched data to debug
        setResume(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching resume list:', error);
      }
    };
    
    fetchData(); 
  }, []);

  return (
    <div style={{background: 'rgb(250, 250, 250)'}}>
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
              marginBottom: '10px',
              position: 'relative',
            }}
            component="label">
              <CloudUploadIcon sx={{ fontSize: 48, color: '#D6D6D6'}} />
              <Typography variant="body1" sx={{color: '#16375A'}}>
                {selectedResume ? selectedResume.name : 'クリックしてファイルを選択します'}
              </Typography>
              <input type="file" hidden onChange={(e) => handleResumeChange(e, setSelectedResume)} />
              {uploading && (
              <LinearProgress
                variant="determinate"
                value={uploadProgress}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  bottom: 0,
                }}
              />
            )}
              {selectedResume ? (
             <Button
             variant="contained"
             onClick={() => handleResumeUpload(selectedResume, setResume, setSelectedResume)}
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
            <Item sx={{textAlign: resume.length > 0 ? 'left' : 'center', }}>
              {/* <Typography sx={{textAlign: 'left'}}>アップロードされた履歴書</Typography> */}
              {resume.length > 0 ? 'アップロードされた履歴書' : '履歴書が選択されていません'}
            </Item>
            {Array.isArray(resume) && resume.map((resumeItem, index) => (
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
                  <ApplicationReqOutline />{resumeItem.cru_file_name}
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
              <input type="file" hidden onChange={(e) => handleCvChange(e, setSelectedCv)} />
              {selectedCv ? (
               <Button
               variant="contained"
               onClick={() => handleCvUpload(selectedCv, setCvs, setSelectedCv)}
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
            <Item sx={{textAlign: cvs.length > 0 ? 'left' : 'center', }}>
              {/* <Typography sx={{textAlign: 'left'}}>アップロードされた職歴プロフィール</Typography> */}
              {cvs.length > 0 ? 'アップロードされた職歴プロフィール' : '履歴書が選択されていません'}
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
