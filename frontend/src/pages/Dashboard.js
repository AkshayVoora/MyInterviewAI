// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
   const [showSignOutModal, setShowSignOutModal] = useState(false);
   const [uploadedFileName, setUploadedFileName] = useState('');
   const [uploadMessage, setUploadMessage] = useState('');
   const [difficulty, setDifficulty] = useState(5); // State for difficulty slider
   const navigate = useNavigate();

   const handleSignOut = () => setShowSignOutModal(true);
   const confirmSignOut = () => {
      setShowSignOutModal(false);
      navigate('/');
   };
   const cancelSignOut = () => setShowSignOutModal(false);

   const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
         setUploadedFileName(file.name);
         setUploadMessage('File uploaded successfully!');
         console.log("File uploaded:", file.name);
      }
   };

   const startPreparation = () => {
      navigate('/preparation');
   };

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center">
         <nav className="w-full flex items-center justify-between bg-transparent p-4 shadow-md">
            <Link to="/" className="text-xl font-bold hover:text-gray-300">MyInterviewAI</Link>
            <div className="flex space-x-4 text-lg">
               <Link to="/profile" className="hover:text-gray-300">My Profile</Link>
               <Link to="#avg-score" className="hover:text-gray-300">Average Score</Link>
               <button onClick={handleSignOut} className="hover:text-gray-300">Sign Out</button>
            </div>
         </nav>

         <div className="flex-1 flex items-center justify-center w-full p-6">
            <div className="bg-blue-600 bg-opacity-20 p-8 rounded-2xl border border-blue-300 border-opacity-40 shadow-lg max-w-md w-full">
               <h2 className="text-3xl font-bold mb-2 text-center">Welcome back, David</h2>
               <p className="text-lg mb-6 text-center">Start preparing for your interview</p>
               
               <div className="text-center mb-6 space-y-4">
                  <Link to="/profile" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md text-lg hover:bg-blue-600 focus:outline-none">
                     Update Your Profile
                  </Link>
                  <div>
                     <label className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow-md text-lg hover:bg-blue-600 cursor-pointer">
                        Upload Your Resume
                        <input type="file" className="hidden" onChange={handleFileUpload} />
                     </label>
                     {uploadedFileName && (
                        <p className="text-sm text-gray-300 mt-2">Uploaded: {uploadedFileName}</p>
                     )}
                     {uploadMessage && (
                        <p className="text-sm text-green-400 mt-1">{uploadMessage}</p>
                     )}
                  </div>
               </div>

               <div className="space-y-6">
                  <div>
                     <label className="block text-lg font-semibold mb-2">Job Role</label>
                     <input type="text" className="w-full p-3 bg-transparent border border-blue-400 rounded-lg text-white placeholder-gray-300 text-base focus:outline-none focus:ring focus:ring-blue-100" placeholder="Enter the role (e.g., Software Engineer)" />
                  </div>
                  <div>
                     <label className="block text-lg font-semibold mb-2">Job Description</label>
                     <textarea className="w-full p-3 bg-transparent border border-blue-400 rounded-lg text-white placeholder-gray-300 text-base focus:outline-none focus:ring focus:ring-blue-100" rows="3" placeholder="Enter the job description here..."></textarea>
                  </div>

                  {/* Difficulty Slider */}
                  <div className="mt-6">
                     <label className="block text-lg font-semibold mb-2">Difficulty Level</label>
                     <div className="relative flex items-center">
                        <input
                           type="range"
                           min="1"
                           max="10"
                           value={difficulty}
                           onChange={(e) => setDifficulty(e.target.value)}
                           className="w-full h-2 rounded-full appearance-none bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                        />
                        <span
                           className="absolute left-0 transform -translate-x-1/2 -translate-y-full text-sm text-gray-800"
                           style={{ left: `${(difficulty - 1) * 10}%` }}
                        >
                           {difficulty}
                        </span>
                     </div>
                  </div>

                  <button 
                     type="button"
                     onClick={startPreparation}
                     className="w-full px-6 py-3 mt-4 rounded-lg shadow-md text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                  >
                     Start Preparation
                  </button>
               </div>
            </div>
         </div>

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
