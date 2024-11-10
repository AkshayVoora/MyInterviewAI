// src/components/QuestionCard.js
import React, { useState } from 'react';

function QuestionCard({ question, options, correctAnswer, onAnswer }) {
   const [selectedOption, setSelectedOption] = useState(null);
   const [isAnswered, setIsAnswered] = useState(false);

   const handleOptionClick = (option) => {
      const isCorrect = option === correctAnswer;
      setSelectedOption(option);
      setIsAnswered(true);
      onAnswer(isCorrect); // Use onAnswer here as a callback
   };

   return (
      <div className="bg-blue-600 bg-opacity-20 p-6 rounded-2xl border border-blue-300 border-opacity-40 shadow-lg my-4 max-w-lg w-full">
         <h2 className="text-xl font-semibold mb-4">{question}</h2>
         <div className="space-y-2">
            {options.map((option, index) => (
               <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-4 py-2 text-left rounded-lg text-lg ${
                     isAnswered && option === correctAnswer ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                  } ${selectedOption === option && selectedOption !== correctAnswer ? 'bg-red-500' : ''} text-white`}
                  disabled={isAnswered}
               >
                  {option}
               </button>
            ))}
         </div>
         {isAnswered && (
            <p className="mt-3 text-lg">
               {selectedOption === correctAnswer ? 'Correct!' : 'Incorrect, try again.'}
            </p>
         )}
      </div>
   );
}

export default QuestionCard;
