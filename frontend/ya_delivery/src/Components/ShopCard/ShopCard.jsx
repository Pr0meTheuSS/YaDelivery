import './ShopCard.css';
import logo from '../Assets/base-shop-image.png'
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const ShopCard = ({ id, name }) => {
    const [shopData, setShopData] = useState({ id: id, name: name, description : '' });

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `shops/` + id;
        navigate(path);
    }

    const openCardPage = () => {
        routeChange();
    }

    return (
        <Grid item sx={6}>
            <Box item onClick={openCardPage}
                my={4}
                display="flex"
                alignItems="center"
                sx={{ p: 2, bgcolor: 'rgba(83, 83, 83, .5)', borderRadius: '8px', '&:hover': { backgroundColor: '#444' } }}>

                <img src={logo} alt="Изображение магазина не установлено"></img>
                <div className='text-data-wrapper'>
                    <div><h2 className='text shop-name'> {shopData.id} - {shopData.name}</h2></div>
                    <div><h4 className='text address'>Адрес магазина</h4></div>
                </div>

            </Box>
        </Grid>
    )
}

export default ShopCard;
