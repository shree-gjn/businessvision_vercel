// import React, { useState, useEffect} from 'react';
// import { Grid, Paper, Typography, Button, CircularProgress, LinearProgress } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom'; 
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Divider from '@mui/material/Divider';
// import {ReactComponent as PencilEdit} from '../../assets/PencilEdit.svg';
// import {styled} from '@mui/material/styles';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
// import Modal from '@mui/material/Modal';
// import { Box, display } from '@mui/system';
// import {ReactComponent as Cancel} from '../../assets/Cancel.svg';
// import { TextField} from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import {ReactComponent as ApplicationReqOutline} from '../../assets/ApplicationReqOutline.svg';
// import DeleteIcon from '@mui/icons-material/Delete';
// import {ReactComponent as WarningIcon} from '../../assets/WarningIcon.svg';

// export default function ResumeTab() {
//   const [open, setOpen] = React.useState(false);
//   const [resume, setResume] = useState([]);
//   const [resumeType, setResumeType] = useState();
//   const [cvs, setCvs] = useState([]);
//   const [selectedResume, setSelectedResume] = useState(null);
//   const [selectedCv, setSelectedCv] = useState(null);
//   const [resumeUploadProgress, setResumeUploadProgress] = useState(0);
//   const [cvUploadProgress, setCvUploadProgress] = useState(0);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploading, setUploading] = useState(false);
//   const [uploadingResume, setUploadingResume] = useState(false);
//   const [uploadingCv, setUploadingCv] = useState(false);
//   const [itemToDelete, setItemToDelete] = useState(null);
//   const [isResume, setIsResume] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);

//   // const handleResumeChange = (event, setSelectedFile) => {
//   //   setResume(event.target.files[0]);
//   // };

//   // const handleCvChange = (event) => {
//   //   setCurriculumvitae(event.target.files[0]);
//   // };

//   // const handleResumeSubmit = () => {
//   //   if (resume) {
//   //     console.log('Selected file:', resume);
//   //     // Add your file upload logic here
//   //   }
//   // };

//   // const handleCvSubmit = () => {
//   //   if (curriculumvitae) {
//   //     console.log('Selected file:', curriculumvitae);
//   //     // Add your file upload logic here
//   //   }
//   // };

//   const handleFileChange = (event, setSelectedFile) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     // setResumeType("normal_resume");
//   };

//   const handleResumeChange = (event, setSelectedFile) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     // setResumeType("normal_resume");
//   };

//   const handleCvChange = (event, setSelectedFile) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     // setResumeType("normal_resume");
//   };

//   // const handleResumeUpload = async () => {

//   //   const authKey = sessionStorage.getItem('authKey');

//   //   if (selectedResume) {
//   //     try {
//   //       const formData = new FormData();
//   //       formData.append('auth_key', authKey); // Replace with actual auth_key
//   //       formData.append('resume_type', 'normal_resume');
//   //       formData.append('resume_file', selectedResume);

//   //       setUploading(true);
        
//   //       // Replace with your actual API endpoint
//   //       const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/candidate_resume_upload`, {
//   //         method: 'POST',
//   //         body: formData,
//   //       });
//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! Status: ${response.status}`);
//   //       }

//   //       // Process successful upload
//   //       const result = await response.json();
//   //       setResume(prev => [...prev, { cru_file_name: selectedResume.name, ...result }]);
//   //       setSelectedResume(null);
//   //     } catch (error) {
//   //       console.error('Error uploading resume:', error);
//   //     } finally {
//   //       setUploading(false);
//   //       setUploadProgress(0); // Reset progress after upload
//   //     }
//   //   }
//   // };

//   // const handleCvUpload = async () => {
//   //   const authKey = sessionStorage.getItem('authKey');
//   //   if (selectedCv) {
//   //     try {
//   //       const formData = new FormData();
//   //       formData.append('auth_key', authKey); // Replace with actual auth_key
//   //       formData.append('resume_type', 'experience_resume');
//   //       formData.append('resume_file', selectedCv);

