import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm'; 
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'; 
import React from 'react';
import GeolocationPage from '../LocationTest/Location';
import Main from '../Main/Main';
import ShopPage from '../ShopPage/ShopPage';
import Cart from '../Cart/Cart';
import AccountPage from '../AccountPage/AccountPage';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080',
    cache: new InMemoryCache(),
    timeout: 5000
});

const App = () => {
    return (
    <div>
        <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegistrationForm />} />

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
        </ApolloProvider>
    </div>
    );
};

export default App;
