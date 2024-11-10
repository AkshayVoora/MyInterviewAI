// src/pages/PreparationPage2.js
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function PreparationPage2() {
   const location = useLocation();
   const [correctAnswers, setCorrectAnswers] = useState(location.state?.correctAnswers || 0);
   const navigate = useNavigate();

   const questions = [
      { question: 'What is React primarily used for?', options: ['Data analysis', 'Game development', 'Building user interfaces', 'Networking'], correctAnswer: 'Building user interfaces' },
      { question: 'What is the default behavior of flex-direction in Flexbox?', options: ['row', 'column', 'row-reverse', 'column-reverse'], correctAnswer: 'row' },
      { question: 'Which JavaScript method is used to convert JSON to an object?', options: ['JSON.parse()', 'JSON.stringify()', 'JSON.object()', 'JSON.convert()'], correctAnswer: 'JSON.parse()' },
   ];

   const handleAnswer = (isCorrect) => {
      if (isCorrect) setCorrectAnswers((prev) => prev + 1);
   };

   const goToNextPage = () => {
      navigate('/preparation3', { state: { correctAnswers } });
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
                  onAnswer={handleAnswer} // Pass handleAnswer to calculate score
               />
            ))}
            <div className="flex justify-between w-full max-w-lg mt-8">
               <button onClick={() => navigate('/preparation1')} className="flex items-center text-white text-lg">
                  <span className="mr-1">{'←'}</span> Back
               </button>
               <button onClick={goToNextPage} className="flex items-center text-white text-lg">
                  Next <span className="ml-1">{'→'}</span>
               </button>
            </div>
         </div>
      </div>
   );
}

export default PreparationPage2;
