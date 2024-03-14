import { AppBar } from "@mui/material";
import ShopCardsList from "../ShopCardsList/ShopCardsList"
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        document.title = 'Ya.Dostavka, ti - pidor';
      }, []);
    return (
        <>
            <AppBar position="static">
                <div>HELLO</div>
            </AppBar>
                <ShopCardsList/>    
        </>
    )
}

export default Main;
