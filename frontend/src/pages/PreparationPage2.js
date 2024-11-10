// src/pages/PreparationPage2.js
import React from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function PreparationPage2() {
   const questions = [
      {
         question: 'What is React primarily used for?',
         options: ['Data analysis', 'Game development', 'Building user interfaces', 'Networking'],
         correctAnswer: 'Building user interfaces',
      },
      {
         question: 'What is the default behavior of flex-direction in Flexbox?',
         options: ['row', 'column', 'row-reverse', 'column-reverse'],
         correctAnswer: 'row',
      },
      {
         question: 'Which JavaScript method is used to convert JSON to an object?',
         options: ['JSON.parse()', 'JSON.stringify()', 'JSON.object()', 'JSON.convert()'],
         correctAnswer: 'JSON.parse()',
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
            <h1 className="text-3xl font-bold mb-8">Preparation Page 3</h1>
            {questions.map((q, index) => (
               <QuestionCard
                  key={index}
                  question={q.question}
                  options={q.options}
                  correctAnswer={q.correctAnswer}
               />
            ))}
            <Link to="/preparation3" className="mt-8 px-4 py-2 bg-blue-500 rounded-lg text-white">Next Page</Link>
         </div>
      </div>
   );
}

export default PreparationPage2;
