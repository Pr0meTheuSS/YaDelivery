import ShopCard from "../ShopCard/ShopCard"
import { Grid } from "@mui/material";

const ShopCardsList = ({children}) => {
    return (

        <Grid      
        display="flex"
        flexDirection="column"
        position="right"
        width='75vw'
        marginRight={1}
sx={{position: 'absolute', right: 0, p: 2, bgcolor: 'rgba(83, 83, 83, .5)', borderRadius: '8px'}}>
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
