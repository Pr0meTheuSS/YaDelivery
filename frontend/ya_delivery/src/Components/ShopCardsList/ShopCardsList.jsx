import ShopCard from "../ShopCard/ShopCard"
import { Grid } from "@mui/material";
import React from 'react';
import { useQuery } from '@apollo/client';
import { getShops } from '../ShopCardsList/Query';

const ShopCardsList = ({ children }) => {
    const lat = 55.000;
    const lon = 54.000;
    const { loading, error, data } = useQuery(getShops, {
        variables: { lat, lon },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( </p>;

    return (
        <Grid
            container
            display="flex"
            flexDirection="column"
            position="right"
            width='75vw'
            sx={{ marginTop: 10, right: 0, p: 2, bgcolor: 'rgba(83, 83, 83, .5)', borderRadius: '8px' }}>
            {data.GetShops.map((shop) => (
                <ShopCard
                    key={shop.id}
                    id={shop.id}
                    name={shop.name}
                />
            ))}
        </Grid>
    )
}

export default ShopCardsList;