//   //       // Replace with your actual API endpoint
//   //       const response = await fetch('https://bvhr-api.azurewebsites.net/candidate/candidate_resume_upload', {
//   //         method: 'POST',
//   //         body: formData,
//   //       });

//   //   //     if (response.ok) {
//   //   //       const result = await response.json();
//   //   //       setCvs(prev => [...prev, { name: selectedCv.name, ...result }]);
//   //   //       setSelectedCv(null);
//   //   //     } else {
//   //   //       console.error('Failed to upload CV', await response.text());
//   //   //     }
//   //   //   } catch (error) {
//   //   //     console.error('Error:', error);
//   //   //   }
//   //   // }
//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! Status: ${response.status}`);
//   //       }

//   //       const result = await response.json();
//   //       setCvs(prev => [...prev, { cru_file_name: selectedCv.name, ...result }]);
//   //       setSelectedCv(null);
//   //     } catch (error) {
//   //       console.error('Error uploading CV:', error);
//   //     } finally {
//   //       setUploading(false);
//   //       setUploadProgress(0);
//   //     }
//   //   }
//   // };

//   const uploadFile = (file, type, setState, setProgress, setUploading) => {
//     const authKey = sessionStorage.getItem('authKey');
//     const formData = new FormData();
//     formData.append('auth_key', authKey);
//     formData.append('resume_type', type);
//     formData.append('resume_file', file);

//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://bvhr-api.azurewebsites.net/candidate/candidate_resume_upload', true);

//     xhr.upload.onprogress = (event) => {
//       if (event.lengthComputable) {
//         const percentComplete = (event.loaded / event.total) * 100;
//         setProgress(percentComplete);
//       }
//     };

//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         setState((prev) => [...prev, { cru_file_name: file.name, ...response }]);
//       } else {
//         console.error('Upload failed:', xhr.responseText);
//       }
//       setUploading(false);
//       setProgress(0);
//     };

//     xhr.onerror = () => {
//       console.error('Upload error:', xhr.responseText);
//       setUploading(false);
//       setProgress(0);
//     };

//     setUploading(true);
//     xhr.send(formData);
//   };

//   const handleResumeUpload = () => {
//     if (selectedResume) {
//       uploadFile(selectedResume, 'normal_resume', setResume, setResumeUploadProgress, setUploadingResume);
//       setSelectedResume(null);
//     }
//   };

//   const handleCvUpload = () => {
//     if (selectedCv) {
//       uploadFile(selectedCv, 'experience_resume', setCvs, setCvUploadProgress, setUploadingCv);
//       setSelectedCv(null);
//     }
//   };

//   const handleUpload = (selectedFile, setType, setSelectedFile) => {
//     if (selectedFile) {
//       setType(prev => [...prev, selectedFile]);
//       setSelectedFile(null); // Clear the selected file
//     }
//   };

//   // const handleDeleteFile = (index, setType) => {
//   //   setType(prev => prev.filter((_, i) => i !== index));
//   // };

//   const handleDeleteFile = (index, isResume) => {
//     const list = isResume ? [...resume] : [...cvs]; // Create a copy of the list to avoid mutating state directly
  
//     // Check if index is valid
//     if (index >= 0 && index < list.length) {
//       setItemToDelete(index);
//       setIsResume(isResume);
//       setModalOpen(true);
//     } else {
//       console.error('Invalid index:', index);
//     }
//   };

//   const handleCancelDelete = () => {
//     console.log('Cancel deletion');
//     setModalOpen(false);
//     setItemToDelete(null);
//   };

//     // Add a state to store the uploaded file
//   const [uploadedFile, setUploadedFile] = React.useState(null);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // const handleFileSelect = (event) => {
//   //   const file = event.target.files[0];
//   //   setSelectedFile(file);
//   //   setUploadedFile(file);
//   // };
  
