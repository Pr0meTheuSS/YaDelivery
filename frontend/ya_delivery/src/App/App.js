import './App.css';
import { useEffect } from 'react';
import GeolocationPage from '../LocationTest/Location';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';

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
    </Routes>
  </BrowserRouter>
  );
}

export default App;
