// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
         <h1 className="text-5xl font-bold mb-6 animate-fadeIn">Welcome to MyInterviewAI</h1>
         <p className="text-lg mb-8 animate-slideInUp">
            Prepare for your interviews with AI-powered feedback and practice questions.
         </p>
         <div className="flex space-x-4 animate-fadeIn mt-4">
            <Link to="/login">
               <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
                  Log In
               </button>
            </Link>
            <Link to="/signup">
               <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100">
                  Sign Up
               </button>
            </Link>
         </div>
      </div>
   );
}

export default Home;
