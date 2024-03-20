import './App.css';
import { useEffect } from 'react';
import GeolocationPage from '../LocationTest/Location';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import ShopPage from '../ShopPage/ShopPage';
import Cart from '../Cart/Cart';
import AccountPage from '../AccountPage/AccountPage';

function App() {
  useEffect(() => {
    document.title = 'Ya.Dostavka, ti - pidor';
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Main/>}/>  
      <Route path="main" element= {<Main/>}/>  
      <Route path="geo" element= {<GeolocationPage/>}/>


      <Route path="shops/:id" element={<ShopPage/>}/>
      <Route path="main/shops/:id" element={<ShopPage/>}/>

      <Route path="cart" element={<Cart/>} /> 
      <Route path="main/cart" element={<Cart/>} /> 

      <Route path="account" element={<AccountPage/>} /> 
      <Route path="main/account" element={<AccountPage/>} /> 

    </Routes>
  </BrowserRouter>
  );
}

export default App;
