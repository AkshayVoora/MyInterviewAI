// src/pages/PreparationPage3.js
import React from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function PreparationPage3() {
   const questions = [
      {
         question: 'Which HTTP method is typically used to update a resource?',
         options: ['GET', 'POST', 'PUT', 'DELETE'],
         correctAnswer: 'PUT',
      },
      {
         question: 'What does SQL stand for?',
         options: ['Structured Query Language', 'Simple Query Language', 'Secure Query Language', 'Standard Query Language'],
         correctAnswer: 'Structured Query Language',
      },
      {
         question: 'Which company developed TypeScript?',
         options: ['Google', 'Facebook', 'Microsoft', 'Apple'],
         correctAnswer: 'Microsoft',
      },
   ];

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center">
         <nav className="w-full flex items-center justify-between bg-transparent p-4 shadow-md">
            <h1 className="text-xl font-bold">MyInterviewAI</h1>
            <div className="flex space-x-4 text-lg">
               <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
               <Link to="/" className="hover:text-gray-300">Sign Out</Link>
            </div>
         </nav>

         <div className="flex flex-col items-center w-full p-6">
            <h1 className="text-3xl font-bold mb-8">Software Engineer Intern Practice Questions</h1>
            {questions.map((q, index) => (
               <QuestionCard
                  key={index}
                  question={q.question}
                  options={q.options}
                  correctAnswer={q.correctAnswer}
               />
            ))}
            <Link to="/dashboard" className="mt-8 px-4 py-2 bg-blue-500 rounded-lg text-white">Back to Dashboard</Link>
         </div>
      </div>
   );
}

export default PreparationPage3;
