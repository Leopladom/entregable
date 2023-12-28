
import * as React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function MyAppBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    const cartSection = document.getElementById('bottom');
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '80px' }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit" onClick={scrollToTop}>ShopCart</Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" onClick={scrollToBottom}>Carrito</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
