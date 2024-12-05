import React, { useState } from 'react';
export default function TranslationAnswer({ answer }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div>
      <div 
        className={`
          cursor-pointer 
          bg-gray-800 
          text-gray-400 
          p-4 
          rounded-md 
          transition-all 
          duration-500 
          ${isRevealed ? 'bg-white text-gray-800 border border-gray-200' : 'hover:bg-gray-700'}
        `}
        onClick={() => setIsRevealed(true)}
      >
        {isRevealed ? answer : 'Click to Reveal Answer'}
      </div>
      
        <hr className="my-4 border-t-2 border-gray-300" />
    </div>
  );
}