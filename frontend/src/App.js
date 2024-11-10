import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import PreparationPage from './pages/PreparationPage';
import PreparationPage1 from './pages/PreparationPage1';
import PreparationPage2 from './pages/PreparationPage2';
import PreparationPage3 from './pages/PreparationPage3';

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/preparation" element={<PreparationPage />} />
               <Route path="/preparation1" element={<PreparationPage1 />} />
               <Route path="/preparation2" element={<PreparationPage2 />} />
               <Route path="/preparation3" element={<PreparationPage3 />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
