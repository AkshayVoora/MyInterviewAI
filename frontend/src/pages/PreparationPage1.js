// src/pages/PreparationPage1.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function PreparationPage1({ score, setScore }) {
   const navigate = useNavigate();

   const questions = [
      { question: 'What is the best sorting algorithm for small datasets?', options: ['Bubble Sort', 'Merge Sort', 'Quick Sort', 'Selection Sort'], correctAnswer: 'Quick Sort' },
      { question: 'Which of the following is used for asynchronous programming in JavaScript?', options: ['Promise', 'Array', 'String', 'Object'], correctAnswer: 'Promise' },
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'], correctAnswer: 'Cascading Style Sheets' },
   ];

   const handleAnswer = (isCorrect) => {
      if (isCorrect) {
         setScore((prevScore) => prevScore + 1);
      }
   };

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
                  onAnswer={handleAnswer} // Pass handleAnswer to track score
               />
            ))}
            <div className="flex justify-between w-full max-w-lg mt-8">
               <button onClick={() => navigate('/preparation')} className="flex items-center text-white text-lg">
                  <span className="mr-1">{'←'}</span> Back
               </button>
               <button onClick={() => navigate('/preparation2')} className="flex items-center text-white text-lg">
                  Next <span className="ml-1">{'→'}</span>
               </button>
            </div>
         </div>
      </div>
   );
}

export default PreparationPage1;
