import React from 'react';
import { AppBar, Toolbar, IconButton, Typography,  Avatar } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CustomAppBar = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  const goOnCartPage = () => {
    alert('openCartPage');
    routeChange('cart');
  }

  const goOnAccountPage = () => {
    alert('openAccountPage');
    routeChange('account');
  }


  return (
    <AppBar position="fixed" sx={{bgcolor: '#ccc'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Доставушки
        </Typography>
        <IconButton onClick={goOnCartPage} color="#333" aria-label="Корзина">
          <ShoppingCart />
        </IconButton>
        <IconButton onClick={goOnAccountPage} color="#333" aria-label="Личный кабинет">
          <AccountCircle />
        </IconButton>
        <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
