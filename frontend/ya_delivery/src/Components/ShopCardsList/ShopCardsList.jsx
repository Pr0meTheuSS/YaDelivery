import ShopCard from "../ShopCard/ShopCard"
import { Grid } from "@mui/material";
import React from 'react';

const ShopCardsList = ({children}) => {
    return (
        <Grid
            container  
            display="flex"
            flexDirection="column"
            position="right"
            width='75vw'
            sx={{ marginTop: 10, right: 0, p: 2, bgcolor: 'rgba(83, 83, 83, .5)', borderRadius: '8px' }}
        >
            {children}
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
            <ShopCard/>
        </Grid>

    )
}

export default ShopCardsList;
