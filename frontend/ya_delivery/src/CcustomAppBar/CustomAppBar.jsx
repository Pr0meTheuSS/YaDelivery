import React from 'react';
import { AppBar, Toolbar, IconButton, Typography,  Avatar } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';

const CustomAppBar = () => {
  return (
    <AppBar position="fixed" sx={{bgcolor: '#ccc'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Доставушки
        </Typography>
        <IconButton color="#333" aria-label="Корзина">
          <ShoppingCart />
        </IconButton>
        <IconButton color="#333" aria-label="Личный кабинет">
          <AccountCircle />
        </IconButton>
        <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