//   const handleOpenFileModal = () => {
//     setOpen(true);
//   };

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     boxShadow: 'none', 
//   }));

//   useEffect(() => {
//     const authKey = sessionStorage.getItem('authKey');

//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/list_candidate_resume?auth_key=${authKey}`); // Replace with your actual API endpoint
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log('Fetched data:', data); // Log fetched data to debug
//         setResume(data.candidate_resume || []); // Update state with fetched data
//         setCvs(data.candidate_Cv || []); // Update state with fetched data
//       } catch (error) {
//         console.error('Error fetching resume list:', error);
//       }
//     };
    
//     fetchData(); 
//   }, [selectedResume, selectedCv]);

//   // Filter resumes to only include those with resume_type 'normal_resume'
//   const normalResumes = resume.filter(resumeItem => resumeItem.cru_resume_type === 'normal_resume');

//   // Filter resumes to only include those with resume_type 'experience_resume'
//   const experienceResume = resume.filter(resumeItem => resumeItem.cru_resume_type === 'experience_resume');

//   const handleConfirmDelete = async (index) => {
//     const authKey = sessionStorage.getItem('authKey');
//     const list = isResume ? [...resume] : [...cvs]; // Create a copy of the list to avoid mutating state directly
//     const item = list[index];
  
//     if (!item) {
//       console.error('Item to delete is undefined');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append('auth_key', authKey);
//     formData.append('cru_id', item.cru_id);
  
//     try {
//       const response = await fetch(`https://bvhr-api.azurewebsites.net/candidate/delete_candidate_resume`, {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (response.ok) {
//         if (isResume) {
//           setResume(prev => prev.filter((_, idx) => idx !== index));
//         } else {
//           setCvs(prev => prev.filter((_, idx) => idx !== index));
//         }
//       } else {
//         console.error('Failed to delete item', await response.text());
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setModalOpen(false);
//       setItemToDelete(null);
//     }
//   };
  
  


//   return (
//     <div style={{background: 'rgb(250, 250, 250)'}}>
//       <Box>
//         <Grid container>
//           <Grid item xs={12}>
//             <Item>
//               <Typography>
//                 履歴書
//               </Typography>
//             </Item>
//             <Item sx={{
//               height: 170,
//               border: '2px dashed #ccc',
//               borderRadius: '8px',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               gap: '10px',
//               marginBottom: '10px',
//               position: 'relative',
//             }}
//             component="label">
//               <CloudUploadIcon sx={{ fontSize: 48, color: '#D6D6D6'}} />
//               <Typography variant="body1" sx={{color: '#16375A'}}>
//                 {selectedResume ? selectedResume.name : 'クリックしてファイルを選択します'}
//               </Typography>
//               <input type="file" hidden onChange={(e) => handleResumeChange(e, setSelectedResume)} />
//               {uploadingResume && (
//                 <LinearProgress
//                   variant="determinate"
//                   value={resumeUploadProgress}
//                   sx={{
//                     position: 'absolute',
//                     width: '100%',
//                     bottom: 0,
//                   }}
//                 />
//               )}
//               {selectedResume ? (
//              <Button
//              variant="contained"
//              onClick={() => handleResumeUpload(selectedResume, setResume, setSelectedResume)}
//              sx={{ marginBottom: '10px' }}
//            >
//              ファイルをアップロードする
//            </Button>
//          ) : (
//            <Button
//              variant="contained"
//              disabled // Button is disabled if no file is selected
//              sx={{ marginBottom: '10px' }}
//            >
//              ファイルをアップロードする
//            </Button>
//             )}
//             </Item>
//           </Grid>
//           <Grid item xs={12} sx={{marginBottom: '30px'}}>
//             <Item sx={{textAlign: resume.length > 0 ? 'left' : 'center', }}>
//               {/* <Typography sx={{textAlign: 'left'}}>アップロードされた履歴書</Typography> */}
//               {normalResumes.length > 0 ? 'アップロードされた履歴書' : '履歴書が選択されていません'}
//             </Item>
//             {Array.isArray(normalResumes) && normalResumes.map((resumeItem, index) => (
//               <Item
//                 key={index}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   borderBottom: '1px solid #EEEEEE',
//                   padding: '15px 0px',
//                   borderRadius: 'none',
//                   boxShadow: 'none'
//                 }}
//               >
//                 <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A' }}>
//                   <ApplicationReqOutline />{resumeItem.cru_file_name}
//                 </Typography>
//                 {/* <DeleteIcon onClick={() => handleDeleteFile(index, setResume)} /> */}
//                 <DeleteIcon onClick={() => handleDeleteFile(index, true)} />
//               </Item>
//             ))}
//             {/* <Item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', padding: '15px 0px', borderRadius: 'none', boxShadow: 'none'}}>
//               <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A'}}><ApplicationReqOutline />保存済み履歴書1</Typography>
//               <DeleteIcon />
//             </Item>
//             <Item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', padding: '15px 0px', borderRadius: 'none', boxShadow: 'none'}}>
//               <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A'}}><ApplicationReqOutline />保存済み履歴書2</Typography>
//               <DeleteIcon />
//             </Item>
//             <Item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEEEEE', padding: '15px 0px', borderRadius: 'none', boxShadow: 'none'}}>
//               <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A'}}><ApplicationReqOutline />保存済み履歴書3</Typography>
//               <DeleteIcon />
//             </Item> */}
//           </Grid>

