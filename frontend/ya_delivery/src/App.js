import{BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import React from 'react';
import Main from './Components/Main/Main';
import ShopPage from './Components/ShopPage/ShopPage';
import Cart from './Components/Cart/Cart';
import AccountPage from './Components/AccountPage/AccountPage';

import{ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri : 'http://tupiki.online/api/v1/',

  cache : new InMemoryCache(),
});

const App = () => {
  return (<div><ApolloProvider client = {client}><BrowserRouter><Routes>
          <Route path = "login" element = {<LoginForm />} />
          <Route path = "register" element = {<RegistrationForm />} />

          <Route path = "/" element = {<Main />} />
          <Route path = "main" element = {<Main />} />
          <Route path = "shops/:id" element = {<ShopPage />} />
          <Route path = "main/shops/:id" element = {<ShopPage />} />

          <Route path = "cart" element = {<Cart />} />
          <Route path = "main/cart" element = {<Cart />} />

          <Route path = "account" element = {<AccountPage />} />
          <Route path = "main/account" element = {<AccountPage />} />

          </ Routes>
          </ BrowserRouter></ ApolloProvider></ div>);
};

export default App;
