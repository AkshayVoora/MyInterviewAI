import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PencilIcon } from '@heroicons/react/outline';

function Profile() {
   const [profile, setProfile] = useState({
      firstName: 'David',
      lastName: 'Reddy',
      email: 'davidreddy@gmail.com',
      jobTitle: 'Software Engineer',
      location: 'San Francisco, CA',
      pronouns: 'He/Him',
      aboutMe: 'Experienced software engineer with a passion for building impactful applications.',
   });

   const [isEditing, setIsEditing] = useState({
      firstName: false,
      lastName: false,
      email: false,
      jobTitle: false,
      location: false,
      pronouns: false,
      aboutMe: false,
   });

   const navigate = useNavigate();

   const handleEditToggle = (field) => {
      setIsEditing((prev) => ({
         ...prev,
         [field]: !prev[field],
      }));
   };

   const handleChange = (e, field) => {
      setProfile({
         ...profile,
         [field]: e.target.value,
      });
   };

   const handleSaveChanges = () => {
      // Handle saving changes (e.g., API call or localStorage update)
      console.log("Profile updated:", profile);
      setIsEditing({
         firstName: false,
         lastName: false,
         email: false,
         jobTitle: false,
         location: false,
         pronouns: false,
         aboutMe: false,
      });
   };

   const handleSignOut = () => {
      navigate('/');
   };

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center">
         {/* Navbar */}
         <nav className="w-full flex items-center justify-between bg-transparent p-4 shadow-md">
            <h1 className="text-xl font-bold">MyInterviewAI</h1>
            <div className="flex space-x-4 text-lg">
               <Link to="/profile" className="hover:text-gray-300">My Profile</Link>
               <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
               <button onClick={handleSignOut} className="hover:text-gray-300">Sign Out</button>
            </div>
         </nav>

         {/* Profile Form */}
         <div className="w-full max-w-lg mt-8 bg-blue-600 bg-opacity-20 p-8 rounded-2xl border border-blue-300 border-opacity-40 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">My Profile</h2>
            {Object.keys(profile).map((field) => (
               <div className="mb-6" key={field}>
                  <label className="block text-lg font-semibold mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}:</label>
                  <div className="flex items-center bg-transparent border border-blue-400 rounded-lg text-white placeholder-gray-300">
                     {isEditing[field] ? (
                        <input
                           type="text"
                           value={profile[field]}
                           onChange={(e) => handleChange(e, field)}
                           className="w-full p-3 bg-transparent focus:outline-none text-white text-base max-w-sm"
                           autoFocus
                        />
                     ) : (
                        <span className="w-full p-3 text-base max-w-sm">{profile[field]}</span>
                     )}
                     <PencilIcon
                        className="w-5 h-5 ml-3 cursor-pointer text-gray-400 hover:text-gray-200"
                        onClick={() => handleEditToggle(field)}
                     />
                  </div>
               </div>
            ))}
            <button
               onClick={handleSaveChanges}
               className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600"
            >
               Save Changes
            </button>
         </div>
      </div>
   );
}

export default Profile;
