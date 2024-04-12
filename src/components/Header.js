import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign:"center"
});

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6">
        Todo App
        </StyledTypography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
