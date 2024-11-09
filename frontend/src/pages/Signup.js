// src/pages/Signup.js
import React, { useState } from 'react';

function Signup() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');

   const handleSignup = (e) => {
      e.preventDefault();

      // Basic form validation for password match
      if (password !== confirmPassword) {
         setError('Passwords do not match');
         return;
      }

      // Reset error if passwords match
      setError('');
      alert('Signup successful!');
   };

   return (
      <div className="background">
         <div className="w-full max-w-lg p-10 space-y-6 bg-white shadow-lg rounded-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSignup} className="space-y-6">
               <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                  />
               </div>
               <div>
                  <label className="block text-gray-700">Password</label>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                  />
               </div>
               <div>
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                     type="password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     required
                     className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                  />
               </div>
               <button
                  type="submit"
                  className="w-full px-4 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
               >
                  Sign Up
               </button>
            </form>
            <p className="text-sm text-center text-gray-600">
               Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Log in</a>
            </p>
         </div>
      </div>
   );
}

export default Signup;
