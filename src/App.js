
import './App.css';
import Onboarding from "./Pages/Onboarding"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Onboard" />} />
      <Route path="/onboard" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
