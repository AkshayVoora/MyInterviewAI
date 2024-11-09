// src/pages/Profile.js
import React, { useState } from 'react';

function Profile() {
   const [userData, setUserData] = useState({
      name: 'David Reddy',
      email: 'davidreddy@gmail.com',
      jobTitle: '',
      location: '',
      about: '',
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
   };

   const handleSave = () => {
      // Handle save functionality here, such as sending to a server
      alert('Profile saved successfully!');
   };

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center p-6">
         <h1 className="text-3xl font-bold mb-8">My Profile</h1>
         
         <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <label className="block mb-4">
               <span className="text-lg font-semibold">Name:</span>
               <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
               />
            </label>
            
            <label className="block mb-4">
               <span className="text-lg font-semibold">Email:</span>
               <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
               />
            </label>

            <label className="block mb-4">
               <span className="text-lg font-semibold">Job Title:</span>
               <input
                  type="text"
                  name="jobTitle"
                  value={userData.jobTitle}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
               />
            </label>

            <label className="block mb-4">
               <span className="text-lg font-semibold">Location:</span>
               <input
                  type="text"
                  name="location"
                  value={userData.location}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
               />
            </label>

            <label className="block mb-4">
               <span className="text-lg font-semibold">About Me:</span>
               <textarea
                  name="about"
                  value={userData.about}
                  onChange={handleChange}
                  rows="4"
                  className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Tell us about yourself..."
               ></textarea>
            </label>

            <button
               onClick={handleSave}
               className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
            >
               Save Profile
            </button>
         </div>
      </div>
   );
}

export default Profile;
