import React from 'react';
import { AppBar, Toolbar, IconButton, Button,  Avatar } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CustomAppBar = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  const goOnCartPage = () => {
    routeChange('/cart');
  }

  const goOnAccountPage = () => {
    routeChange('/account');
  }
  const goOnMainPage = () => {
    routeChange('/');
  }

  return (
    <AppBar position="fixed" sx={{bgcolor: '#ccc'}}>
      <Toolbar>
        <Button onClick={goOnMainPage} variant="h6" color="#333">
          Доставушки
        </Button>
        <IconButton onClick={goOnCartPage} color="#333" aria-label="Корзина">
          <ShoppingCart />
        </IconButton>
        <IconButton onClick={goOnAccountPage} color="#333" aria-label="Личный кабинет">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
