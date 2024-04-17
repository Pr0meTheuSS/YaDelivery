import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm'; 
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'; 
import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegistrationForm />} />
          </Routes>
        </BrowserRouter>        
      </ApolloProvider>
    </div>
  );
};

export default App;
