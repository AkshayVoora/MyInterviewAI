// src/pages/ResultsPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ResultsPage({ score }) {
   const navigate = useNavigate();

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center">
         {/* Navbar */}
         <nav className="w-full flex items-center justify-between bg-transparent p-4 shadow-md">
            <h1
               onClick={() => navigate('/dashboard')}
               className="text-xl font-bold cursor-pointer hover:text-gray-300"
            >
               MyInterviewAI
            </h1>
            <div className="flex space-x-4 text-lg">
               <Link to="/profile" className="hover:text-gray-300">My Profile</Link>
               <Link to="/" className="hover:text-gray-300">Sign Out</Link>
            </div>
         </nav>

         {/* Results Content */}
         <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-5xl font-bold mb-4">Quiz Results</h1>
            <p className="text-2xl mb-8">
               Your Score: <span className="font-bold">{score} out of 12</span>
            </p>
            
            <div className="flex space-x-6">
               <Link to="/preparation" className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
                  Practice a New Quiz
               </Link>
               <Link to="/dashboard" className="px-6 py-3 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-600 transition">
                  Go to Home
               </Link>
            </div>

            <div className="mt-8 text-center">
               <p className="text-lg font-light">
                  Keep practicing and improving your skills! 
               </p>
               <p className="text-md mt-1">
                  Good luck with your interviews!
               </p>
            </div>
         </div>
      </div>
   );
}

export default ResultsPage;
