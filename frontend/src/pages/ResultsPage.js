// src/pages/ResultsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function ResultsPage({ score }) {
   return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center">
         <h1 className="text-4xl font-bold mb-4">Results</h1>
         <p className="text-2xl mb-8">Your Score: {score}</p>
         <Link to="/preparation" className="px-4 py-2 bg-blue-500 rounded-lg text-white">
            Retake Quiz
         </Link>
      </div>
   );
}

export default ResultsPage;
