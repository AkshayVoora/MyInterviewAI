// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'; // Import Profile page

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
