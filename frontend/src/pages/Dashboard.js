// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
   const [showSignOutModal, setShowSignOutModal] = useState(false);
   const navigate = useNavigate();

   const handleSignOut = () => {
      setShowSignOutModal(true);
   };

   const confirmSignOut = () => {
      setShowSignOutModal(false);
      navigate('/'); // Redirect to Home page
   };

   const cancelSignOut = () => {
      setShowSignOutModal(false);
   };

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
         {/* Navbar */}
         <nav className="flex items-center justify-between bg-transparent p-4 shadow-md">
            <h1 className="text-2xl font-bold">MyInterviewAI</h1>
            
            {/* Navbar Links */}
            <div className="flex space-x-6">
               <Link to="#profile" className="hover:text-gray-300">
                  My Profile
               </Link>
               <Link to="#avg-score" className="hover:text-gray-300">
                  Average Score
               </Link>
               <Link to="#settings" className="hover:text-gray-300">
                  Settings
               </Link>
               <button onClick={handleSignOut} className="hover:text-gray-300">
                  Sign Out
               </button>
            </div>
         </nav>

         {/* Dashboard Content */}
         <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome back, David</h2>
            <p className="text-lg mb-6">Start preparing for your interview</p>
            
            {/* Update Resume Button */}
            <Link to="#profile" className="inline-block px-6 py-2 bg-white text-blue-500 rounded-lg font-semibold shadow-md hover:bg-gray-200">
               Update Your Resume
            </Link>

            {/* AI Interview Preparation Section */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-800">
               <h3 className="text-2xl font-semibold mb-4">AI Interview Preparation</h3>
               <p className="mb-4">Enter the job description and role to start practicing with AI.</p>

               {/* Chat-style Input for Job Description and Role */}
               <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                     <p className="font-semibold">You:</p>
                     <textarea
                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-100"
                        rows="3"
                        placeholder="Enter the job description here..."
                     ></textarea>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                     <p className="font-semibold">AI:</p>
                     <p>What role are you applying for?</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg shadow">
                     <p className="font-semibold">You:</p>
                     <input
                        type="text"
                        className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-100"
                        placeholder="Enter the role (e.g., Software Engineer)"
                     />
                  </div>
               </div>

               {/* Start Preparation Button */}
               <button
                  type="button"
                  className="w-full px-4 py-2 mt-6 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600"
               >
                  Start Preparation
               </button>
            </div>
         </div>

         {/* Sign Out Confirmation Modal */}
         {showSignOutModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-gray-800 w-80">
                  <h3 className="text-xl font-semibold mb-4 text-center">
                     Are you sure you want to <br /> sign out?
                  </h3>
                  <div className="flex justify-center space-x-4">
                     <button
                        onClick={confirmSignOut}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600"
                     >
                        Yes
                     </button>
                     <button
                        onClick={cancelSignOut}
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500"
                     >
                        No
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default Dashboard;
