// src/pages/Dashboard.js
import React from 'react';

function Dashboard() {
   return (
      <div className="min-h-screen bg-gray-100">
         {/* Navbar */}
         <nav className="flex items-center justify-between bg-white p-4 shadow-md">
            <h1 className="text-2xl font-bold text-blue-500">MyInterviewAI</h1>
         </nav>

         {/* Dashboard Content */}
         <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome back, David</h2>
         </div>
      </div>
   );
}

export default Dashboard;
