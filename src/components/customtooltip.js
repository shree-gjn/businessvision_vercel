import React from 'react';
import { ClickAwayListener, Tooltip, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const CustomTooltip = ({ tooltipKey, open, title, handleTooltipOpen, handleTooltipClose }) => (
  <ClickAwayListener onClickAway={() => handleTooltipClose(tooltipKey)} sx={{ lineHeight: 'initial' }}>
    <div>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={() => handleTooltipClose(tooltipKey)}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={title}
      >
        <IconButton onClick={() => handleTooltipOpen(tooltipKey)} sx={{ fontSize: '1.3rem' }}>
          <HelpIcon />
        </IconButton>
      </Tooltip>
    </div>
  </ClickAwayListener>
);

export default CustomTooltip;
