import ShopCardsList from "../ShopCardsList/ShopCardsList"
import { useEffect } from "react";
import CustomAppBar from "../CcustomAppBar/CustomAppBar";
const Main = () => {
    useEffect(() => {
        document.title = 'Ya.Dostavka, ti - pidor';
      }, []);
    return (
        <>
            <CustomAppBar position="static">
                <div>HELLO</div>
            </CustomAppBar>
                <ShopCardsList/>    
        </>
    )
}

export default Main;
