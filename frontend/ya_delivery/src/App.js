import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm'; 
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
