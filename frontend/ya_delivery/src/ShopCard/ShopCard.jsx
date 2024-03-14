import './ShopCard.css';
import logo from '../assets/base-shop-image.png'
import { Box, Grid } from '@mui/material';

const ShopCard = (props) => {
    return(
        <Grid item sx={6}>
            <Box item
            my={4}
            display="flex"
            alignItems="center"
            sx={{ p: 2, bgcolor: 'rgba(83, 83, 83, .5)', borderRadius: '8px'}}
            >

                <img src={logo} alt="Изображение магазина не установлено"></img>
                <div className='text-data-wrapper'>
                    <div><h2 className='text shop-name'>Название магазина</h2></div>
                    <div><h4 className='text address'>Адрес магазина</h4></div>
                </div>

            </Box>
        </Grid>
    )
}

export default ShopCard;
