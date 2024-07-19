import React, { useEffect, useState } from 'react';
import { Box, IconButton, Modal, Tabs, Tab, CircularProgress } from '@mui/material';
import { ExpandMore, ExpandLess, Close } from '@mui/icons-material';
import {ReactComponent as ExpandIcon} from '../assets/ExpandIcon.svg';

const PDFViewer = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleToggleCollapse = () => setIsCollapsed(!isCollapsed);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setIsCollapsed(false);  // Automatically expand on tab click
    if (newValue === 0) {
      setFileUrl('https://view.officeapps.live.com/op/embed.aspx?src=http://www.learningaboutelectronics.com/Articles/Example.xlsx');
    } else if (newValue === 1) {
      setFileUrl('https://view.officeapps.live.com/op/embed.aspx?src=https://bvhr-api.azurewebsites.net/company/view_sample_excel');
    }
    setLoading(true);  // Show loading spinner when the tab changes
  };

  useEffect(() => {
    // Set the initial URL for the first tab
    setFileUrl('https://view.officeapps.live.com/op/embed.aspx?src=http://www.learningaboutelectronics.com/Articles/Example.xlsx');
    setLoading(true);
  }, []);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <Box>
      <Box sx={{ position: 'relative', height: isCollapsed ? '50px' : '320px', margin: '20px 0', mb: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="File Tabs" sx={{ display: 'contents' }}>
            <Tab label="履歴書" />
            <Tab label="職務経歴書" />
          </Tabs>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <IconButton onClick={handleToggleCollapse} style={{ zIndex: 10 }}>
                {isCollapsed ? <ExpandMore /> : <ExpandLess />}
              </IconButton>
              <IconButton onClick={handleOpenModal} style={{ zIndex: 10 }}>
                <img src={ExpandIcon} alt="ExpandIcon" style={{ width: '16px', mt: 1 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        {!isCollapsed && (
          <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            {loading && <CircularProgress size={24} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />}
            <iframe
              src={fileUrl}
              title="file-viewer-main"
              style={{ width: '100%', height: '100%', border: 'none' }}
              onLoad={handleIframeLoad}
            />
          </Box>
        )}
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', backgroundColor: 'white', boxShadow: 24, p: 4, overflow: 'hidden' }}>
          <IconButton onClick={handleCloseModal} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
            <Close />
          </IconButton>
          {loading && <CircularProgress size={24} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />}
          <iframe
            src={fileUrl}
            title="file-viewer-modal"
            style={{ width: '100%', height: '100%', border: 'none' }}
            onLoad={handleIframeLoad}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default PDFViewer;