//           <Grid item xs={12}>
//             <Item>
//               <Typography>
//                 職務経歴書
//               </Typography>
//             </Item>
//             <Item sx={{
//               height: 170,
//               border: '2px dashed #ccc',
//               borderRadius: '8px',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               gap: '10px',
//               marginBottom: '10px',
//               position: 'relative',
//             }}
//             component="label">
//               <CloudUploadIcon sx={{ fontSize: 48, color: '#D6D6D6'}} />
//               <Typography variant="body1" sx={{color: '#16375A'}}>
//                 {selectedCv ? selectedCv.name : 'クリックしてファイルを選択します'}
//               </Typography>
//               <input type="file" hidden onChange={(e) => handleCvChange(e, setSelectedCv)} />
//               {uploadingCv && (
//                 <LinearProgress
//                   variant="determinate"
//                   value={cvUploadProgress}
//                   sx={{
//                     position: 'absolute',
//                     width: '100%',
//                     bottom: 0,
//                   }}
//                 />
//               )}
//               {selectedCv ? (
//                <Button
//                variant="contained"
//                onClick={() => handleCvUpload(selectedCv, setCvs, setSelectedCv)}
//                sx={{ marginBottom: '10px' }}
//              >
//                ファイルをアップロードする
//              </Button>
//            ) : (
//              <Button
//                variant="contained"
//                disabled // Button is disabled if no file is selected
//                sx={{ marginBottom: '10px' }}
//              >
//                ファイルをアップロードする
//              </Button>
//             )}
//             </Item>
//           </Grid>
//           <Grid item xs={12}>
//             <Item sx={{textAlign: experienceResume.length > 0 ? 'left' : 'center', }}>
//               {/* <Typography sx={{textAlign: 'left'}}>アップロードされた職歴プロフィール</Typography> */}
//               {experienceResume.length > 0 ? 'アップロードされた職歴プロフィール' : '履歴書が選択されていません'}
//             </Item>
//             {/* {cvs.map((cv, index) => (
//               <Item
//                 key={index}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   borderBottom: '1px solid #EEEEEE',
//                   padding: '15px 0px',
//                   borderRadius: 'none',
//                   boxShadow: 'none',
//                   textAlign: 'left',
//                 }}
//               >
//                 <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A' }}>
//                   <ApplicationReqOutline />{cv.name}
//                 </Typography>
//                 <DeleteIcon onClick={() => handleDeleteFile(index, setCvs)} />
//               </Item>
//             ))} */}
//             {Array.isArray(experienceResume) && experienceResume.map((cv, index) => (
//               <Item
//                 key={index}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'space-between',
//                   borderBottom: '1px solid #EEEEEE',
//                   padding: '15px 0px',
//                   borderRadius: 'none',
//                   boxShadow: 'none'
//                 }}
//               >
//                 <Typography sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#16375A' }}>
//                   <ApplicationReqOutline />{cv.cru_file_name}
//                 </Typography>
//                 {/* <DeleteIcon onClick={() => handleDeleteFile(index, setResume)} /> */}
//                 <DeleteIcon onClick={() => handleDeleteFile(index, true)} />
                
