import ShopCardsList from "../ShopCardsList/ShopCardsList"
import { useEffect } from "react";
import CustomAppBar from "../CustomAppBar/CustomAppBar";

const Main = () => {
    useEffect(() => {
        document.title = 'Ya.Dostavka, ti - pidor';
      }, []);
    return (
        <>
            <CustomAppBar position="static">
            </CustomAppBar>
                <ShopCardsList/>    
        </>
    )
}

export default Main;
