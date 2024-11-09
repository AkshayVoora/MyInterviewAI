// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedTips from '../components/AnimatedTips';

function Dashboard() {
   const [showSignOutModal, setShowSignOutModal] = useState(false);
   const [selectedType, setSelectedType] = useState(null); // State to manage selected button
   const navigate = useNavigate();

   const handleSignOut = () => setShowSignOutModal(true);
   const confirmSignOut = () => {
      setShowSignOutModal(false);
      navigate('/');
   };
   const cancelSignOut = () => setShowSignOutModal(false);

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
         <nav className="w-full flex items-center justify-between bg-transparent p-4 shadow-md">
            <h1 className="text-xl font-bold">MyInterviewAI</h1>
            <div className="flex space-x-4 text-lg">
               <Link to="#profile" className="hover:text-gray-300">My Profile</Link>
               <Link to="#avg-score" className="hover:text-gray-300">Average Score</Link>
               <button onClick={handleSignOut} className="hover:text-gray-300">Sign Out</button>
            </div>
         </nav>

         <div className="flex">
            {/* Left Side Content */}
            <div className="flex-1 p-6">
               <div className="mt-4 space-y-6">
                  <h2 className="text-3xl font-bold mb-2">Welcome back, David</h2>
                  <p className="text-lg mb-4">Start preparing for your interview</p>
                  <Link to="#profile" className="inline-block px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold shadow-md text-lg hover:bg-gray-200">Update Your Resume</Link>
                  
                  {/* Form Section */}
                  <div className="space-y-6 max-w-md">
                     <div>
                        <label className="block text-lg font-semibold mb-2">Job Role</label>
                        <input type="text" className="w-full p-3 bg-transparent border border-blue-400 rounded-lg text-white placeholder-gray-300 text-base focus:outline-none focus:ring focus:ring-blue-100" placeholder="Enter the role (e.g., Software Engineer)" />
                     </div>
                     <div>
                        <label className="block text-lg font-semibold mb-2">Job Description</label>
                        <textarea className="w-full p-3 bg-transparent border border-blue-400 rounded-lg text-white placeholder-gray-300 text-base focus:outline-none focus:ring focus:ring-blue-100" rows="3" placeholder="Enter the job description here..."></textarea>
                     </div>
                     <div>
                        <label className="block text-lg font-semibold mb-2">Select Question Type:</label>
                        <div className="flex space-x-4">
                           <button 
                              onClick={() => setSelectedType('Subject-Specific')}
                              className={`px-4 py-2 rounded-lg shadow text-base font-semibold focus:outline-none ${selectedType === 'Subject-Specific' ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                              Subject-Specific
                           </button>
                           <button 
                              onClick={() => setSelectedType('Behavioral')}
                              className={`px-4 py-2 rounded-lg shadow text-base font-semibold focus:outline-none ${selectedType === 'Behavioral' ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                              Behavioral
                           </button>
                        </div>
                     </div>
                     <button 
                        type="button"
                        className="w-full px-6 py-3 mt-4 rounded-lg shadow-md text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                     >
                        Start Preparation
                     </button>
                  </div>
               </div>
            </div>

            {/* Right Side: Animated Tips */}
            <div className="flex-1 flex items-center justify-center p-4">
               <AnimatedTips />
            </div>
         </div>

         {/* Sign Out Confirmation Modal */}
         {showSignOutModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-gray-800 w-72">
                  <h3 className="text-lg font-semibold mb-4 text-center">Are you sure you want to <br /> sign out?</h3>
                  <div className="flex justify-center space-x-4">
                     <button onClick={confirmSignOut} className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-base hover:bg-red-600">Yes</button>
                     <button onClick={cancelSignOut} className="px-4 py-2 bg-gray-400 text-white rounded-lg font-semibold text-base hover:bg-gray-500">No</button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default Dashboard;