//               </Item>
//             ))}
//           </Grid>
//         </Grid>
//       </Box>

//       <Modal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         aria-labelledby="delete-modal-title"
//         aria-describedby="delete-modal-description"
//       >
//         <Box sx={{ 
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 250,
//           bgcolor: 'background.paper',
//           borderRadius: '20px',
//           boxShadow: 24,
//           textAlign: 'center',
//           p: 4,
//         }}>
//           {/* <Typography id="delete-modal-title" variant="h6" component="h2" gutterBottom>
//             消去してもよろしいですか
//           </Typography> */}
//           <WarningIcon sx={{marginBottom: '20px'}} />
//           <Typography id="delete-modal-description" sx={{ marginBottom: 2 , marginTop: 1}}>
//           消去してもよろしいですか
//           </Typography>
//           <Button variant="contained" color='grey' onClick={() => setModalOpen(false)} sx={{color: '#fff'}}>キャンセル</Button>
//           <Button variant="contained" onClick={() => handleConfirmDelete(itemToDelete)} sx={{ ml: 2, background: '#F96264'}}>削除する</Button>
//         </Box>
//       </Modal>

//     </div>
//   );
// }


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
import {ReactComponent as WarningIcon} from '../../assets/WarningIcon.svg';

export default function ResumeTab() {
  const [open, setOpen] = React.useState(false);
  const [resume, setResume] = useState([]);
  const [resumeType, setResumeType] = useState();
  const [cvs, setCvs] = useState([]);
  const [selectedResume, setSelectedResume] = useState(null);
  const [selectedCv, setSelectedCv] = useState(null);
  const [resumeUploadProgress, setResumeUploadProgress] = useState(0);
  const [cvUploadProgress, setCvUploadProgress] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadingResume, setUploadingResume] = useState(false);
  const [uploadingCv, setUploadingCv] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isResume, setIsResume] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // const handleFileChange = (event, setSelectedFile) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };

  // const handleResumeChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedResume(file);
  //   if (file) {
  //     uploadFile(file, 'normal_resume', setResume, setResumeUploadProgress, setUploadingResume);
  //   }
  // };

  // const handleCvChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedCv(file);
  //   if (file) {
  //     uploadFile(file, 'experience_resume', setCvs, setCvUploadProgress, setUploadingCv);
  //   }
  // };
  
  const handleFileChange = (event, setSelectedFile, type) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      uploadFile(file, type, type === 'normal_resume' ? setResume : setCvs, type === 'normal_resume' ? setResumeUploadProgress : setCvUploadProgress, type === 'normal_resume' ? setUploadingResume : setUploadingCv);
    }
  };

  const handleResumeChange = (event) => {
    handleFileChange(event, setSelectedResume, 'normal_resume');
  };

  const handleCvChange = (event) => {
    handleFileChange(event, setSelectedCv, 'experience_resume');
  };
  
  const uploadFile = (file, type, setState, setProgress, setUploading) => {
    const authKey = sessionStorage.getItem('authKey');
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('resume_type', type);
    formData.append('resume_file', file);

    console.log(`Uploading file: ${file.name}, type: ${type}`); // Debugging log

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://bvhr-api.azurewebsites.net/candidates/upload_resume', true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        setState((prev) => [...prev, { file_name: file.name, ...response }]);
      } else {
        console.error('Upload failed:', xhr.responseText);
      }
      setUploading(false);
      setProgress(0);
    };

    xhr.onerror = () => {
      console.error('Upload error:', xhr.responseText);
      setUploading(false);
      setProgress(0);
    };

    console.log(`Uploading file: ${file.name}, type: ${type}`);
    setUploading(true);
    xhr.send(formData);
  };

  const handleResumeUpload = () => {
    if (selectedResume) {
      uploadFile(selectedResume, 'normal_resume', setResume, setResumeUploadProgress, setUploadingResume);
      setSelectedResume(null);
    }
  };

  const handleCvUpload = () => {
    if (selectedCv) {
      uploadFile(selectedCv, 'experience_resume', setCvs, setCvUploadProgress, setUploadingCv);
      setSelectedCv(null);
    }
  };

  const handleUpload = (selectedFile, setType, setSelectedFile) => {
    if (selectedFile) {
      setType(prev => [...prev, selectedFile]);
      setSelectedFile(null); // Clear the selected file
    }
  };

  // const handleDeleteFile = (index, setType) => {
  //   setType(prev => prev.filter((_, i) => i !== index));
  // };

  const handleDeleteFile = (index, isResume) => {
    const list = isResume ? [...resume] : [...cvs]; // Create a copy of the list to avoid mutating state directly
  
    // Check if index is valid
    if (index >= 0 && index < list.length) {
      setItemToDelete(index);
      setIsResume(isResume);
      setModalOpen(true);
    } else {
      console.error('Invalid index:', index);
    }
  };

  const handleCancelDelete = () => {
    console.log('Cancel deletion');
    setModalOpen(false);
    setItemToDelete(null);
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
        const response = await fetch(`https://bvhr-api.azurewebsites.net/candidates/list_all_resumes?auth_key=${authKey}`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log fetched data to debug
        setResume(data.resume_details.filter(item => item.resume_type === 'normal_resume') || []);
        setCvs(data.resume_details.filter(item => item.resume_type === 'experience_resume') || []);
      } catch (error) {
        console.error('Error fetching resume list:', error);
      }
    };
    
    fetchData(); 
  }, [selectedResume, selectedCv]);

  // Filter resumes to only include those with resume_type 'normal_resume'
  const normalResumes = resume.filter(resumeItem => resumeItem.resume_type === 'normal_resume');

  // Filter resumes to only include those with resume_type 'experience_resume'
  // const experienceResume = resume.filter(resumeItem => resumeItem.resume_type === 'experience_resume');

  const experienceResume = cvs.filter(cvItem => cvItem.resume_type === 'experience_resume');

  const handleConfirmDelete = async (index) => {
    const authKey = sessionStorage.getItem('authKey');
    const list = isResume ? [...resume] : [...cvs]; // Create a copy of the list to avoid mutating state directly
    const item = list[index];
  
    if (!item) {
      console.error('Item to delete is undefined');
      return;
    }
  
    const formData = new FormData();
    formData.append('auth_key', authKey);
    formData.append('resume_id', item.cru_id);
  
    try {
      const response = await fetch(`https://bvhr-api.azurewebsites.net/candidates/delete_resume`, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        if (isResume) {
          setResume(prev => prev.filter((_, idx) => idx !== index));
        } else {
          setCvs(prev => prev.filter((_, idx) => idx !== index));
        }
      } else {
        console.error('Failed to delete item', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setModalOpen(false);
      setItemToDelete(null);
    }
  };
  
  


  return (
    <div style={{background: 'rgb(250, 250, 250)'}}>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Item>
              <Typography sx={{textAlign: 'left'}}>
                履歴書
              </Typography>
            </Item>
            <Item>
              <input
                accept=".pdf,.doc,.docx,.txt"
                style={{ display: 'none' }}
                id="resume-upload"
                type="file"
                onChange={handleResumeChange}
              />
              <label htmlFor="resume-upload">
                <Button variant="outlined" component="span" sx={{gap: '10px', width: '100%', marginBottom: '10px'}}>
                  <CloudUploadIcon sx={{ fontSize: 20, color: '#D6D6D6'}} />
                  <Typography>ファイルを選択してアップロード</Typography> 
                </Button>
              </label>
              <label style={{color: '#999', fontSize: '12px'}}>対応ファイル:  最大2MB, PDF, Word, Excel</label>
              {/* {selectedResume && (
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Selected file: {selectedResume.name}
                </Typography>
              )} */}
            </Item>
          </Grid>
          <Grid item xs={12} sx={{marginBottom: '30px'}}>
            <Item sx={{textAlign: resume.length > 0 ? 'left' : 'center', }}>
              {/* <Typography sx={{textAlign: 'left'}}>アップロードされた履歴書</Typography> */}
              {resume.length > 0 ? 'アップロードされた履歴書' : '履歴書が選択されていません'}
            </Item>
            {resume.map((resumeItem, index) => (
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
                  <ApplicationReqOutline />{resumeItem.file_name}
                </Typography>
                {/* <DeleteIcon onClick={() => handleDeleteFile(index, setResume)} /> */}
                <DeleteIcon onClick={() => handleDeleteFile(index, true)} />
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
              <Typography sx={{textAlign: 'left'}}>
                職務経歴書
              </Typography>
            </Item>
            <Item>
              <input
                accept=".pdf,.doc,.docx,.txt"
                style={{ display: 'none' }}
                id="cv-upload"
                type="file"
                onChange={handleCvChange}
              />
              <label htmlFor="cv-upload">
                <Button variant="outlined" component="span" sx={{gap: '10px', width: '100%', marginBottom: '10px'}}>
                  <CloudUploadIcon sx={{ fontSize: 20, color: '#D6D6D6'}} />
                  <Typography>ファイルを選択してアップロード</Typography> 
                </Button>
              </label>
              <label style={{color: '#999', fontSize: '12px'}}>対応ファイル:  最大2MB, PDF, Word, Excel</label>
              {/* {selectedCv && (
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  Selected file: {selectedCv.name}
                </Typography>
              )} */}
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{textAlign: cvs.length > 0 ? 'left' : 'center', }}>
              {/* <Typography sx={{textAlign: 'left'}}>アップロードされた職歴プロフィール</Typography> */}
              {cvs.length > 0 ? 'アップロードされた職歴プロフィール' : '履歴書が選択されていません'}
            </Item>
            {/* {cvs.map((cv, index) => (
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
            ))} */}
            {cvs.map((cvItem, index) => (
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
                  <ApplicationReqOutline />{cvItem.file_name}
                </Typography>
                {/* <DeleteIcon onClick={() => handleDeleteFile(index, setResume)} /> */}
                <DeleteIcon onClick={() => handleDeleteFile(index, true)} />
                
              </Item>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 250,
          bgcolor: 'background.paper',
          borderRadius: '20px',
          boxShadow: 24,
          textAlign: 'center',
          p: 4,
        }}>
          {/* <Typography id="delete-modal-title" variant="h6" component="h2" gutterBottom>
            消去してもよろしいですか
          </Typography> */}
          <WarningIcon sx={{marginBottom: '20px'}} />
          <Typography id="delete-modal-description" sx={{ marginBottom: 2 , marginTop: 1}}>
          消去してもよろしいですか
          </Typography>
          <Button variant="contained" color='grey' onClick={() => setModalOpen(false)} sx={{color: '#fff'}}>キャンセル</Button>
          <Button variant="contained" onClick={() => handleConfirmDelete(itemToDelete)} sx={{ ml: 2, background: '#F96264'}}>削除する</Button>
        </Box>
      </Modal>

    </div>
  );
}


