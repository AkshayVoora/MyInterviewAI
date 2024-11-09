import React, { useState, useEffect } from 'react';

const tips = [
   "Tip: Research the company's values and culture before your interview.",
   "Fun Fact: 90% of employers believe that soft skills are as important as hard skills.",
   "Did you know? Most interviewers decide within 5 minutes if a candidate is a good fit.",
   "Pro Tip: Have examples ready to demonstrate your problem-solving skills.",
   "Industry Insight: Many companies ask behavioral questions to assess cultural fit.",
   "Quick Tip: Practice common interview questions with a friend or mirror.",
];

function AnimatedTips() {
   const [currentTipIndex, setCurrentTipIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
      }, 5000); // Change tip every 5 seconds
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="relative w-80 h-32 bg-white bg-opacity-20 rounded-lg p-4 shadow-lg text-white text-center overflow-hidden">
         <p className="text-lg font-semibold animate-fade">{tips[currentTipIndex]}</p>
      </div>
   );
}

export default AnimatedTips;
