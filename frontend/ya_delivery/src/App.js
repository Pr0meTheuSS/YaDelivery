import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm'; 
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'; 
import React from 'react';

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
            </Routes>
        </BrowserRouter>        
        </ApolloProvider>
    </div>
    );
};

export default App;
