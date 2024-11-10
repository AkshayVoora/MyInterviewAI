// src/pages/PreparationPage3.js
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function PreparationPage3() {
   const location = useLocation();
   const [correctAnswers, setCorrectAnswers] = useState(location.state?.correctAnswers || 0);
   const navigate = useNavigate();

   const questions = [
      { question: 'Which HTTP method is typically used to update a resource?', options: ['GET', 'POST', 'PUT', 'DELETE'], correctAnswer: 'PUT' },
      { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Language', 'Secure Query Language', 'Standard Query Language'], correctAnswer: 'Structured Query Language' },
      { question: 'Which company developed TypeScript?', options: ['Google', 'Facebook', 'Microsoft', 'Apple'], correctAnswer: 'Microsoft' },
   ];

   const handleAnswer = (isCorrect) => {
      if (isCorrect) setCorrectAnswers((prev) => prev + 1);
   };

   const goToResultsPage = () => {
      navigate('/results', { state: { correctAnswers } });
   };

   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center">
         <nav className="w-full flex items-center justify-between bg-transparent p-4 shadow-md">
            <Link to="/dashboard" className="text-xl font-bold">MyInterviewAI</Link>
            <div className="flex space-x-4 text-lg">
               <Link to="/profile" className="hover:text-gray-300">My Profile</Link>
               <Link to="/" className="hover:text-gray-300">Sign Out</Link>
            </div>
         </nav>

         <div className="flex flex-col items-center w-full p-6">
            <h1 className="text-3xl font-bold mb-8">Software Engineer Intern Practice Questions</h1>
            {questions.map((q, index) => (
               <QuestionCard key={index} question={q.question} options={q.options} correctAnswer={q.correctAnswer} onAnswer={handleAnswer} />
            ))}
            <div className="flex justify-between w-full max-w-lg mt-8">
               <button onClick={() => navigate('/preparation2')} className="flex items-center text-white text-lg">
                  <span className="mr-1">{'←'}</span> Back
               </button>
               <button onClick={goToResultsPage} className="flex items-center text-white text-lg">
                  Submit <span className="ml-1">{'→'}</span>
               </button>
            </div>
         </div>
      </div>
   );
}

export default PreparationPage3;
