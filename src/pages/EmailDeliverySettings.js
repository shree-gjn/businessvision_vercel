import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';  // Import Button component
import BottomNav from '../components/BottomNav';
import { ReactComponent as BackButton } from '../assets/BackButton.svg';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

const BackLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#16375A',
  fontSize: '12px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  paddingLeft: '10px',
  marginTop: '10px',
  marginBottom: '8px',
}));

const EmailDeliverySettings = () => {
  const [toggleState, setToggleState] = useState([false, false, false, false]);

  const handleToggleChange = (index) => {
    const updatedToggles = [...toggleState];
    updatedToggles[index] = !updatedToggles[index];
    setToggleState(updatedToggles);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <BackLink to="#" onClick={goBack}>
        <BackButton /> 戻る
      </BackLink>
      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>おすすめ求人求人設定</TableCell>
              <TableCell>
                <Switch
                  checked={toggleState[0]}
                  onChange={() => handleToggleChange(0)}
                />
                オン
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>経験業種・職種 <br />
業界おすすめメール</TableCell>
              <TableCell>
                <Switch
                  checked={toggleState[1]}
                  onChange={() => handleToggleChange(1)}
                />
                オン
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>希望業種・職種 <br />
業界おすすめメール</TableCell>
              <TableCell>
                <Switch
                  checked={toggleState[2]}
                  onChange={() => handleToggleChange(2)}
                />
                オン
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SMS（ショットメッセージ） <br />
配信</TableCell>
              <TableCell>
                <Switch
                  checked={toggleState[3]}
                  onChange={() => handleToggleChange(3)}
                />
                オン
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Button variant="contained" color="primary" onClick={() => console.log("Button Clicked")}>
      変更内容を保存
      </Button>
      <BottomNav />
    </Box>
  );
};

export default EmailDeliverySettings;
