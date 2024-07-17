import React, { useState, useEffect} from 'react';
// import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {FormControlLabel,RadioGroup, Radio, FormControl, FormLabel,Checkbox, MenuItem, TextField, Multiline, Button} from '@mui/material';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
// import { Button } from '@mui/material';
import {ReactComponent as Accounting} from '../assets/Accounting.svg'
import {styled, createTheme, ThemeProvider } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

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

const skilllevel = [
  { level: 'L4', description: '指導・管理できる' },
  { level: 'L3', description: '自身で判断しながら処理することができる' },
  { level: 'L2', description: '指導を受けながら一通り処理することができる' },
  { level: 'L1', description: '指導を受けながら一部処理することができる' },
  { level: 'L0', description: '実務経験がない' }
];

const SkillSearch = () => {
  const [selectedValues, setSelectedValues] = React.useState({
    group1: '',
    group2: '',
    group3: '',
    group4: '',
    group5: '',
    group6: '',
    group7: '',
    group8: '',
    group9: '',
    group10: '',
    group11: '',
    group12: '',
  });

  const controlProps = (item, selectedValue, handleChange) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const [tooltipOpen, setTooltipOpen] = useState({
    tooltip1: false,
    tooltip2: false,
    tooltip3: false,
    tooltip4: false,
    tooltip5: false,
    tooltip6: false,
    tooltip7: false,
    tooltip8: false,
    tooltip9: false,
    tooltip10: false,
    tooltip11: false,
    tooltip12: false,
  });

  const handleTooltipOpen = (tooltip) => {
    setTooltipOpen({ ...tooltipOpen, [tooltip]: true });
  };

  const handleTooltipClose = (tooltip) => {
    setTooltipOpen({ ...tooltipOpen, [tooltip]: false });
  };

  const handleChange = (event, group) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [group]: event.target.value
    }));
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sx={{marginTop: '20px', marginBottom: '20px'}}>
            <Item sx={{display: 'flex', alignItems: 'center', gap: '10px', padding: '0', marginBottom: '10px'}}>
              <Typography sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span><Accounting sx={{fontSize: '25px', display: 'block'}} /></span>
                経理スキル
              </Typography>
            </Item>
            <TableContainer sx={{marginBottom: '20px', border: '1px solid rgba(224, 224, 224, 1)'}}>
              <Table>
                <TableBody>
                  {skilllevel.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" sx={{background: '#2F75B5'}}>
                        <Typography variant="h6" sx={{fontSize: '12px', fontWeight: '600', color: '#fff'}}>{item.level}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{fontSize: '12px'}}>{item.description}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
           
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{width: '48%'}}>
                  </TableCell>
                  <TableCell sx={{width: '52%', display: 'flex', gap: '25px'}}>
                    <Typography sx={{fontSize: '12px'}}>L0</Typography>
                    <Typography sx={{fontSize: '12px'}}>L1</Typography>
                    <Typography sx={{fontSize: '12px'}}>L2</Typography>
                    <Typography sx={{fontSize: '12px'}}>L3</Typography>
                    <Typography sx={{fontSize: '12px'}}>L4</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
           </TableContainer>

            <TableContainer sx={{border: '1px solid rgba(224, 224, 224, 1)'}}>
              <Table>
                <TableBody>
                  <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>日次取引仕訳 
                     <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip1')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip1')}
                            open={tooltipOpen.tooltip1}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="現金入出金、預金入出金、一般経理、源泉所得税、給与、社会保険、預金利息、配当金、消費税区分、インボイス"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip1')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group1} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group1')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>月次決算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip2')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip2')}
                            open={tooltipOpen.tooltip2}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="売上計上、仕入計上、在庫計上、売掛金・買掛金・未払金残高照会、消費税チェック、納税関連仕訳"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip2')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group2} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group2')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>本決算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip3')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip3')}
                            open={tooltipOpen.tooltip3}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="減価償却費、前払費用、未払費用、引当金、貸倒損失、未払給与、未払社会保険、棚卸資産、仕掛品、仮受仮払消費税チェック、未払消費税、未払法人税等"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip3')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group3} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group3')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>予算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip4')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip4')}
                            open={tooltipOpen.tooltip4}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="予算作成、実績分析"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip4')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group4} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group4')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>給与計算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip5')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip5')}
                            open={tooltipOpen.tooltip5}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="給与計算、控除計算（所得税、住民税、社会保険料）、所得税・住民税納付、社会保険料納付"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip5')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group5} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group5')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>社会保険 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip6')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip6')}
                            open={tooltipOpen.tooltip6}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="入退社事務、算定基礎届、賞与支払届、離職票、労働保険申告、産前産後休暇、育児休暇"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip6')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group6} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group6')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>消費税 
                      <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip7')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip7')}
                            open={tooltipOpen.tooltip7}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="インボイス、消費税区分、仮受仮払消費税チェック、簡易課税、免税判定、仕入税額控除（個別対応・一括比例）、課税売上手割合、消費税計算、税務申告書作成"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip7')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group7} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group7')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>法人税ほか 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip8')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip8')}
                          open={tooltipOpen.tooltip8}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="申告基礎資料、外形標準課税、税務申告書作成"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip8')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group8} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group8')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>監査対象決算 子会社 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip9')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip9')}
                          open={tooltipOpen.tooltip9}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="資産除去債務、減損会計、収益認識会計、税効果会計"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip9')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group9} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group9')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>監査対象決算 親会社
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip10')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip10')}
                          open={tooltipOpen.tooltip10}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="資産除去債務、減損会計、研究開発費、金融商品会計、収益認識会計、退職給付会計、企業融合会計、リース会計、ストックオプション会計、税効果会計"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip10')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group10} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group10')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>連結決算
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip11')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip11')}
                          open={tooltipOpen.tooltip11}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="連結会計、持分法、連結財務諸表、注記情報、セグメント情報"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip11')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group11} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group11')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>開示書類
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip12')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip12')}
                          open={tooltipOpen.tooltip12}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="キャッシュフロー計算書、決算短信、四半期報告書、有価証券報告書、関連当事者情報、時価情報、注記情報"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip12')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group12} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group12')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
               
                </TableBody>
                
            
                  {/* <TableBody>
                  {tooltips.map(({ key, title, label, group }) => (
                    <>
                    <TableRow key={key} sx={{width: '100%'}}>
                      <TableCell align="center" sx={{width: '48%'}}>
                        <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>日次取引仕訳 
                          {label}
                          <CustomTooltip
                            tooltipKey={key}
                            open={tooltipOpen[key] || false}
                            title={title}
                            handleTooltipOpen={handleTooltipOpen}
                            handleTooltipClose={handleTooltipClose}
                          />
                        </Typography>
                      </TableCell>
                      <TableCell sx={{width: '52%', padding: '0'}}>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={selectedValues.group1} // Add this line to set the value of the RadioGroup
                        onChange={(event) => handleChange(event, 'group1')}
                        sx={{display: 'block', textAlign: 'right'}}
                      >
                      <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                      <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                      <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                      <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                      <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group1, (event) => handleChange(event, 'group1'))} size="small" />} />
                      </RadioGroup>
                      </TableCell>
                    </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>月次決算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip2')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip2')}
                            open={tooltipOpen.tooltip2}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="売上計上、仕入計上、在庫計上、売掛金・買掛金・未払金残高照会、消費税チェック、納税関連仕訳"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip2')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group2} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group2')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group2, (event) => handleChange(event, 'group2'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>本決算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip3')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip3')}
                            open={tooltipOpen.tooltip3}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="減価償却費、前払費用、未払費用、引当金、貸倒損失、未払給与、未払社会保険、棚卸資産、仕掛品、仮受仮払消費税チェック、未払消費税、未払法人税等"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip3')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group3} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group3')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group3, (event) => handleChange(event, 'group3'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>予算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip4')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip4')}
                            open={tooltipOpen.tooltip4}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="予算作成、実績分析"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip4')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group4} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group4')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group4, (event) => handleChange(event, 'group4'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>給与計算 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip5')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip5')}
                            open={tooltipOpen.tooltip5}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="給与計算、控除計算（所得税、住民税、社会保険料）、所得税・住民税納付、社会保険料納付"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip5')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group5} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group5')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group5, (event) => handleChange(event, 'group5'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>社会保険 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip6')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip6')}
                            open={tooltipOpen.tooltip6}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="入退社事務、算定基礎届、賞与支払届、離職票、労働保険申告、産前産後休暇、育児休暇"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip6')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group6} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group6')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group6, (event) => handleChange(event, 'group6'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>消費税 
                      <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip7')} sx={{lineHeight: 'initial'}}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={() => handleTooltipClose('tooltip7')}
                            open={tooltipOpen.tooltip7}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="インボイス、消費税区分、仮受仮払消費税チェック、簡易課税、免税判定、仕入税額控除（個別対応・一括比例）、課税売上手割合、消費税計算、税務申告書作成"
                          >
                            <HelpIcon onClick={() => handleTooltipOpen('tooltip7')} sx={{fontSize: '1.3rem'}} />
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group7} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group7')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group7, (event) => handleChange(event, 'group7'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>法人税ほか 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip8')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip8')}
                          open={tooltipOpen.tooltip8}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="申告基礎資料、外形標準課税、税務申告書作成"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip8')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group8} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group8')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group8, (event) => handleChange(event, 'group8'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>監査対象決算 子会社 
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip9')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip9')}
                          open={tooltipOpen.tooltip9}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="資産除去債務、減損会計、収益認識会計、税効果会計"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip9')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group9} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group9')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group9, (event) => handleChange(event, 'group9'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>監査対象決算 親会社
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip10')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip10')}
                          open={tooltipOpen.tooltip10}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="資産除去債務、減損会計、研究開発費、金融商品会計、収益認識会計、退職給付会計、企業融合会計、リース会計、ストックオプション会計、税効果会計"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip10')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group10} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group10')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group10, (event) => handleChange(event, 'group10'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>連結決算
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip11')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip11')}
                          open={tooltipOpen.tooltip11}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="連結会計、持分法、連結財務諸表、注記情報、セグメント情報"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip11')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group11} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group11')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group11, (event) => handleChange(event, 'group11'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                <TableRow sx={{width: '100%'}}>
                  <TableCell align="center" sx={{width: '48%'}}>
                    <Typography variant="h6" sx={{fontSize: '12px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '5px'}}>開示書類
                    <ClickAwayListener onClickAway={() => handleTooltipClose('tooltip12')} sx={{lineHeight: 'initial'}}>
                      <div>
                        <Tooltip
                          PopperProps={{
                            disablePortal: true,
                          }}
                          onClose={() => handleTooltipClose('tooltip12')}
                          open={tooltipOpen.tooltip12}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="キャッシュフロー計算書、決算短信、四半期報告書、有価証券報告書、関連当事者情報、時価情報、注記情報"
                        >
                          <HelpIcon onClick={() => handleTooltipOpen('tooltip12')} sx={{fontSize: '1.3rem'}} />
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{width: '52%', padding: '0'}}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={selectedValues.group12} // Add this line to set the value of the RadioGroup
                    onChange={(event) => handleChange(event, 'group12')}
                    sx={{display: 'block', textAlign: 'right'}}
                  >
                    <FormControlLabel sx={{ marginRight: '10px' }} value="L0" control={<Radio {...controlProps('L0', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L1" control={<Radio {...controlProps('L1', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L2" control={<Radio {...controlProps('L2', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L3" control={<Radio {...controlProps('L3', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  <FormControlLabel sx={{ marginRight: '10px' }} value="L4" control={<Radio {...controlProps('L4', selectedValues.group12, (event) => handleChange(event, 'group12'))} size="small" />} />
                  </RadioGroup>
                  </TableCell>
                </TableRow>
                    </>
                  ))}
                </TableBody> */}
              </Table>
            </TableContainer>
          </Grid>
    </ThemeProvider>
  );
};

export default SkillSearch;
