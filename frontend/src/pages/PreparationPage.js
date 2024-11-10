// src/pages/PreparationPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function PreparationPage() {
   const questions = [
      {
         question: 'What is the time complexity of binary search?',
         options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n^2)'],
         correctAnswer: 'O(log n)',
      },
      {
         question: 'Which data structure uses FIFO?',
         options: ['Stack', 'Queue', 'Tree', 'Graph'],
         correctAnswer: 'Queue',
      },
      {
         question: 'What is the output of 2 + 2 * 3?',
         options: ['12', '10', '8', '6'],
         correctAnswer: '8',
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
            <Link to="/preparation1" className="mt-8 px-4 py-2 bg-blue-500 rounded-lg text-white">Next Page</Link>
         </div>
      </div>
   );
}

export default PreparationPage;
